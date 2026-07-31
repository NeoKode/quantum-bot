import { load } from 'cheerio';
import { axius, traducIr } from './funciones.js';

const noimg = "https://raw.githubusercontent.com/NeoKode/multimedia/refs/heads/main/NKimagen/404.png";
const BASE_URL = "https://www.animenewsnetwork.com";
const LOOP_INTERVAL_MS = 7000 //2 * 60 * 60 * 1000; // 2 horas
const activeLoops = new Map();

// 1. Scraper de Anime News Network
const fetchANNNews = async (topic) => {
  try {
    const url = topic ? `${BASE_URL}/news/?topic=${topic}` : `${BASE_URL}/news`;
    const { data } = await axius.get(url);
    const $ = load(data);
    const items = $(".herald.box.news").toArray();
    const len = items.length;
    const newsList = [];

    for (let i = 0; i < len; i++) {
      const $el = $(items[i]);
      const title = $el.find("h3").text().trim();
      const slug = $el.find("h3 > a").attr("href") || "";
      const date = $el.find(".byline time").text().trim();

      const topicEls = $el.find(".byline .topics > a").toArray();
      const tLen = topicEls.length;
      const topics = new Array(tLen);
      for (let j = 0; j < tLen; j++) topics[j] = $(topicEls[j]).text().trim();

      const description = $el.find(".preview .intro").text().trim();
      const thumbnailSlug = $el.find(".thumbnail").attr("data-src");
      const image = thumbnailSlug ? `${BASE_URL}${thumbnailSlug}` : noimg;

      (title && slug) && newsList.push({ id: slug, title, url: `${BASE_URL}${slug}`, image, date, description, topics });
    }
    return newsList;
  } catch {
    return [];
  }
};

// 2. Scraper de Anime Corner
const fetchAnimeCornerNews = async () => {
  try {
    const { data } = await axius.get('https://animecorner.me/category/news/');
    const $ = load(data);
    const items = $('article.ac-archive-card').toArray();
    const len = items.length;
    const newsList = [];

    for (let i = 0; i < len; i++) {
      const $el = $(items[i]);
      const titleNode = $el.find('.ac-archive-card__body h2 a');
      const title = titleNode.text().trim();
      const link = titleNode.attr('href');
      const image = $el.find('.ac-archive-card__media').attr('data-bgset') || null;
      const date = $el.find('.ac-archive-meta time').text().trim() || 'Reciente';
      const description = $el.find('.ac-archive-card__body p').text().trim();

      (title && link) && newsList.push({ id: link, title, url: link, image, date, description, topics: ['Otaku Anime'] });
    }
    return newsList;
  } catch {
    return [];
  }
};

// 3. Scraper de MyAnimeList
const fetchMyAnimeListNews = async () => {
  try {
    const { data } = await axius.get('https://myanimelist.net/news', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
      }
    });
    const $ = load(data);
    const items = $('.news-unit').toArray();
    const len = items.length;
    const newsList = [];

    for (let i = 0; i < len; i++) {
      const $el = $(items[i]);
      const titleNode = $el.find('.title a');
      const title = titleNode.text().trim();
      const link = titleNode.attr('href');
      const imageNode = $el.find('.image-link img');
      const image = imageNode.attr('data-src') || imageNode.attr('src') || null;
      const description = $el.find('.text').text().trim();

      const infoNode = $el.find('.information .info');
      const date = infoNode.length > 0 ? infoNode.text().trim().split(' by ')[0].trim() : 'Reciente';

      (title && link) && newsList.push({ id: link, title, url: link, image, date, description, topics: ['Anime Otaku'] });
    }
    return newsList;
  } catch {
    return [];
  }
};

const scrapers = [fetchANNNews, fetchAnimeCornerNews, fetchMyAnimeListNews];

const fetchRandomSourceNews = async (topic) => {
  if (topic) return await fetchANNNews(topic);
  const randomScraper = scrapers[Math.floor(Math.random() * scrapers.length)];
  return await randomScraper();
};

const buildDateStr = (day) => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

const pickUnsent = (newsList, sentIds) => {
  const sentSet = new Set(sentIds);
  const len = newsList.length;
  const available = [];
  for (let i = 0; i < len; i++) sentSet.has(newsList[i].id) || available.push(newsList[i]);
  const pool = available.length ? available : newsList;
  return pool[Math.floor(Math.random() * pool.length)];
};

const sendNewsToChat = async ({ conn, chat, Lengua, Anws, noticia, quoted }) => {
  const tra = await traducIr(Lengua, noticia.title);
  const temas = noticia.topics.length ? noticia.topics.join(', ') : 'General';
  const options = quoted ? { quoted } : {};
  const msj = Anws(tra, noticia.date, temas, noticia.url)[1];
  const contextInfo = {
    isForwarded: true,
    forwardedNewsletterMessageInfo: { newsletterJid: '120363173007028270@newsletter', newsletterName: global.db.nk, serverMessageId: -1 },
    forwardingScore: 67
  };

  await conn.sendMessage(chat, {
    image: { url: noticia.image || noimg },
    caption: msj,
    contextInfo
  }, options).catch(() => conn.sendMessage(chat, { image: { url: noimg }, caption: msj, contextInfo }, options));
};

const stopLoop = (chat) => {
  const timer = activeLoops.get(chat);
  timer && clearInterval(timer);
  activeLoops.delete(chat);
};

const runLoopTick = async (chat, conn, MultiNK) => {
  try {
    const dan = global.db.wgdb[chat]?.dan;
    if (!dan?.st) return stopLoop(chat);

    const todayStr = buildDateStr(new Date().getDate());
    dan.lastDate === todayStr || ((dan.anisave = []), (dan.lastDate = todayStr));

    const { Lengua, Anws } = MultiNK(dan.lng);

    const newsFeeds = await fetchRandomSourceNews('');
    if (!newsFeeds.length) return;

    const noticia = pickUnsent(newsFeeds, dan.anisave);
    dan.anisave.includes(noticia.id) || dan.anisave.push(noticia.id);

    await sendNewsToChat({ conn, chat, Lengua, Anws, noticia, quoted: null });
  } catch {}
};

const startLoop = (chat, conn, MultiNK) => {
  stopLoop(chat);
  const timer = setInterval(() => runLoopTick(chat, conn, MultiNK), LOOP_INTERVAL_MS);
  activeLoops.set(chat, timer);
};

// ⚡ Único camino para resolver {Lengua, Anws}: SIEMPRE vía MultiNK(dan.lng).
// Se cachea la referencia real de MultiNK la primera vez que llega (desde
// reanudarLoopsActivos, que corre en cada WaStart()). Si toggleLoopCommand
// se ejecutara antes de que exista ese cache (no debería pasar: WaStart
// siempre corre primero), se auto-inicializa una sola vez con el mismo
// tipo de resolver -> nunca hay dos formas distintas de obtener {Lengua, Anws}.
let cachedMultiNK = null;

const toggleLoopCommand = async (chat, conn, Lengua, Anws, reply) => {
  const dan = global.db.wgdb[chat]?.dan;

  if (dan.st) {
    dan.st = false;
    stopLoop(chat);
    return reply(Anws()[2]);
  }

  const todayStr = buildDateStr(new Date().getDate());
  dan.lastDate === todayStr || ((dan.anisave = []), (dan.lastDate = todayStr));
  dan.st = true;
  dan.lng = Lengua;

  cachedMultiNK ??= (lng) => ({ Lengua: lng || Lengua, Anws });

  startLoop(chat, conn, cachedMultiNK);
  await runLoopTick(chat, conn, cachedMultiNK);
  return reply(Anws()[3]);
};

export function reanudarLoopsActivos(conn, MultiNK) {
  cachedMultiNK = MultiNK;
  const chats = Object.keys(global.db.wgdb);
  for (let i = 0, len = chats.length; i < len; i++) {
    const chat = chats[i];
    const dan = global.db.wgdb[chat]?.dan;
    dan?.st && startLoop(chat, conn, cachedMultiNK);
  }
}

// Exportamos lo necesario para que el comando u otros archivos lo consuman
export {
  fetchRandomSourceNews,
  sendNewsToChat,
  toggleLoopCommand
};
