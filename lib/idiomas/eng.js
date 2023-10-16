import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "en",
Habla: () => "English language",
Start: () => ["Running the most Kawaii third world Bot.\nStarting script execution...", "\n[!] Code finished:"],
Conn: () => ["Connecting...", "Disconnect reason:", "Connection timed out, reconnecting...", "Restart required, restarting...", "Device logged out, please scan again and run.", "Connection replaced, another new session opened, please close current session first.", "Connection lost from server, reconnecting...", "Connection closed, reconnecting...", "Bad session file, please delete session and scan again.", "Connected ✓", "\n\n[_>] If you are going to use the matching method, please enter the number that will become the bot. Make sure to enter the complete WhatsApp number along with its country code.\nExample: +51xxx...\n", "\nYour pairing code:"],
Call: (n = '', k = "") => `\n*[ ! ] ${n} You will be blocked*\n_Reason: for making a ${k ? "video call" : "call"} to this number without authorization!_\n`,
GpUp: (e = "") => ["🔒 *[ CLOSED GROUP ]* 🔒\n_ᴺᵒʷ ᵃˡˡ ᵃˡˡ ᵃᵈᵐᶦⁿˢ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵃᵍᵉˢ_", "🔓 *[ OPEN GROUP ]* 🔓\n_ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵃᵍᵉˢ_", "🧰 *[SETTINGS MADE ON IN GROUP]* ⚙️\n_ᴺᵒʷ ᵒⁿˡʸ ᵃᵈᵐᶦⁿˢ ᶜᵃⁿ ᵉᵈᶦᵗ ᵍʳᵒᵘᵖ ˢᵉᵗᵗᶦⁿᵍˢ_", "🧰 *[SETTINGS MADE ON IN GROUP]* ⚙️\n_ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶜᵃⁿ ᵉᵈᶦᵗ ᵍʳᵒᵘᵖ ˢᵉᵗᵗᶦⁿᵍˢ_\n~ᴾˡᵉᵃˢᵉ ᵇᵉ ᵃʷᵃʳᵉ ᵒᶠ ᵖᵉᵒᵖˡᵉ ʷᶦᵗʰ ᵐᵉⁿᵗᵃˡ ʳᵉᵗᵃʳᵈᵃᵗᶦᵒⁿ~", `✍️ *[ GROUP SUBJECT CHANGED ]* 🤳\n\nNew name: _${e}_\n`],
RestriN: () => "[!] Failed to remove the new participant, please enable restricted mode!",
AlertList: () => "[!] Delete numbers starting with  '1'  from FakeList in ./config.json...!",
WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Welcome @${n} to this amazing group* ${e}\n📆 *Join Date: ${k}*\n🍷 _*I hope you enjoy your stay here, don't forget to respect the participants and the rules*_ ;)\n\n📜 *Group rules currently:* \n${masss}\n${o}`,
WlcRemove: (n = '', k = "") => `\`\`\`[!] Left: @${n}\`\`\`\n_- Date of departure |  ${k}_`,
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
MsjUnreg: () => `*[ ! ]* Register to start using this feature\n\nExample: ${Prefijo}rg name|age\n\n${Prefijo}rg Juanito|15\n`,
MsjRestrict: () => "[ ! ] To perform deletion actions, my owner needs to enable restricted mode!",
SpmrCmd: (a = "") => ["_Wait a few seconds before using another command..._ ✓", `[ ! ] ${a} Please do not spam the bot ;-;`],
SpmrCnsl: () => "[SPAMMER CMD] Command:",
Proces: (n = '', k = "") => [`_Processing, ${n} please wait..._`, `_Searching, ${k} please wait..._`],
Error: () => ["[ ! ] Error, please try again later...", "[ ! ] An unexpected error occurred u.u [ ! ]"],
Antprv: (a = "") => ["The anti-private mode is active, please avoid using this chat ;)", "[ ! ] Last warning, do not talk to the bot in private!", `*[X] Private chat is not allowed [X]*\nYou can contact one of my owners if you need more information:\n\n${a}\n\n_Goodbye..._`],
Antnlc: (a = "") => ["[ ! ] My crazy you just sent a link, the good thing is that the link detected is from this group owo", "*[ ! ] Link detected [ ! ]*\n\n_Luckily I'm not an admin, so I can't do nothing unu_", `*[ ! ] Link detected [ ! ]*\n_Now if you were worth @${a} Goodbye..._\n`],
Antgll: () => ["You just mentioned all participants in this group, but I'm not an admin so I can't do anything :0", "Tagging everyone action is prohibited in this group, bye!"],
Antlnk: (a = "") => `*[ ! ] Link detected [ ! ]*  ${a ? "" : "\n\n_Luckily I'm not an admin, so I can't do anything :v_"}`,
Antrb: (n = '', k = "") => [`The administrator @${n} has just sent a text that contains too many characters -.-!`, `*[ ! ] A message containing too many characters was detected [ ! ]* ${n ? "" : `${saltos}\nI am not an administrator, I cannot do anything more... :/`}`, `Mark the chat as read ✓\n${saltos}\n=> Number: wa.me/${n}\n=> Alias: ${k}\n[ ! ] Just sent a text that contains too many characters that may cause issues on mobile devices`],
Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "") => ["_Getting information..._",`*~》INFORMATION《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(active)_\n➪ *Current owner* : _${author.name}_\n➪ *Node.js application started* : _${a}ago._\n➪ *Execution time* : _${b}._\n➪ *Whatsapp nickname* : _${c}._\n➪ *Total groups* :  _${d}_\n➪ *Total users* : _${e}_\n➪ *Active groups* : _${f} / ${g}_\n➪ *Personal chats* : _${h}_\n➪ *Total chats* : _${i} / ${j}_\n➪ *Global hits* : _${k}_\n➪ *Bot version* : _${version}_\n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Temporary folder* : _${l}_\n➪ *Database* : _${m}_\n➪ *Node.js version* : _${n}_\n➪ *Processing speed* : _${o} s_\n➪ *Connection speed* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Platform* : _${r}_\n➪ *Version* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Architecture* : _${u}_\n➪ *Host* : _${v}_\n\n➫ _Memory consumption :_\n${w} ${""==x?"":`\n➫  _Total CPU usage:_\n${x}\n➫ _Used CPU Core(s)_ ${y}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] Maximum video duration is 8 seconds!*", `*[ ! ] Please send or reply with a video or image using the command ${Prefijo + a}*\n_NOTE: Video duration should be 1 to 8 seconds maximum_ ✓`, "[ ! ] Invalid URL, please try another one ;3"],
Tozg: (a = "") => [`*[ ! ] Reply to a sticker using the command:*\n\n${Prefijo + a}`, `Converted to ${a ? "video" : "image"} successfully ✓`],
Tptv: () => "Please reply or submit a video that does not exceed 59 seconds in length.",
AiChat: (n = "", k = "") => ["No system available!", "Please, be more specific in your message.", "And the message?", `Successfully ${n ? "activated" : "deactivated"} "${k}".`],
Dytv: (n = '', k = "") => [`What video do you want to download from Youtube?, Usage example: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please, use a link from a YouTube video_\n", "[ ! ] Your video weighs too much, sorry my king I can't send it :v", `Title: ${n}\nSize: ${k}\nExtension: .mp4`],
Dyta: (a = "") => [`What audio do you want to download from Youtube?, Usage example: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please, use a YouTube link_\n", "[ ! ] The audio is too heavy, sorry I can't send it..."],
Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => ["*[ ! ] Y el Link de tiktok?*", "*[ ! ] Link inválido*\n_Por favor, use un link válido_", `*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Author: ${n}` : ""} ${e ? `\n🤳 User: ${e}` : ""} ${k ? `\n📝 Description: ${k}` : ""} ${o ? `\n💕 Likes: ${o}` : ""} ${m ? `\n🎭 Comments: ${m}` : ""} ${d ? `\n🔄 Shared: ${d}` : ""} ${z ? `\n👀 Views: ${z}` : ""}`],
Dlig: (a = "") => ["*[ ! ] And the Instagram Link?*", "*[ ! ] Invalid link*\n_Please use a valid link_", `*[ ! ] Invalid link*\n_Please use an Instagram link_\nEg: ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],
Dfbv: (a = "") => ["*[ ! ] What's the Facebook Link?*", "*[ ! ] Invalid link*\n_Please use a valid link_", `*[ ! ] Invalid link*\n_Please use a valid link to a Facebook video_\n\nUsage example: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Error, the link may be invalid or the video might be private, please try again later"],
Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`What do you want to search on Youtube? Example of use: \n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] No results found, please try again...",`✍️ Title: ${n}\n⚡ Author: ${e}\n⏰ Duration: ${k}\n👀 Views: ${o}\n📆 Upload Date: ${s}\n📺 Channel: ${m}\n📃 Description: ${i||"-"}\n🧬 ID: ${c}\n\n🧑‍💻 _You can use the following commands to download_${masss}\n\n┌ Audio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Video -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`Which audio do you want to download from YouTube? Usage example: \n\n${Prefijo + n} mtc s3rl`, `🔍 Result found for: ${n}\n${e ? `✍️ Title: ${e}\n⏳ Duration: 1:23 ━━━━●───────── ${k}\n👀 Views: ${o}\n📝 Author: ${s}\n📜 Description: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Sending audio, please wait...\`\`\`` : ""}`],
Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`What would you like to search for on YouTube? Usage example: \n\n${Prefijo+a} what is 1 + 1`, `*[ > ] YouTube results for:* _${a}_\n\n`, `🔖 Title: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Type: ${d}\n🖼️ Thumbnail: ${e}\n⌚ Duration: ${f}\n📜 Description: ${g}\n📆 Upload Date: ${h}\n👀 Views: ${i}\n||\n⚡ Author: ${j}\n📺 Channel: ${k}\n\n*——————————*\n\n`],
Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Summoning group members* :\n${n}\n\n*~> Summoner* : _@${e}_\n*~> Message* : _${k||"No message :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ ᵂʰᵒᵉᵛᵉʳ ᴿᵉᵃᵈˢ ᴵᵗ ⁷ʷ⁷"}`],
GpOpt: (n = '', k = "") => [`Group ${n ? 'enabled' : 'disabled'} ${k} for this group`, "Here's the list of options :3", "Option", "Description:", "Command:"],
GpActn: () => [{
titulo: "[ ⬇️ AUTOMATIC WELCOME ]",
func: [{
action: "[ 🛬 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʷᵉˡᶜᵒᵐᵉ ⁿᵉʷ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶦⁿᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}encender bienvenida`
}, {
action: "[ 🛫 Deactivate ]",
desc: "~ᴺᵉʷ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶦⁿ ᵃ ᵍʳᵒᵘᵖ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʷᵉˡᶜᵒᵐᵉᵈ~",
cmd: `${Prefijo}apagar bienvenida`
}]
}, {
titulo: "[ ⬇️ ONLY - ADMINS ]",
func: [{
action: "[ ⭐ Activate ]",
desc: "~ᴺᵒʷ ᵒⁿˡʸ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
cmd: `${Prefijo}encender soloadmins`
}, {
action: "[ ✨ Deactivate ]",
desc: "~ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
cmd: `${Prefijo}apagar soloadmins`
}]
}, {
titulo: "[ ⬇️ DETECTION ]",
func: [{
action: "[ 🌕 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵈᵉᵗᵉᶜᵗ ᵃᵈʲᵘˢᵗᵐᵉⁿᵗˢ ᵐᵃᵈᵉ ᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}encender deteccion`
}, {
action: "[ 🌑 Deactivate ]",
desc: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵈᵉᵗᵉᶜᵗ ᵃᵈʲᵘˢᵗᵐᵉⁿᵗˢ ᵐᵃᵈᵉ ᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI-WA_LINKS ]",
func: [{
action: "[ 🗡️ Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ˢᵉⁿᵈ ᵂʰᵃᵗˢᴬᵖᵖ ˡᶦⁿᵏˢ ᵗᵒ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}encender antienlaces`
}, {
action: "[ 😴 Deactivate ]",
desc: "~ᴺᵒ ᵃᶜᵗᶦᵒⁿ ʷᶦˡˡ ᵇᵉ ᵗᵃᵏᵉⁿ ʷʰᵉⁿ ᵂʰᵃᵗˢᴬᵖᵖ ˡᶦⁿᵏˢ ᵃʳᵉ ˢᵉⁿᵗ~",
cmd: `${Prefijo}apagar antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ᵗᵃᵍ ᵉᵛᵉʳʸᵒⁿᵉ~",
cmd: `${Prefijo}encender antitagall`
}, {
action: "[ 😶 Deactivate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵈᵒ ⁿᵒᵗʰᶦⁿᵍ ʷʰᵉⁿ ᵉᵛᵉʳʸᵒⁿᵉ ᶦˢ ᵗᵃᵍᵍᵉᵈ~",
cmd: `${Prefijo}apagar antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵃ ᶜʰᵃᵗᵇᵒᵗ ᶦⁿ ᵃ ᵂʰᵃᵗˢᴬᵖᵖ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}encender chatbot`
}, {
action: "[ 👤 Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᶜʰᵃᵗᵇᵒᵗ ᶦⁿ ᶜᵘʳʳᵉⁿᵗ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar chatbot`
}]
}, {
titulo: "[ ⬇️ RESTRICTED MODE ]",
func: [{
action: "[ 🌚 Activated ]",
desc: "~ᴬᶜᵗᶦᵛᵃᵗᵉ ᵗʰᵉ ᶠᵘⁿᶜᵗᶦᵒⁿ ᵗᵒ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶠʳᵒᵐ ᵃ ᵍʳᵒᵘᵖ ⁽ᵃᵗ ʸᵒᵘʳ ᵒʷⁿ ʳᶦˢᵏ⁾~",
cmd: `${Prefijo}encender restringido`
}, {
action: "[ 🌝 Disabled ]",
desc: "~ᴬᶜᵗᶦᵒⁿˢ ᵗᵒ ᵃᵈᵈ ᵃⁿᵈ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᵈᶦˢᵃᵇˡᵉᵈ~",
cmd: `${Prefijo}apagar restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵗʰᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ˢᵉⁿᵈ ᵘʳˡˢ~",
cmd: `${Prefijo}encender antiurl`
}, {
action: "[ 😴 Deactivate ]",
desc: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵖᵉʳᶠᵒʳᵐ ᵃⁿʸ ᵃᶜᵗᶦᵒⁿ ʷʰᵉⁿ ᵘʳˡˢ ᵃʳᵉ ˢᵉⁿᵗ~",
cmd: `${Prefijo}apagar antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 1 ]",
func: [{
action: "[ 🛡️ Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵗʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ᵁˢ ⁿᵘᵐᵇᵉʳˢ ⁺¹~",
cmd: `${Prefijo}encender antifake1`
}, {
action: "[ ⚰️ Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 2 ]",
func: [{
action: "[ 🛡️ Activate ]",
desc: "~ᴾʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ˢᵗʳᵃⁿᵍᵉ ᵒʳ ˢᵘˢᵖᶦᶜᶦᵒᵘˢ ⁿᵘᵐᵇᵉʳˢ ᶦˢ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ~",
cmd: `${Prefijo}encender antifake2`
}, {
action: "[ ⚰️ Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᴬⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI-FOREIGNERS ]",
func: [{
action: "[ 🏳️ Activate ]",
desc: "~ᵀʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ⁿᵘᵐᵇᵉʳˢ ᵒᵗʰᵉʳ ᵗʰᵃⁿ ᵗʰᵉ ᵒʷⁿᵉʳ'ˢ ᵖʳᵉᶠᶦˣ ᶦˢ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ~\nᴺᵘᵐᵇᵉʳˢ ˢᵗᵃʳᵗᶦⁿᵍ ʷᶦᵗʰ +" + LocPref + " ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʳᵉᵐᵒᵛᵉᵈ~",
cmd: `${Prefijo}encender antiextranjeros`
}, {
action: "[ 🏴 Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᴬⁿᵗᶦ ᶠᵒʳᵉᶦᵍⁿᵉʳˢ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - CRASHED ]",
func: [{
action: "[ 🐸 Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵗʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ᶜʳᵃˢʰ ᵐᵉˢˢᵃᵍᵉˢ ᶦⁿ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}encender antitraba`
}, {
action: "[ 👾 Deactivate ]",
desc: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᶦˢᵃᵇˡᵉᵈ~",
cmd: `${Prefijo}apagar antitraba`
}]
}],
Menl: (a = "") => [`Hello ${a}!, 👋`,
[{
info: `*[ Menu-Complete ♻️ ]*
≡ ~ᶠᵘˡˡ ˡᶦˢᵗ ᵒᶠ ᵃˡˡ ᶜᵒᵐᵐᵃⁿᵈˢ~
${Prefijo}menucompleto`
},
{
info: `...`
}]
],
Menu: (n = '', e = '', k = '', o = "") => ["_Loading menu..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
║❂ Active time: ${n}
║❂ Bot version: ${version}
║❂ Bot Owner: ${author.name}
║❂ Unique prefix: 「  ${Prefijo}  」
║❂ Client: ${e}
╚══════════ ${k ? '' : `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Sub-Bot of wa.me/${o}
┗─── ⊹ ⊱♡⊰ ⊹ ───┛`}
${masss}
~|-------------------------|~
*[_>] _COMMANDS_ ☷*
~|-------------------------|~

╔「 _CONVERTERS :_ 」
║╭—————————
║├  ${Prefijo}sticker
║├  ${Prefijo}aimg
║├  ${Prefijo}amp4
║├  ${Prefijo}aptv
║╰—————————
╚══════════
╔「 _DOWNLOADER :_ 」
║╭—————————
║├  ${Prefijo}audio
║├  ${Prefijo}play
║├  ${Prefijo}play2
║├  ${Prefijo}ytmp4
║├  ${Prefijo}ytmp3
║├  ${Prefijo}ytv
║├  ${Prefijo}yta
║├  ${Prefijo}ytvbochi
║├  ${Prefijo}ytabochi
║├  ${Prefijo}tiktokdl
║├  ${Prefijo}igdl
║├  ${Prefijo}fbdl
║╰—————————
╚══════════
╔「 _TOOLS :_ 」
║╭—————————
║├  ${Prefijo}ytbuscar
║├  ${Prefijo}afk
║├  ${Prefijo}robar
║├  ${Prefijo}aichat
║├  ${Prefijo}rentbot
║╰—————————
╚══════════
╔「 _GAMES :_ 」
║╭—————————
║├  ${Prefijo}ttt
║├  ${Prefijo}slander
║├  ${Prefijo}nameninja
║├  ${Prefijo}who
║├  ${Prefijo}luck
║├  ${Prefijo}testgay
║╰—————————
╚══════════
╔「 _ADMINS :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║├  ${Prefijo}invocar 
║├  ${Prefijo}hidetag
║├  ${Prefijo}cgpen
║├  ${Prefijo}agp
║├  ${Prefijo}ban
║├  ${Prefijo}promote
║├  ${Prefijo}demote
║╰—————————
╚══════════
╔「 _OWNER :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║├  ${Prefijo}bot
║├  ${Prefijo}add
║├  ${Prefijo}banchat
║├  ${Prefijo}unbanchat
║├  ${Prefijo}addprem
║├  ${Prefijo}delprem
║├  ${Prefijo}usbann
║├  ${Prefijo}usdesb
║├  ${Prefijo}gpbc
║├  ${Prefijo}actualizarbot
║╰—————————
╚══════════
╔「 _RANDOM :_ 」
║╭—————————
║├  ${Prefijo}creator
║├  ${Prefijo}owner
║├  ${Prefijo}rg
║├  ${Prefijo}myprofile
║├  ${Prefijo}infobot
║├  ${Prefijo}simi
║├  ${Prefijo}estadobot
║├  ${Prefijo}join
║├  ${Prefijo}listbots
║├  ${Prefijo}sugerir
║├  ${Prefijo}support
║╰—————————
╚══════════

Very soon more functions...`],
Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Group* : _[ ${b} ]_\n\n*Banned Group* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot User* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"PUBLIC MODE [✓]":"PRIVATE MODE [ ! ]"}_\n\n*Restricted Mode* : _${g?"ENABLED [✓]":"DISABLED [X]"}_\n\n*Anti-Private* : _${h?"ENABLED [✓]":"DISABLED [X]"}_\n\n*Be Sub-Bot* : _${i?"ENABLED [✓]":"DISABLED [X]"}_\n${a?`\n*Admins-Only Mode* : _${j?"Active [✓]":"Inactive [X]"}_\n\n*Welcome* : _${k?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Links* : _${l?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Urls* : _${m?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Foreigners* : _${n?"Active [✓]":"Inactive [X]"}_\n\n*No Fakes* : _${o?"Active [✓]":"Inactive [X]"}_\n\n*No Fakes 2* : _${p?"Active [✓]":"Inactive [X]"}_\n\n*Detection* : _${q?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Crash* : _${r?"Active [✓]":"Inactive [X]"}_\n\n*Chat Bot* : _${s?"Active [✓]":"Inactive [X]"}_`:""}\n`,
Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ USER PROFILE & INFO]> 🌐\n\n➢ Name: ${n}\n${e?"➢ Is Admin: [✓]":"➢ Is Admin: [X]"}\n${k?"➢ Premium User: Yes":"➢ Premium User: No"} \n${o?"➢ Registered: [✓]":"➢ Registered: [X]"} ${o?`\n➢ Registered Name: ${s}\n➢ Age: ${m}\n➢ Registration Date: ${i}`:""}${c?`\n➢ Gay Percentage: ${c}`:""}\n➢ Remaining Limits: ${b+r+u}\n- Games = ${b}\n- Downloads = ${r}\n- Others = ${u}\n`,`➢ Country: ${n} \n➢ Country Code: ${e} \n➢ Number Origin: ${k||"Not found :("} ${o?"\n➢ Valid Number: [✓]":"\n➢ Valid Number: [X]"} ${s?"\n➢ Mobile Device: [✓]":"\n➢ Mobile Device: [X]"} \n➢ Carrier: ${m} \n➢ Line Type: ${s} \n➢ Local Format: ${i} \n➢ International Format: ${c} \n➢ Country Code: ${b}`],
Stke: (a = "") => ["Reply to a sticker from the current chat...", `Send or Reply to a sticker with the command ${Prefijo+a}`, "Tip: Delete your sticker for everyone ;v", "[ ! ] Reply to a sticker to get metadata", "[ ! ] Reply to a sticker to set a fake price :p", "Reply to a sticker to edit the EXIF data your way"],
Jtli: (n = "", k = "") => ["You are already in an active room -.-", `*[ ! ] Enter a name to create a new room*\n\nUsage example:\n\n${Prefijo+n} latam\n`, "Opponent found!\nThe initiator of the game must start by typing a number from 1 to 9 to begin", "needs to start the game", "~Type :~\n\nsurrender\n\nto give up~", `*[ ! ] Waiting for an opponent*\nTo join the game, use the command ${Prefijo+n} ${k}\n\n`, "The game has ended", "Invalid", "Invalid position", "Invalid position", "Victory!", "Game over, it's a tie", "Turn of", "*3 in a row room deleted successfully ✓*"],
Jcal: (a = "") => [`*[ ! ] Use well the command :*\n${Prefijo+a} @tag|message|reply`, `*[ ! ] Add slashes between each word all together*\n\n_Usage example_ : \n${Prefijo+a} @taggeduser|blessme|blessed\n~Don't forget to use this slash~ : " | "`, "No text :v", " use 2 slashes!!!\n\n@tag|message|reply ✓"],
Jnij: (a = "") => ["Use a name or nickname...", `☯️ Ninja name for _${a}_:`],
Jqun: (a = "") => [`*[ ! ] Make up an issue*\n_Example:_\n\n${Prefijo+a} is gay :v?\n`, "*[ ! ] The issue is very short*"],
Jtgs: (n = "", e = "", k = "", o = "") => [`*Player : @${n}*\n*[ Congratulations, you won!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${e}*\n*┃ ├────────┤ ┃*\n*${k} <==*\n*┃ ├────────┤ ┃*\n*${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*All your limits were reestablished*`, `Player : @${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${e}\n┃ ├────────┤ ┃\n${k}\n┃ ├────────┤ ┃\n${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],
Jtgy: (n = "", k = "") => [`_Calculating percentage..._\n💉${n}🔬`, "his percentage of gay is ", `@${n} is ${k} gay`, "*[ ! ] Gay limit exceeded [ ! ]*"],
Gadd: (a = "") => ["Enable restricted mode to perform this action", "[ ! ] Please specify the number of a user you want to add to the group", `wa.me/${a} is inviting you to their WhatsApp group!`, `*[ ! ] Error, unable to add @${a} to the group*\n\n_Please send them an invitation link manually wa.me/${a}_\n`],
Bunt: (n = '', k = "") => ["And the WhatsApp link?", "[ ! ] Error, The link does not work or is invalid", `[ ! ] The minimum amount to join the group must be *${MinimoDeUsuarios}* participants`, `${NombreDelBot} joined the group ${n} successfully \n`],
Uban: (n = "", k = "") => ["Do you hate me? :,c", `*Participant @${n} has been removed from the group ✓*\n_Action executed by ${k}_`, "Which user do you want to remove!?\nPlease mention one"],
Uact: (n = "", e = "", o = "") => ["*Which participant do you want to make an administrator?*", `Example of use:\n\n${Prefijo+n} @51995...\n`, "Who do you want to ban?", "[ ! ] Please tag the user you want to ban", `User banned, ${n} will no longer be able to use the bot [ ! ]`, "*Which administrator do you want to remove from their position?*", "Who do you want to unban?", `Unbanned user, ${n} can use the bot again [✓]`, `Please tag or mention someone!\n\nExample of use:\n${Prefijo+n} @${e}`, `*${n}* it stopped being premium`, "Please indicate the number of days", `Only numbers!\n\nExample of use:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maximum 7 days", `*[ PREMIUM USER ]*\n🔖 *Name:* ${n}\n📆 *Time:* ${e} days\n📉 *Remaining:* ${o}MS`, "[ ! ] Your premium time is over!\n_I hope you enjoyed :3_\n"],
Gbnd: () => ["Chat successfully banned ✓", "Chat successfully unbanned ✓"],
Gpbc: (n = "", k = "") => ["[ ! ] And the message you want to convey?", `Sending broadcast to ${n} group(s), in approximately ${k} second(s)`],
Gcea: (n = "", k = "") => [`*At what time do you want to close the group?*\n\n_Usage example_:\n${Prefijo + n} 10 seconds`, `*The group will be closed in ${n}*\n_Action executed by: @${k}_`],
Bblst: (n = "", k = "") => ["Currently, there are no active sub-bots...", "*List of numbers that became sub-bots*\n~Some numbers might be inactive!~", `${n === k ? `\n\n*🐝 Bot:* wa.me/${k}` : `\n\n*👑 Owner:* +${n}\n*🐜 Bot:* wa.me/${k}`}`],
Bbot: (a = '', b = '') => ["[ ! ] You cannot use this command as a bot [ ! ]", "The option to be a temporary bot is disabled", `*Hello ${a}!, before proceeding, please read this mini guide to avoid inconveniences:*\n\n☝️🤓 Information and usage of the command:  ${b}\n\n1.- When requesting the QR code for the first time, a unique key will be generated for you to use the command later (don't forget to save your key).\n\n2.- The command has some actions you can use:\n┬[  ${b} your_key-xxx...\n└‒> _You can manually connect if the bot "disconnects"._\n┬[  ${b} your_key-xxx... stop\n└‒> _It will stop the sub-bot process until you reactivate it manually with your key._\n┬[  ${b} your_key-xxx... neoqr\n└‒> _Your current session will be closed, and you can request a new QR code to scan._\n\n3.- When you become a subbot, it is advisable to leave the groups where the main bot is, this is to avoid possible errors or conflicts with the bot's antispam system.\n\n4.- The owner and administrator of this bot reserve the right to stop, modify, or disable active sub-bots or system features without prior notice.\n\n5.- Remember to scan one of the QR codes that will be sent to you; if you request the QR code in vain, you will be marked for 1 hour, temporarily preventing access to the command until it can be used again.\n\n~The creator of this bot is not responsible for any actions, damages, or consequences arising from its use.~`, "[_>] Requesting code...", "Stopping sub-bot service...", "Generating a new QR code, don't forget to scan it on time!", "[ ! ] Please use your key to continue...", "[ ! ] Incorrect key, please try again..."],
Bbbot: () => ["It took too long to scan one of the QR codes, stopping the service...", 'Scan this QR code to become a temporary bot\n1. Tap on the three dots "︙" in the top right corner\n2. Select the "linked devices" option\n3. Tap on "link a device"\n4. You can scan this QR or use the "Link with phone number" method at the bottom of the screen\n~[NOTE] The QR code will expire if it is not scanned in time!~\n\n_Sending pairing code..._', "A closed session of your subbot has been recently detected. You won't be able to connect as a bot until the owner restarts the database.", "*Successfully connected*\n\nHere's your unique key to manually reconnect if disconnected from the temporary bot service:", "Connection reset, you're now a subbot again!"],
Afkpl: (n = "", k = "") => [`📲 *You are no longer AFK after ${n}.*\nWelcome back!!! :D`, `📴 *The mentioned user is currently away, time elapsed ${n}.*\n\n┏⊱ *Reason* \n┗━⊱ ${k}\n`, `Please provide your reason for going AFK\nUsage example:\n\n${Prefijo+n} I'll be going to the bathroom :v`, "[ ! ] The reason is too short", `*AFK function activated successfully*\n\n➸ *User*: ${n}\n➸ *Reason*: ${k}`],
Ureg: (k = "", o = "", s = "", m = "", i = "", c = "") => ["Please enter your registration code","[ ! ] Incorrect registration code","[✓] Your record was deleted from the database successfully 🗑️",`*[ ! ] You have already been registered in my database*\nDo you want to register again?\nUse the command:\n\n${Prefijo}desrg <Registration code>\n`,"Name and age!?",'*[ ! ] Please add a bar between name and age*\n\n" | "\n',"*[ ! ] In age only numbers are accepted -.-*","*[ ! ] Bruh the name is very long ._.*","*[ ! ] Maximum age 30 years*","*[ ! ] Minimum age 13 years*","REGISTER","Name: ","Age: ","Pubescent","Teenager","Young","Adult","Registration date:","Information:",`〘  *REGISTER* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *User register* : @${k}\n╠≽️ *Registered Name* : ${o}\n╠≽️ *Birthdate* : ${s}\n╠≽️ *According to your age you are a* : ${m}\n╠≽️ *Information* : ${i}\n╠≽️ *Number* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Registration code_ : ${c}\n\nᴰᵒⁿ'ᵗ ᶠᵒʳᵍᵉᵗ ᵗᵒ ˢᵃᵛᵉ ᵒʳ ᶜᵒᵖʸ ʸᵒᵘʳ ʳᵉᵍᶦˢᵗʳᵃᵗᶦᵒⁿ ᶜᵒᵈᵉ`],
Vthx: () => "💻 *Social networks* 📲\n\n[ > ] Youtube channel:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Facebook page:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\nᵈᵒⁿ'ᵗ ᵃˢᵏ ᶠᵒʳ ᵐᵒⁿᵉʸ⁻ ᵒⁿˡʸ ʷᶦᵗʰ ʸᵒᵘʳ ˢᵘᵖᵖᵒʳᵗ ᴵ ᵃᵐ ʰᵃᵖᵖʸ :³"
};