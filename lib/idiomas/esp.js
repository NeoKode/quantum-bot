import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "es",
Habla: () => "Idioma Español",
Start: () => ["Ejecutando el Bot mas shidori tercer mundista.\nComenzando ejecucion del script...", "\n[!] Código finalizado:", "Iniciando la creación y lectura inicial de la base de datos"],
Conn: () => ["Conectando...", "Motivo de desconexión:", "Se agotó el tiempo de conexión, reconectando...", "Se requiere reinicio, reiniciando...", "Dispositivo cerró sesión, por favor escanee nuevamente y ejecute.", "Conexión reemplazada, se abrió una nueva sesión, por favor cierre la sesión actual primero.", "Conexión perdida con el servidor, reconectando...", "Conexión cerrada, reconectando...", "Archivo de sesión incorrecto, por favor elimina la sesión y escanea nuevamente", "Conectado ✓"],
Call: (n = '', k = "") => `\n*[ ! ] ${n} Seras bloqueado*\n_Razon : por realizar una ${k?"videollamada":"llamada"} a este numero sin autorizacion!_\n`,
GpUp: (a = "") => ["🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵃʳ ᵃᵗᵉⁿᵗᵒˢ ᵃ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ʳᵉᵗʳᵃˢᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASUNTO DEL GRUPO CAMBIADO ]* 🤳\n\nAsunto nuevo: _${a}_\n`],
RestriN: () => "[ ! ] No se pudo eliminar al participante nuevo, por favor active el modo restringido!",
AlertList: () => "[ ! ] Borre los números que inicien con   '1'   de FakeList en ./config.json...!",
WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Bienvenid@ @${n} a este grandioso grupo* ${e}\n📆 *Fecha de ingreso | ${k}*\n🍷 _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n📜 *Normas del grupo actualmente :* \n${masss}\n${o}`,
WlcRemove: (n = '', k = "") => `\`\`\`[!] C fue alv : @${n}\`\`\`\n_- Fecha de salida | ${k}_`,
WlcPromot: (m = '', d = '', z = "") => [`*Felicidades @${m}!, ${z || 'Un administrador'} te acaba de dar un gran poder, ahora eres admin del grupo* : _${d}_\n`, `~Ahora tengo el poder absoluto y me la pelan!~\n\n*Digo..., _Muchas gracias a ${m || 'un administrador'} por darme administración intentaré dar lo mejor de mi para este grupo!!!_ :D*`],
WlcDemot: (m = '', d = '', z = "") => [`*${z || 'Un administrador'} acaba de degradar a @${m} ya no es administrador del grupo* : _${d}_`, "Shale, ya no soy administrador unu"],
Cprint: () => ["EJECUTANDO","MENSAJE","Por","De","Chat","grupo:","Privado:","Fecha"],
MsjRowner: () => "*[ ! ]* Este comando solo puede ser usado *desde el bot principal*!",
MsjOwner: () => "*[ ! ]* Este comando solo puede ser utilizado por el *propietario del bot*!",
MsjMods: () => "*[ ! ]* Este comando solo puede ser utilizado por un *moderador*!",
MsjPremium: () => "*[ ! ]* Esta solicitud es solo para usuarios *premium*!",
MsjGroup: () => "*[ ! ]* Este comando solo se puede usar en *grupos*!",
MsjPrivate: () => "*[ ! ]* Este comando solo se puede usar por *chat privado*!",
MsjAdmin: () => "*[ ! ]* Este comando solo puede ser usado por los *administradores del grupo*!",
MsjBotAdmin: () => "*[ ! ]* El bot necesita *ser administrador* para usar este comando!",
MsjUnreg: () => `*[ ! ]* Regístrese para comenzar a usar esta función\n\nEjemplo: ${Prefijo}rg nombre|edad\n\n${Prefijo}rg Juanito|15\n`,
MsjRestrict: () => "[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!",
SpmrCmd: (a = "") => ["_Espere unos segundos antes de usar otro comando..._ ✓", `[ ! ] ${a} Por favor no sature al bot ;-;`],
SpmrCnsl: () => "[SPAMER CMD] Comando :",
Proces: (n = '', k = "") => [`_Procesando, ${n} por favor espere..._`, `_Buscando, ${k} por favor espere..._`],
Error: () => ["[ ! ] Error, vuelva a intentarlo mas tarde...", "[ ! ] Ocurrio un error inesperado u.u [ ! ]"],
Antprv: (a = "") => ["El modo anti privado esta activo, por favor evite usar este chat ;)", "[ ! ] Ultima advertencia, no hablar al bot por privado!", `*[X] El chat por privado esta prohibido [X]*\nPuedes contactar con uno de mis dueños si necesita mas información:\n\n${a}\n\n_Adios..._`],
Antnlc: (a = "") => ["[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo", "*[ ! ] Enlace detectado [ ! ]*\n\n_Por suerte no soy acmin, asi que no puedo hacer nada unu_", `*[ ! ] Enlace detectado [ ! ]*\n_Ahora si k_gaste @${a} Adios..._\n`],
Antgll: () => ["Acabas de etiquetar a todos los participantes de este grupo, no soy administrador asi que no puedo hacer nada :0", "La acción de etiquetar a todos esta prohibido en este grupo, adiu!"],
Antlnk: (a = "") => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Por suerte no soy admin, asi que no puedo hacer nada :v_"}`,
Antrb: (n = '', k = "") => [`El administrador @${n} acaba de enviar un texto que contiene muchos caracteres -.-!`,`*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]* ${n?"":`${saltos}\nNo soy administrador, no puedo hacer nada mas... :/`}`,`Marcar el chat como leido ✓\n${saltos}\n=> El número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en dispositivos móviles`],
Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "") => ["_Obteniendo información..._",`*~》INFORMACIÓN《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(activo)_\n➪ *Dueño actual* : _${author.name}_\n➪ *Aplicación Node.js iniciado* : _Hace ${a}._\n➪ *Tiempo de ejecucion actual* : _${b}._\n➪ *Apodo en Whatsapp* : _${c}._\n➪ *Total de grupos* :  _${d}_\n➪ *Total de usuarios* : _${e}_\n➪ *Grupos activos* : _${f} / ${g}_\n➪ *Chats personales* : _${h}_\n➪ *Total de chats* : _${i} / ${j}_\n➪ *Hits globales* : _${k}_\n➪ *Version del bot* : _${version}_\n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Carpeta temporal* : _${l}_\n➪ *Base de datos* : _${m}_\n➪ *Versión NodeJs* : _${n}_\n➪ *Velocidad de procesamiento* : _${o} s_\n➪ *Velocidad de conexion* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Plataforma* : _${r}_\n➪ *Versión* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Arquitectura* : _${u}_\n➪ *Host* : _${v}_\n\n➫ _Consumo de memoria :_\n${w} ${""==x?"":`\n➫  _Uso total de CPU:_\n${x}\n➫ _CPU Core(s) Usado_ ${y}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] Máxima duración de vídeo son 8 segundos!*", `*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+a}*\n_NOTA : duracion de video 1 a 8 segundos máximo_ ✓`, "[ ! ] Url inválido, prueba con otro ;3"],
AiChat: () => ["No hay sistema!", "Por favor, sea mas específico en su mensaje", "Y el mensaje?"],
Dytv: (n = '', k = "") => [`Que video desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use un link de un video de YouTube_\n", "[ ! ] Tu wea pesa demasiado, sorry mi king no podre enviarlo :v", `Titulo: ${n}\nTamaño: ${k}\nExtencion: .mp4`],
Dyta: (a = "") => [`Que audio desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n", "[ ! ] El audio pesa demasiado, lo siento no podre enviarlo..."],
Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] Sin resultados, vuelva a intentarlo...",`✍️ Titulo : ${n}\n⚡ Autor : ${e}\n⏰ Duracion : ${k}\n👀 Vistas : ${o}\n📆 Fecha de subida : ${s}\n📺 Canal : ${m}\n📃 Descripcion : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Puedes usar los siguientes comandos para descargar_${masss}\n\n┌ Audio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Video -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
	Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`Que audio desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+n} mtc s3rl`, `🔍 Resultado encontrado para: ${n}\n${e?`✍️ Titulo: ${e}\n⏳ Duracion: 1:23 ━━━━●───────── ${k}\n👀 Vistas: ${o}\n📝 Autor: ${s}\n📜 Descripción: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Enviando audio, espere...\`\`\``:""}`],
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
Menl: (a = "") => [`Hola ${a}!, 👋`,
[{
info: `*[ Menu-Completo ♻️ ]*
≡ ~ᴸᶦˢᵗᵃ ᶜᵒᵐᵖˡᵉᵗᵃ ᵈᵉ ᵗᵒᵈᵒˢ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ~
${Prefijo}menucompleto`
},
{
info: `...`
}]
],
Menu: (n = '', k = "") => ["_Cargando menu..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
║❂ Tiempo activo: ${n}
║❂ Version del bot: ${version}
║❂ Dueño del bot: ${author.name}
║❂ Prefijo único: 「  ${Prefijo}  」
║❂ Cliente: ${k}
╚══════════
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
~|-------------------------|~
*[_>] _COMANDOS_ ☷*
~|-------------------------|~

╔「 _CONVERSORES :_ 」
║╭—————————
║├  ${Prefijo}sticker
║╰—————————
╚══════════
╔「 _DESCARGADOR :_ 」
║╭—————————
║├  ${Prefijo}audio
║├  ${Prefijo}play2
║├  ${Prefijo}ytmp4
║├  ${Prefijo}ytmp3
║├  ${Prefijo}ytv
║├  ${Prefijo}yta
║├  ${Prefijo}ytvbochi
║├  ${Prefijo}ytabochi
║╰—————————
╚══════════
╔「 _HERRAMIENTAS :_ 」
║╭—————————
║├  ${Prefijo}robar
║├  ${Prefijo}aichat
║├  ${Prefijo}rentbot
║╰—————————
╚══════════
╔「 _ADMINS :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║╰—————————
╚══════════
╔「 _DUEÑO :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║├  ${Prefijo}bot
║╰—————————
╚══════════
╔「 _ALEATORIO :_ 」
║╭—————————
║├  ${Prefijo}sugerir 
║├  ${Prefijo}simi
║├  ${Prefijo}join
║├  ${Prefijo}listbots
║╰—————————
╚══════════

Muy pronto mas funciones...`],
Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo baneado* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuario* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PUBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restringido* : _${g?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n${a?`\n*Modo Solo-Admins* : _${j?"Activo [✓]":"Inactivo [X]"}_\n\n*Bienvenida* : _${k?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Enlaces* : _${l?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Urls* : _${m?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Extranjeros* : _${n?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos* : _${o?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos 2* : _${p?"Activo [✓]":"Inactivo [X]"}_\n\n*Detección* : _${q?"Activo [✓]":"Inactivo [X]"}_\n\n*Antitraba* : _${r?"Activo [✓]":"Inactivo [X]"}_\n\n*Chat Bot* : _${s?"Activo [✓]":"Inactivo [X]"}_`:""}\n`,
Stke: (a = "") => ["Responda un sticker del chat actual...", `Envie ó Responda un sticker con el comando ${Prefijo+a}`, "Consejo, elimina tu sticker para todos ;v", "[ ! ] Responda un sticker para obtener los metadatos", "[ ! ] Responda un sticker para asignarle un precio falso :p", "Responda un sticker para editar el EXIF a tu manera"],
Bunt: (n = '', k = "") => ["Y el enlace de WhatsApp?", "[ ! ] Error, El enlace no funciona o es inválido", `[ ! ] La cantidad mínima para unirme al grupo debe ser de *${MinimoDeUsuarios}* participantes`, `${NombreDelBot} se unió al grupo ${n} con éxito \n`],
Bbot: (a = '', b = "") => ["[ ! ] No puedes usar este comando siendo bot [ ! ]", "La opción para ser bot temporal esta desactivado", `*Hola ${a}!, antes de continuar por favor lea esta mini guia para evitar inconvenientes:*\n\n☝️🤓 Información y uso del comando:  ${b}\n\n1.- Al solicitar el código QR por primera vez se te generará una clave unica para que puedas usar el comando posteriormente, (no olvides guardar tu clave).\n\n2.- El comando tiene algunas acciones que puedes utilizar:\n┬[  ${b} tu_clave-xxx...\n└‒> _Podras conectarte manualmente si es que el bot se "desconecta"._\n┬[  ${b} tu_clave-xxx... stop\n└‒> _Detendrá el proceso de subbot hasta que lo reactives manualmente con tu clave._\n┬[  ${b} tu_clave-xxx... neoqr\n└‒> _Tu sesion actual sera cerrada y podras solicitar un nuevo código QR para escanear._\n\n3.- Cuando te conviertas en un subbot, es recomendable salirse de los grupos donde se encuentra el bot principal, esto es para evitar posibles errores o conflictos con el sistema antispam del bot.\n\n4.- El propietario y administrador de este bot se reserva el derecho de detener, modificar o deshabilitar los subbot activos o características del sistema sin previo aviso.\n\n5.- Recuerda escanear uno de los códigos QR que te seran enviados, si pides el código QR en vano seras marcado por 1 hora, impidiendo temporalmente el acceso al comando hasta que se pueda utilizar nuevamente.\n\n~El creador de este bot no se hace responsable de ninguna acción, daño o consecuencia derivada de su uso.~`, "[_>] Solicitar código QR...", "Deteniendo su servicio subbot...", "Generando nuevo código QR, no olvides escanearlo a tiempo!", "[ ! ] Por favor use su clave para continuar...", "[ ! ] Clave incorrecta, vuelva a intentarlo..."],
Bbbot: () => ["Tardó demasiado en escanear uno de los código QR, deteniendo servicio...", 'Escanea este QR para convertirte en un bot temporal\n1. Toque en los tres puntos "︙" en la esquina superior derecha\n2. Seleccione la opción "dispositivos vinculado"\n3. Toque en "vincular un dispositivo"\n4. Escanea este QR\n\n_[NOTA] Este código QR caducará si no se escanea a tiempo!_', "Recientemente se ha detectado una sesión cerrada de tu subbot. No podrás conectarte como bot hasta que el dueño reinicie la base de datos.", "*Conectado correctamente*\n\nAqui tiene su clave unica para que vuelva a conectarse manualmente si se desconecta del servicio de bot temporal:", "Conección restablecida, volviste a ser subbot nuevamente!"]
};