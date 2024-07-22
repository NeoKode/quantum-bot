import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "es",

Habla: () => "Idioma Español",

Start: () => ["Ejecutando el Bot mas shidori tercer mundista.\nComenzando ejecucion del script...", "\n[!] Código finalizado:"],

Conn: (a = '') => ["Conectando...", "Motivo de desconexión:", "Se agotó el tiempo de conexión, reconectando...", "Se requiere reinicio, reiniciando...", "Dispositivo cerró sesión, por favor vincule nuevamente y ejecute.", "Conexión reemplazada, se abrió una nueva sesión, por favor cierre la sesión actual primero.", "Conexión perdida con el servidor, reconectando...", "Conexión cerrada, reconectando...", "Archivo de sesión incorrecto, por favor elimina la sesión actual y vincule nuevamente", "Conectado ✓", "\n\n[_>] Si va a utilizar el método de emparejamiento, por favor ingresa el número que se convertirá en el bot, Asegúrate de ingresar el número completo de WhatsApp junto con su código de país.\nEjemplo:  +51xxx...\n", `\nCódigo de emparejamiento para el número "+${a}":`],

Call: (n = '', k = "") => `\n*[ ! ] ${n} Seras bloqueado*\n_Razon : por realizar una ${k?"videollamada":"llamada"} a este numero sin autorizacion!_\n`,

GpUp: (n = '', k = '') => ["🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵃʳ ᵃᵗᵉⁿᵗᵒˢ ᵃ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ʳᵉᵗʳᵃˢᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASUNTO DEL GRUPO CAMBIADO ]* 🤳\n\n- Asunto principal fué: _${n}_\n\n- Asunto nuevo: _${k}_\n`],

RestriN: () => "[ ! ] No se pudo eliminar al participante nuevo, por favor active el modo restringido!",

AlertList: () => "[ ! ] Borre los números que inicien con   '1'   de Blacklist en ./config.json...!",

WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Bienvenid@ @${n} a este grandioso grupo* ${e}\n📆 *Fecha de ingreso | ${k}*\n🍷 _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n📜 *Normas del grupo actualmente :* \n${masss}\n${o}`,

WlcRemove: (m = '', d = '', z = '') => `[!] C fue alv : @${m} • ${d}\n- Fecha de salida | ${z}`,

WlcPromot: (m = '', d = '', z = "") => [`*Felicidades @${m}!, ${z || 'Un administrador'} te acaba de dar un gran poder, ahora eres admin del grupo* : _${d}_\n`, `~Ahora tengo el poder absoluto y me la pelan!~\n\n*Digo..., _Muchas gracias a ${m || 'un administrador'} por darme administración intentaré dar lo mejor de mi para este grupo!!!_ :D*`],

WlcDemot: (m = '', d = '', z = "") => [`*${z || 'Un administrador'} acaba de degradar a @${m} ya no es administrador del grupo* : _${d}_`, "Shale, ya no soy administrador unu"],

Cprint: () => ["EJECUTANDO", "MENSAJE", "Por", "De", "Chat", "grupo:", "Privado:", "Fecha"],

MsjRowner: () => "*[ ! ]* Este comando solo puede ser usado *desde el bot principal*!",

MsjOwner: () => "*[ ! ]* Este comando solo puede ser utilizado por el *propietario del bot*!",

MsjMods: () => "*[ ! ]* Este comando solo puede ser utilizado por un *moderador*!",

MsjPremium: () => "*[ ! ]* Esta solicitud es solo para usuarios *premium*!",

MsjGroup: () => "*[ ! ]* Este comando solo se puede usar en *grupos*!",

MsjPrivate: () => "*[ ! ]* Este comando solo se puede usar por *chat privado*!",

MsjAdmin: () => "*[ ! ]* Este comando solo puede ser usado por los *administradores del grupo*!",

MsjBotAdmin: () => "*[ ! ]* El bot necesita *ser administrador* para usar este comando!",

MsjRestrict: () => "[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!",

SpmrCmd: (a = "") => ["_Espere unos segundos antes de usar otro comando..._ ✓", `[ ! ] ${a} Por favor no sature al bot ;-;`],

SpmrCnsl: () => "[SPAMER CMD] Comando :",

Error: () => ["[ ! ] Error, vuelva a intentarlo mas tarde...", "[ ! ] Ocurrio un error inesperado u.u [ ! ]"],

Antnlc: (a = "") => ["[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo", "*[ ! ] Enlace detectado [ ! ]*\n\n_Por suerte no soy acmin, asi que no puedo hacer nada unu_", `*[ ! ] Enlace detectado [ ! ]*\n_Ahora si k_gaste @${a} Adios..._\n`],

Antgll: () => ["Acabas de etiquetar a todos los participantes de este grupo, no soy administrador asi que no puedo hacer nada :0", "La acción de etiquetar a todos esta prohibido en este grupo, adiu!"],

Antlnk: (a = "") => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Por suerte no soy admin, asi que no puedo hacer nada :v_"}`,

Antrb: (n = '', k = "") => [`El administrador @${n} acaba de enviar un texto que contiene muchos caracteres -.-!`,`*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]* ${n?"":`${saltos}\nNo soy administrador, no puedo hacer nada mas... :/`}`,`Marcar el chat como leido ✓\n${saltos}\n=> El número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en dispositivos móviles`],

AiChat: (n = "", k = "") => ["Por favor, sea mas específico en su mensaje", "Y el mensaje?", `Se ${n ? "activó" : "desactivó"} "${k}" correctamente.`],

Nime: (n="", k="") => ["Use una captura de pantalla o imagen de una escena anime", `${n ? 'Si el resultado no es lo que esperabas, prueba usar una imagen con buena resolución de una escena "anime"!  ' : 'No te aseguro que el resultado sea 100% preciso u.u'}`, `*🔖Titulo:* _${n || "N/N"}_\n*🎴Episodio:* _${k || "N/N"}_\n`],

Vthx: () => "`💻 Redes sociales 📲`\n\n[ > ] Canal de Youtube:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Página de Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\n> ᴺᵒ ᵖᶦᵈᵒ ᵈᶦⁿᵉʳᵒ⁻ ˢᵒˡᵒ ᶜᵒⁿ ᵗᵘ ᵃᵖᵒʸᵒ ˢᵒʸ ᶠᵉˡᶦᶻ  :³",

Tptv: () => "Por favor, responda o envie un video que no exceda los 59 segundos de duración.",

Mlti: (a = '') => `*\`Ejemplo de uso (idiomas disponibles):\`*\n\n> Idioma español 🇵🇪\n-  ${a} es\n\n> English language 🇺🇲\n-  ${a} en\n\n> Idioma português 🇧🇷\n-  ${a} pt\n\n> Bahasa Indo 🇮🇩\n-  ${a} id\n\n> deutsche Sprache 🇩🇪\n-  ${a} de\n\n> Auto... 🌎\n-  ${a} auto\n`,

Gbnd: () => ["Chat baneado correctamente ✓", "Chat desbaneado correctamente ✓"],

Gemx: (a = "") => `*Ejemplo de uso:*\n\n${Prefijo+a} 🥺+🥵\n`,

Dfbv: (a = "") => [`*[ ! ] Link inválido*\n_Por favor use un Link válido de un vídeo de Facebook_\n\nEjemplo de uso: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Error puede que el link sea inválido o el vídeo sea privado, vuelva a intentarlo mas tarde"],

Wppr: (n = "", k = "") => [`┏━⊱ Fondo: ${n}\n┗⊱  Solicitada por : @${k}`],

Frs: (n="", k="") => `- *Frase:* _${n}.._\n\n> *Autor:* _${k}_\n`,

Fxm3: (m = "", d = "", z ="") => [`*Aquí tiene una lista de efectos disponibles:*\n\n- ${m}\n\nEjemplo de uso: ${Prefijo+d} ${z}`, "`[ ! ] Responda un mensaje de audio`\n\n> Maximo 2 minutos de duración"],

GpOpt: (n = '', k = "") => [`Se ${n ? 'activó' : 'desactivó'} ${k} para este grupo`, "Aqui tiene la lista de opciones :3", "Opcion", "Descripción:", "Comando:"],

GpActn: () => [{
titulo: "[ ⬇️ BIENVENIDA AUTOMÁTICA ]",
func: [{
action: "[ 🛬 Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender bienvenida`
}, {
action: "[ 🛫 Desactivar ]",
desc: "~ᴺᵒ ˢᵉ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar bienvenida`
}]
}, {
titulo: "[ ⬇️ DESPEDIDA AUTOMÁTICA ]",
func: [{
action: "[ 👋 Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᶦⁿᵈᶦᶜᵃʳᵃ ˡᵃ ˢᵃˡᶦᵈᵃ ᵈᵉ ᵘⁿ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ ᵈᵉˡ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender despedida`
}, {
action: "[ ✊ Desactivar ]",
desc: "~ᴱˡ ᵇᵒᵗ ⁿᵒ ʰᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᵈᵉ ᵈᵉˢᵖᵉᵈᶦᵈᵃ~",
cmd: `${Prefijo}apagar despedida`
}]
}, {
titulo: "[ ⬇️ SOLO - ADMINS ]",
func: [{
action: "[ ⭐ Activar ]",
desc: "~ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃ́ⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",
cmd: `${Prefijo}encender soloadmins`
}, {
action: "[ ✨ Desactivar ]",
desc: "~ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃ́ⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",
cmd: `${Prefijo}apagar soloadmins`
}]
}, {
titulo: "[ ⬇️ DETECCIÓN ]",
func: [{
action: "[ 🌕 Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender deteccion`
}, {
action: "[ 🌑 Desactivar ]",
desc: "~ᴺᵒ ˢᵉ́ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI - ENLACES ]",
func: [{
action: "[ 🗡️ Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉ ᵘⁿ ᵉⁿˡᵃᶜᵉ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender antienlaces`
}, {
action: "[ 😴 Desactivar ]",
desc: "~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ᵉⁿˡᵃᶜᵉˢ~",
cmd: `${Prefijo}apagar antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉᵗᶦᑫᵘᵉᵗᵉⁿ ᵃ ᵗᵒᵈᵒˢ~",
cmd: `${Prefijo}encender antitagall`
}, {
action: "[ 😶 Desactivar ]",
desc: "~ᴱˡ ᵇᵒᵗ ⁿᵒ ʰᵃʳᵃ́ ⁿᵃᵈᵃ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉᵗᶦᑫᵘᵉᵗᵉ ᵃ ᵗᵒᵈᵒˢ~",
cmd: `${Prefijo}apagar antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Activar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵘⁿ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ ᵈᵉ ʷʰᵃᵗˢᵃᵖᵖ~",
cmd: `${Prefijo}encender chatbot`
}, {
action: "[ 👤 Desactivar ]",
desc: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ ᵃᶜᵗᵘᵃˡ~",
cmd: `${Prefijo}apagar chatbot`
}]
}, {
titulo: "[ ⬇️ MODO RESTRINGIDO ]",
func: [{
action: "[ 🌚 Activado ]",
desc: "~ᴬᶜᵗᶦᵛᵃ ˡᵃ ᶠᵘⁿᶜᶦᵒ́ⁿ ᵖᵃʳᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵍʳᵘᵖᵒˢ⁽ᴺᵒ ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",
cmd: `${Prefijo}encender restringido`
}, {
action: "[ 🌝 Desactivado ]",
desc: "~ᴬᶜᶜᶦᵒⁿᵉˢ ᵈᵉ ᵉˡᶦᵐᶦⁿᵃʳ ʸ ᵃᵍʳᵉᵍᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵃ⁽ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",
cmd: `${Prefijo}apagar restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",
cmd: `${Prefijo}encender antiurl`
}, {
action: "[ 😴 Desactivar ]",
desc: "~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",
cmd: `${Prefijo}apagar antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 1 ]",
func: [{
action: "[ 🛡️ Activar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵉˢᵗᵃᵈᵒᵘⁿᶦᵈᵉⁿˢᵉˢ ⁺¹~",
cmd: `${Prefijo}encender antifake1`
}, {
action: "[ ⚰️ Desactivar ]",
desc: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 2 ]",
func: [{
action: "[ 🛡️ Activar ]",
desc: "~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᶠᵃˡˢᵒˢ ᵒ ᵛᶦʳᵗᵘᵃˡᵉˢ~",
cmd: `${Prefijo}encender antifake2`
}, {
action: "[ ⚰️ Desactivar ]",
desc: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI - EXTRANJEROS ]",
func: [{
action: "[ 🏳️ Activar ]",
desc: "~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵈᶦˢᵗᶦⁿᵗᵒˢ ᵃˡ ᵖʳᵉᶠᶦʲᵒ ᵈᵉˡ ᵖʳᵒᵖᶦᵉᵗᵃʳᶦᵒ~\nᴸᵒˢ ⁿᵘ́ᵐᵉʳᵒˢ ᑫᵘᵉ ᶜᵒᵐᶦᵉⁿᶻᵉⁿ ᶜᵒⁿ +" + LocPref + " ⁿᵒ ˢᵉʳᵃ́ⁿ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ~",
cmd: `${Prefijo}encender antiextranjeros`
}, {
action: "[ 🏴 Desactivar ]",
desc: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᴬⁿᵗᶦᵉˢᵗʳᵃⁿʲᵉʳᵒˢ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - TRABA ]",
func: [{
action: "[ 🐸 Activar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵉⁿ ᵂʰᵃᵗˢᵃᵖᵖ~",
cmd: `${Prefijo}encender antitraba`
}, {
action: "[ 👾 Desactivar ]",
desc: "~ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ~",
cmd: `${Prefijo}apagar antitraba`
}]
}],

Dlig: (a = "") => [`*[ ! ] Link inválido*\n_Por favor, use un link de Instagram_\nEjm : ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],

Gimg: (a = '') => [`_Busqueda realizada por ${a}_`],

Bunt: (n = '', k = "") => ["[ ! ] Error, El enlace de WhatsApp no funciona o es inválido", `[ ! ] Tenga en cuenta que la cantidad mínima de participantes del grupo debe de ser: *${MinimoDeUsuarios}*, para que el bot funcione`],

Dmdf: (n = "", e = "", k = "", o = "", m = "", d = "") => ["*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_", `*Nombre:* ${n}\n*Tamaño:* ${e}\n*Extensión:* ${k}\n*Fecha de subida:* ${o}\n*Tipo de archivo :* ${m}\n*Url :* ${d}`],

Menl: (a = "") => [`Hola ${a}!, 👋`,
[{
info: `*[ Menu-Conversor ♻️ ]*
≡ ~ᴾᵃʳᵃ ʳᵉᵃˡᶦᶻᵃʳ ᶜᵒⁿᵛᵉʳˢᶦᵒⁿᵉˢ~
${Prefijo}menu cnv`
},
{
info: `*[ Menu-Descargas ♻️ ]*
≡ ~ᴾᵃʳᵃ ʳᵉᵃˡᶦᶻᵃʳ ᵈᵉˢᶜᵃʳᵍᵃˢ~
${Prefijo}menu dwd`
},
{
info: `*[ Menu-Búsqueda ♻️ ]*
≡ ~ᴾᵃʳᵃ ʳᵉᵃˡᶦᶻᵃʳ ᵇᵘˢᑫᵘᵉᵈᵃˢ~
${Prefijo}menu sch`
},
{
info: `*[ Menu-Herramienta ♻️ ]*
≡ ~ᴸᶦˢᵗᵃ ᵈᵉ ʰᵉʳʳᵃᵐᶦᵉⁿᵗᵃˢ~
${Prefijo}menu hta`
},
{
info: `*[ Menu-Juegos ♻️ ]*
≡ ~ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᵈᶦᵛᵉʳᵗᶦʳˢᵉ~
${Prefijo}menu gmr`
},
{
info: `*[ Menu-Admins ♻️ ]*
≡ ~ˢᵒˡᵒ ᵖᵃʳᵃ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ~
${Prefijo}menu adm`
},
{
info: `*[ Menu-Dueño ♻️ ]*
≡ ~ˢᵒˡᵒ ᵖᵃʳᵃ ᵉˡ ᵈᵘᵉⁿ̃ᵒ ᵈᵉˡ ᵇᵒᵗ~
${Prefijo}menu own`
},
{
info: `*[ Menu-Aleatorio ♻️ ]*
≡ ~ᶜᵒᵐᵃⁿᵈᵒˢ ᵃˡᵉᵃᵗᵒʳᶦᵒˢ~
${Prefijo}menu rdm`
},
{
info: `*[ Menu-Completo ♻️ ]*
≡ ~ᴸᶦˢᵗᵃ ᶜᵒᵐᵖˡᵉᵗᵃ ᵈᵉ ᵗᵒᵈᵒˢ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ~
${Prefijo}menucompleto`
}]
],

Menu: (n = '', e = '', k = '', o = "", s = '') => ["_Cargando menu..._", `╔I [ \`\`\`${n ? e : NombreDelBot}\`\`\` ]
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

Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ PERFIL É INFO DE USUARIO]> 🌐\n\n➢ Nombre: ${n}\n${e?"➢ Es administrador: [✓]":"➢ Es administrador: [X]"}\n${k?"➢ Usuario premium: Si":"➢ Usuario premium: No"} \n${o?"➢ Registrado: [✓]":"➢ Registrado: [X]"} ${o?`\n➢ Nombre registrado: ${s}\n➢ Edad: ${m}\n➢ Fecha de registro: ${i}`:""}${c?`\n➢ Porcentaje gay: ${c}`:""}\n➢ Límites restantes: ${b+r+u}\n- Juegos = ${b}\n- Descargas = ${r}\n- Otros = ${u}\n`,`➢ Pais: ${n} \n➢ clave de pais: ${e} \n➢ Origen del número: ${k||"No encontrado u.u"} ${o?"\n➢ Número valido: [✓]":"\n➢ Número valido: [X]"} ${s?"\n➢ Dispositivo mobil: [✓]":"\n➢ Dispositivo mobil: [X]"} \n➢ Operadora: ${m} \n➢ Tipo de linea: ${s} \n➢ Formato local: ${i} \n➢ Formato internacional: ${c} \n➢ Código de pais: ${b}`],

Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "", z = "") => ["_Obteniendo información..._",`*~》INFORMACIÓN《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(activo)_\n➪ *Dueño actual* : _${author.name}_\n➪ *Aplicación Node.js iniciado* : _Hace ${a}._\n➪ *Tiempo de ejecucion actual* : _${b}._\n➪ *Apodo en Whatsapp* : _${c}._\n➪ *Total de grupos* :  _${d}_\n➪ *Total de usuarios* : _${e}_\n➪ *Grupos activos* : _${f} / ${g}_\n➪ *Chats personales* : _${h}_\n➪ *Total de chats* : _${i} / ${j}_\n➪ *Hits globales* : _${k}_\n➪ *Version del bot* : _${version}_\n➪ *Own-Wpp-Api* : _https://github.com/adiwajshing/_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Carpeta temporal* : _${l}_\n➪ *Base de datos* : _${m}_\n➪ *Versión NodeJs* : _${n}_\n➪ *Velocidad de procesamiento* : _${o} s_\n➪ *Velocidad de conexion* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Plataforma* : _${r}_\n➪ *Versión* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Arquitectura* : _${u}_\n➪ *Host* : _${v}_\n➪ *Server* : _${w}_\n\n➫ _Consumo de memoria :_\n${x} ${""==y?"":`\n➫  _Uso total de CPU:_\n${y}\n➫ _CPU Core(s) Usado_ ${z}`}\n\n┗─━─「 ✵ 」━─━─┛`],

Pimg: (n = '', k = '') => `\n*\`${n}\`*\n\n> ${k} `,

Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`🔍 Resultado encontrado para: ${n}\n${e?`✍️ Titulo: ${e}\n⏳ Duracion: 1:23 ━━━━●───────── ${k}\n👀 Vistas: ${o}\n📝 Autor: ${s}\n📜 Descripción: ${x}\n⛓️ URL: ${d}\n\n\`Enviando audio, espere...\``:""}`],

Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`✍️ Titulo : ${n}\n⚡ Autor : ${e}\n⏰ Duracion : ${k}\n👀 Vistas : ${o}\n📆 Fecha de subida : ${s}\n📺 Canal : ${m}\n📃 Descripcion : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Puedes usar los siguientes comandos para descargar_${masss}\n\n\`Audio\`\n├  ${Prefijo}ytmp3 ${_}\n├  ${Prefijo}yta ${_}\n└  ${Prefijo}ytabochi ${_}\n\n\`Video\`\n├  ${Prefijo}ytmp4 ${_}\n├  ${Prefijo}ytv ${_}\n└  ${Prefijo}ytvbochi ${_}\n`],

Ureg: (k = "", o = "", s = "", m = "", i = "", c = "") => ["Por favor introduzca su código de registro","[ ! ] Codigo de registro incorrecto","[✓] Su registro fue eliminado de la base de datos correctamente 🗑️",`*[ ! ] Ya estuviste registrado en mi base de datos*\nQuieres volver a registrarte nuevamente?\nUse el comando:  \n\n${Prefijo}unreg <Código de registro>\n`,"Nombre y edad!?",'*[ ! ] Por favor agregue una barra en medio de nombre y edad*\n\n" | "\n',"*[ ! ] En edad solo se aceptan números -.-*","*[ ! ] Bruh el nombre es muy largo ._.*","*[ ! ] Maximo de edad 30 años*","*[ ! ] Minimo de edad 13 años*","REGISTRO","Nombre: ","Edad: ","Puberto(a)","Adolecente","Joven","Adulto(a)","Fecha de registro:","Informacion:",`〘  *REGISTRO* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *Registro de usuario* : @${k}\n╠≽️ *Nombre Registrado* : ${o}\n╠≽️ *Fecha de nacimiento* : ${s}\n╠≽️ *De acuerdo a tu edad eres un(a)* : ${m}\n╠≽️ *Información* : ${i}\n╠≽️ *Número* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Codigo de registro_ : ${c}\n\nᴺᵒ ᵒˡᵛᶦᵈᵉ ᵍᵘᵃʳᵈᵃʳ ᵒ ᶜᵒᵖᶦᵃʳ ˢᵘ ᶜᵒ́ᵈᶦᵍᵒ ᵈᵉ ʳᵉᵍᶦˢᵗʳᵒ`],

Bscp: () => [`*🛑 Antes de continuar con su lectura, tenga en cuenta los siguientes requisitos:*\n- _Tener WhatsApp oficial en su dispositivo_\n- _Tener 200MBS de almacenamiento libre en su dispositivo_\n- _Tener instalado Termux.apk_\n- _Tener una buena conexión a internet_\n- _Por último y mas importante, tener paciencia_ :v\n\n\n*[_>] Aqui se estaran subiendo los tutoriales tanto para la aplicación termux y para máquinas virtuales:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\n> Necesitas mas ayuda?, comunicate con mi creador:`, "Demo Test Tmp"],

Bbot: (a = '', b = "") => ["No podras usar este comando siendo bot [ ! ]", "La opción para ser bot temporal esta desactivado", `*Hola ${a}!, antes de continuar por favor lea esta mini guia para evitar inconvenientes:*\n\n☝️🤓 Información y uso del comando:  ${b}\n\n\`1.- Al solicitar el/ó código de vinculación por primera vez se te generará una clave unica para que puedas usar el comando posteriormente. (no olvides guardar tu clave).\`\n\n\`2.- El comando tiene algunas acciones que puedes utilizar:\`\n- ${b} tu_clave-xxx...\n> _Podras conectarte manualmente si es que el bot se "desconecta"._\n- ${b} tu_clave-xxx... stop\n> _Detendrá el proceso de subbot hasta que lo reactives manualmente con tu clave._\n- ${b} tu_clave-xxx... neocd\n> _Tu sesion actual sera cerrada y podras solicitar un nuevo código para vincular._\n\n\`3.- Cuando te conviertas en un subbot, es recomendable salirse de los grupos donde se encuentra el bot principal, esto es para evitar posibles errores o conflictos con el sistema antispam del bot.\`\n\n\`4.- El propietario y administrador de este bot se reserva el derecho de detener, modificar o deshabilitar los subbot activos o características del sistema sin previo aviso.\`\n\n\`5.- Recuerda usar el código de vinculación que te sera enviados, si pides el código en vano seras marcado por 1 hora, impidiendo temporalmente el acceso al comando hasta que se pueda utilizar nuevamente.\`\n\n~El creador de este bot no se hace responsable de ninguna acción, daño o consecuencia derivada de su uso.~`, "[_>] Solicitar código...", "Deteniendo su servicio subbot...", "Servicio actual eliminado, vuelva a pedir un código de vinculación nuevamente", "[ ! ] Por favor use su clave para continuar...", "[ ! ] Clave incorrecta, vuelva a intentarlo..."],

Bbbot: () => ["Tardó demasiado en escanear uno de los códigos, deteniendo servicio...", '`Use el siguiente código para convertirte en un bot temporal`\n1. Toque en los tres puntos "︙" en la esquina superior derecha en su pantalla de inicio\n2. Seleccione la opción "dispositivos vinculados"\n3. Toque en "vincular un dispositivo"\n4. En la parte de abajo de su pantalla hay una opción llamada "Vincular con el número de teléfono" toque ahí\n\n~[NOTA] El código caducará si no se usa a tiempo!~\n\n_Enviando código de vinculación..._', "Recientemente se ha detectado un error grave en la sesión de tu subbot. No podrás conectarte como bot hasta que el dueño reinicie la base de datos.", "*Conectado correctamente*\n\nAqui tiene su clave unica para que vuelva a conectarse manualmente si se desconecta del servicio de bot temporal:", "Conección restablecida, volviste a ser subbot nuevamente!"],

Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo baneado* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuario* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PUBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restringido* : _${g?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n${a?`\n*Modo Solo-Admins* : _${j?"Activo [✓]":"Inactivo [X]"}_\n\n*Bienvenida* : _${k?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Enlaces* : _${l?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Urls* : _${m?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Extranjeros* : _${n?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos* : _${o?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos 2* : _${p?"Activo [✓]":"Inactivo [X]"}_\n\n*Detección* : _${q?"Activo [✓]":"Inactivo [X]"}_\n\n*Antitraba* : _${r?"Activo [✓]":"Inactivo [X]"}_\n\n*Chat Bot* : _${s?"Activo [✓]":"Inactivo [X]"}_`:""}\n`,

Stks: (a = "") => ["*[ ! ] Máxima duración de vídeo son 8 segundos!*", `*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+a}*\n_NOTA : duracion de video 1 a 8 segundos máximo_ ✓`, "[ ! ] Url inválido, prueba con otro ;3"],

Stke: (a = "") => ["Responda un sticker del chat actual...", `Envie ó Responda un sticker con el comando ${Prefijo+a}`, "Consejo, elimina tu sticker para todos ;v", "[ ! ] Responda un sticker para obtener los metadatos", "[ ! ] Responda un sticker para asignarle un precio falso :p", "Responda un sticker para editar el EXIF a tu manera"],

Bblst: (a = '') => ["Actualmente no hay subbots activos...", "*Lista de números que se hicieron subbots*\n~Puede que algunos números esten inactivos!~\n", `\n*🐝 Bot:* wa.me/${a}`],

Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Invocando a los integrantes del grupo* :\n${n}\n\n*~> Invocador* : _@${e}_\n*~> Mensaje* : _${k||"No hay :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ ᵉˡ ᑫᵘᵉ ˡᵒ ˡᵉᵃ ⁷ʷ⁷"}`],

Jtgy: (n = "", k = "") => ["su porcentaje de gay es ", `@${n} es ${k} gay`, "*[ ! ] Limite de gay superado [ ! ]*"],

Clgs: (n = "", k = "") => [`*[ ! ] Use el formato correcto!* :\n\n🖼️ ~Para logos con texto continuo~\n[1]  ${Prefijo+n} (efecto) (texto...), _Ejemplo de uso:_\n\n${Prefijo+n} space NeKosmic\n\n🖼️ ~Para logos con texto separados por una linea vertical~\n[2]  ${Prefijo+n} (efecto) (texto1)|(texto2), _Ejemplo de uso:_\n\n${Prefijo+n} Pornhub-Style-Logo Fap|Not\n\n🎨 Que logo desea crear?, aqui tiene una lista de efectos:\n\n${k}`, `[ ! ] El efecto *${n}* no se encuentra en la lista...`],

Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => [`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Autor: ${n}` : ""} ${e ? `\n🤳 Usuario: ${e}` : ""} ${k ? `\n📝 Descripción: ${k}` : ""} ${o ? `\n💕 Me gusta: ${o}` : ""} ${m ? `\n🎭 Comentarios: ${m}` : ""} ${d ? `\n🔄 Compartido: ${d}` : ""} ${z ? `\n👀 Vistas: ${z}` : ""}`],

Tozg: (a = "") => [`*[ ! ] Responda a un sticker usando el comando:*\n\n${Prefijo + a}`, `Convertido a ${a ? "video" : "imagen"} correctamente ✓`],

UpBot: (n = '', k = '') => `*[ ! ] Por favor especifique el nombre del archivo que será actualizado.*\n_Aquí tiene una lista de posibles archivos que pueden ser actualizados con sus respectivos ejemplos de uso:_\n\n- ${n}\n\n> Si desea hacer una actualización completa use el comando:\n\n${Prefijo + k} ++\n`,

Uact: (n = "", e = "", o = "") => ["*A que participante desea convertirlo en administrador?*", `Ejemplo de uso:\n\n${Prefijo+n} @51995...\n`, "A quien desea banear?", "[ ! ] Por favor etiquete al usuario que desea banear", `Usuario baneado, ${n} ya no podra usar al bot [ ! ]`, "*A que administrador desea quitarle su puesto?*", "A quien desea desbanear?", `Usuario desbaneado, ${n} puede volver a usar al bot [✓]`, `Por favor etiquete o mencioné a alguien!\n\nEjemplo de uso:\n${Prefijo+n} @${e}`, `*${n}* dejó de ser premium`, "Por favor indique el número de dias", `Solo números!\n\nEjemplo de uso:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maximo 7 dias", `*[ USUARIO PREMIUM ]*\n🔖 *Nombre:* ${n}\n📆 *Tiempo:* ${e} dia(s)\n📉 *Restante:* ${o}MS`, "[ ! ] Se acabó tu tiempo premium!\n_Espero que lo hayas disfrutado :3_\n"],

Gadd: (a = "") => [`[ ! ] Indique el número completo de un usuario de WhatsApp que desea agregar al grupo, Ejemplo de uso:\n\n${Prefijo+a} +51999....`, `wa.me/${a} te esta invitando a su grupo de WhatsApp!`, `*[ ! ] Error, no se pudo añadir al número @${a} al grupo*\n\n_Por favor enviale un enlace de invitación manualmente: wa.me/${a}_\n`],

Uban: () => ["Me odias? :,c", "A que usuario desea eliminar!?\nPor favor etiqueta a uno"],

Uwrn: (m = '', d = '', z = '') => [`Se redujo la cantidad de advertencias al usuario ${m}\n\n${d} => ${z}\n`, `> Se ha dado la primera advertencia al usuario ${m}. Si acumula más de tres advertencias, será eliminado del grupo.`],

Wkpd: (n = "", k = "") => ["[ ! ] Sin resultados para su búsqueda ;-;", `|| *WIKIPEDIA* ||\n_~> Resultados para : ${n}_\n\n${k}`],

Dytv: (n = '', k = "") => `Titulo: ${n}\nTamaño: ${k}\nExtencion: .mp4`,

Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`*[ > ] Resultados en Youtube para:* _${a}_\n\n`, `🔖 Titulo: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Tipo: ${d}\n🖼️ Miniatura: ${e}\n⌚ Duracion: ${f}\n📜 Descripción: ${g}\n📆 Fecha de subida: ${h}\n👀 Vistas: ${i}\n||\n⚡Autor: ${j}\n📺 Canal: ${k}\n\n*——————————*\n\n`]

};