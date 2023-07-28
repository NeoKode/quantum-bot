import fs from 'fs-extra';
const { readJsonSync, readJsonSync } = fs
const { Prefijo, NombreDelBot, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "es",
Habla: () => "Idioma Español",
Start: () => ["Ejecutando el Bot mas shidori tercer mundista.\nComenzando ejecucion del script...", "\n[!] Código finalizado:", "Iniciando la creación y lectura inicial de la base de datos"],
Conn: () => ["Conectando...", "Motivo de desconexión:", "Se agotó el tiempo de conexión, reconectando...", "Se requiere reinicio, reiniciando...", "Dispositivo cerró sesión, por favor escanee nuevamente y ejecute.", "Conexión reemplazada, se abrió una nueva sesión, por favor cierre la sesión actual primero.", "Conexión perdida con el servidor, reconectando...", "Conexión cerrada, reconectando...", "Archivo de sesión incorrecto, por favor elimina la sesión y escanea nuevamente", "Conectado ✓"],
Call: (n = "", k = "") => `\n*[ ! ] ${n} Seras bloqueado*\n_Razon : por realizar una ${k?"videollamada":"llamada"} a este numero sin autorizacion!_\n`,
GpUp: (a = "") => ["🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵃʳ ᵃᵗᵉⁿᵗᵒˢ ᵃ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ʳᵉᵗʳᵃˢᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASUNTO DEL GRUPO CAMBIADO ]* 🤳\n\nAsunto nuevo: _${a}_\n`],
RestriN: () => "[ ! ] No se pudo eliminar al participante nuevo, por favor active el modo restringido!",
AlertList: () => "[ ! ] Borre los números que inicien con   '1'   de FakeList en ./config.json...!",
WlcAdd: (n = "", e = "", k = "", o = "") => `⚡ *Bienvenid@ @${n} a este grandioso grupo* ${e}\n📆 *Fecha de ingreso | ${k}*\n🍷 _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n📜 *Normas del grupo actualmente :* \n${masss}\n${o}`,
WlcRemove: (n = "", k = "") => `\`\`\`[!] C fue alv : @${n}\`\`\`\n_- Fecha de salida | ${k}_`,
WlcPromot: (m = "", d = "", z = "") => ["Un administrador", `*Felicidades @${m}!, @${z} te acaba de dar un gran poder, ahora eres admin del grupo* : _${d}_\n`, `~Ahora tengo el poder absoluto y me la pelan!~\n\n*Digo..., _Muchas gracias a @${m} por darme administración intentaré dar lo mejor de mi para este grupo!!!_ :D*`],
WlcDemot: (m = "", d = "", z = "") => ["El administrador", `*@${z} acaba de degradar a @${m} ya no es administrador del grupo* : _${d}_`, "Shale, ya no soy administrador unu"],
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
Proces: (n = "", k = "") => [`_Procesando, ${n} por favor espere..._`, `_Buscando, ${k} por favor espere..._`],
Error: () => ["[ ! ] Error, vuelva a intentarlo mas tarde...", "[ ! ] Ocurrio un error inesperado u.u [ ! ]"],
Antprv: (a = "") => ["El modo anti privado esta activo, por favor evite usar este chat ;)", "[ ! ] Ultima advertencia, no hablar al bot por privado!", `*[X] El chat por privado esta prohibido [X]*\nPuedes contactar con uno de mis dueños si necesita mas información:\n\n${a}\n\n_Adios..._`],
Antnlc: (a = "") => ["[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo", "*[ ! ] Enlace detectado [ ! ]*\n\n_Por suerte no soy acmin, asi que no puedo hacer nada unu_", `*[ ! ] Enlace detectado [ ! ]*\n_Ahora si k_gaste @${a} Adios..._\n`],
Antgll: () => ["Acabas de etiquetar a todos los participantes de este grupo, no soy administrador asi que no puedo hacer nada :0", "La acción de etiquetar a todos esta prohibido en este grupo, adiu!"],
Antlnk: (a = "") => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Por suerte no soy admin, asi que no puedo hacer nada :v_"}`,
Antrb: (n = "", k = "") => [`El administrador @${n} acaba de enviar un texto que contiene muchos caracteres -.-!`,`*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]* ${n?"":`${saltos}\nNo soy administrador, no puedo hacer nada mas... :/`}`,`Marcar el chat como leido ✓\n${saltos}\n=> El número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en dispositivos móviles`],
Binf: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = "", r = "", s = "", t = "", u = "", v = "", w = "", x = "") => ["_Obteniendo información..._",`*~》INFORMACIÓN《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(activo)_\n➪ *Dueño actual* : _${author.name}_\n➪ *Tiempo de ejecucion* : _${a}._\n➪ *Apodo en Whatsapp* : _${b}._\n➪ *Total de grupos* :  _${c}_\n➪ *Total de usuarios* : _${d}_\n➪ *Grupos activos* : _${e} / ${f}_\n➪ *Chats personales* : _${g}_\n➪ *Total de chats* : _${h} / ${i}_\n➪ *Hits globales* : _${j}_\n➪ *Version del bot* : _${version}_\n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Carpeta temporal* : _${k}_\n➪ *Base de datos* : _${l}_\n➪ *Versión NodeJs* : _${m}_\n➪ *Velocidad de procesamiento* : _${n} s_\n➪ *Velocidad de conexion* : _${o} ms_\n➪ *RAM:* _${p}_\n➪ *Plataforma* : _${q}_\n➪ *Versión* : _${r}_\n➪ *Base OS* : _${s}_\n➪ *Arquitectura* : _${t}_\n➪ *Host* : _${u}_\n\n➫ _Consumo de memoria :_\n${v} ${""==w?"":`\n➫  _Uso total de CPU:_\n${w}\n➫ _CPU Core(s) Usado_ ${x}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] Máxima duración de vídeo son 8 segundos!*", `*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+a}*\n_NOTA : duracion de video 1 a 8 segundos máximo_ ✓`, "[ ! ] Url inválido, prueba con otro ;3"],
AiChat: () => ["No hay sistema!", "Por favor, sea mas específico en su mensaje", "Y el mensaje?"],
Dytv: (n = "", k = "") => [`Que video desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use un link de un video de YouTube_\n", "[ ! ] Tu wea pesa demasiado, sorry mi king no podre enviarlo :v", `Titulo: ${n}\nTamaño: ${k}\nExtencion: .mp4`],
Dyta: (a = "") => [`Que audio desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n", "[ ! ] El audio pesa demasiado, lo siento no podre enviarlo..."],
Dpl2: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", _ = "") => [`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] Sin resultados, vuelva a intentarlo...",`✍️ Titulo : ${n}\n⚡ Autor : ${e}\n⏰ Duracion : ${k}\n👀 Vistas : ${o}\n📆 Fecha de subida : ${s}\n📺 Canal : ${m}\n📃 Descripcion : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Puedes usar los siguientes comandos para descargar_${masss}\n\n┌ Audio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Video -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
	Dyau: (n = "", e = "", k = "", o = "", s = "", x = "", d = "") => [`Que audio desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+n} mtc s3rl`, `🔍 Resultado encontrado para: ${n}\n${e?`✍️ Titulo: ${e}\n⏳ Duracion: 1:23 ━━━━●───────── ${k}\n👀 Vistas: ${o}\n📝 Autor: ${s}\n📜 Descripción: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Enviando audio, espere...\`\`\``:""}`],
	GpOpt: (n = "", k = "") => [`Se ${n ? 'activó' : 'desactivó'} ${k} para este grupo`, "Aqui tiene la lista de opciones :3", "Opcion", "Descripción:", "Comando:"],
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
Menu: (n = "", k = "") => ["_Cargando menu..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
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
║├  ${Prefijo}aichat
║╰—————————
╚══════════
╔「 _ADMINS :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║╰—————————
╚══════════
╔「 _ALEATORIO :_ 」
║╭—————————
║├  ${Prefijo}sugerir 
║├  ${Prefijo}simi
║╰—————————
╚══════════

Muy pronto mas funciones...`],
Boes: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = "", r = "", s = "", t = "") => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo baneado* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuario* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PUBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restringido* : _${g?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n${a?`\n*Modo Solo-Admins* : _${j?"Activo [✓]":"Inactivo [X]"}_\n\n*Bienvenida* : _${k?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Enlaces* : _${l?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Urls* : _${m?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Extranjeros* : _${n?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos* : _${o?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos 2* : _${p?"Activo [✓]":"Inactivo [X]"}_\n\n*Detección* : _${q?"Activo [✓]":"Inactivo [X]"}_\n\n*Antitraba* : _${r?"Activo [✓]":"Inactivo [X]"}_\n\n*Chat Bot* : _${s?"Activo [✓]":"Inactivo [X]"}_`:""}\n`
};