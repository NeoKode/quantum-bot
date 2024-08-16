import axios from 'axios'

import { getBuffer } from '../funciones.js';

const axiosConfig = (endpoint, data) => ({
            method: 'POST',
            url: endpoint,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:103.0) Gecko/20100101 Firefox/103.0",
                "X-Requested-With": "XMLHttpRequest",
            },
            data: new URLSearchParams(data),
        });

const baseUrl = 'https://www.y2mate.com';

const god = "@NeKosmic";

export default {
  clave: 'play',
  id: 'dwd',
  desc: 'descarga audios :v',
  nk: async (m, { conn: { sendMessage, sendPresenceUpdate }, multimedia: { mylogo } }) => {
    const { zZz: { Dyau }, args, codex, command, chat, sender, pushName, isGroup, reply, reacMoji } = m;
    const usuario = global.db.wudb[sender];
    const aHora = Date.now();
    const udt = aHora - usuario.lstaud;
    const gpe = isGroup ? 16000 : 64000;

    if (udt < gpe) return;
    
    if (!args[0]) return reacMoji('⁉️');

    const contextInfo = (letras = null, foter = null, fotox = null) => ({
      externalAdReply: {
        title: letras || codex,
        body: foter || pushName,
        previewType: 'PHOTO',
        thumbnailUrl: fotox || '',
        thumbnail: fotox ? '' : mylogo,
        sourceUrl: 'https://tinyurl.com/Thanks-UwUr'
      }
    });

    const unios = codex.replace(/\s/g, '');
    const bsqd = encodeURIComponent(codex);

    await reacMoji('⏱️');
    try {

      const { url, imagen } = (await axios.get(`https://nekosmic.vercel.app/api/yts?apikey=${god}&q=${bsqd}`)).data.resultados[0];
      //const { data: searchData } = await axios(axiosConfig('https://tomp3.cc/api/ajax/search?hl=en', { query: url, vt: 'downloader' }));
      const { result: { download_url } } = (await axios.get(`https://api.shannmoderz.xyz/downloader/yt-audio?url=${url}`)).data
      //if (searchData.status !== 'ok') return;

      //const { vid, title, links } = searchData;
      //const downloadLinks = Object.values(links.mp3);
      //const audio = await Promise.all(downloadLinks.map(async ({ k, size }) => {
      //const { data: convertData } = await axios(axiosConfig('https://tomp3.cc/api/ajax/convert?hl=en', { vid, k }));
        //if (convertData.status !== 'ok') return;
        //return { quality: convertData.fquality, size, url: convertData.dlink };
      //}));

      if (download_url /*audio[0].url*/) {
      	usuario.lstaud = aHora;
        let buff = await axios.get(download_url /*audio[0].url*/, { responseType: 'arraybuffer' });
        if (Buffer.from(buff.data).byteLength > 16000) {
          await sendMessage(chat, { audio: {url: download_url}, mimetype: 'audio/mp4', fileName: `${unios}.mp3`, contextInfo: contextInfo(null, null, imagen) }, { quoted: m });
          buff = null; // Releasing memory
        }
      }
    } catch /*(e)*/{
    	//console.log(e)
    	let resBuff
    try {
    	await sendPresenceUpdate('recording', chat);
    usuario.lstaud = aHora;
      const { data } = await axios.get(`https://latam-api.vercel.app/play?apikey=${god}&q=${bsqd}`, { responseType: 'arraybuffer' });
        if (Buffer.from(data).byteLength < 16000) throw new Error("API bug")
        resBuff = data;
      } catch {
      	usuario.lstaud = aHora;
      	const { data } = await axios.get(`https://latam-api.vercel.app/audio?apikey=${god}&q=${bsqd}`, { responseType: 'arraybuffer' });
      resBuff = data
      }
      
      if (!resBuff) return reacMoji('🆘')
        await sendMessage(chat, { audio: resBuff, mimetype: 'audio/mp4', fileName: `${unios}.mp3`, contextInfo: contextInfo() }, { quoted: m });
        
        resBuff = null
      
    }
  },
  cmdDls: true,
  isGame: false,
  flooded: false,
  flooGp: true
};
