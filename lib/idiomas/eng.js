import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: "en",

Domina: "English language",

Start: ["Running the most Kawaii third world Bot.\nStarting script execution...", "\n[!] Code finished:"],

Conn: (a = '') => ["Connecting...", "Reason for disconnection:", "Connection timed out, reconnecting...", "Restart required, restarting...", "Device logged out, please link again and run.", "Connection replaced, a new session was opened, please log out the current session first.", "Connection lost with the server, reconnecting...", "Connection closed, reconnecting...", "Incorrect session file, please delete the current session and link again", "Connected ✓", "\n\n[_>] If you are going to use the pairing method, please enter the number that will become the bot, make sure to enter the full WhatsApp number along with its country code.\nExample: +1xxx...\n", `\nPairing code for the number "+${a}":`],

Call: (n = '', k = '') => `\n*[ ! ] ${n} You will be blocked*\n_Reason: for making a ${k ? "video call" : "call"} to this number without authorization!_\n`,

GpUp: (n = '', k = '') => ["🔒 *[ CLOSED GROUP ]* 🔒\n_Now only administrators can send messages_", "🔓 *[ OPEN GROUP ]* 🔓\n_Now all participants can send messages_", "🧰 *[ SETTINGS MADE IN THE GROUP ]* ⚙️\n_Now only administrators can edit group settings_", "🧰 *[ SETTINGS MADE IN THE GROUP ]* ⚙️\n_Now all participants can edit group settings_\n~Please be aware of people with mental delays~", `📜️ *[ GROUP DESCRIPTION UPDATED ]* ✒️\n\n- _Previous description:_ ${n}\n\n- _New description:_ ${k}`, `✍️ *[ GROUP SUBJECT CHANGED ]* 🤳\n\n- _Previous subject was:_ ${n}\n\n- _New subject:_ ${k}\n`],

RestriN: "[!] Failed to remove the new participant, please enable restricted mode!",

AlertList: "[!] Delete numbers starting with  '1'  from Blacklist in ./config.json...!",

WlcAdd: (n = '', e = '', k = '', o = '') => [`⚡ *Welcome ${n} to this amazing group* ${e}\n📆 *Join Date: ${k}*\n🍷 _*I hope you enjoy your stay here, don't forget to respect the participants and the rules*_ ;)\n\n📜 *Group rules currently:* \n${masss}\n${o}`, "`If you are going to customize the welcome message, you can use these additional parameters:`\n- @user \n_(to tag the user)_\n- @group\n_(to use the group name)_\n- @date\n_(to indicate the date)_\n- @desc\n_(to display the description)_\n"],

WlcRemove: (m = '', d = '', z = '') => `[!] Left: @${m} • ${d}\n- Date of departure |  ${z}`,

WlcPromot: (m = '', d = '', z = '') => [`*Congratulations @${m}!, ${z || 'An administrator'} has just given you great power, now you are an admin of the group*: _${d}_\n`, `~Now I have absolute power and I don't care!~\n\n*I mean..., _Thank you very much to ${m || 'an administrator'} for giving me administration, I will try my best for this group!!!_ :D*`],

WlcDemot: (m = '', d = '', z = '') => [`*${z || 'An administrator'} has just demoted @${m} and is no longer an administrator of the group*: _${d}_`, "How sad, I'm no longer an administrator unu"],

Blys: "Another bot was detected in the group, to avoid any kind of conflict or spam, I will chill out and leave 🗿",

Opu: `\`[!] FREE USERS SIZE LIMIT EXCEEDED\`\n\n_To download larger files, upgrade to Premium, Contact the owner at:_\n\n${Prefijo}owner`,

Cprint: ["RUNNING", "MESSAGE", "By", "From", "Chat", "group:", "Private:", "Date"],

MsjRegister: `\`[!] To use this function you must first register!\`\n\n${Prefijo}rg`,

SpmrCmd: (a = '') => ["_Wait a few seconds before using another command..._ ✓", `[ ! ] ${a} Please do not spam the bot ;-;`],

SpmrCnsl: "[SPAMMER CMD] Command:",

Antnlc: (a = '') => ["[ ! ] My crazy you just sent a link, the good thing is that the link detected is from this group owo", "*[ ! ] Link detected [ ! ]*\n\n_Luckily I'm not an admin, so I can't do nothing unu_", `*[ ! ] Link detected [ ! ]*\n_Now if you were worth @${a} Goodbye..._\n`],

Antgll: ["You just mentioned all participants in this group, but I'm not an admin so I can't do anything :0", "Tagging everyone action is prohibited in this group, bye!"],

Antlnk: (a = '') => `*[ ! ] Link detected [ ! ]*  ${a ? "" : "\n\n_Luckily I'm not an admin, so I can't do anything :v_"}`,

Antrb: (n = '', k = '') => [`The administrator @${n} has just sent a text that contains too many characters -.-!`, `*[ ! ] A message containing too many characters was detected [ ! ]* ${n ? "" : `${saltos}\nI am not an administrator, I cannot do anything more... :/`}`, `Mark the chat as read ✓\n${saltos}\n=> Number: wa.me/${n}\n=> Alias: ${k}\n[ ! ] Just sent a text that contains too many characters that may cause issues on mobile devices`],

AiChat: (n = '', k = '') => ["Please, be more specific in your message.", "And the message?", `Successfully ${n ? "activated" : "deactivated"} "${k}".`],

Netw: (m = '', d = '', z = '') => `*[ ! ] Please use a ${d} link*\n_Example of use:_\n\n${Prefijo + m} ${z}`,

Schd: (m = '', d = '', z = '') => `*[ ! ] Please enter a text to perform the respective search on ${d}*\n_Example of use:_\n\n${Prefijo + m} ${z}`,

Nime: (n="", k="") => ["Use a screenshot or image of an anime scene", `${n ? 'If the result is not what you expected, try using a good resolution image of an "anime" scene!  ' : 'I cannot assure you that the result is 100% accurate u.u'}`, `*🔖Title:* _${n || "N/N"}_\n*🎴Episode:* _${k || "N/N"}_\n`],

Vthx: "`💻 Social networks 📲`\n\n[ > ] Youtube channel:\n- https://youtu.be/-BnJigQ4-cM\n\n[ f ] Facebook page:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://www.tiktok.com/@nekosmic/video/6867645537231850753 \n\n> ᵈᵒⁿ'ᵗ ᵃˢᵏ ᶠᵒʳ ᵐᵒⁿᵉʸ⁻ ᵒⁿˡʸ ʷᶦᵗʰ ʸᵒᵘʳ ˢᵘᵖᵖᵒʳᵗ ᴵ ᵃᵐ ʰᵃᵖᵖʸ :³",

Tptv: "Please reply or submit a video that does not exceed 59 seconds in length.",

Mlti: (a = '') => `*\`Example of use (available languages):\`*\n\n> Idioma español 🇵🇪\n-  ${a} es\n\n> English language 🇺🇲\n-  ${a} en\n\n> Idioma português 🇧🇷\n-  ${a} pt\n\n> Bahasa Indo 🇮🇩\n-  ${a} id\n\n> deutsche Sprache 🇩🇪\n-  ${a} de\n\n> Auto... 🌎\n-  ${a} auto\n`,

Gbnd: ["Chat successfully banned ✓", "Chat successfully unbanned ✓"],

Gemx: (a = '') => `*Example of use:*\n\n${Prefijo+a} 🥺+🥵\n`,

Jttt: (n='', k='') => [`\`[ TIC-TAC-TOE GAME ]\`\n      \n*To create a room, example:*\n\n> You can challenge another player\n${Prefijo+n} random\n\n-\n*To play against the bot:*\n\n> Mode 1\n${Prefijo+n} bot\n\n> Mode 2\n${Prefijo+n} bot troll\n\n-\n*NOTE:*\n_When you're in an active game, use the following commands to make a move on the board from 1 to 9, Example:_\n\n${Prefijo+n} 4\n`, `*You're challenging me!*\n\n> You go first.\n\n${n}\n`, "You are already playing against the bot. Finish the game before joining a new room.", `You are already in the room "${n}". Finish the game before joining another room.`, `The room "${n}" has been deleted due to inactivity.`, `Room "${n}" created. Waiting for another player to join using the same room name...`, `You have joined the room "${n}". The game starts now.\n${k}`, "Invalid move. Choose a free position between 1 and 9.", `${n}\n\n> ${k}'s turn`, `${n}\n\n> Your turn`],

Wppr: (n = '', k = '') => [`┏━⊱ Wallpaper: ${n}\n┗⊱ Requested by : @${k}`],

Frs: (n="", k="") => `- *Phrase:* _${n}.._\n\n> *Author:* _${k}_\n`,

Fxm3: (m = '', d = '', z ="") => [`*Here is a list of available effects:*\n\n- ${m}\n\nUsage example: ${Prefijo+d} ${z}`, "`[ ! ] Reply to an audio message`\n\n> Maximum duration is 2 minutes"],

AdmOpt: (n = '', k = '') => [`The ${k} was ${n ? 'turned on' : 'turned off'} for this chat`, "Here is the list of options :3", "Option:", "Description:", "Command:", [
  {
    t: "[ ⬇️ AUTOMATIC WELCOME ]",
    o1: "[ 🛬 Enable ]",
    d1: "~The bot will welcome new participants in a group~",
    c1: `${Prefijo}on welcome`,
    o2: "[ 🛫 Disable ]",
    d2: "~The bot will not welcome new participants in a group~",
    c2: `${Prefijo}off welcome`
  },
  {
    t: "[ ⬇️ AUTOMATIC FAREWELL ]",
    o1: "[ 👋 Enable ]",
    d1: "~The bot will indicate when a participant leaves the group~",
    c1: `${Prefijo}on farewell`,
    o2: "[ ✊ Disable ]",
    d2: "~The bot will not take any farewell actions~",
    c2: `${Prefijo}off farewell`
  },
  {
    t: "[ ⬇️ ADMINS ONLY ]",
    o1: "[ ⭐ Enable ]",
    d1: "~Now only group admins can use the bot~",
    c1: `${Prefijo}on onlyadmins`,
    o2: "[ ✨ Disable ]",
    d2: "~Now all group participants can use the bot~",
    c2: `${Prefijo}off onlyadmins`
  },
  {
    t: "[ ⬇️ DETECTION ]",
    o1: "[ 🌕 Enable ]",
    d1: "~The bot will detect changes made in a group~",
    c1: `${Prefijo}on detection`,
    o2: "[ 🌑 Disable ]",
    d2: "~Changes made in a group will not be detected~",
    c2: `${Prefijo}off detection`
  },
  {
    t: "[ ⬇️ ANTI-WALINKS ]",
    o1: "[ 🗡️ Enable ]",
    d1: "~The bot will remove any participant who sends a link in a group~",
    c1: `${Prefijo}on walink`,
    o2: "[ 😴 Disable ]",
    d2: "~No action will be taken when links are sent~",
    c2: `${Prefijo}off walink`
  },
  {
    t: "[ ⬇️ ANTI-TAGALL ]",
    o1: "[ 🧐 Enable ]",
    d1: "~The bot will remove participants who tag everyone~",
    c1: `${Prefijo}on antitagall`,
    o2: "[ 😶 Disable ]",
    d2: "~The bot will not do anything when everyone is tagged~",
    c2: `${Prefijo}off antitagall`
  },
  {
    t: "[ ⬇️ ANTI-URLS ]",
    o1: "[ 🗡️ Enable ]",
    d1: "~The bot will remove participants who send links~",
    c1: `${Prefijo}on antilink`,
    o2: "[ 😴 Disable ]",
    d2: "~No action will be taken when links are sent~",
    c2: `${Prefijo}off antilink`
  },
  {
    t: "[ ⬇️ ANTI-FAKES 1 ]",
    o1: "[ 🛡️ Enable ]",
    d1: "~This command enables protection against US numbers (+1)~",
    c1: `${Prefijo}on antifake1`,
    o2: "[ ⚰️ Disable ]",
    d2: "~Disable Anti-Fakes 1 in the group~",
    c2: `${Prefijo}off antifake1`
  },
  {
    t: "[ ⬇️ ANTI-FAKES 2 ]",
    o1: "[ 🛡️ Enable ]",
    d1: "~Protection against fake or virtual numbers is enabled~",
    c1: `${Prefijo}on antifake2`,
    o2: "[ ⚰️ Disable ]",
    d2: "~Disable Anti-Fakes 2 in the group~",
    c2: `${Prefijo}off antifake2`
  },
  {
    t: "[ ⬇️ ANTI-FOREIGNERS ]",
    o1: "[ 🏳️ Enable ]",
    d1: `~Protection against numbers other than the owner's prefix is enabled. Numbers starting with  +${LocPref}  will not be removed~`,
    c1: `${Prefijo}on antiforeigners`,
    o2: "[ 🏴 Disable ]",
    d2: "~Disable Anti-Foreigners in the group~",
    c2: `${Prefijo}off antiforeigners`
  },
  {
    t: "[ ⬇️ ANTI-TRABA ]",
    o1: "[ 🐸 Enable ]",
    d1: "~This command enables Anti-Traba protection on WhatsApp~",
    c1: `${Prefijo}on antitraba`,
    o2: "[ 👾 Disable ]",
    d2: "~Anti-Traba disabled~",
    c2: `${Prefijo}off antitraba`
  },
  {
t: "[ ⬇️ CHAT - BOT ]",
o1: "[ 🗣️ Activate ]",
d1: "~This command activates a chat-bot in a WhatsApp group~",
c1: `${Prefijo}on chatbot`,
o2: "[ 👤 Deactivate ]",
d2: "~Deactivate chat-bot in the current group~",
c2: `${Prefijo}off chatbot`
},
{
    t: "[ ⬇️ +18 - NSFW ]",
    o1: "[ 🥵️ Activate ]",
    d1: "~Adult content commands will be activated~",
    c1: `${Prefijo}on nsfw`,
    o2: "[ 🤠 Deactivate ]",
    d2: "~Disable adult commands~",
    c2: `${Prefijo}off nsfw`
  }
]
],

OwnOpt: (n = '', k = '') => [`The ${n ? 'enabled' : 'disabled'} ${k} for this chat`, [
{
t: "[ ⬇️ RESTRICTED MODE ]",
o1: "[ 🌚 Activated ]",
d1: "~Activates the function to remove participants in groups (Not recommended)~",
c1: `${Prefijo}activate freedom`,
o2: "[ 🌝 Deactivated ]",
d2: "~Actions to remove and add participants deactivated (recommended)~",
c2: `${Prefijo}deactivate freedom`
}
]
],

Dlig: (a = '') => [`*[ ! ] Invalid link*\n_Please use an Instagram link_\nEg: ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],

Gimg: (a = '') => [`_Search by ${a}_`],

Bunt: (n = '', k = '') => ["[ ! ] Error, WhatsApp link does not work or is invalid", `[ ! ] Keep in mind that the minimum number of group participants must be: *${MinimoDeUsuarios}*, for the bot to work`, "Your group will be reviewed by the owner of the bot (he will decide whether to add it or not)"],

Dmdf: (n = '', e = '', k = '', o = '', m = '', d = '') => ["*[ ! ] Invalid link*\n_Please use a MediaFire link_", `*Name:* ${n}\n*Size:* ${e}\n*Extension:* ${k}\n*Upload Date:* ${o}\n*File Type:* ${m}\n*URL:* ${d}`],

Menl: (n = '', e = '', k = '', o = '') => [`Hello ${n}!, 👋`, "Example of use", `*[ ${n} ]*\n≡ ~${e}~\n${Prefijo + k} ${o}`, `╔══════════\n║╭—————————\n`, `║├  ${n}`, `\n║╰—————————\n╚══════════`],

Menu: (n = '', e = '', k = '', o = '', s = '') => ["_Loading menu..._", `╔I [ \`\`\`${n ? e : NombreDelBot}\`\`\` ]
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

Sekr: (n='',e='',k='',o='',s='') => ["*NEAR MATCHES:*\n\n", `\`${n}\`\n- Similarity: ~${e}%~\n- Type: _${k}_\n- Available languages: ${o}\n*Usage example:*\n${s}\n\n`],

Upfl: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', b = '', r = '', u = '') => [`💻 <[ USER PROFILE & INFO]> 🌐\n\n➢ Name: ${n}\n${e?"➢ Is Admin: [✓]":"➢ Is Admin: [X]"}\n${k?"➢ Premium User: Yes":"➢ Premium User: No"} \n${o?"➢ Registered: [✓]":"➢ Registered: [X]"} ${o?`\n➢ Registered Name: ${s}\n➢ Age: ${m}\n➢ Registration Date: ${i}`:""}${c?`\n➢ Gay Percentage: ${c}`:""}\n➢ Remaining Limits: ${b+r+u}\n- Games = ${b}\n- Downloads = ${r}\n- Others = ${u}\n`,`➢ Country: ${n} \n➢ Country Code: ${e} \n➢ Number Origin: ${k||"Not found :("} ${o?"\n➢ Valid Number: [✓]":"\n➢ Valid Number: [X]"} ${s?"\n➢ Mobile Device: [✓]":"\n➢ Mobile Device: [X]"} \n➢ Carrier: ${m} \n➢ Line Type: ${s} \n➢ Local Format: ${i} \n➢ International Format: ${c} \n➢ Country Code: ${b}`],

Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = '', z = '') => ["_Getting information..._",`*~》INFORMATION《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(active)_\n➪ *Current owner* : _${author.name}_\n➪ *Node.js application started* : _${a}ago._\n➪ *Execution time* : _${b}._\n➪ *Whatsapp nickname* : _${c}._\n➪ *Total groups* :  _${d}_\n➪ *Total users* : _${e}_\n➪ *Active groups* : _${f} / ${g}_\n➪ *Personal chats* : _${h}_\n➪ *Total chats* : _${i} / ${j}_\n➪ *Global hits* : _${k}_\n➪ *Bot version* : _${version}_\n➪ *Own-Wpp-Api* : _https://github.com/adiwajshing/_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Temporary folder* : _${l}_\n➪ *Database* : _${m}_\n➪ *Node.js version* : _${n}_\n➪ *Processing speed* : _${o} s_\n➪ *Connection speed* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Platform* : _${r}_\n➪ *Version* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Architecture* : _${u}_\n➪ *Host* : _${v}_\n➪ *Server* : _${w}_\n\n➫ _Memory consumption :_\n${x} ${""==y?"":`\n➫  _Total CPU usage:_\n${y}\n➫ _Used CPU Core(s)_ ${z}`}\n\n┗─━─「 ✵ 」━─━─┛`],

Pimg: (n = '', k = '') => `\n*\`${n}\`*\n\n> ${k} `,

Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = '') => [`🔍 Result found for: ${n}\n${e ? `✍️ Title: ${e}\n⏳ Duration: 1:23 ━━━━●───────── ${k}\n👀 Views: ${o}\n📝 Author: ${s}\n📜 Description: ${x}\n⛓️ URL: ${d}\n\n\`Sending audio, please wait...\`` : ""}`],

Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = '') => [`✍️ Title: ${n}\n⚡ Author: ${e}\n⏰ Duration: ${k}\n👀 Views: ${o}\n📆 Upload Date: ${s}\n📺 Channel: ${m}\n📃 Description: ${i||"-"}\n🧬 ID: ${c}\n\n🧑‍💻 _You can use the following commands to download_${masss}\n\n${_}\n`],

Ureg: (n='',k='',o='',s='',m='',i='',c='')=>["Please enter your registration code","[ ! ] Incorrect registration code","[✓] Your record was deleted from the database successfully 🗑️",`*[ ! ] You have already been registered in my database*\nDo you want to register again?\nUse the command:\n\n${Prefijo}unreg <Registration code>\n`,"Name and age!?",'*[ ! ] Please add a hyphen between name and age*\n\n',"*[ ! ] In age only numbers are accepted -.-*","*[ ! ] Bruh the name is very long ._.*","*[ ! ] Maximum age 30 years*","*[ ! ] Minimum age 13 years*","REGISTER","Name: ","Age: ","Pubescent","Teenager","Young","Adult","Registration date:","Information:",`〘  *REGISTER* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *User register* : @${n}\n╠≽️ *Registered Name* : ${k}\n╠≽️ *Birthdate* : ${o}\n╠≽️ *According to your age you are a* : ${s}\n╠≽️ *Information* : ${m}\n╠≽️ *Number* : wa.me/${c}\n┗─━─━━─━─━━─━\n\n_Registration code_ : ${i}\n\nᴰᵒⁿ'ᵗ ᶠᵒʳᵍᵉᵗ ᵗᵒ ˢᵃᵛᵉ ᵒʳ ᶜᵒᵖʸ ʸᵒᵘʳ ʳᵉᵍᶦˢᵗʳᵃᵗᶦᵒⁿ ᶜᵒᵈᵉ`],

Bscp: ["*🛑 Before proceeding with your reading, please note the following requirements:*\n- _Have official WhatsApp installed on your device_\n- _Have 200MB of free storage on your device_\n- _Have Termux.apk installed_\n- _Have a good internet connection_\n- _Lastly, but most importantly, have patience_ :v\n\n\n*[_>] Tutorials for both Termux application and virtual machines will be uploaded here:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\n> Need more help? Contact my creator:", "Demo Test Tmp"],

Bbot: (a = '', b = '') => ["You will not be able to use this command being a bot [ ! ]", "The option to temporarily be a bot is disabled", `*Hello ${a}!, before continuing please read this mini guide to avoid inconveniences:*\n\n☝️🤓 Information and usage of the command:  ${b}\n\n\`1.- When requesting the linking code for the first time, a unique key will be generated for you to use the command later (do not forget to save your key).\`\n\n\`2.- The command has some actions that you can use:\`\n- ${b} your_key-xxx...\n> _You will be able to manually reconnect if the bot "disconnects"._\n- ${b} your_key-xxx... stop\n> _Will stop the subbot process until you manually reactivate it with your key._\n- ${b} your_key-xxx... neocd\n> _Your current session will be closed and you will be able to request a new code for linking._\n\n\`3.- When you become a subbot, it is recommended that you test your bot in a different group from where the main bot is located.\`\n\n\`4.- The owner and administrator of this bot reserves the right to stop, modify or disable active subbots or system features without prior notice.\`\n\n\`5.- Remember to use the linking code that will be sent to you, if you request the code in vain you will be marked for 1 hour, temporarily preventing access to the command until it can be used again.\`\n\n~The creator of this bot is not responsible for any action, damage or consequence derived from its use.~`, "[_>] Save key...", "Stopping its subbot service...", "Current service deleted, please request a linking code again", "[ ! ] Please use your key to continue...", "[ ! ] Incorrect key, please try again...", `Please enter your full number along with your country code, example usage:\n\n ${Prefijo+a} +19999xxxx`],

Bbbot: ["It took too long to scan one of the codes, stopping service...", '`Use the following code to become a temporary bot`\n1. Tap on the three dots "︙" in the upper right corner on your home screen\n2. Select the option "linked devices"\n3. Tap on "link a device"\n4. At the bottom of your screen there is an option called "Link with phone number" tap there\n\n~[NOTE] The code will expire if not used in time!~\n\n_Sending linking code..._', "A serious error has recently been detected in your subbot session. You won't be able to connect as a bot until the owner restarts the database.", "*Connected successfully*\n\nHere is your unique key to manually reconnect if disconnected from the temporary bot service:", "Your connection as a subbot has been restored again!"],

Boes:(n="",e="",k="",o="")=>[`${n}🤖 *Bot user* : @${e}\n\n${k}${o}`,"ENABLED [✓]","DISABLED [X]","[✓]","[X]","Bot","Anti-Private","Be Sub-Bot","Group","Banned Group","Bot Admin?","Restricted Mode","Only-Admins Mode","Welcome","Anti Links","Anti Urls","Anti Foreigners","No Fakes","No Fakes 2","Detection","Anti-Block","Chat Bot","PUBLIC MODE [✓]","PRIVATE MODE [ ! ]"],

Stks: (a = '') => ["*[ ! ] Maximum video duration is 8 seconds!*", `*[ ! ] Please send or reply with a video or image using the command ${Prefijo + a}*\n_NOTE: Video duration should be 1 to 8 seconds maximum_ ✓`, "[ ! ] Invalid URL, please try another one ;3", "*[ ! ] Please send or reply with an image*"],

Stke: (a = '') => ["Reply to a sticker from the current chat...", `Send or Reply to a sticker with the command ${Prefijo+a}`, "Tip: Delete your sticker for everyone ;v", "[ ! ] Reply to a sticker to get metadata", "[ ! ] Reply to a sticker to set a fake price :p", "Reply to a sticker to edit the EXIF data your way"],

Bblst: (a = '') => ["Currently, there are no active sub-bots...", "*List of numbers that became sub-bots*\n~Some numbers might be inactive!~", `\n*🐝 Bot:* wa.me/${a}`],

Gtag: (n = '', e = '', k = '', o = '') => [`*[ ! ] Summoning group members* :\n${n}\n\n*~> Summoner* : _@${e}_\n*~> Message* : _${k||"No message :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ ᵂʰᵒᵉᵛᵉʳ ᴿᵉᵃᵈˢ ᴵᵗ ⁷ʷ⁷"}`],

Jcal: (a = '') => `*[ ! ] Add slashes between each action*\n_Example of use_ : \n\n${Prefijo+a} @TaggedUser | blessme | blessed\n\n> Don't forget to use this slash:  " | "`,

Jtop: (n = '', k = '') => [`*[ ! ] Indicate an amount to generate the top*\n_Example of use_ :\n\n${Prefijo+n} 5 Followers of the fat :v`, `*\`${n}\`*\n\n`, `_${n}.º @${k}_\n`, `\n> ${NombreDelBot}`],

Jprj: (n = '', e = '', k = '', o = '') => `\n❥ [ FORMED COUPLE ] :\n\n┏─━─━─━∞◆∞━─━─━─┓\n${n} • ${e}\n❤\n️${k} • ${o} \n┗─━─━─━∞◆∞━─━─━─┛`,

Jnij: (n = '', k = '') => ["Enter a name/nickname/phrase/etc...", `\`☯️ Ninja text for [ ${n} ]:\`\n\n- *${k}*`],

Jqun: (a = '') => [`*[ ! ] Make up an issue*\n_Example:_\n\n${Prefijo+a} is gay :v?\n`, `\n👉 ${a}\n`],

Jtgs: (n = '', e = '', k = '', o = '') => [`*Player : ${n}*\n*[ Congratulations, you won!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*┃  | ${e}*\n*┃ ├────────┤ ┃*\n*┃  | ${k} <==*\n*┃ ├────────┤ ┃*\n*┃  | ${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*All your limits were reestablished*`, `Player : ${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n┃  | ${e}\n┃ ├────────┤ ┃\n┃  | ${k}\n┃ ├────────┤ ┃\n┃  | ${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],

Cnal:(m="",d="",z="")=>[`*[ ! ] The snail needs to rest!*\n_You can try again in:_ ${m}`,`${m}\n\n> Days elapsed: ${d}\n> Reward: +${z} limits in each category`,`${m}\n\n> Consolation reward: +${z} limits`,`📜 *The Chronicles of Plank McCaracol*\n*Day 0:* He fell into a ${m}m abyss. The humidity is suffocating, and fear is absolute.`,`*Day ${m}:* The moonlight barely seeps in. He has surpassed half of the infernal pit (${d}m left).`,`*Day ${m}:* Plank activated a dwarven jetpack artifact. He ascended violently amid sparks and smoke.`,`*Day ${m}:* He stumbled upon a legendary treat (Candy) on the rock. Recovered ${d} vitality.`,`*Day ${m}:* Horror! Plank succumbed to exhaustion... but a necromantic miasma enveloped him. He rose as an undead slug.`,`*Day ${m}:* Glory! The snail emerged to the surface after abusing ${d} jetpack(s) during his journey. A lettuce statue will be carved in his honor.`,`*Day ${m}:* The story ends here. His shell rests ${d}m from the exit. It was inevitable.`],

Pptv:(n="",e="",k="",o="",s=0,m=0,i="")=>[`*🪨📄✂️ Challenge sent to @${n}*\n_Both must send me their combo privately (3 to 5 moves, e.g.: rock-paper-scissors)_`,"*[ ! ] You don't have an active PPT challenge right now*","*[ ! ] Invalid combo!*\n_Use 3 to 5 moves separated by hyphens: rock-paper-scissors_","*[ ! ] You already sent your combo, wait for your opponent*",`*🪨📄✂️ Combos complete!*\n> ${e}\n> ${o}\n> Score: ${s} - ${m}\n${i}`],

Ahcd:(n="",e="",k="",o="",s=0)=>[`*🔤 Hangman in progress* (${k})\n\n${n}\n_Lives: ${e}_`,`*🔤 New hangman!* (${k})\n\n${n}\n_Lives: ${e}_\n_Send a letter with:_ /ahorcado <letter>`,"*[ ! ] There is no active hangman, start one with* /ahorcado","*[ ! ] Send only one valid letter*","*[ ! ] That letter was already tried*",`*💀 No lives left! The word was:* ${o}`,`*❌ Wrong letter*\n\n${n}\n_Lives: ${e}_`,`*✅ Good!*\n\n${n}\n_Lives: ${e}_`,`*🎉 Word completed: ${o}!*\n> Reward: +${s} limits`],

Fyhc:(m="",d="",z="")=>[`*[ ! ] You just searched for the hat, try again in:* ${m} min`,`*🎩 Find the hidden hat!*\n\n${m}\n\n_Send your moves, e.g.:_ /fyh 🔼🔽◀️▶️\n_Max 8 moves per turn. Beware of invisible holes..._`,"*[ ! ] Send at least one direction arrow: 🔼 🔽 ◀️ ▶️*",`*🕳️ You fell into a hole after ${m} move(s)!*\n\n${d}\n\n_Game over._`,`*🎩 You found the hat in ${m} move(s)!*\n\n${d}\n\n> Reward: +${z} limits`,`${m}\n\n${d}\n\n_Still not found, send more arrows!_`],

Topl:(n="",e=0,k="",o="",s=0,_=0)=>[`*[ ! ] No one has played "${n}" yet in this group*`,"*[ ! ] No one has played yet in this group*",`*🏆 Tierlist — ${n}*`,"*🏆 General tierlist*",`${e}. @${k} — ${s} wins (${_} games)`,`${e}. @${k} — ${o} | ${s} limits won | ${_} matches`,`*🎉 You leveled up!*\n_New role:_ ${o}`,`*[ ! ] You haven't leveled up yet*\n_Current role:_ ${o}\n_You need ${s} more games played for the next role_`,`*👑 You already have the max role:* ${o}`],

Cn4:(n="",e="",k="",o="",s="")=>["🔴🟡 *Connect 4*\n\n• *.conecta4 bot* — play vs machine (easy)\n• *.conecta4 bot pro* — play vs machine (hard)\n• *.conecta4 <room>* — create/join a room with another player\n• *.conecta4 <1-7>* — play that column once in a game","You already have a Connect 4 game vs the machine in progress.",`🔴🟡 *Connect 4 vs machine* ${s}\n\n${n}\n\nYou are ${e}. Play with *.conecta4 <1-7>*`,"You are already in a Connect 4 game. Finish it before creating another.",`⏳ The Connect 4 room *${o}* expired due to lack of a second player.`,`🔴 Connect 4 room *${o}* created. Waiting for a second player (60s)...`,`🔴🟡 *Connect 4 game started!*\n\n${n}\n\nTurn of ${e} (@${k})`,"That column is full, choose another (1-7).",`${n}\n\nTurn of ${e} (@${k})`,`${n}\n\nTurn of ${e} — your turn, play with *.conecta4 <1-7>*`,`🟡 *The machine wins!* 🟡\n\n${n}`,`🤝 *Draw!* The board is full.\n\n${n}`,`🔴 *@${k} wins!* 🔴\n\n${n}`],

Gcha:(a=0,b="",c="",d="",e=0,f=0,g="",h=0,i=0,j="",k=0)=>[`*[ ! ] You can't collect yet!*\n_Try again in ${a} minute(s)_`,"*[ ! ] Could not obtain a character right now, try again*",`*🎴 New character collected!*\n> ${b} (${c})\n> Rarity: ${d}\n> Level: ${e}`,`*🎴 Duplicate character leveled up!*\n> ${b} (${c})\n> Rarity: ${d}\n> Level: ${e} (${f} copies)`,"*[ ! ] You don't have any cards yet, use* /collect *to get one*","*🎴 Your collection (top 10 by power):*",`${b} (${c}) — ${d} — Level ${e} (${f} copies)`,"*[ ! ] Your opponent doesn't have any cards yet*",`*⚔️ Draw!*\n> ${b} (power ${h}) vs ${g} (power ${i})`,`*⚔️ Card duel!*\n> ${b} (power ${h}) vs ${g} (power ${i})\n🏆 Winner: @${j} (+${k} limits)`,"*[ ! ] I'm still loading the character database for the first time, try again in a few minutes*","*[ ! ] The character database didn't load correctly, notify the bot owner*"],

Jtgy: (n = '', k = '') => ["his percentage of gay is ", `@${n} is ${k} gay`, "*[ ! ] Gay limit exceeded [ ! ]*"],

Clgs: (n = '', k = '') => [`*[ ! ] Use the correct format!* :\n\n🖼️ ~For logos with continuous text~\n[1]  ${Prefijo + n} (effect) (text...), _Example of usage:_\n\n${Prefijo + n} space NeKosmic\n\n🖼️ ~For logos with text separated by a vertical line~\n[2]  ${Prefijo + n} (effect) (text1)|(text2), _Example of usage:_\n\n${Prefijo + n} Pornhub-Style-Logo Fap|Not\n\n🎨 What logo would you like to create? Heres a list of effects:\n\n${k}`,`[ ! ] The effect *${n}* is not in the list...`],

Dtkv: (n = '', e = '', k = '', o = '', m = '', d ="", z = '') => [`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Author: ${n}` : ""} ${e ? `\n?? User: ${e}` : ""} ${k ? `\n📝 Description: ${k}` : ""} ${o ? `\n💕 Likes: ${o}` : ""} ${m ? `\n🎭 Comments: ${m}` : ""} ${d ? `\n🔄 Shared: ${d}` : ""} ${z ? `\n👀 Views: ${z}` : ""}`],

Tozg: (a = '') => [`*[ ! ] Reply to a sticker using the command:*\n\n${Prefijo + a}`, `Converted to ${a ? "video" : "image"} successfully ✓`],

UpBot: (m = '', d = '', z = '') => `*[ ! ] Please specify the name of the file to be updated.*\n_Here is a list of possible files that can be updated with their respective usage examples:_\n\n- ${m}\n\n> If you want to do a full update, use the command:\n\n${Prefijo + d} ${z} ++\n`,

Uact: (n = '', e = '', o = '') => ["*Which participant do you want to make an administrator?*", `Example of use:\n\n${Prefijo+n} @51995...\n`, "Who do you want to ban?", "[ ! ] Please tag the user you want to ban", `User banned, ${n} will no longer be able to use the bot [ ! ]`, "*Which administrator do you want to remove from their position?*", "Who do you want to unban?", `Unbanned user, ${n} can use the bot again [✓]`, `Please tag or mention someone!\n\nExample of use:\n${Prefijo+n} @${e}`, `*${n}* it stopped being premium`, "Please indicate the number of days", `Only numbers!\n\nExample of use:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maximum 7 days", `*[ PREMIUM USER ]*\n🔖 *Name:* ${n}\n📆 *Time:* ${e} days\n📉 *Remaining:* ${o}MS`, "[ ! ] Your premium time is over!\n_I hope you enjoyed :3_\n"],

Gadd: (a = '') => [`[ ! ] Indicate the full number of a WhatsApp user you want to add to the group, Example of use:\n\n${Prefijo+a} +1987....`, `wa.me/${a} is inviting you to his WhatsApp group!`, `*[ ! ] Error, could not add number @${a} to the group*\n\n_Please send him an invitation link manually: wa.me/${a}_\n`],

Uban: ["You hate me? :,c", "Which user do you want to delete!?\nPlease tag one"],

Uwrn: (m = '', d = '', z = '') => [`Reduced the number of warnings to user ${m}\n\n${d} => ${z}\n`, `> The first warning has been given to user ${m}. If you accumulate more than three warnings, you will be removed from the group.`],

Wkpd: (n = '', k = '') => ["[ ! ] No results for your search ;-;", `||  *WIKIPEDIA* ||\n_~> Results for : ${n}_\n\n${k}`],

Dytv: (n = '', k = '') => `Title: ${n}\nSize: ${k}\nExtension: .mp4`,

Ytbd: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '') => [`*[ > ] YouTube results for:* _${a}_\n\n`, `🔖 Title: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Type: ${d}\n🖼️ Thumbnail: ${e}\n⌚ Duration: ${f}\n📜 Description: ${g}\n📆 Upload Date: ${h}\n👀 Views: ${i}\n||\n⚡ Author: ${j}\n📺 Channel: ${k}\n\n*——————————*\n\n`],

Sgst: ["Sorry, you can't send any more comments for now.", "Please be more specific in your message."],

Anws:(n="",e="",k="",o="")=>[`*[ ! ] No recent news found for that topic.*`,`📰 *LATEST NEWS ÙwÚ!* 📰\n\n📌 *Title:* ${n}\n🕒 *Published:* ${e}\n🏷️ *Categories:* ${k}\n\n🔗 *Read full:* ${o}`,"*[ ✓ ] Anime news stopped for this chat.*","*[ ✓ ] Anime news enabled. You will receive a random news item of the day.*","*[ ! ] Please enter a valid day (1-31).*",`*[ ! ] I didn't find news for day ${n}${e}.*`],

Whrs:(n="",e="",k="",o="",s="")=>[`⁉️ *Timezone missing*\n\nAvailable countries:\n${n}\n\n*Example:*\n\n${Prefijo}hora peru`,`🕒 *EXACT TIME*\n\n📍 *Location:* ${n}\n📅 *Date:* ${e}\n⏰ *Time:* ${k}\n${o} \`It's already ${s}\``,"early morning","morning","afternoon","night"],

Wth:(n="",e="",k="",o="",s="",m="",i="")=>[`⁉️ *City missing*\n\n*Example:*\n\n${Prefijo}clima Sicuani`,`🌍 *Weather in ${n}, ${e}*\n\n${m} *Status:* ${i}\n🌡️ *Temperature:* ${k}°C\n💧 *Humidity:* ${o}%\n💨 *Wind:* ${s} km/h`,"Clear","Partly cloudy","Cloudy","Fog","Drizzle","Rain","Snow","Showers","Storm","Unknown"]

};