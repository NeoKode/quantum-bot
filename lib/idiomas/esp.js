import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: "es",

Domina: "Idioma Español",

Start: ["Ejecutando el Bot mas shidori tercer mundista.\nComenzando ejecucion del script...", "\n[!] Código finalizado:"],

Conn: (a = '') => ["Conectando...", "Motivo de desconexión:", "Se agotó el tiempo de conexión, reconectando...", "Se requiere reinicio, reiniciando...", "Dispositivo cerró sesión, por favor vincule nuevamente y ejecute.", "Conexión reemplazada, se abrió una nueva sesión, por favor cierre la sesión actual primero.", "Conexión perdida con el servidor, reconectando...", "Conexión cerrada, reconectando...", "Archivo de sesión incorrecto, por favor elimina la sesión actual y vincule nuevamente", "Conectado ✓", "\n\n[_>] Si va a utilizar el método de emparejamiento, por favor ingresa el número que se convertirá en el bot, Asegúrate de ingresar el número completo de WhatsApp junto con su código de país.\nEjemplo:  +51xxx...\n", `\nCódigo de emparejamiento para el número "+${a}":`],

Call: (n = '', k = '') => `\n*[ ! ] ${n} Seras bloqueado*\n_Razon : por realizar una ${k?"videollamada":"llamada"} a este numero sin autorizacion!_\n`,

GpUp: (n = '', k = '') => ["🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵃʳ ᵃᵗᵉⁿᵗᵒˢ ᵃ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ʳᵉᵗʳᵃˢᵒ ᵐᵉⁿᵗᵃˡ~", `📜️ *[DESCRIPCIÓN DEL GRUPO ACTUALIZADA]* ✒️\n\n- _Descripción anterior:_ ${n}\n\n- _Nueva descripción:_ ${k}`, `✍️ *[ ASUNTO DEL GRUPO CAMBIADO ]* 🤳\n\n- _Asunto principal fué:_ ${n}\n\n- _Asunto nuevo:_ ${k}\n`],

RestriN: "[ ! ] No se pudo eliminar al participante nuevo, por favor active el modo restringido!",

AlertList: "[ ! ] Borre los números que inicien con   '1'   de Blacklist en ./config.json...!",

WlcAdd: (n = '', e = '', k = '', o = '') => [`⚡ *Bienvenid@ ${n} a este grandioso grupo* ${e}\n📆 *Fecha de ingreso | ${k}*\n🍷 _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n📜 *Normas del grupo actualmente :* \n${masss}\n${o}`, "`Si va personalizar la bienvenida puede usar estos parámetros adicionales:`\n\n- @user \n_(para etiquetar al usuario)_\n- @group\n_(para usar el nombre del grupo)_\n- @date\n_(para indicar la fecha)_\n- @desc\n_(para mostrar la descripción)_\n"],

WlcRemove: (m = '', d = '', z = '') => `[!] C fue alv : @${m} • ${d}\n- Fecha de salida | ${z}`,

WlcPromot: (m = '', d = '', z = '') => [`*Felicidades @${m}!, ${z || 'Un administrador'} te acaba de dar un gran poder, ahora eres admin del grupo* : _${d}_\n`, `~Ahora tengo el poder absoluto y me la pelan!~\n\n*Digo..., _Muchas gracias a ${m || 'un administrador'} por darme administración intentaré dar lo mejor de mi para este grupo!!!_ :D*`],

WlcDemot: (m = '', d = '', z = '') => [`*${z || 'Un administrador'} acaba de degradar a @${m} ya no es administrador del grupo* : _${d}_`, "Shale, ya no soy administrador unu"],

Blys: "Se detectó otro bot en el grupo, para evitar algún tipo de conflicto o spam procederé a retirarme de chill 🗿",

Opu: `\`[!] LÍMITE DE TAMAÑO EXCEDIDO DE USUARIOS GRATUITOS\`\n\n_Para descargar archivos más grandes, actualiza a Premium, Contacta al dueño con:_\n\n${Prefijo}dueño`,

Cprint: ["EJECUTANDO", "MENSAJE", "Por", "De", "Chat", "grupo:", "Privado:", "Fecha"],

MsjRegister: `\`[!] Para usar esta funcion primero tiene que registrarse!\`\n\n${Prefijo}rg`,

SpmrCmd: (a = '') => ["_Espere unos segundos antes de usar otro comando..._ ✓", `[ ! ] ${a} Por favor no sature al bot ;-;`],

SpmrCnsl: "[SPAMER CMD] Comando :",

Antnlc: (a = '') => ["[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo", "*[ ! ] Enlace detectado [ ! ]*\n\n_Por suerte no soy acmin, asi que no puedo hacer nada unu_", `*[ ! ] Enlace detectado [ ! ]*\n_Ahora si k_gaste @${a} Adios..._\n`],

Antgll: ["Acabas de etiquetar a todos los participantes de este grupo, no soy administrador asi que no puedo hacer nada :0", "La acción de etiquetar a todos esta prohibido en este grupo, adiu!"],

Antlnk: (a = '') => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Por suerte no soy admin, asi que no puedo hacer nada :v_"}`,

Antrb: (n = '', k = '') => [`El administrador @${n} acaba de enviar un texto que contiene muchos caracteres -.-!`,`*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]* ${n?"":`${saltos}\nNo soy administrador, no puedo hacer nada mas... :/`}`,`Marcar el chat como leido ✓\n${saltos}\n=> El número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en dispositivos móviles`],

AiChat: (n = '', k = '') => ["Por favor, sea mas específico en su mensaje", "Y el mensaje?", `Se ${n ? "activó" : "desactivó"} "${k}" correctamente.`],

Netw: (m = '', d = '', z = '') => `*[ ! ] Por favor use un enlace de ${d}*\n_Ejemplo de uso:_\n\n${Prefijo + m} ${z}`,

Schd: (m = '', d = '', z = '') => `*[ ! ] Por favor ingrese un texto para realizar la búsqueda respectiva en ${d}*\n_Ejemplo de uso:_\n\n${Prefijo + m} ${z}`,

Nime: (n="", k="") => ["Use una captura de pantalla o imagen de una escena anime", `${n ? 'Si el resultado no es lo que esperabas, prueba usar una imagen con buena resolución de una escena "anime"!  ' : 'No te aseguro que el resultado sea 100% preciso u.u'}`, `*🔖Titulo:* _${n || "N/N"}_\n*🎴Episodio:* _${k || "N/N"}_\n`],

Vthx: "`💻 Redes sociales 📲`\n\n[ > ] Canal de Youtube:\n- https://youtu.be/-BnJigQ4-cM\n\n[ f ] Página de Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://www.tiktok.com/@nekosmic/video/6867645537231850753 \n\n> ᴺᵒ ᵖᶦᵈᵒ ᵈᶦⁿᵉʳᵒ⁻ ˢᵒˡᵒ ᶜᵒⁿ ᵗᵘ ᵃᵖᵒʸᵒ ˢᵒʸ ᶠᵉˡᶦᶻ  :³",

Tptv: "Por favor, responda o envie un video que no exceda los 59 segundos de duración.",

Mlti: (a = '') => `*\`Ejemplo de uso (idiomas disponibles):\`*\n\n> Idioma español 🇵🇪\n-  ${a} es\n\n> English language 🇺🇲\n-  ${a} en\n\n> Idioma português 🇧🇷\n-  ${a} pt\n\n> Bahasa Indo 🇮🇩\n-  ${a} id\n\n> deutsche Sprache 🇩🇪\n-  ${a} de\n\n> Auto... 🌎\n-  ${a} auto\n`,

Gbnd: ["Chat baneado correctamente ✓", "Chat desbaneado correctamente ✓"],

Gemx: (a = '') => `*Ejemplo de uso:*\n\n${Prefijo+a} 🥺+🥵\n`,

Jttt: (n='', k='') => [`\`[ JUEGO TRES EN LINEA ]\`\n      \n*Para crear una sala, ejemplo:*\n\n> Podras retar a otro jugador\n${Prefijo+n} random\n\n-\n*Para jugar contra el bot:*\n\n> Modo 1\n${Prefijo+n} bot\n\n> Modo 2\n${Prefijo+n} bot troll\n\n-\n*NOTA:*\n_Cuando estes en una partida activa usa los siguientes comandos para hacer un movimiento en el tablero del 1 al 9, Ejemplo:_\n\n${Prefijo+n} 4\n`, `*¡Me estas retando!*\n\n> Tú comienzas primero.\n\n${n}\n`, "Ya estas jugando contra el bot. Finaliza el juego antes de unirte a una nueva sala.", `Ya estás en la sala "${n}". Finaliza el juego antes de unirte a otra.`, `La sala "${n}" ha sido eliminada por inactividad.`, `Sala "${n}" creada. Esperando a otro jugador que use el mismo nombre de sala para unirse...`, `Te has unido a la sala "${n}". El juego comienza ahora.\n${k}`, "Movimiento inválido. Elige una posición libre entre 1 y 9. libres", `${n}\n\n> Turno de ${k}`, `${n}\n\n> Tu turno`],

Wppr: (n = '', k = '') => [`┏━⊱ Fondo: ${n}\n┗⊱  Solicitada por : @${k}`],

Frs: (n="", k="") => `- *Frase:* _${n}.._\n\n> *Autor:* _${k}_\n`,

Fxm3: (m = '', d = '', z ="") => [`*Aquí tiene una lista de efectos disponibles:*\n\n- ${m}\n\nEjemplo de uso: ${Prefijo+d} ${z}`, "`[ ! ] Responda un mensaje de audio`\n\n> Maximo 2 minutos de duración"],

AdmOpt: (n = '', k = '') => [`Se ${n ? 'encendió' : 'apagó'} ${k} para este chat`, "`「 Aqui tiene la lista de opciones :3 」`", "Opcion:", "Descripción:", "Comando:", [
  {
    t: "[ ⬇️ BIENVENIDA AUTOMÁTICA ]",
    o1: "[ 🛬 Activar ]",
    d1: "~El bot dará bienvenida a los nuevos participantes en un grupo~",
    c1: `${Prefijo}encender bienvenida`,
    o2: "[ 🛫 Desactivar ]",
    d2: "~No se dará bienvenida a los nuevos participantes en un grupo~",
    c2: `${Prefijo}apagar bienvenida`
  },
  {
    t: "[ ⬇️ DESPEDIDA AUTOMÁTICA ]",
    o1: "[ 👋 Activar ]",
    d1: "~El bot indicará la salida de un participante del grupo~",
    c1: `${Prefijo}encender despedida`,
    o2: "[ ✊ Desactivar ]",
    d2: "~El bot no hará ninguna acción de despedida~",
    c2: `${Prefijo}apagar despedida`
  },
  {
    t: "[ ⬇️ SOLO - ADMINS ]",
    o1: "[ ⭐ Activar ]",
    d1: "~Ahora solo los administradores del grupo podrán usar al bot~",
    c1: `${Prefijo}encender soloadmins`,
    o2: "[ ✨ Desactivar ]",
    d2: "~Ahora todos los participantes del grupo podrán usar al bot~",
    c2: `${Prefijo}apagar soloadmins`
  },
  {
    t: "[ ⬇️ DETECCIÓN ]",
    o1: "[ 🌕 Activar ]",
    d1: "~El bot detectará los ajustes realizados en un grupo~",
    c1: `${Prefijo}encender deteccion`,
    o2: "[ 🌑 Desactivar ]",
    d2: "~No se detectarán los ajustes realizados en un grupo~",
    c2: `${Prefijo}apagar deteccion`
  },
  {
    t: "[ ⬇️ ANTI - ENLACES ]",
    o1: "[ 🗡️ Activar ]",
    d1: "~El bot eliminará al participante que envíe un enlace en un grupo~",
    c1: `${Prefijo}encender walink`,
    o2: "[ 😴 Desactivar ]",
    d2: "~No se realizará ninguna acción cuando se envíen enlaces~",
    c2: `${Prefijo}apagar walink`
  },
  {
    t: "[ ⬇️ ANTI - TAGALL ]",
    o1: "[ 🧐 Activar ]",
    d1: "~El bot eliminará participantes que etiqueten a todos~",
    c1: `${Prefijo}encender antitagall`,
    o2: "[ 😶 Desactivar ]",
    d2: "~El bot no hará nada cuando se etiquete a todos~",
    c2: `${Prefijo}apagar antitagall`
  },
  {
    t: "[ ⬇️ ANTI - URLS ]",
    o1: "[ 🗡️ Activar ]",
    d1: "~El bot eliminará a los participantes que envíen links~",
    c1: `${Prefijo}encender antiurl`,
    o2: "[ 😴 Desactivar ]",
    d2: "~No se realizará ninguna acción cuando se envíen links~",
    c2: `${Prefijo}apagar antiurl`
  },
  {
    t: "[ ⬇️ ANTI - FAKES 1 ]",
    o1: "[ 🛡️ Activar ]",
    d1: "~Este comando activa protección contra números estadounidenses +1~",
    c1: `${Prefijo}encender antifake1`,
    o2: "[ ⚰️ Desactivar ]",
    d2: "~Desactivar antifakes 1 en el grupo~",
    c2: `${Prefijo}apagar antifake1`
  },
  {
    t: "[ ⬇️ ANTI - FAKES 2 ]",
    o1: "[ 🛡️ Activar ]",
    d1: "~Se activa la protección contra números falsos o virtuales~",
    c1: `${Prefijo}encender antifake2`,
    o2: "[ ⚰️ Desactivar ]",
    d2: "~Desactivar antifakes 2 en el grupo~",
    c2: `${Prefijo}apagar antifake2`
  },
  {
    t: "[ ⬇️ ANTI - EXTRANJEROS ]",
    o1: "[ 🏳️ Activar ]",
    d1: `~Se activa la protección contra números distintos al prefijo del propietario. Los números que comiencen con +${LocPref} no serán eliminados~`,
    c1: `${Prefijo}encender antiextranjeros`,
    o2: "[ 🏴 Desactivar ]",
    d2: "~Desactivar Antiestranjeros en el grupo~",
    c2: `${Prefijo}apagar antiextranjeros`
  },
  {
    t: "[ ⬇️ ANTI - TRABA ]",
    o1: "[ 🐸 Activar ]",
    d1: "~Este comando activa protección Anti trabas en WhatsApp~",
    c1: `${Prefijo}encender antitraba`,
    o2: "[ 👾 Desactivar ]",
    d2: "~Anti trabas desactivado~",
    c2: `${Prefijo}apagar antitraba`
  },
  {
    t: "[ ⬇️ CHAT - BOT ]",
    o1: "[ 🗣️ Activar ]",
    d1: "~Este comando activa un chat-bot en un grupo de WhatsApp~",
    c1: `${Prefijo}encender chatbot`,
    o2: "[ 👤 Desactivar ]",
    d2: "~Desactivar chat-bot en el grupo actual~",
    c2: `${Prefijo}apagar chatbot`
  },
  {
    t: "[ ⬇️ +18 - NSFW ]",
    o1: "[ 🥵️ Activar ]",
    d1: "~Se activarán los comandos de contenido adulto~",
    c1: `${Prefijo}encender nsfw`,
    o2: "[ 🤠 Desactivar ]",
    d2: "~Desactivar comandos adultos~",
    c2: `${Prefijo}apagar nsfw`
  }
]
],

OwnOpt: (n = '', k = '') => [`Se ${n ? 'activó' : 'desactivó'} ${k} para este chat`, [
{
t: "[ ⬇️ MODO RESTRINGIDO ]",
o1: "[ 🌚 Activado ]",
d1: "~Activa la funcion para eliminar participantes en grupos (No recomendado)~",
c1: `${Prefijo}activar restringido`,
o2: "[ 🌝 Desactivado ]",
d2: "~Acciones de eliminar y agregar participantes desactivado (recomendable)~",
c2: `${Prefijo}desactivar restringido`
}
]
],

Dlig: (a = '') => [`*[ ! ] Link inválido*\n_Por favor, use un link de Instagram_\nEjm : ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],

Gimg: (a = '') => [`_Busqueda realizada por ${a}_`],

Bunt: (n = '', k = '') => ["[ ! ] Error, El enlace de WhatsApp no funciona o es inválido", `[ ! ] Tenga en cuenta que la cantidad mínima de participantes del grupo debe de ser: *${MinimoDeUsuarios}*, para que el bot funcione`, "Tu grupo estará en revisión por el dueño del bot (el decidirá si lo añade o no)"],

Dmdf: (n = '', e = '', k = '', o = '', m = '', d = '') => ["*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_", `*Nombre:* ${n}\n*Tamaño:* ${e}\n*Extensión:* ${k}\n*Fecha de subida:* ${o}\n*Tipo de archivo :* ${m}\n*Url :* ${d}`],

Menl: (n = '', e = '', k = '', o = '') => [`Hola ${n}!, 👋`, "Ejemplo de uso", `*[ ${n} ]*\n≡ ~${e}~\n${Prefijo + k} ${o}`, `╔══════════\n║╭—————————\n`, `║├  ${n}`, `\n║╰—————————\n╚══════════`],

Menu: (n = '', e = '', k = '', o = '', s = '') => ["_Cargando menu..._", `╔I [ \`\`\`${n ? e : NombreDelBot}\`\`\` ]
║❂ Tiempo activo: ${k}
║❂ Version del bot: ${version}
║❂ Dueño del bot: ${author.name}
║❂ Prefijo único: 「  ${Prefijo}  」
║❂ Cliente: ${o}
╚══════════ ${n ? `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Sub-Bot de ${s}
┗─── ⊹ ⊱♡⊰ ⊹ ───┛` : ''}
${masss}
~|-------------------------|~
*[_>] _COMANDOS_ ☷*
~|-------------------------|~\n`,
`╔「 _${n} :_ 」
║╭—————————\n`,
`║├  ${n}`,
`\n║╰—————————
╚══════════`],

Sekr: (n='',e='',k='',o='',s='') => ["*COINCIDENCIAS CERCANAS:*\n\n", `\`${n}\`\n- Similitud: ~${e}%~\n- Tipo: _${k}_\n- Idiomas disponibles: ${o}\n*Ejemplo de uso:*\n${s}\n\n`],

Upfl: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', b = '', r = '', u = '') => [`💻 <[ PERFIL É INFO DE USUARIO]> 🌐\n\n➢ Nombre: ${n}\n${e?"➢ Es administrador: [✓]":"➢ Es administrador: [X]"}\n${k?"➢ Usuario premium: Si":"➢ Usuario premium: No"} \n${o?"➢ Registrado: [✓]":"➢ Registrado: [X]"} ${o?`\n➢ Nombre registrado: ${s}\n➢ Edad: ${m}\n➢ Fecha de registro: ${i}`:""}${c?`\n➢ Porcentaje gay: ${c}`:""}\n➢ Límites restantes: ${b+r+u}\n- Juegos = ${b}\n- Descargas = ${r}\n- Otros = ${u}\n`,`➢ Pais: ${n} \n➢ clave de pais: ${e} \n➢ Origen del número: ${k||"No encontrado u.u"} ${o?"\n➢ Número valido: [✓]":"\n➢ Número valido: [X]"} ${s?"\n➢ Dispositivo mobil: [✓]":"\n➢ Dispositivo mobil: [X]"} \n➢ Operadora: ${m} \n➢ Tipo de linea: ${s} \n➢ Formato local: ${i} \n➢ Formato internacional: ${c} \n➢ Código de pais: ${b}`],

Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = '', z = '') => ["_Obteniendo información..._",`*~》INFORMACIÓN《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(activo)_\n➪ *Dueño actual* : _${author.name}_\n➪ *Aplicación Node.js iniciado* : _Hace ${a}._\n➪ *Tiempo de ejecucion actual* : _${b}._\n➪ *Apodo en Whatsapp* : _${c}._\n➪ *Total de grupos* :  _${d}_\n➪ *Total de usuarios* : _${e}_\n➪ *Grupos activos* : _${f} / ${g}_\n➪ *Chats personales* : _${h}_\n➪ *Total de chats* : _${i} / ${j}_\n➪ *Hits globales* : _${k}_\n➪ *Version del bot* : _${version}_\n➪ *Own-Wpp-Api* : _https://github.com/adiwajshing/_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Carpeta temporal* : _${l}_\n➪ *Base de datos* : _${m}_\n➪ *Versión NodeJs* : _${n}_\n➪ *Velocidad de procesamiento* : _${o} s_\n➪ *Velocidad de conexion* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Plataforma* : _${r}_\n➪ *Versión* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Arquitectura* : _${u}_\n➪ *Host* : _${v}_\n➪ *Server* : _${w}_\n\n➫ _Consumo de memoria :_\n${x} ${""==y?"":`\n➫  _Uso total de CPU:_\n${y}\n➫ _CPU Core(s) Usado_ ${z}`}\n\n┗─━─「 ✵ 」━─━─┛`],

Pimg: (n = '', k = '') => `\n*\`${n}\`*\n\n> ${k} `,

Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = '') => [`🔍 Resultado encontrado para: ${n}\n${e?`✍️ Titulo: ${e}\n⏳ Duracion: 1:23 ━━━━●───────── ${k}\n👀 Vistas: ${o}\n📝 Autor: ${s}\n📜 Descripción: ${x}\n⛓️ URL: ${d}\n\n\`Enviando audio, espere...\``:""}`],

Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = '') => [`✍️ Titulo : ${n}\n⚡ Autor : ${e}\n⏰ Duracion : ${k}\n👀 Vistas : ${o}\n📆 Fecha de subida : ${s}\n📺 Canal : ${m}\n📃 Descripcion : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Puedes usar los siguientes comandos para descargar_${masss}\n\n${_}\n`],

Ureg: (n='',k='',o='',s='',m='',i='',c='')=>["Por favor introduzca su código de registro","[ ! ] Codigo de registro incorrecto","[✓] Su registro fue eliminado de la base de datos correctamente 🗑️",`*[ ! ] Ya estuviste registrado en mi base de datos*\nQuieres volver a registrarte nuevamente?\nUse el comando:  \n\n${Prefijo}unreg <Código de registro>\n`,"Nombre y edad!?",'*[ ! ] Por favor agregue un guion en medio de nombre y edad*\n\n',"*[ ! ] En edad solo se aceptan números -.-*","*[ ! ] Bruh el nombre es muy largo ._.*","*[ ! ] Maximo de edad 30 años*","*[ ! ] Minimo de edad 13 años*","REGISTRO","Nombre: ","Edad: ","Puberto(a)","Adolecente","Joven","Adulto(a)","Fecha de registro:","Informacion:",`〘  *REGISTRO* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *Registro de usuario* : @${n}\n╠≽️ *Nombre Registrado* : ${k}\n╠≽️ *Fecha de nacimiento* : ${o}\n╠≽️ *De acuerdo a tu edad eres un(a)* : ${s}\n╠≽️ *Información* : ${m}\n╠≽️ *Número* : wa.me/${c}\n┗─━─━━─━─━━─━\n\n_Codigo de registro_ : ${i}\n\nᴺᵒ ᵒˡᵛᶦᵈᵉ ᵍᵘᵃʳᵈᵃʳ ᵒ ᶜᵒᵖᶦᵃʳ ˢᵘ ᶜᵒ́ᵈᶦᵍᵒ ᵈᵉ ʳᵉᵍᶦˢᵗʳᵒ`],

Bscp: ["*🛑 Antes de continuar con su lectura, tenga en cuenta los siguientes requisitos:*\n- _Tener WhatsApp oficial en su dispositivo_\n- _Tener 200MBS de almacenamiento libre en su dispositivo_\n- _Tener instalado Termux.apk_\n- _Tener una buena conexión a internet_\n- _Por último y mas importante, tener paciencia_ :v\n\n\n*[_>] Aqui se estaran subiendo los tutoriales tanto para la aplicación termux y para máquinas virtuales:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\n> Necesitas mas ayuda?, comunicate con mi creador:", "Demo Test Tmp"],

Bbot: (a = '', b = '') => ["No podras usar este comando siendo bot [ ! ]", "La opción para ser bot temporal esta desactivado", `*Hola ${a}!, antes de continuar por favor lea esta mini guia para evitar inconvenientes:*\n\n☝️🤓 Información y uso del comando:  ${b}\n\n\`1.- Al solicitar el/ó código de vinculación por primera vez se te generará una clave unica para que puedas usar el comando posteriormente. (no olvides guardar tu clave).\`\n\n\`2.- El comando tiene algunas acciones que puedes utilizar:\`\n- ${b} tu_clave-xxx...\n> _Podras conectarte manualmente si es que el bot se "desconecta"._\n- ${b} tu_clave-xxx... stop\n> _Detendrá el proceso de subbot hasta que lo reactives manualmente con tu clave._\n- ${b} tu_clave-xxx... neocd\n> _Tu sesion actual sera cerrada y podras solicitar un nuevo código para vincular._\n\n\`3.- Cuando te conviertas en un subbot, es recomendable que pruebes tu bot en un grupo distinto de donde se encuentra el bot principal.\`\n\n\`4.- El propietario y administrador de este bot se reserva el derecho de detener, modificar o deshabilitar los subbot activos o características del sistema sin previo aviso.\`\n\n\`5.- Recuerda usar el código de vinculación que te sera enviados, si pides el código en vano seras marcado por 1 hora, impidiendo temporalmente el acceso al comando hasta que se pueda utilizar nuevamente.\`\n\n~El creador de este bot no se hace responsable de ninguna acción, daño o consecuencia derivada de su uso.~`, "[_>] Guardar clave...", "Deteniendo su servicio subbot...", "Servicio actual eliminado, vuelva a pedir un código de vinculación nuevamente", "[ ! ] Por favor use su clave para continuar...", "[ ! ] Clave incorrecta, vuelva a intentarlo...", `Por favor digite su número completo junto al prefijo de su pais, ejemplo de uso:\n\n ${Prefijo+a} +519999xxxx`],

Bbbot: ["Tardó demasiado en escanear uno de los códigos, deteniendo servicio...", '`Use el siguiente código para convertirte en un bot temporal`\n1. Toque en los tres puntos "︙" en la esquina superior derecha en su pantalla de inicio\n2. Seleccione la opción "dispositivos vinculados"\n3. Toque en "vincular un dispositivo"\n4. En la parte de abajo de su pantalla hay una opción llamada "Vincular con el número de teléfono" toque ahí\n\n~[NOTA] El código caducará si no se usa a tiempo!~\n\n_Enviando código de vinculación..._', "Recientemente se ha detectado un error grave en la sesión de tu subbot. No podrás conectarte como bot hasta que el dueño reinicie la base de datos.", "*Conectado correctamente*\n\nAqui tiene su clave unica para que vuelva a conectarse manualmente si se desconecta del servicio de bot temporal:", "Su conexión como subbot se restableció nuevamente!"],

Boes:(n="",e="",k="",o="")=>[`${n}🤖 *Bot usuario* : @${e}\n\n${k}${o}`,"ACTIVADO [✓]","DESACTIVADO [X]","[✓]","[X]","Bot","Anti-Privado","Ser Sub-Bot","Grupo","Grupo baneado","Bot Admin?","Modo Restringido","Modo Solo-Admins","Bienvenida","Anti Enlaces","Anti Urls","Anti Extranjeros","No Falsos","No Falsos 2","Detección","Antitraba","Chat Bot","MODO-PUBLICO [✓]","MODO-PRIVADO [ ! ]"],

Stks: (a = '') => ["*[ ! ] Máxima duración de vídeo son 8 segundos!*", `*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+a}*\n_NOTA : duracion de video 1 a 8 segundos máximo_ ✓`, "[ ! ] Url inválido, prueba con otro ;3", "*[ ! ] Por favor envié o responda una imagen*"],

Stke: (a = '') => ["Responda un sticker del chat actual...", `Envie ó Responda un sticker con el comando ${Prefijo+a}`, "Consejo, elimina tu sticker para todos ;v", "[ ! ] Responda un sticker para obtener los metadatos", "[ ! ] Responda un sticker para asignarle un precio falso :p", "Responda un sticker para editar el EXIF a tu manera"],

Bblst: (a = '') => ["Actualmente no hay subbots activos...", "*Lista de números que se hicieron subbots*\n~Puede que algunos números esten inactivos!~\n", `\n*🐝 Bot:* wa.me/${a}`],

Gtag: (n = '', e = '', k = '', o = '') => [`*[ ! ] Invocando a los integrantes del grupo* :\n${n}\n\n*~> Invocador* : _@${e}_\n*~> Mensaje* : _${k||"No hay :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ ᵉˡ ᑫᵘᵉ ˡᵒ ˡᵉᵃ ⁷ʷ⁷"}`],

Jcal: (a = '') => `*[ ! ] Agrege barras entre cada acción*\n_Ejemplo de uso_ : \n\n${Prefijo+a} @UsuarioEtiquetado | bendiceme | bendecido\n\n> No olvide usar esta barra:  " | "`,

Jtop: (n = '', k = '') => [`*[ ! ] Indique una cantidad para generar el top*\n_Ejemplo de uso_ :\n\n${Prefijo+n} 5 Seguidores de la grasa :v`, `*\`${n}\`*\n\n`, `_${n}.º @${k}_\n`, `\n> ${NombreDelBot}`],

Jprj: (n = '', e = '', k = '', o = '') => `\n❥ [ PAREJA FORMADA ] :\n\n┏─━─━─━∞◆∞━─━─━─┓\n${n} • ${e}\n❤\n️${k} • ${o} \n┗─━─━─━∞◆∞━─━─━─┛`,

Jnij: (n = '', k = '') => ["Introduzca un nombre/apodo/frase/etc...", `\`☯️ Texto ninja para [ ${n} ]:\`\n\n- *${k}*`],

Jqun: (a = '') => [`*[ ! ] Invente un asunto*\n_Ejemplo:_\n\n${Prefijo+a} es gay :v?\n`, `\n👉 ${a}\n`],

Jtgs: (n = '', e = '', k = '', o = '') => [`*Jugador : ${n}*\n*[ Felicidades, ganaste!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*┃  | ${e}*\n*┃ ├────────┤ ┃*\n*┃  | ${k} <==*\n*┃ ├────────┤ ┃*\n*┃  | ${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Todos tus límites fueron reestablecidos*`, `Jugador : ${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n┃  | ${e}\n┃ ├────────┤ ┃\n┃  | ${k}\n┃ ├────────┤ ┃\n┃  | ${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],

Cnal:(m="",d="",z="")=>[`*[ ! ] El caracol necesita descansar!*\n_Podrás intentarlo de nuevo en:_ ${m}`,`${m}\n\n> Días transcurridos: ${d}\n> Recompensa: +${z} límites en cada categoría`,`${m}\n\n> Recompensa de consuelo: +${z} límites`,`📜 *Las Crónicas de Plank McCaracol*\n*Día 0:* Cayó en un abismo de ${m}m. La humedad es sofocante y el miedo, absoluto.`,`*Día ${m}:* La luz de la luna apenas se cuela. Ha superado la mitad del foso infernal (Faltan ${d}m).`,`*Día ${m}:* Plank activó un artefacto enano propulsor (Jetpack). Ascendió violentamente entre chispas y humo.`,`*Día ${m}:* Tropezó con un manjar legendario (Caramelo) en la roca. Recuperó ${d} de vitalidad.`,`*Día ${m}:* ¡Horror! Plank sucumbió al cansancio... pero una miasma nigromántica lo envolvió. Se levantó como un no-muerto baboso.`,`*Día ${m}:* ¡Gloria! El caracol emergió a la superficie tras abusar de ${d} jetpack(s) durante su viaje. Se tallará una estatua de lechuga en su honor.`,`*Día ${m}:* La historia termina aquí. Su caparazón descansa a ${d}m de la salida. Era inevitable.`],

Pptv:(n="",e="",k="",o="",s=0,m=0,i="")=>[`*🪨📄✂️ Reto enviado a @${n}*\n_Ambos deben enviarme su combo por privado (3 a 5 movimientos, ej: piedra-papel-tijera)_`,"*[ ! ] No tienes un reto de ppt activo en este momento*","*[ ! ] Combo inválido!*\n_Usa entre 3 y 5 movimientos separados por guion: piedra-papel-tijera_","*[ ! ] Ya enviaste tu combo, espera a tu rival*",`*🪨📄✂️ ¡Combos completos!*\n> ${e}\n> ${o}\n> Marcador: ${s} - ${m}\n${i}`],

Ahcd:(n="",e="",k="",o="",s=0)=>[`*🔤 Ahorcado en curso* (${k})\n\n${n}\n_Vidas: ${e}_`,`*🔤 ¡Nuevo ahorcado!* (${k})\n\n${n}\n_Vidas: ${e}_\n_Envía una letra con:_ /ahorcado <letra>`,"*[ ! ] No hay ningún ahorcado activo, inicia uno con* /ahorcado","*[ ! ] Envía solo una letra válida*","*[ ! ] Esa letra ya fue intentada*",`*💀 ¡Se acabaron las vidas! La palabra era:* ${o}`,`*❌ Letra incorrecta*\n\n${n}\n_Vidas: ${e}_`,`*✅ ¡Bien!*\n\n${n}\n_Vidas: ${e}_`,`*🎉 ¡Palabra completada: ${o}!*\n> Recompensa: +${s} límites`],

Fyhc:(m="",d="",z="")=>[`*[ ! ] Ya buscaste el sombrero hace poco, vuelve a intentarlo en:* ${m} min`,`*🎩 ¡Encuentra el sombrero oculto!*\n\n${m}\n\n_Envía tus movimientos, ej:_ /fyh 🔼🔽◀️▶️\n_Máximo 8 movimientos por turno. Cuidado con los huecos invisibles..._`,"*[ ! ] Envía al menos una flecha de dirección: 🔼 🔽 ◀️ ▶️*",`*🕳️ ¡Caíste en un hueco tras ${m} movimiento(s)!*\n\n${d}\n\n_Juego terminado._`,`*🎩 ¡Encontraste el sombrero en ${m} movimiento(s)!*\n\n${d}\n\n> Recompensa: +${z} límites`,`${m}\n\n${d}\n\n_¡Aún no lo encuentras, envía más flechas!_`],

Topl:(n="",e=0,k="",o="",s=0,_=0)=>[`*[ ! ] Nadie ha jugado a "${n}" todavía en este grupo*`,"*[ ! ] Nadie ha jugado todavía en este grupo*",`*🏆 Tierlist — ${n}*`,"*🏆 Tierlist general*",`${e}. @${k} — ${s} victorias (${_} jugadas)`,`${e}. @${k} — ${o} | ${s} límites ganados | ${_} partidas`,`*🎉 ¡Subiste de nivel!*\n_Nuevo rol:_ ${o}`,`*[ ! ] Aún no subes de nivel*\n_Tu rol actual:_ ${o}\n_Te faltan ${s} partidas jugadas para el siguiente rol_`,`*👑 Ya tienes el rol máximo:* ${o}`],

Cn4:(n="",e="",k="",o="",s="")=>["🔴🟡 *Conecta 4*\n\n• *.conecta4 bot* — jugar contra la máquina (fácil)\n• *.conecta4 bot pro* — jugar contra la máquina (difícil)\n• *.conecta4 <sala>* — crear/unirte a una sala con otro jugador\n• *.conecta4 <1-7>* — jugar en esa columna, una vez en partida","Ya tienes una partida de Conecta 4 contra la máquina en curso.",`🔴🟡 *Conecta 4 vs máquina* ${s}\n\n${n}\n\nTú eres ${e}. Juega con *.conecta4 <1-7>*`,"Ya estás en una partida de Conecta 4. Termínala antes de crear otra.",`⏳ La sala de Conecta 4 *${o}* expiró por falta de un segundo jugador.`,`🔴 Sala de Conecta 4 *${o}* creada. Esperando a un segundo jugador (60s)...`,`🔴🟡 *¡Partida de Conecta 4 iniciada!*\n\n${n}\n\nTurno de ${e} (@${k})`,"Esa columna está llena, elige otra (1-7).",`${n}\n\nTurno de ${e} (@${k})`,`${n}\n\nTurno de ${e} — tu turno, juega con *.conecta4 <1-7>*`,`🟡 *¡La máquina gana!* 🟡\n\n${n}`,`🤝 *¡Empate!* El tablero se llenó.\n\n${n}`,`🔴 *¡@${k} gana!* 🔴\n\n${n}`],

Gcha:(a=0,b="",c="",d="",e=0,f=0,g="",h=0,i=0,j="",k=0)=>[`*[ ! ] Aún no puedes coleccionar!*\n_Vuelve a intentarlo en ${a} minuto(s)_`,"*[ ! ] No se pudo obtener un personaje en este momento, intenta de nuevo*",`*🎴 ¡Nuevo personaje coleccionado!*\n> ${b} (${c})\n> Rareza: ${d}\n> Nivel: ${e}`,`*🎴 ¡Personaje repetido subió de nivel!*\n> ${b} (${c})\n> Rareza: ${d}\n> Nivel: ${e} (${f} copias)`,"*[ ! ] No tienes ninguna carta todavía, usa* /collect *para conseguir una*","*🎴 Tu colección (top 10 por poder):*",`${b} (${c}) — ${d} — Nivel ${e} (${f} copias)`,"*[ ! ] Tu rival no tiene ninguna carta todavía*",`*⚔️ ¡Empate!*\n> ${b} (poder ${h}) vs ${g} (poder ${i})`,`*⚔️ ¡Duelo de cartas!*\n> ${b} (poder ${h}) vs ${g} (poder ${i})\n🏆 Ganador: @${j} (+${k} límites)`,"*[ ! ] Todavía estoy cargando la base de personajes por primera vez, intenta de nuevo en unos minutos*","*[ ! ] La base de personajes no cargó correctamente, avísale al dueño del bot*"],

Jtgy: (n = '', k = '') => ["su porcentaje de gay es ", `@${n} es ${k} gay`, "*[ ! ] Limite de gay superado [ ! ]*"],

Clgs: (n = '', k = '') => [`*[ ! ] Use el formato correcto!* :\n\n🖼️ ~Para logos con texto continuo~\n[1]  ${Prefijo+n} (efecto) (texto...), _Ejemplo de uso:_\n\n${Prefijo+n} space NeKosmic\n\n🖼️ ~Para logos con texto separados por una linea vertical~\n[2]  ${Prefijo+n} (efecto) (texto1)|(texto2), _Ejemplo de uso:_\n\n${Prefijo+n} Pornhub-Style-Logo Fap|Not\n\n🎨 Que logo desea crear?, aqui tiene una lista de efectos:\n\n${k}`, `[ ! ] El efecto *${n}* no se encuentra en la lista...`],

Dtkv: (n = '', e = '', k = '', o = '', m = '', d ="", z = '') => [`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Autor: ${n}` : ""} ${e ? `\n🤳 Usuario: ${e}` : ""} ${k ? `\n📝 Descripción: ${k}` : ""} ${o ? `\n💕 Me gusta: ${o}` : ""} ${m ? `\n🎭 Comentarios: ${m}` : ""} ${d ? `\n🔄 Compartido: ${d}` : ""} ${z ? `\n👀 Vistas: ${z}` : ""}`],

Tozg: (a = '') => [`*[ ! ] Responda a un sticker usando el comando:*\n\n${Prefijo + a}`, `Convertido a ${a ? "video" : "imagen"} correctamente ✓`], 

UpBot: (m = '', d = '', z = '') => `*[ ! ] Por favor especifique el nombre del archivo que será actualizado.*\n_Aquí tiene una lista de posibles archivos que pueden ser actualizados con sus respectivos ejemplos de uso:_\n\n- ${m}\n\n> Si desea hacer una actualización completa use el comando:\n\n${Prefijo + d} ${z} ++\n`,

Uact: (n = '', e = '', o = '') => ["*A que participante desea convertirlo en administrador?*", `Ejemplo de uso:\n\n${Prefijo+n} @51995...\n`, "A quien desea banear?", "[ ! ] Por favor etiquete al usuario que desea banear", `Usuario baneado, ${n} ya no podra usar al bot [ ! ]`, "*A que administrador desea quitarle su puesto?*", "A quien desea desbanear?", `Usuario desbaneado, ${n} puede volver a usar al bot [✓]`, `Por favor etiquete o mencioné a alguien!\n\nEjemplo de uso:\n${Prefijo+n} @${e}`, `*${n}* dejó de ser premium`, "Por favor indique el número de dias", `Solo números!\n\nEjemplo de uso:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maximo 7 dias", `*[ USUARIO PREMIUM ]*\n🔖 *Nombre:* ${n}\n📆 *Tiempo:* ${e} dia(s)\n📉 *Restante:* ${o}MS`, "[ ! ] Se acabó tu tiempo premium!\n_Espero que lo hayas disfrutado :3_\n"],

Gadd: (a = '') => [`[ ! ] Indique el número completo de un usuario de WhatsApp que desea agregar al grupo, Ejemplo de uso:\n\n${Prefijo+a} +51999....`, `wa.me/${a} te esta invitando a su grupo de WhatsApp!`, `*[ ! ] Error, no se pudo añadir al número @${a} al grupo*\n\n_Por favor enviale un enlace de invitación manualmente: wa.me/${a}_\n`],

Uban: ["Me odias? :,c", "A que usuario desea eliminar!?\nPor favor etiqueta a uno"],

Uwrn: (m = '', d = '', z = '') => [`Se redujo la cantidad de advertencias al usuario ${m}\n\n${d} => ${z}\n`, `> Se ha dado la primera advertencia al usuario ${m}. Si acumula más de tres advertencias, será eliminado del grupo.`],

Wkpd: (n = '', k = '') => ["[ ! ] Sin resultados para su búsqueda ;-;", `|| *WIKIPEDIA* ||\n_~> Resultados para : ${n}_\n\n${k}`],

Dytv: (n = '', k = '') => `Titulo: ${n}\nTamaño: ${k}\nExtencion: .mp4`,

Ytbd: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '') => [`*[ > ] Resultados en Youtube para:* _${a}_\n\n`, `🔖 Titulo: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Tipo: ${d}\n🖼️ Miniatura: ${e}\n⌚ Duracion: ${f}\n📜 Descripción: ${g}\n📆 Fecha de subida: ${h}\n👀 Vistas: ${i}\n||\n⚡Autor: ${j}\n?? Canal: ${k}\n\n*——————————*\n\n`],

Sgst: ["Lo siento, no puedes enviar más comentarios por ahora.", "Por favor, sea más específico en su mensaje."],

Whrs:(n="",e="",k="",o="",s="")=>[`⁉️ *Falta la zona horaria*\n\nPaíses disponibles:\n${n}\n\n*Ejemplo:*\n\n${Prefijo}hora peru`,`🕒 *HORA EXACTA*\n\n📍 *Ubicación:* ${n}\n📅 *Fecha:* ${e}\n⏰ *Hora:* ${k}\n${o} \`Ya es de ${s}\``,"madrugada","mañana","tarde","noche"],

Wth:(n="",e="",k="",o="",s="",m="",i="")=>[`⁉️ *Falta la ciudad*\n\n*Ejemplo:*\n\n${Prefijo}clima Sicuani`,`🌍 *Clima en ${n}, ${e}*\n\n${m} *Estado:* ${i}\n🌡️ *Temperatura:* ${k}°C\n💧 *Humedad:* ${o}%\n💨 *Viento:* ${s} km/h`,"Despejado","Poco nublado","Nublado","Niebla","Llovizna","Lluvia","Nieve","Chubascos","Tormenta","Desconocido"]

};