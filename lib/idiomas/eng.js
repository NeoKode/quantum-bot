import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: "en",

Domina: "English language",

Start: () => ["Running the most Kawaii third world Bot.\nStarting script execution...", "\n[!] Code finished:"],

Conn: (a = '') => ["Connecting...", "Reason for disconnection:", "Connection timed out, reconnecting...", "Restart required, restarting...", "Device logged out, please link again and run.", "Connection replaced, a new session was opened, please log out the current session first.", "Connection lost with the server, reconnecting...", "Connection closed, reconnecting...", "Incorrect session file, please delete the current session and link again", "Connected ✓", "\n\n[_>] If you are going to use the pairing method, please enter the number that will become the bot, make sure to enter the full WhatsApp number along with its country code.\nExample: +1xxx...\n", `\nPairing code for the number "+${a}":`],

Call: (n = '', k = "") => `\n*[ ! ] ${n} You will be blocked*\n_Reason: for making a ${k ? "video call" : "call"} to this number without authorization!_\n`,

GpUp: (n = '', k = '') => ["🔒 *[ CLOSED GROUP ]* 🔒\n_ᴺᵒʷ ᵃˡˡ ᵃˡˡ ᵃᵈᵐᶦⁿˢ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵃᵍᵉˢ_", "🔓 *[ OPEN GROUP ]* 🔓\n_ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵃᵍᵉˢ_", "🧰 *[SETTINGS MADE ON IN GROUP]* ⚙️\n_ᴺᵒʷ ᵒⁿˡʸ ᵃᵈᵐᶦⁿˢ ᶜᵃⁿ ᵉᵈᶦᵗ ᵍʳᵒᵘᵖ ˢᵉᵗᵗᶦⁿᵍˢ_", "🧰 *[SETTINGS MADE ON IN GROUP]* ⚙️\n_ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶜᵃⁿ ᵉᵈᶦᵗ ᵍʳᵒᵘᵖ ˢᵉᵗᵗᶦⁿᵍˢ_\n~ᴾˡᵉᵃˢᵉ ᵇᵉ ᵃʷᵃʳᵉ ᵒᶠ ᵖᵉᵒᵖˡᵉ ʷᶦᵗʰ ᵐᵉⁿᵗᵃˡ ʳᵉᵗᵃʳᵈᵃᵗᶦᵒⁿ~", `✍️ *[ GROUP SUBJECT CHANGED ]* 🤳\n\n- Main issue was: _${n}_\n\n- New name: _${k}_\n`],

RestriN: () => "[!] Failed to remove the new participant, please enable restricted mode!",

AlertList: () => "[!] Delete numbers starting with  '1'  from Blacklist in ./config.json...!",

WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Welcome @${n} to this amazing group* ${e}\n📆 *Join Date: ${k}*\n🍷 _*I hope you enjoy your stay here, don't forget to respect the participants and the rules*_ ;)\n\n📜 *Group rules currently:* \n${masss}\n${o}`,

WlcRemove: (m = '', d = '', z = '') => `[!] Left: @${m} • ${d}\n- Date of departure |  ${z}`,

WlcPromot: (m = '', d = '', z = "") => [`*Congratulations @${m}!, ${z || 'An administrator'} has just given you great power, now you are an admin of the group*: _${d}_\n`, `~Now I have absolute power and I don't care!~\n\n*I mean..., _Thank you very much to ${m || 'an administrator'} for giving me administration, I will try my best for this group!!!_ :D*`],

WlcDemot: (m = '', d = '', z = "") => [`*${z || 'An administrator'} has just demoted @${m} and is no longer an administrator of the group*: _${d}_`, "How sad, I'm no longer an administrator unu"],

Cprint: () => ["RUNNING", "MESSAGE", "By", "From", "Chat", "group:", "Private:", "Date"],

MsjRowner: () => "*[ ! ]* This command can only be used *from the main bot*!",

MsjOwner: () => "*[ ! ]* This command can only be used by the *bot owner*!",

MsjMods: () => "*[ ! ]* This command can only be used by a *moderator*!",

MsjPremium: () => "*[ ! ]* This request is only for *premium users*!",

MsjGroup: () => "*[ ! ]* This command can only be used in *groups*!",

MsjPrivate: () => "*[ ! ]* This command can only be used in *private chat*!",

MsjAdmin: () => "*[ ! ]* This command can only be used by *group administrators*!",

MsjBotAdmin: () => "*[ ! ]* The bot needs to be *an administrator* to use this command!",

MsjRestrict: () => "[ ! ] To perform deletion actions, my owner needs to enable restricted mode!",

SpmrCmd: (a = "") => ["_Wait a few seconds before using another command..._ ✓", `[ ! ] ${a} Please do not spam the bot ;-;`],

SpmrCnsl: () => "[SPAMMER CMD] Command:",

Error: () => ["[ ! ] Error, please try again later...", "[ ! ] An unexpected error occurred u.u [ ! ]"],

Antnlc: (a = "") => ["[ ! ] My crazy you just sent a link, the good thing is that the link detected is from this group owo", "*[ ! ] Link detected [ ! ]*\n\n_Luckily I'm not an admin, so I can't do nothing unu_", `*[ ! ] Link detected [ ! ]*\n_Now if you were worth @${a} Goodbye..._\n`],

Antgll: () => ["You just mentioned all participants in this group, but I'm not an admin so I can't do anything :0", "Tagging everyone action is prohibited in this group, bye!"],

Antlnk: (a = "") => `*[ ! ] Link detected [ ! ]*  ${a ? "" : "\n\n_Luckily I'm not an admin, so I can't do anything :v_"}`,

Antrb: (n = '', k = "") => [`The administrator @${n} has just sent a text that contains too many characters -.-!`, `*[ ! ] A message containing too many characters was detected [ ! ]* ${n ? "" : `${saltos}\nI am not an administrator, I cannot do anything more... :/`}`, `Mark the chat as read ✓\n${saltos}\n=> Number: wa.me/${n}\n=> Alias: ${k}\n[ ! ] Just sent a text that contains too many characters that may cause issues on mobile devices`],

AiChat: (n = "", k = "") => ["Please, be more specific in your message.", "And the message?", `Successfully ${n ? "activated" : "deactivated"} "${k}".`],

Nime: (n="", k="") => ["Use a screenshot or image of an anime scene", `${n ? 'If the result is not what you expected, try using a good resolution image of an "anime" scene!  ' : 'I cannot assure you that the result is 100% accurate u.u'}`, `*🔖Title:* _${n || "N/N"}_\n*🎴Episode:* _${k || "N/N"}_\n`],

Vthx: () => "`💻 Social networks 📲`\n\n[ > ] Youtube channel:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Facebook page:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\n> ᵈᵒⁿ'ᵗ ᵃˢᵏ ᶠᵒʳ ᵐᵒⁿᵉʸ⁻ ᵒⁿˡʸ ʷᶦᵗʰ ʸᵒᵘʳ ˢᵘᵖᵖᵒʳᵗ ᴵ ᵃᵐ ʰᵃᵖᵖʸ :³",

Tptv: () => "Please reply or submit a video that does not exceed 59 seconds in length.",

Mlti: (a = '') => `*\`Example of use (available languages):\`*\n\n> Idioma español 🇵🇪\n-  ${a} es\n\n> English language 🇺🇲\n-  ${a} en\n\n> Idioma português 🇧🇷\n-  ${a} pt\n\n> Bahasa Indo 🇮🇩\n-  ${a} id\n\n> deutsche Sprache 🇩🇪\n-  ${a} de\n\n> Auto... 🌎\n-  ${a} auto\n`,

Gbnd: () => ["Chat successfully banned ✓", "Chat successfully unbanned ✓"],

Gemx: (a = "") => `*Example of use:*\n\n${Prefijo+a} 🥺+🥵\n`,

Dfbv: (a = "") => [`*[ ! ] Invalid link*\n_Please use a valid link to a Facebook video_\n\nUsage example: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Error, the link may be invalid or the video might be private, please try again later"],

Wppr: (n = "", k = "") => [`┏━⊱ Wallpaper: ${n}\n┗⊱ Requested by : @${k}`],

Frs: (n="", k="") => `- *Phrase:* _${n}.._\n\n> *Author:* _${k}_\n`,

Fxm3: (m = "", d = "", z ="") => [`*Here is a list of available effects:*\n\n- ${m}\n\nUsage example: ${Prefijo+d} ${z}`, "`[ ! ] Reply to an audio message`\n\n> Maximum duration is 2 minutes"],

GpOpt: (n = '', k = "") => [`Group ${n ? 'enabled' : 'disabled'} ${k} for this group`, "Here's the list of options :3", "Option", "Description:", "Command:"],

GpActn: () => [{
titulo: "[ ⬇️ AUTOMATIC WELCOME ]",
func: [{
action: "[ 🛬 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʷᵉˡᶜᵒᵐᵉ ⁿᵉʷ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶦⁿᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}enable bienvenida`
}, {
action: "[ 🛫 Deactivate ]",
desc: "~ᴺᵉʷ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶦⁿ ᵃ ᵍʳᵒᵘᵖ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʷᵉˡᶜᵒᵐᵉᵈ~",
cmd: `${Prefijo}disable bienvenida`
}]
}, {
titulo: "[ ⬇️ AUTOMATIC FAREWELL ]",
func: [{
action: "[ 👋 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᶦⁿᵈᶦᶜᵃᵗᵉ ᵗʰᵉ ᵈᵉᵖᵃʳᵗᵘʳᵉ ᵒᶠ ᵃ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗ ᶠʳᵒᵐ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}enable despedida`
}, {
action: "[ ✊ Deactivate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ⁿᵒᵗ ᵈᵒ ᵃⁿʸ ᵍᵒᵒᵈᵇʸᵉ ᵃᶜᵗᶦᵒⁿˢ~",
cmd: `${Prefijo}disable despedida`
}]
}, {
titulo: "[ ⬇️ ONLY - ADMINS ]",
func: [{
action: "[ ⭐ Activate ]",
desc: "~ᴺᵒʷ ᵒⁿˡʸ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
cmd: `${Prefijo}enable soloadmins`
}, {
action: "[ ✨ Deactivate ]",
desc: "~ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
cmd: `${Prefijo}disable soloadmins`
}]
}, {
titulo: "[ ⬇️ DETECTION ]",
func: [{
action: "[ 🌕 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵈᵉᵗᵉᶜᵗ ᵃᵈʲᵘˢᵗᵐᵉⁿᵗˢ ᵐᵃᵈᵉ ᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}enable deteccion`
}, {
action: "[ 🌑 Deactivate ]",
desc: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵈᵉᵗᵉᶜᵗ ᵃᵈʲᵘˢᵗᵐᵉⁿᵗˢ ᵐᵃᵈᵉ ᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}disable deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI-WA_LINKS ]",
func: [{
action: "[ 🗡️ Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ˢᵉⁿᵈ ᵂʰᵃᵗˢᴬᵖᵖ ˡᶦⁿᵏˢ ᵗᵒ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}enable antienlaces`
}, {
action: "[ 😴 Deactivate ]",
desc: "~ᴺᵒ ᵃᶜᵗᶦᵒⁿ ʷᶦˡˡ ᵇᵉ ᵗᵃᵏᵉⁿ ʷʰᵉⁿ ᵂʰᵃᵗˢᴬᵖᵖ ˡᶦⁿᵏˢ ᵃʳᵉ ˢᵉⁿᵗ~",
cmd: `${Prefijo}disable antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ᵗᵃᵍ ᵉᵛᵉʳʸᵒⁿᵉ~",
cmd: `${Prefijo}enable antitagall`
}, {
action: "[ 😶 Deactivate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵈᵒ ⁿᵒᵗʰᶦⁿᵍ ʷʰᵉⁿ ᵉᵛᵉʳʸᵒⁿᵉ ᶦˢ ᵗᵃᵍᵍᵉᵈ~",
cmd: `${Prefijo}disable antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵃ ᶜʰᵃᵗᵇᵒᵗ ᶦⁿ ᵃ ᵂʰᵃᵗˢᴬᵖᵖ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}enable chatbot`
}, {
action: "[ 👤 Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᶜʰᵃᵗᵇᵒᵗ ᶦⁿ ᶜᵘʳʳᵉⁿᵗ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}disable chatbot`
}]
}, {
titulo: "[ ⬇️ RESTRICTED MODE ]",
func: [{
action: "[ 🌚 Activated ]",
desc: "~ᴬᶜᵗᶦᵛᵃᵗᵉ ᵗʰᵉ ᶠᵘⁿᶜᵗᶦᵒⁿ ᵗᵒ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶠʳᵒᵐ ᵃ ᵍʳᵒᵘᵖ ⁽ᵃᵗ ʸᵒᵘʳ ᵒʷⁿ ʳᶦˢᵏ⁾~",
cmd: `${Prefijo}enable restringido`
}, {
action: "[ 🌝 Disabled ]",
desc: "~ᴬᶜᵗᶦᵒⁿˢ ᵗᵒ ᵃᵈᵈ ᵃⁿᵈ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᵈᶦˢᵃᵇˡᵉᵈ~",
cmd: `${Prefijo}disable restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵗʰᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ˢᵉⁿᵈ ᵘʳˡˢ~",
cmd: `${Prefijo}enable antiurl`
}, {
action: "[ 😴 Deactivate ]",
desc: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵖᵉʳᶠᵒʳᵐ ᵃⁿʸ ᵃᶜᵗᶦᵒⁿ ʷʰᵉⁿ ᵘʳˡˢ ᵃʳᵉ ˢᵉⁿᵗ~",
cmd: `${Prefijo}disable antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 1 ]",
func: [{
action: "[ 🛡️ Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵗʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ᵁˢ ⁿᵘᵐᵇᵉʳˢ ⁺¹~",
cmd: `${Prefijo}enable antifake1`
}, {
action: "[ ⚰️ Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}disable antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 2 ]",
func: [{
action: "[ 🛡️ Activate ]",
desc: "~ᴾʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ˢᵗʳᵃⁿᵍᵉ ᵒʳ ˢᵘˢᵖᶦᶜᶦᵒᵘˢ ⁿᵘᵐᵇᵉʳˢ ᶦˢ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ~",
cmd: `${Prefijo}enable antifake2`
}, {
action: "[ ⚰️ Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᴬⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}disable antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI-FOREIGNERS ]",
func: [{
action: "[ 🏳️ Activate ]",
desc: "~ᵀʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ⁿᵘᵐᵇᵉʳˢ ᵒᵗʰᵉʳ ᵗʰᵃⁿ ᵗʰᵉ ᵒʷⁿᵉʳ'ˢ ᵖʳᵉᶠᶦˣ ᶦˢ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ~\nᴺᵘᵐᵇᵉʳˢ ˢᵗᵃʳᵗᶦⁿᵍ ʷᶦᵗʰ +" + LocPref + " ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʳᵉᵐᵒᵛᵉᵈ~",
cmd: `${Prefijo}enable antiextranjeros`
}, {
action: "[ 🏴 Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᴬⁿᵗᶦ ᶠᵒʳᵉᶦᵍⁿᵉʳˢ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}disable antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - CRASHED ]",
func: [{
action: "[ 🐸 Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵗʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ᶜʳᵃˢʰ ᵐᵉˢˢᵃᵍᵉˢ ᶦⁿ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}enable antitraba`
}, {
action: "[ 👾 Deactivate ]",
desc: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᶦˢᵃᵇˡᵉᵈ~",
cmd: `${Prefijo}disable antitraba`
}]
}],

Dlig: (a = "") => [`*[ ! ] Invalid link*\n_Please use an Instagram link_\nEg: ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],

Gimg: (a = '') => [`_Search by ${a}_`],

Bunt: (n = '', k = "") => ["[ ! ] Error, WhatsApp link does not work or is invalid", `[ ! ] Keep in mind that the minimum number of group participants must be: *${MinimoDeUsuarios}*, for the bot to work`],

Dmdf: (n = "", e = "", k = "", o = "", m = "", d = "") => ["*[ ! ] Invalid link*\n_Please use a MediaFire link_", `*Name:* ${n}\n*Size:* ${e}\n*Extension:* ${k}\n*Upload Date:* ${o}\n*File Type:* ${m}\n*URL:* ${d}`],

Menl: (n = '', e = '', k = '', o = '') => [`Hello ${n}!, 👋`, "Example of use", `*[ ${n} ]*\n≡ ~${e}~\n${Prefijo + k} ${o}`, `╔══════════\n║╭—————————\n`, `║├  ${n}`, `\n║╰—————————\n╚══════════`],

Menu: (n = '', e = '', k = '', o = "", s = '') => ["_Loading menu..._", `╔I [ \`\`\`${n ? e : NombreDelBot}\`\`\` ]
║❂ Active time: ${k}
║❂ Bot version: ${version}
║❂ Bot owner: ${author.name}
║❂ Unique prefix: 「  ${Prefijo}  」
║❂ Customer: ${o}
╚══════════ ${n ? `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Sub-Bot of ${s}
┗─── ⊹ ⊱♡⊰ ⊹ ───┛` : ''}
${masss}
~|-------------------------|~
*[_>] _COMMANDS_ ☷*
~|-------------------------|~\n`,
`╔「 _${n} :_ 」
║╭—————————\n`,
`║├  ${n}`,
`\n║╰—————————
╚══════════`],

Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ USER PROFILE & INFO]> 🌐\n\n➢ Name: ${n}\n${e?"➢ Is Admin: [✓]":"➢ Is Admin: [X]"}\n${k?"➢ Premium User: Yes":"➢ Premium User: No"} \n${o?"➢ Registered: [✓]":"➢ Registered: [X]"} ${o?`\n➢ Registered Name: ${s}\n➢ Age: ${m}\n➢ Registration Date: ${i}`:""}${c?`\n➢ Gay Percentage: ${c}`:""}\n➢ Remaining Limits: ${b+r+u}\n- Games = ${b}\n- Downloads = ${r}\n- Others = ${u}\n`,`➢ Country: ${n} \n➢ Country Code: ${e} \n➢ Number Origin: ${k||"Not found :("} ${o?"\n➢ Valid Number: [✓]":"\n➢ Valid Number: [X]"} ${s?"\n➢ Mobile Device: [✓]":"\n➢ Mobile Device: [X]"} \n➢ Carrier: ${m} \n➢ Line Type: ${s} \n➢ Local Format: ${i} \n➢ International Format: ${c} \n➢ Country Code: ${b}`],

Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "", z = '') => ["_Getting information..._",`*~》INFORMATION《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(active)_\n➪ *Current owner* : _${author.name}_\n➪ *Node.js application started* : _${a}ago._\n➪ *Execution time* : _${b}._\n➪ *Whatsapp nickname* : _${c}._\n➪ *Total groups* :  _${d}_\n➪ *Total users* : _${e}_\n➪ *Active groups* : _${f} / ${g}_\n➪ *Personal chats* : _${h}_\n➪ *Total chats* : _${i} / ${j}_\n➪ *Global hits* : _${k}_\n➪ *Bot version* : _${version}_\n➪ *Own-Wpp-Api* : _https://github.com/adiwajshing/_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Temporary folder* : _${l}_\n➪ *Database* : _${m}_\n➪ *Node.js version* : _${n}_\n➪ *Processing speed* : _${o} s_\n➪ *Connection speed* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Platform* : _${r}_\n➪ *Version* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Architecture* : _${u}_\n➪ *Host* : _${v}_\n➪ *Server* : _${w}_\n\n➫ _Memory consumption :_\n${x} ${""==y?"":`\n➫  _Total CPU usage:_\n${y}\n➫ _Used CPU Core(s)_ ${z}`}\n\n┗─━─「 ✵ 」━─━─┛`],

Pimg: (n = '', k = '') => `\n*\`${n}\`*\n\n> ${k} `,

Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`🔍 Result found for: ${n}\n${e ? `✍️ Title: ${e}\n⏳ Duration: 1:23 ━━━━●───────── ${k}\n👀 Views: ${o}\n📝 Author: ${s}\n📜 Description: ${x}\n⛓️ URL: ${d}\n\n\`Sending audio, please wait...\`` : ""}`],

Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`✍️ Title: ${n}\n⚡ Author: ${e}\n⏰ Duration: ${k}\n👀 Views: ${o}\n📆 Upload Date: ${s}\n📺 Channel: ${m}\n📃 Description: ${i||"-"}\n🧬 ID: ${c}\n\n🧑‍💻 _You can use the following commands to download_${masss}\n\n\`Audio\`\n├  ${Prefijo}ytmp3 ${_}\n├  ${Prefijo}yta ${_}\n└  ${Prefijo}ytabochi ${_}\n\n\`Video\`\n├  ${Prefijo}ytmp4 ${_}\n├  ${Prefijo}ytv ${_}\n└  ${Prefijo}ytvbochi ${_}\n`],

Ureg: (k = "", o = "", s = "", m = "", i = "", c = "") => ["Please enter your registration code","[ ! ] Incorrect registration code","[✓] Your record was deleted from the database successfully 🗑️",`*[ ! ] You have already been registered in my database*\nDo you want to register again?\nUse the command:\n\n${Prefijo}unreg <Registration code>\n`,"Name and age!?",'*[ ! ] Please add a bar between name and age*\n\n" | "\n',"*[ ! ] In age only numbers are accepted -.-*","*[ ! ] Bruh the name is very long ._.*","*[ ! ] Maximum age 30 years*","*[ ! ] Minimum age 13 years*","REGISTER","Name: ","Age: ","Pubescent","Teenager","Young","Adult","Registration date:","Information:",`〘  *REGISTER* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *User register* : @${k}\n╠≽️ *Registered Name* : ${o}\n╠≽️ *Birthdate* : ${s}\n╠≽️ *According to your age you are a* : ${m}\n╠≽️ *Information* : ${i}\n╠≽️ *Number* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Registration code_ : ${c}\n\nᴰᵒⁿ'ᵗ ᶠᵒʳᵍᵉᵗ ᵗᵒ ˢᵃᵛᵉ ᵒʳ ᶜᵒᵖʸ ʸᵒᵘʳ ʳᵉᵍᶦˢᵗʳᵃᵗᶦᵒⁿ ᶜᵒᵈᵉ`],

Bscp: () => [`*🛑 Before proceeding with your reading, please note the following requirements:*\n- _Have official WhatsApp installed on your device_\n- _Have 200MB of free storage on your device_\n- _Have Termux.apk installed_\n- _Have a good internet connection_\n- _Lastly, but most importantly, have patience_ :v\n\n\n*[_>] Tutorials for both Termux application and virtual machines will be uploaded here:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\n> Need more help? Contact my creator:`, "Demo Test Tmp"],

Bbot: (a = '', b = "") => ["You will not be able to use this command being a bot [ ! ]", "The option to temporarily be a bot is disabled", `*Hello ${a}!, before continuing please read this mini guide to avoid inconveniences:*\n\n☝️🤓 Information and usage of the command:  ${b}\n\n\`1.- When requesting the linking code for the first time, a unique key will be generated for you to use the command later (do not forget to save your key).\`\n\n\`2.- The command has some actions that you can use:\`\n- ${b} your_key-xxx...\n> _You will be able to manually reconnect if the bot "disconnects"._\n- ${b} your_key-xxx... stop\n> _Will stop the subbot process until you manually reactivate it with your key._\n- ${b} your_key-xxx... neocd\n> _Your current session will be closed and you will be able to request a new code for linking._\n\n\`3.- When you become a subbot, it is advisable to leave the groups where the main bot is, this is to avoid possible errors or conflicts with the bot's anti-spam system.\`\n\n\`4.- The owner and administrator of this bot reserves the right to stop, modify or disable active subbots or system features without prior notice.\`\n\n\`5.- Remember to use the linking code that will be sent to you, if you request the code in vain you will be marked for 1 hour, temporarily preventing access to the command until it can be used again.\`\n\n~The creator of this bot is not responsible for any action, damage or consequence derived from its use.~`, "[_>] Save key...", "Stopping its subbot service...", "Current service deleted, please request a linking code again", "[ ! ] Please use your key to continue...", "[ ! ] Incorrect key, please try again..."],

Bbbot: () => ["It took too long to scan one of the codes, stopping service...", '`Use the following code to become a temporary bot`\n1. Tap on the three dots "︙" in the upper right corner on your home screen\n2. Select the option "linked devices"\n3. Tap on "link a device"\n4. At the bottom of your screen there is an option called "Link with phone number" tap there\n\n~[NOTE] The code will expire if not used in time!~\n\n_Sending linking code..._', "A serious error has recently been detected in your subbot session. You won't be able to connect as a bot until the owner restarts the database.", "*Connected successfully*\n\nHere is your unique key to manually reconnect if disconnected from the temporary bot service:", "Connection restored, you're back as a subbot again!"],

Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Group* : _[ ${b} ]_\n\n*Banned Group* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot User* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"PUBLIC MODE [✓]":"PRIVATE MODE [ ! ]"}_\n\n*Restricted Mode* : _${g?"ENABLED [✓]":"DISABLED [X]"}_\n\n*Anti-Private* : _${h?"ENABLED [✓]":"DISABLED [X]"}_\n\n*Be Sub-Bot* : _${i?"ENABLED [✓]":"DISABLED [X]"}_\n${a?`\n*Admins-Only Mode* : _${j?"Active [✓]":"Inactive [X]"}_\n\n*Welcome* : _${k?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Links* : _${l?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Urls* : _${m?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Foreigners* : _${n?"Active [✓]":"Inactive [X]"}_\n\n*No Fakes* : _${o?"Active [✓]":"Inactive [X]"}_\n\n*No Fakes 2* : _${p?"Active [✓]":"Inactive [X]"}_\n\n*Detection* : _${q?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Crash* : _${r?"Active [✓]":"Inactive [X]"}_\n\n*Chat Bot* : _${s?"Active [✓]":"Inactive [X]"}_`:""}\n`,

Stks: (a = "") => ["*[ ! ] Maximum video duration is 8 seconds!*", `*[ ! ] Please send or reply with a video or image using the command ${Prefijo + a}*\n_NOTE: Video duration should be 1 to 8 seconds maximum_ ✓`, "[ ! ] Invalid URL, please try another one ;3"],

Stke: (a = "") => ["Reply to a sticker from the current chat...", `Send or Reply to a sticker with the command ${Prefijo+a}`, "Tip: Delete your sticker for everyone ;v", "[ ! ] Reply to a sticker to get metadata", "[ ! ] Reply to a sticker to set a fake price :p", "Reply to a sticker to edit the EXIF data your way"],

Bblst: (n = "", k = "") => ["Currently, there are no active sub-bots...", "*List of numbers that became sub-bots*\n~Some numbers might be inactive!~", `\n*🐝 Bot:* wa.me/${a}`],

Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Summoning group members* :\n${n}\n\n*~> Summoner* : _@${e}_\n*~> Message* : _${k||"No message :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ ᵂʰᵒᵉᵛᵉʳ ᴿᵉᵃᵈˢ ᴵᵗ ⁷ʷ⁷"}`],

Jtgy: (n = "", k = "") => ["his percentage of gay is ", `@${n} is ${k} gay`, "*[ ! ] Gay limit exceeded [ ! ]*"],

Clgs: (n = "", k = "") => [`*[ ! ] Use the correct format!* :\n\n🖼️ ~For logos with continuous text~\n[1]  ${Prefijo + n} (effect) (text...), _Example of usage:_\n\n${Prefijo + n} space NeKosmic\n\n🖼️ ~For logos with text separated by a vertical line~\n[2]  ${Prefijo + n} (effect) (text1)|(text2), _Example of usage:_\n\n${Prefijo + n} Pornhub-Style-Logo Fap|Not\n\n🎨 What logo would you like to create? Heres a list of effects:\n\n${k}`,`[ ! ] The effect *${n}* is not in the list...`],

Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => [`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Author: ${n}` : ""} ${e ? `\n🤳 User: ${e}` : ""} ${k ? `\n📝 Description: ${k}` : ""} ${o ? `\n💕 Likes: ${o}` : ""} ${m ? `\n🎭 Comments: ${m}` : ""} ${d ? `\n🔄 Shared: ${d}` : ""} ${z ? `\n👀 Views: ${z}` : ""}`],

Tozg: (a = "") => [`*[ ! ] Reply to a sticker using the command:*\n\n${Prefijo + a}`, `Converted to ${a ? "video" : "image"} successfully ✓`],

UpBot: (m = '', d = '', z = '') => `*[ ! ] Please specify the name of the file to be updated.*\n_Here is a list of possible files that can be updated with their respective usage examples:_\n\n- ${m}\n\n> If you want to do a full update, use the command:\n\n${Prefijo + d} ${z} ++\n`,

Uact: (n = "", e = "", o = "") => ["*Which participant do you want to make an administrator?*", `Example of use:\n\n${Prefijo+n} @51995...\n`, "Who do you want to ban?", "[ ! ] Please tag the user you want to ban", `User banned, ${n} will no longer be able to use the bot [ ! ]`, "*Which administrator do you want to remove from their position?*", "Who do you want to unban?", `Unbanned user, ${n} can use the bot again [✓]`, `Please tag or mention someone!\n\nExample of use:\n${Prefijo+n} @${e}`, `*${n}* it stopped being premium`, "Please indicate the number of days", `Only numbers!\n\nExample of use:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maximum 7 days", `*[ PREMIUM USER ]*\n🔖 *Name:* ${n}\n📆 *Time:* ${e} days\n📉 *Remaining:* ${o}MS`, "[ ! ] Your premium time is over!\n_I hope you enjoyed :3_\n"],

Gadd: (a = "") => [`[ ! ] Indicate the full number of a WhatsApp user you want to add to the group, Example of use:\n\n${Prefijo+a} +1987....`, `wa.me/${a} is inviting you to his WhatsApp group!`, `*[ ! ] Error, could not add number @${a} to the group*\n\n_Please send him an invitation link manually: wa.me/${a}_\n`],

Uban: () => ["You hate me? :,c", "Which user do you want to delete!?\nPlease tag one"],

Uwrn: (m = '', d = '', z = '') => [`Reduced the number of warnings to user ${m}\n\n${d} => ${z}\n`, `> The first warning has been given to user ${m}. If you accumulate more than three warnings, you will be removed from the group.`],

Wkpd: (n = "", k = "") => ["[ ! ] No results for your search ;-;", `||  *WIKIPEDIA* ||\n_~> Results for : ${n}_\n\n${k}`],

Dytv: (n = '', k = "") => `Title: ${n}\nSize: ${k}\nExtension: .mp4`,

Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`*[ > ] YouTube results for:* _${a}_\n\n`, `🔖 Title: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Type: ${d}\n🖼️ Thumbnail: ${e}\n⌚ Duration: ${f}\n📜 Description: ${g}\n📆 Upload Date: ${h}\n👀 Views: ${i}\n||\n⚡ Author: ${j}\n📺 Channel: ${k}\n\n*——————————*\n\n`]

};