//test

import pino from 'pino';
import { Boom } from '@hapi/boom'

const { default: makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, fetchLatestBaileysVersion } = (await import('@whiskeysockets/baileys')).default //BaileysGod

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState("sesiones");
  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state,
    version
  })
  
  store.bind(sock.ev);
  
  sock.ev.on('connection.update', (update) => {
  console.log(update)
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      const shouldReconnect =
        lastDisconnect.error instanceof Boom &&
        lastDisconnect.error.output?.statusCode !== DisconnectReason.loggedOut;
      console.log(
        'Conexión cerrada debido a ',
        lastDisconnect.error,
        ', reconectando... ',
        shouldReconnect
      );
      // resucita*
      if (shouldReconnect) {
        connectToWhatsApp();
      }
    } else if (connection === 'open') {
      console.log('Conectado ✓');
    }
  });
  
  sock.ev.on('creds.update', saveCreds);
  
  sock.ev.on('messages.upsert', async (m) => {
    console.log(JSON.stringify(m, undefined, 2));

    console.log('Chat: ', m.messages[0].key.remoteJid);
    await sock.sendMessage(m.messages[0].key.remoteJid, { text: 'This is magic 🙀' });
  });
}

// kuaker
connectToWhatsApp();
