import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "pt",

Habla: () => "Idioma português",

Start: () => ["Executando o Bot mais Kawaii do terceiro mundo.\nIniciando execução do script...", "\n[!] Código finalizado:"],

Conn: (a = '') => ["Conectando...", "Motivo de desconexão:", "Tempo de conexão esgotado, reconectando...", "Reinício necessário, reiniciando...", "Dispositivo desconectado, por favor, vincule novamente e execute.", "Conexão substituída, uma nova sessão foi aberta, por favor, encerre a sessão atual primeiro.", "Conexão perdida com o servidor, reconectando...", "Conexão fechada, reconectando...", "Arquivo de sessão incorreto, por favor, elimine a sessão atual e vincule novamente", "Conectado ✓", "\n\n[_>] Se você vai utilizar o método de pareamento, por favor, insira o número que se tornará o bot. Certifique-se de inserir o número completo do WhatsApp junto com seu código de país.\nExemplo: +55xxx...\n", `\nCódigo de pareamento para o número "+${a}":`],

Call: (n = '', k = "") => `\n*[ ! ] ${n} Você será bloqueado*\n_Motivo: por fazer uma ${k ? "ligação de vídeo" : "ligação"} para este número sem autorização!_\n`,

GpUp: (o = "") => ["🔒 *[ GRUPO FECHADO ]* 🔒\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🔓 *[ GRUPO ABERTO ]* 🔓\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ, ᵉˢᵗᵉʲᵃ ᶜᶦᵉⁿᵗᵉ ᵈᵉ ᵖᵉˢˢᵒᵃˢ ᶜᵒᵐ ʳᵉᵗᵃʳᵈᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASSUNTO DE GRUPO ALTERADO ]* 🤳\n\nNovo nome: _${o}_\n`],

RestriN: () => "[!] Falha ao remover o novo participante, por favor, ative o modo restrito!",

AlertList: () => "[!] Exclua os números que começam com '1' da Blacklist em ./config.json...!",

WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Bem-vindo(a) @${n} a este incrível grupo* ${e}\n📆 *Data de entrada: ${k}*\n🍷 _*Espero que você aproveite sua estadia aqui, não se esqueça de respeitar os participantes e as regras*_ ;)\n\n📜 *Regras do grupo atualmente:* \n${masss}\n${o}`,

WlcRemove: (n= '', k = "") => `[!] Esquerda: @${n}\n- Data de partida |  ${k}`,

WlcPromot: (m = '', d = '', z = "") => [`*Parabéns @${m}!, ${z || 'Um administrador'} acabou de te dar um grande poder, agora você é um administrador do grupo*: _${d}_\n`, `~Agora eu tenho o poder absoluto e não me importo!~\n\n*Quero dizer..., _Muito obrigado(a) a ${m || 'um administrador'} por me dar a administração, farei o meu melhor para este grupo!!!_ :D*`],

WlcDemot: (m = '', d = '', z = "") => [`*${z || 'Um administrador'} acabou de rebaixar @${m} e não é mais um administrador do grupo*: _${d}_`, "Que triste, não sou mais um administrador unu"],

Cprint: () => ["EXECUTANDO", "MENSAGEM", "Por", "De", "Chat", "grupo:","Privado:", "Data"],

MsjRowner: () => "*[ ! ]* Este comando só pode ser usado *a partir do bot principal*!",

MsjOwner: () => "*[ ! ]* Este comando só pode ser usado pelo *proprietário do bot*!",

MsjMods: () => "*[ ! ]* Este comando só pode ser usado por um *moderador*!",

MsjPremium: () => "*[ ! ]* Esta solicitação é apenas para usuários *premium*!",

MsjGroup: () => "*[ ! ]* Este comando só pode ser usado em *grupos*!",

MsjPrivate: () => "*[ ! ]* Este comando só pode ser usado em *chat privado*!",

MsjAdmin: () => "*[ ! ]* Este comando só pode ser usado pelos *administradores do grupo*!",

MsjBotAdmin: () => "*[ ! ]* O bot precisa *ser administrador* para usar este comando!",

MsjRestrict: () => "[ ! ] Para realizar ações de exclusão, meu proprietário precisa ativar o modo restrito!",

SpmrCmd: (a = "") => ["_Aguarde alguns segundos antes de usar outro comando..._ ✓", `[ ! ] ${a} Por favor, não sobrecarregue o bot ;-;`],

SpmrCnsl: () => "[SPAMER CMD] Comando:",

Error: () => ["[ ! ] Erro, tente novamente mais tarde...", "[ ! ] Ocorreu um erro inesperado u.u [ ! ]"],

Antnlc: (a = "") => ["[ ! ] Meu maluco você acabou de enviar um link, o bom é que o link detectado é desse grupo owo", "*[ ! ] Link detectado [ ! ]*\n\n_Felizmente não sou administrador, então Eu não posso fazer nada unu_", `*[ ! ] Link detectado [ ! ]*\n_Agora se você valesse @${a} Adeus..._\n`],

Antgll: () => ["Você acabou de mencionar todos os participantes deste grupo, não sou um administrador, então não posso fazer nada :0", "A ação de mencionar todos é proibida neste grupo, adeus!"],

Antlnk: (a = "") => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Felizmente, não sou um administrador, então não posso fazer nada :v_"}`,

Antrb: (n = '', k = "") => [`O administrador @${n} acabou de enviar um texto que contém muitos caracteres -.-!`, `*[ ! ] Foi detectada uma mensagem que contém muitos caracteres [ ! ]* ${n ? "" : `${saltos}\nNão sou um administrador, não posso fazer mais nada... :/`}`, `Marcar o chat como lido ✓\n${saltos}\n=> Número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acabou de enviar um texto que contém muitos caracteres que pode causar problemas em dispositivos móveis`],

AiChat: (n = "", k = "") => ["Por favor, seja mais específico em sua mensagem", "E a mensagem?", `"${k}" foi ${n ? "ativado" : "desativado"} com sucesso.`],

Nime: (n="", k="") => ["Use uma captura de tela ou imagem de uma cena de anime", `${n ? 'Se o resultado não for o esperado, tente usar uma imagem de boa resolução de uma cena de “anime”!  ' : 'Não posso garantir que o resultado seja 100% preciso u.u'}`, `*🔖Título:* _${n || "N/N"}_\n*🎴Episódio:* _${k || "N/N"}_\n`],

Vthx: () => "`💻 Redes sociais 📲`\n\n[ > ] Canal do Youtube:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Página do Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\n> ᴺᵃ̃ᵒ ᵖᵉᶜ̧ᵒ ᵈᶦⁿʰᵉᶦʳᵒ⁻ ˢᵒ́ ᶜᵒᵐ ᵒ ˢᵉᵘ ᵃᵖᵒᶦᵒ ᶠᶦᶜᵒ ᶠᵉˡᶦᶻ :³",

Tptv: () => "Por favor, responda ou envie um vídeo que não exceda 59 segundos de duração.",

Gbnd: () => ["Bate-papo banido com sucesso ✓", "Bate-papo desbanido com sucesso ✓"],

Gemx: (a = "") => `*Exemplo de uso:*\n\n${Prefijo+a} 🥺+🥵\n`,

Dfbv: (a = "") => [`*[ ! ] Link inválido*\n_Por favor, use um Link válido de um vídeo do Facebook_\n\nExemplo de uso: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Erro, talvez o link seja inválido ou o vídeo seja privado, tente novamente mais tarde"],

Wppr: (n = "", k = "") => [`┏━⊱ Papel de parede: ${n}\n┗⊱ Solicitado por: @${k}`],

Frs: (n="", k="") => `- *Frase:* _${n}.._\n\n> *Autor:* _${k}_\n`,

Fxm3: (m = "", d = "", z ="") => [`*Aqui está uma lista de efeitos disponíveis:*\n\n- ${m}\n\nExemplo de uso: ${Prefijo+d} ${z}`, "`[ ! ] Responda uma mensagem de áudio`\n\n> Máximo 2 minutos de duração"],

GpOpt: (n = '', k = "") => [`Foi ${n ? 'ativada' : 'desativada'} a opção ${k} para este grupo`, "Aqui está a lista de opções :3", "Opção", "Descrição:", "Comando:"],

GpActn: () => [{
titulo: "[ ⬇️ BEM-VINDO AUTOMÁTICO ]",
func: [{
action: "[ 🛬 Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ᵈᵃʳᵃ́ ᵃˢ ᵇᵒᵃˢ⁻ᵛᶦⁿᵈᵃˢ ᵃᵒˢ ⁿᵒᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}activar bienvenida`
}, {
action: "[ 🛫 Desativar ]",
desc: "~ᴺᵒᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ ⁿᵃ̃ᵒ ˢᵉʳᵃ̃ᵒ ᵇᵉᵐ⁻ᵛᶦⁿᵈᵒˢ~",
cmd: `${Prefijo}desactivar bienvenida`
}]
}, {
titulo: "[ ⬇️ ADEUS AUTOMÁTICO ]",
func: [{
action: "[ 👋 Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ᶦⁿᵈᶦᶜᵃʳᵃ́ ᵃ ˢᵃᶦ́ᵈᵃ ᵈᵉ ᵘᵐ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ ᵈᵒ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}activar despedida`
}, {
action: "[ ✊ Desativar ]",
desc: "~ᴼ ᵇᵒᵗ ⁿᵃ̃ᵒ ᶠᵃʳᵃ́ ⁿᵉⁿʰᵘᵐᵃ ᵃᶜ̧ᵃ̃ᵒ ᵈᵉ ᵈᵉˢᵖᵉᵈᶦᵈᵃ~",
cmd: `${Prefijo}desactivar despedida`
}]
}, {
titulo: "[ ⬇️ APENAS - ADMINISTRADOR ]",
func: [{
action: "[ ⭐ Ativar ]",
desc: "~ᴬᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉʳᵃ̃ᵒ ᵘˢᵃʳ ᵒ ᵇᵒᵗ~",
cmd: `${Prefijo}activar soloadmins`
}, {
action: "[ ✨ Desativar ]",
desc: "~ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉʳᵃ̃ᵒ ᵘˢᵃʳ ᵒ ᵇᵒᵗ~",
cmd: `${Prefijo}desactivar soloadmins`
}]
}, {
titulo: "[ ⬇️ DETECÇÃO ]",
func: [{
action: "[ 🌕 Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ᵒˢ ᵃʲᵘˢᵗᵉˢ ᶠᵉᶦᵗᵒˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}activar deteccion`
}, {
action: "[ 🌑 Desativar ]",
desc: "~ᴺᵃ̃ᵒ ˢᵉᶦ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ᵃʲᵘˢᵗᵉˢ ᶠᵉᶦᵗᵒˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}desactivar deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI-WA_LINKS ]",
func: [{
action: "[ 🗡️ Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ʳᵉᵐᵒᵛᵉʳᵃ́ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵖᵒˢᵗᵃʳᵉᵐ ˡᶦⁿᵏˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}activar antienlaces`
}, {
action: "[ 😴 Deactivate ]",
desc: "~ᴺᵉⁿʰᵘᵐᵃ ᵃᶜ̧ᵃ̃ᵒ ˢᵉʳᵃ́ ᵗᵒᵐᵃᵈᵃ ᑫᵘᵃⁿᵈᵒ ᵒˢ ˡᶦⁿᵏˢ ᵈᵒ ᵂʰᵃᵗˢᴬᵖᵖ ᶠᵒʳᵉᵐ ᵉⁿᵛᶦᵃᵈᵒˢ~",
cmd: `${Prefijo}desactivar antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ʳᵉᵐᵒᵛᵉʳᵃ́ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵐᵃʳᶜᵃʳᵉᵐ ᵗᵒᵈᵒˢ~",
cmd: `${Prefijo}activar antitagall`
}, {
action: "[ 😶 Desativar ]",
desc: "~ᴼ ᵇᵒᵗ ⁿᵃ̃ᵒ ᶠᵃʳᵃ́ ⁿᵃᵈᵃ ᑫᵘᵃⁿᵈᵒ ᵗᵒᵈᵒˢ ᵉˢᵗᶦᵛᵉʳᵉᵐ ᵐᵃʳᶜᵃᵈᵒˢ~",
cmd: `${Prefijo}desactivar antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Ativar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵘᵐ ᶜʰᵃᵗᵇᵒᵗ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ ᵈᵒ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}activar chatbot`
}, {
action: "[ 👤 Desativar ]",
desc: "~ᴰᵉˢᵃᵗᶦᵛᵃʳ ᶜʰᵃᵗᵇᵒᵗ ⁿᵒ ᵍʳᵘᵖᵒ ᵃᵗᵘᵃˡ~",
cmd: `${Prefijo}desactivar chatbot`
}]
}, {
titulo: "[ ⬇️ MODO RESTRITO ]",
func: [{
action: "[ 🌚 Ativado ]",
desc: "~ᴬᵗᶦᵛᵉ ᵃ ᶠᵘⁿᶜ̧ᵃ̃ᵒ ᵖᵃʳᵃ ʳᵉᵐᵒᵛᵉʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉ ᵘᵐ ᵍʳᵘᵖᵒ ⁽ᵖᵒʳ ˢᵘᵃ ᶜᵒⁿᵗᵃ ᵉ ʳᶦˢᶜᵒ⁾~",
cmd: `${Prefijo}activar restringido`
}, {
action: "[ 🌝 Desabilitado ]",
desc: "~ᴬᶜ̧ᵒ̃ᵉˢ ᵖᵃʳᵃ ᵃᵈᶦᶜᶦᵒⁿᵃʳ ᵉ ʳᵉᵐᵒᵛᵉʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵃˢ~",
cmd: `${Prefijo}desactivar restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ʳᵉᵐᵒᵛᵉʳᵃ́ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉⁿᵛᶦᵃʳᵉᵐ ᵘʳˡˢ~",
cmd: `${Prefijo}activar antiurl`
}, {
action: "[ 😴 Desativar ]",
desc: "~ᴺᵃ̃ᵒ ˢᵉᶦ ˢᵉ ᵉˣᵉᶜᵘᵗᵃʳᵃ́ ᑫᵘᵃˡᑫᵘᵉʳ ᵃᶜ̧ᵃ̃ᵒ ᑫᵘᵃⁿᵈᵒ ᵒˢ ᵘʳˡˢ ᶠᵒʳᵉᵐ ᵉⁿᵛᶦᵃᵈᵒˢ~",
cmd: `${Prefijo}desactivar antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI - FALSOS 1 ]",
func: [{
action: "[ 🛡️ Ativar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵃ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵃᵐᵉʳᶦᶜᵃⁿᵒˢ ⁺¹~",
cmd: `${Prefijo}activar antifake1`
}, {
action: "[ ⚰️ Desativar ]",
desc: "~ᴰᵉˢᵃᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ⁿᵒ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}desactivar antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - FALSOS 2 ]",
func: [{
action: "[ 🛡️ Ativar ]",
desc: "~ᴬ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵉˢᵗʳᵃⁿʰᵒˢ ᵒᵘ ˢᵘˢᵖᵉᶦᵗᵒˢ ᵉˢᵗᵃ́ ᵃᵗᶦᵛᵃᵈᵃ~",
cmd: `${Prefijo}activar antifake2`
}, {
action: "[ ⚰️ Desativar ]",
desc: "~ᴰᵉˢᵃᵗᶦᵛᵉ ᵒ ᴬⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ⁿᵒ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}desactivar antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI - ESTRANGEIROS ]",
func: [{
action: "[ 🏳️ Ativar ]",
desc: "~ᴬ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵈᶦᶠᵉʳᵉⁿᵗᵉˢ ᵈᵒ ᵖʳᵉᶠᶦˣᵒ ᵈᵒ ᵖʳᵒᵖʳᶦᵉᵗᵃ́ʳᶦᵒ ᵉˢᵗᵃ́ ᵃᵗᶦᵛᵃᵈᵃ~\nᴺᵘ́ᵐᵉʳᵒˢ ᶜᵒᵐᵉᶜ̧ᵃⁿᵈᵒ ᶜᵒᵐ +" + LocPref + " ⁿᵃ̃ᵒ ˢᵉʳᵃ̃ᵒ ʳᵉᵐᵒᵛᶦᵈᵒˢ~",
cmd: `${Prefijo}activar antiextranjeros`
}, {
action: "[ 🏴 Desativar ]",
desc: "~ᴰᵉˢᵃᵇᶦˡᶦᵗᵃʳ ᴬⁿᵗᶦ ᴱˢᵗʳᵃⁿᵍᵉᶦʳᵒˢ ⁿᵒ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}desactivar antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - CRASH ]",
func: [{
action: "[ 🐸 Ativar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵃ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵈᵉ ᵗʳᵃᵛᵃᵐᵉⁿᵗᵒ ⁿᵒ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}activar antitraba`
}, {
action: "[ 👾 Desativar ]",
desc: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᵉˢᵃᵗᶦᵛᵃᵈᵒ~",
cmd: `${Prefijo}desactivar antitraba`
}]
}],

Dlig: (a = "") => [`*[ ! ] Link inválido*\n_Por favor, use um link do Instagram_\nExemplo: ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],

Gimg: (a = '') => [`_Pesquisar por ${a}_`],

Bunt: (n = '', k = "") => ["[ ! ] Erro, link do WhatsApp não funciona ou é inválido", `[ ! ] Tenga en cuenta que la cantidad mínima de participantes del grupo debe de ser: *${MinimoDeUsuarios}*, para que el bot funcione`],

Dmdf: (n = "", e = "", k = "", o = "", m = "", d = "") => ["*[ ! ] Link inválido*\n_Por favor, use um link do MediaFire_", `*Nome:* ${n}\n*Tamanho:* ${e}\n*Extensão:* ${k}\n*Data de upload:* ${o}\n*Tipo de arquivo:* ${m}\n*URL:* ${d}`],

Menl: (a = "") => [`Olá ${a}!, 👋`,
[{
info: `*[ Conversor-de-Menu ♻️ ]*
≡ ~ᴾᵃʳᵃ ʳᵉᵃˡᶦᶻᵃʳ ᶜᵒⁿᵛᵉʳˢᵒ̃ᵉˢ~
${Prefijo}menu cnv`
},
{
info: `*[ Downloads-de-menu ♻️ ]*
≡ ~ᴾᵃʳᵃ ᶠᵃᶻᵉʳ ᵈᵒʷⁿˡᵒᵃᵈˢ~
${Prefijo}menu dwd`
},
{
info: `*[ Pesquisa-de-menu ♻️ ]*
≡ ~ᴾᵃʳᵃ ᵖᵉˢᑫᵘᶦˢᵃʳ~
${Prefijo}menu sch`
},
{
info: `*[ Ferramenta-de-menu ♻️ ]*
≡ ~ᴸᶦˢᵗᵃ ᵈᵉ ᶠᵉʳʳᵃᵐᵉⁿᵗᵃˢ~
${Prefijo}menu hta`
},
{
info: `*[ Menu-Jogos ♻️ ]*
≡ ~ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ˢᵉ ᵈᶦᵛᵉʳᵗᶦʳ~
${Prefijo}menu gmr`
},
{
info: `*[ Administradores-de-menu ♻️ ]*
≡ ~ˢᵒᵐᵉⁿᵗᵉ ᵖᵃʳᵃ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ~
${Prefijo}menu adm`
},
{
info: `*[ Proprietário-do-menu ♻️ ]*
≡ ~ˢᵒᵐᵉⁿᵗᵉ ᵖᵃʳᵃ ᵒ ᵖʳᵒᵖʳᶦᵉᵗᵃ́ʳᶦᵒ ᵈᵒ ᵇᵒᵗ~
${Prefijo}menu own`
},
{
info: `*[ Menu-Aleatório ♻️ ]*
≡ ~ᶜᵒᵐᵃⁿᵈᵒˢ ᵃˡᵉᵃᵗᵒ́ʳᶦᵒˢ~
${Prefijo}menu rdm`
},
{
info: `*[ Menu-completo ♻️ ]*
≡ ~ᴸᶦˢᵗᵃ ᶜᵒᵐᵖˡᵉᵗᵃ ᵈᵉ ᵗᵒᵈᵒˢ ᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ~
${Prefijo}menucompleto`
}]
],

Menu: (n = '', e = '', k = '', o = "", s = '') => ["_Carregando cardápio..._", `╔I [ \`\`\`${n ? e : NombreDelBot}\`\`\` ]
║❂ Tempo ativo: ${k}
║❂ Versão do bot: ${version}
║❂ Proprietário do bot: ${author.name}
║❂ Prefixo exclusivo: 「  ${Prefijo}  」
║❂ Cliente: ${o}
╚══════════ ${n ? `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Sub-bot de ${s}
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

Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ PERFIL E INFORMAÇÕES DO USUÁRIO]> 🌐\n\n➢ Nome: ${n}\n${e?"➢ É administrador: [✓]":"➢ É administrador: [X]"}\n${k?"➢ Usuário premium: Sim":"➢ Usuário premium: Não"} \n${o?"➢ Registrado: [✓]":"➢ Registrado: [X]"} ${o?`\n➢ Nome registrado: ${s}\n➢ Idade: ${m}\n➢ Data de registro: ${i}`:""}${c?`\n➢ Porcentagem gay: ${c}`:""}\n➢ Limites restantes: ${b+r+u}\n- Jogos = ${b}\n- Downloads = ${r}\n- Outros = ${u}\n`,`➢ País: ${n} \n➢ Código do país: ${e} \n➢ Origem do número: ${k||"Não encontrado u.u"} ${o?"\n➢ Número válido: [✓]":"\n➢ Número válido: [X]"} ${s?"\n➢ Dispositivo móvel: [✓]":"\n➢ Dispositivo móvel: [X]"} \n➢ Operadora: ${m} \n➢ Tipo de linha: ${s} \n➢ Formato local: ${i} \n➢ Formato internacional: ${c} \n➢ Código do país: ${b}`],

Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "", z = '') => ["_Obtendo informações..._",`*~》INFORMAÇÕES《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(ativo)_\n➪ *Dono atual* : _${author.name}_\n➪ *Aplicação Node.js iniciada* : _Há ${a}._\n➪ *Tempo de execução* : _${b}._\n➪ *Apelido no Whatsapp* : _${c}._\n➪ *Total de grupos* :  _${d}_\n➪ *Total de usuários* : _${e}_\n➪ *Grupos ativos* : _${f} / ${g}_\n➪ *Conversas pessoais* : _${h}_\n➪ *Total de conversas* : _${i} / ${j}_\n➪ *Hits globais* : _${k}_\n➪ *Versão do bot* : _${version}_\n➪ *Own-Wpp-Api* : _https://github.com/adiwajshing/_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Pasta temporária* : _${l}_\n➪ *Banco de dados* : _${m}_\n➪ *Versão do NodeJs* : _${n}_\n➪ *Velocidade de processamento* : _${o} s_\n➪ *Velocidade de conexão* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Plataforma* : _${r}_\n➪ *Versão* : _${s}_\n➪ *Sistema operacional base* : _${t}_\n➪ *Arquitetura* : _${u}_\n➪ *Host* : _${v}_\n➪ *Server* : _${w}_\n\n➫ _Consumo de memória :_\n${x} ${""==y?"":`\n➫  _Uso total de CPU:_\n${y}\n➫ _CPU Core(s) Usado_ ${z}`}\n\n┗─━─「 ✵ 」━─━─┛`],

Pimg: (n = '', k = '') => `\n*\`${n}\`*\n\n> ${k} `,

Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`🔍 Resultado encontrado para: ${n}\n${e?`✍️ Título: ${e}\n⏳ Duração: 1:23 ━━━━●───────── ${k}\n👀 Visualizações: ${o}\n📝 Autor: ${s}\n📜 Descrição: ${x}\n⛓️ URL: ${d}\n\n\`Enviando áudio, aguarde...\``:""}`],

Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`✍️ Título : ${n}\n⚡ Autor : ${e}\n⏰ Duração : ${k}\n👀 Visualizações : ${o}\n📆 Data de upload : ${s}\n📺 Canal : ${m}\n📃 Descrição : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Você pode usar os seguintes comandos para baixar_${masss}\n\n\`Áudio\`\n├  ${Prefijo}ytmp3 ${_}\n├  ${Prefijo}yta ${_}\n└  ${Prefijo}ytabochi ${_}\n\n\`Vídeo\`\n├  ${Prefijo}ytmp4 ${_}\n├  ${Prefijo}ytv ${_}\n└  ${Prefijo}ytvbochi ${_}\n`],

Bscp: () => [`*🛑 Antes de prosseguir com a leitura, observe os seguintes requisitos:*\n- _Ter o WhatsApp oficial em seu dispositivo_\n- _Ter 200MB de espaço livre em seu dispositivo_\n- _Ter o aplicativo Termux instalado_\n- _Ter uma boa conexão com a internet_\n- _E, por último, mas não menos importante, ter paciência_ :v\n\n\n*[_>] Aqui serão postados tutoriais tanto para o aplicativo Termux quanto para máquinas virtuais:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\n> Precisa de mais ajuda? Entre em contato com o meu criador:`, "Demo Test Tmp"],

Bbot: (a = '', b = "") => ["Você não pode usar este comando sendo um bot [ ! ]", "A opção temporária para ser bot está desativada", `*Olá ${a}!, antes de continuar, por favor, leia este pequeno guia para evitar problemas:*\n\n☝️🤓 Informações e uso do comando:  ${b}\n\n\`1.- Ao solicitar o código de vinculação pela primeira vez, será gerada uma chave única para que você possa usar o comando posteriormente. (não se esqueça de guardar sua chave).\`\n\n\`2.- O comando tem algumas ações que você pode utilizar:\`\n- ${b} sua_chave-xxx...\n> _Você poderá se conectar manualmente caso o bot "desconecte"._\n- ${b} sua_chave-xxx... stop\n> _Interromperá o processo de subbot até que você o reative manualmente com sua chave._\n- ${b} sua_chave-xxx... neocd\n> _Sua sessão atual será encerrada e você poderá solicitar um novo código para vincular._\n\n\`3.- Quando você se tornar um subbot, é recomendável sair dos grupos onde está o bot principal, isso é para evitar possíveis erros ou conflitos com o sistema antispam do bot.\`\n\n\`4.- O proprietário e administrador deste bot reserva-se o direito de interromper, modificar ou desabilitar subbots ativos ou características do sistema sem aviso prévio.\`\n\n\`5.- Lembre-se de usar o código de vinculação que lhe será enviado, se você solicitar o código em vão, será marcado por 1 hora, impedindo temporariamente o acesso ao comando até que possa ser usado novamente.\`\n\n~O criador deste bot não se responsabiliza por qualquer ação, dano ou consequência derivada de seu uso.~`, "[_>] Solicitar código...", "Parando o serviço subbot...", "Serviço atual eliminado, solicite novamente um código de vinculação", "[ ! ] Por favor, use sua chave para continuar...", "[ ! ] Chave incorreta, tente novamente..."],

Bbbot: () => ["Tardou muito para digitalizar um dos códigos, parando o serviço...", '`Use o código a seguir para se tornar um bot temporário`\n1. Toque nos três pontos "︙" no canto superior direito da sua tela inicial\n2. Selecione a opção "dispositivos vinculados"\n3. Toque em "vincular um dispositivo"\n4. Na parte inferior da sua tela, há uma opção chamada "Vincular com o número de telefone", toque lá\n\n~[NOTA] O código expirará se não for usado a tempo!~\n\n_Enviando código de vinculação..._', "Recentemente foi detectado um erro grave na sessão do seu subbot. Você não poderá se conectar como bot até que o proprietário reinicie o banco de dados.", "*Conectado com sucesso*\n\nAqui está sua chave única para se reconectar manualmente caso seja desconectado do serviço de bot temporário:", "Conexão restabelecida, você voltou a ser subbot novamente!"],

Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo banido* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuário* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PÚBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restrito* : _${g?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ATIVADO [✓]":"DESATIVADO [X]"}_\n${a?`\n*Modo Somente-Admins* : _${j?"Ativo [✓]":"Inativo [X]"}_\n\n*Boas-vindas* : _${k?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Links* : _${l?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti URLs* : _${m?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Estrangeiros* : _${n?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos* : _${o?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos 2* : _${p?"Ativo [✓]":"Inativo [X]"}_\n\n*Detecção* : _${q?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti-caiu* : _${r?"Ativo [✓]":"Inativo [X]"}_\n\n*Chat Bot* : _${s?"Ativo [✓]":"Inativo [X]"}_`:""}\n`,

Stks: (a = "") => ["*[ ! ] A duração máxima do vídeo é de 8 segundos!*", `*[ ! ] Por favor, envie ou responda com um vídeo ou imagem usando o comando ${Prefijo+a}*\n_OBSERVAÇÃO: Duração do vídeo de 1 a 8 segundos, no máximo_ ✓`, "[ ! ] URL inválido, tente outro ;3"],

Stke: (a = "") => ["Responda um adesivo do chat atual...", `Envie ou responda um adesivo com o comando ${Prefijo+a}`, "Dica: exclua seu adesivo para todos ;v", "[ ! ] Responda um adesivo para obter os metadados", "[ ! ] Responda um adesivo para atribuir um preço falso :p", "Responda um adesivo para editar o EXIF do seu jeito"],

Bblst: (n = "", k = "") => ["Atualmente não há subbots ativos...", "*Lista de números que foram subbots*\n~Alguns números podem estar inativos!~", `\n*🐝 Bot:* wa.me/${a}`],

Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Convocando membros do grupo* :\n${n}\n\n*~> Convocador* : _@${e}_\n*~> Mensagem* : _${k||"Nenhum :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ Qᵘᵉᵐ ᴸᵉ̂ ⁷ʷ⁷"}`],

Jtgy: (n = "", k = "") => ["sua porcentagem de gays é ", `@${n} é ${k} gay`, "*[ ! ] Limite gay excedido [ ! ]*"],

Clgs: (n = "", k = "") => [`*[ ! ] Use o formato correto!* :\n\n🖼️ ~Para logotipos com texto contínuo~\n[1]  ${Prefijo+n} (efeito) (texto...), _Exemplo de uso:_\n\n${Prefijo+n} space NeKosmic\n\n🖼️ ~Para logotipos com texto separado por uma linha vertical~\n[2]  ${Prefijo+n} (efeito) (texto1)|(texto2), _Exemplo de uso:_\n\n${Prefijo+n} Pornhub-Style-Logo Fap|Not\n\n🎨 Qual logotipo você deseja criar? Aqui está uma lista de efeitos:\n\n${k}`,`[ ! ] O efeito *${n}* não está na lista...`],

Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => [`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Autor: ${n}` : ""} ${e ? `\n🤳 Usuário: ${e}` : ""} ${k ? `\n📝 Descrição: ${k}` : ""} ${o ? `\n💕 Curtidas: ${o}` : ""} ${m ? `\n🎭 Comentários: ${m}` : ""} ${d ? `\n🔄 Compartilhado: ${d}` : ""} ${z ? `\n👀 Visualizações: ${z}` : ""}`],

Tozg: (a = "") => [`*[ ! ] Responda a um adesivo usando o comando:*\n\n${Prefijo + a}`, `Convertido para ${a ? "vídeo" : "imagem"} com sucesso ✓`],

Uact: (n = "", e = "", o = "") => ["*Qual participante você deseja tornar administrador?*", `Exemplo de uso:\n\n${Prefijo+n} @51995...\n`, "Quem você quer banir?", "[ ! ] Marque o usuário que você deseja banir", `Usuário banido, ${n} não poderá mais usar o bot [ ! ]`, "*Qual administrador você deseja remover do cargo?*", "Quem você quer desbanir?", `Usuário não banido, ${n} pode usar o bot novamente [✓]`, `Marque ou mencione alguém!\n\nExemplo de uso:\n${Prefijo+n} @${e}`, `*${n}* deixou de ser premium`, "Indique o número de dias", `Apenas números!\n\nExemplo de uso:\n${Prefijo+n} @${e} 369...`, "[ ! ] Máximo 7 dias", `*[ USUÁRIO PREMIUM ]*\n🔖 *Nome:* ${n}\n📆 *Tempo:* ${e} dias\n📉 *Restante:* ${o}MS`, "[ ! ] Seu tempo premium acabou!\n_Eu espero que você tenha gostado :3_\n"],

Gadd: (a = "") => [`[ ! ] Indique o número completo de um usuário do WhatsApp que deseja adicionar ao grupo, Exemplo de uso:\n\n${Prefijo+a} +55999....`, `wa.me/${a} está convidando você para seu grupo de WhatsApp!`, `*[ ! ] Erro, não foi possível adicionar o número @${a} ao grupo*\n\n_Envie-lhe um link de convite manualmente: wa.me/${a}_\n`],

Uban: () => ["Me odeia? :,c", "Qual usuário você deseja excluir!?\nPor favor, marque um"],

Uwrn: (a = '') => `> O primeiro aviso foi dado ao usuário @${a}. Se acumular mais de três avisos, você será removido do grupo.`,

Wkpd: (n = "", k = "") => ["[ ! ] Sem resultados para a sua pesquisa ;-;", `||  *WIKIPEDIA* ||\n_~> Resultados para: ${n}_\n\n${k}`],

Dytv: (n = '', k = "") => `Título: ${n}\nTamanho: ${k} \nExtensão: .mp4`,

Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`*[ > ] Resultados no YouTube para:* _${a}_\n\n`, `🔖 Título: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Tipo: ${d}\n🖼️ Miniatura: ${e}\n⌚ Duração: ${f}\n📜 Descrição: ${g}\n📆 Data de envio: ${h}\n👀 Visualizações: ${i}\n||\n⚡ Autor: ${j}\n📺 Canal: ${k}\n\n*——————————*\n\n`]

};