import fs from 'fs-extra';
const { readJsonSync, readJsonSync } = fs
const { Prefijo, NombreDelBot, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "pt",
Habla: () => "Idioma português",
Start: () => ["Executando o Bot mais Kawaii do terceiro mundo.\nIniciando execução do script...", "\n[!] Código finalizado:"],
Conn: () => ["Conectando...", "Motivo de desconexão:", "Tempo de conexão esgotado, reconectando...", "Reinicialização necessária, reiniciando...", "Dispositivo encerrou a sessão, por favor escaneie novamente e execute.", "Conexão substituída, uma nova sessão foi aberta, por favor feche a sessão atual primeiro.", "Conexão perdida com o servidor, reconectando...", "Conexão fechada, reconectando...", "Arquivo de sessão inválido, por favor exclua a sessão e escaneie novamente.", "Conectado ✓"],
Call: (n = "", k = "") => `\n*[ ! ] ${n} Você será bloqueado*\n_Motivo: por fazer uma ${k ? "ligação de vídeo" : "ligação"} para este número sem autorização!_\n`,
GpUp: (o = "") => ["🔒 *[ GRUPO FECHADO ]* 🔒\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🔓 *[ GRUPO ABERTO ]* 🔓\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ, ᵉˢᵗᵉʲᵃ ᶜᶦᵉⁿᵗᵉ ᵈᵉ ᵖᵉˢˢᵒᵃˢ ᶜᵒᵐ ʳᵉᵗᵃʳᵈᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASSUNTO DE GRUPO ALTERADO ]* 🤳\n\nNovo nome: _${o}_\n`],
RestriN: () => "[!] Falha ao remover o novo participante, por favor, ative o modo restrito!",
AlertList: () => "[!] Exclua os números que começam com '1' da FakeList em ./config.json...!",
WlcAdd: (n = "", e = "", k = "", o = "") => `⚡ *Bem-vindo(a) @${n} a este incrível grupo* ${e}\n📆 *Data de entrada: ${k}*\n🍷 _*Espero que você aproveite sua estadia aqui, não se esqueça de respeitar os participantes e as regras*_ ;)\n\n📜 *Regras do grupo atualmente:* \n${masss}\n${o}`,
WlcRemove: (n= "", k = "") => `\`\`\`[!] Esquerda: @${n}\`\`\`\n_- Data de partida |  ${k}_`,
WlcPromot: (m = "", d = "", z = "") => ["Um administrador", `*Parabéns @${m}! @${z} acabou de te dar um grande poder, agora você é um administrador do grupo*: _${d}_\n`, `~Agora eu tenho o poder absoluto e não me importo!~\n\n*Quero dizer..., _Muito obrigado(a) a @${m} por me dar a administração, farei o meu melhor para este grupo!!!_ :D*`],
WlcDemot: (m = "", d = "", z = "") => ["O administrador", `*@${z} acabou de rebaixar @${m} e não é mais um administrador do grupo*: _${d}_`, "Que triste, não sou mais um administrador unu"],
Cprint: () => ["EXECUTANDO","MENSAGEM","Por","De","Chat","grupo:","Privado:","Data"],
MsjRowner: () => "*[ ! ]* Este comando só pode ser usado *a partir do bot principal*!",
MsjOwner: () => "*[ ! ]* Este comando só pode ser usado pelo *proprietário do bot*!",
MsjMods: () => "*[ ! ]* Este comando só pode ser usado por um *moderador*!",
MsjPremium: () => "*[ ! ]* Esta solicitação é apenas para usuários *premium*!",
MsjGroup: () => "*[ ! ]* Este comando só pode ser usado em *grupos*!",
MsjPrivate: () => "*[ ! ]* Este comando só pode ser usado em *chat privado*!",
MsjAdmin: () => "*[ ! ]* Este comando só pode ser usado pelos *administradores do grupo*!",
MsjBotAdmin: () => "*[ ! ]* O bot precisa *ser administrador* para usar este comando!",
MsjUnreg: () => `*[ ! ]* Registre-se para começar a usar esta função\n\nExemplo: ${Prefijo}rg nome|idade\n\n${Prefijo}rg Juanito|15\n`,
MsjRestrict: () => "[ ! ] Para realizar ações de exclusão, meu proprietário precisa ativar o modo restrito!",
SpmrCmd: (a = "") => ["_Aguarde alguns segundos antes de usar outro comando..._ ✓", `[ ! ] ${a} Por favor, não sobrecarregue o bot ;-;`],
SpmrCnsl: () => "[SPAMER CMD] Comando:",
Proces: (n = "", k = "") => [`_Processando, ${n} por favor aguarde..._`, `_Procurando, ${k} por favor aguarde..._`],
Error: () => ["[ ! ] Erro, tente novamente mais tarde...", "[ ! ] Ocorreu um erro inesperado u.u [ ! ]"],
Antprv: (a = "") => ["O modo anti-privado está ativado, por favor evite usar este chat ;)", "[ ! ] Último aviso, não fale com o bot em privado!", `*[X] O chat privado é proibido [X]*\nVocê pode entrar em contato com um dos meus proprietários se precisar de mais informações:\n\n${a}\n\n_Adeus..._`],
Antnlc: (a = "") => ["[ ! ] Meu maluco você acabou de enviar um link, o bom é que o link detectado é desse grupo owo", "*[ ! ] Link detectado [ ! ]*\n\n_Felizmente não sou administrador, então Eu não posso fazer nada unu_", `*[ ! ] Link detectado [ ! ]*\n_Agora se você valesse @${o} Adeus..._\n`],
Antgll: () => ["Você acabou de mencionar todos os participantes deste grupo, não sou um administrador, então não posso fazer nada :0", "A ação de mencionar todos é proibida neste grupo, adeus!"],
Antlnk: (a = "") => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Felizmente, não sou um administrador, então não posso fazer nada :v_"}`,
Antrb: (n = "", k = "") => [`O administrador @${n} acabou de enviar um texto que contém muitos caracteres -.-!`, `*[ ! ] Foi detectada uma mensagem que contém muitos caracteres [ ! ]* ${n ? "" : `${saltos}\nNão sou um administrador, não posso fazer mais nada... :/`}`, `Marcar o chat como lido ✓\n${saltos}\n=> Número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acabou de enviar um texto que contém muitos caracteres que pode causar problemas em dispositivos móveis`],
Binf: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = "", r = "", s = "", t = "", u = "", v = "", w = "", x = "") => ["_Obtendo informações..._",`*~》INFORMAÇÕES《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(ativo)_\n➪ *Dono atual* : _${author.name}_\n➪ *Tempo de execução* : _${a}._\n➪ *Apelido no Whatsapp* : _${b}._\n➪ *Total de grupos* :  _${c}_\n➪ *Total de usuários* : _${d}_\n➪ *Grupos ativos* : _${e} / ${f}_\n➪ *Conversas pessoais* : _${g}_\n➪ *Total de conversas* : _${h} / ${i}_\n➪ *Hits globais* : _${j}_\n➪ *Versão do bot* : _${version}_\n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Pasta temporária* : _${k}_\n➪ *Banco de dados* : _${l}_\n➪ *Versão do NodeJs* : _${m}_\n➪ *Velocidade de processamento* : _${n} s_\n➪ *Velocidade de conexão* : _${o} ms_\n➪ *RAM:* _${p}_\n➪ *Plataforma* : _${q}_\n➪ *Versão* : _${r}_\n➪ *Sistema operacional base* : _${s}_\n➪ *Arquitetura* : _${t}_\n➪ *Host* : _${u}_\n\n➫ _Consumo de memória :_\n${v} ${""==w?"":`\n➫  _Uso total de CPU:_\n${w}\n➫ _CPU Core(s) Usado_ ${x}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] A duração máxima do vídeo é de 8 segundos!*", `*[ ! ] Por favor, envie ou responda com um vídeo ou imagem usando o comando ${Prefixo+a}*\n_OBSERVAÇÃO: Duração do vídeo de 1 a 8 segundos, no máximo_ ✓`, "[ ! ] URL inválido, tente outro ;3"],
AiChat: () => ["Não há sistema!", "Por favor, seja mais específico em sua mensagem", "E a mensagem?"],
Dytv: (n = "", k = "") => [`Qual vídeo você deseja baixar do Youtube?, Exemplo de uso: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor , usei um link de um vídeo do YouTube_\n", "[ ! ] Seu video pesa demais, desculpe meu rei, não posso enviar :v", `Título: ${n}\nTamanho: ${k} \nExtensão: .mp4`],
Dyta: (a = "") => [`Que áudio você deseja baixar do Youtube?, Exemplo de uso: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use um link do YouTube_\n", "[ ! ] O áudio está muito pesado, desculpe não poder enviar..."],
Dpl2: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", _ = "") => [`O que você deseja pesquisar no Youtube? Exemplo de uso: \n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] Sem resultados, tente novamente...",`✍️ Título : ${n}\n⚡ Autor : ${e}\n⏰ Duração : ${k}\n👀 Visualizações : ${o}\n📆 Data de upload : ${s}\n📺 Canal : ${m}\n📃 Descrição : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Você pode usar os seguintes comandos para baixar_${masss}\n\n┌ Áudio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Vídeo -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
Dyau: (n = "", e = "", k = "", o = "", s = "", x = "", d = "") => [`Qual áudio do YouTube você deseja baixar? Exemplo de uso: \n\n${Prefixo+n} mtc s3rl`, `🔍 Resultado encontrado para: ${n}\n${e?`✍️ Título: ${e}\n⏳ Duração: 1:23 ━━━━●───────── ${k}\n👀 Visualizações: ${o}\n📝 Autor: ${s}\n📜 Descrição: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Enviando áudio, aguarde...\`\`\``:""}`],
GpOpt: (n = "", k = "") => [`Foi ${n ? 'ativada' : 'desativada'} a opção ${k} para este grupo`, "Aqui está a lista de opções :3", "Opção", "Descrição:", "Comando:"],
GpActn: () => [{
titulo: "[ ⬇️ BEM-VINDO AUTOMÁTICO ]",
func: [{
action: "[ 🛬 Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ᵈᵃʳᵃ́ ᵃˢ ᵇᵒᵃˢ⁻ᵛᶦⁿᵈᵃˢ ᵃᵒˢ ⁿᵒᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender bienvenida`
}, {
action: "[ 🛫 Desativar ]",
desc: "~ᴺᵒᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ ⁿᵃ̃ᵒ ˢᵉʳᵃ̃ᵒ ᵇᵉᵐ⁻ᵛᶦⁿᵈᵒˢ~",
cmd: `${Prefijo}apagar bienvenida`
}]
}, {
titulo: "[ ⬇️ APENAS - ADMINISTRADOR ]",
func: [{
action: "[ ⭐ Ativar ]",
desc: "~ᴬᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉʳᵃ̃ᵒ ᵘˢᵃʳ ᵒ ᵇᵒᵗ~",
cmd: `${Prefijo}encender soloadmins`
}, {
action: "[ ✨ Desativar ]",
desc: "~ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉʳᵃ̃ᵒ ᵘˢᵃʳ ᵒ ᵇᵒᵗ~",
cmd: `${Prefijo}apagar soloadmins`
}]
}, {
titulo: "[ ⬇️ DETECÇÃO ]",
func: [{
action: "[ 🌕 Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ᵒˢ ᵃʲᵘˢᵗᵉˢ ᶠᵉᶦᵗᵒˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender deteccion`
}, {
action: "[ 🌑 Desativar ]",
desc: "~ᴺᵃ̃ᵒ ˢᵉᶦ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ᵃʲᵘˢᵗᵉˢ ᶠᵉᶦᵗᵒˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI-WA_LINKS ]",
func: [{
action: "[ 🗡️ Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ʳᵉᵐᵒᵛᵉʳᵃ́ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵖᵒˢᵗᵃʳᵉᵐ ˡᶦⁿᵏˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender antienlaces`
}, {
action: "[ 😴 Deactivate ]",
desc: "~ᴺᵉⁿʰᵘᵐᵃ ᵃᶜ̧ᵃ̃ᵒ ˢᵉʳᵃ́ ᵗᵒᵐᵃᵈᵃ ᑫᵘᵃⁿᵈᵒ ᵒˢ ˡᶦⁿᵏˢ ᵈᵒ ᵂʰᵃᵗˢᴬᵖᵖ ᶠᵒʳᵉᵐ ᵉⁿᵛᶦᵃᵈᵒˢ~",
cmd: `${Prefijo}apagar antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ʳᵉᵐᵒᵛᵉʳᵃ́ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵐᵃʳᶜᵃʳᵉᵐ ᵗᵒᵈᵒˢ~",
cmd: `${Prefijo}encender antitagall`
}, {
action: "[ 😶 Desativar ]",
desc: "~ᴼ ᵇᵒᵗ ⁿᵃ̃ᵒ ᶠᵃʳᵃ́ ⁿᵃᵈᵃ ᑫᵘᵃⁿᵈᵒ ᵗᵒᵈᵒˢ ᵉˢᵗᶦᵛᵉʳᵉᵐ ᵐᵃʳᶜᵃᵈᵒˢ~",
cmd: `${Prefijo}apagar antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Ativar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵘᵐ ᶜʰᵃᵗᵇᵒᵗ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ ᵈᵒ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}encender chatbot`
}, {
action: "[ 👤 Desativar ]",
desc: "~ᴰᵉˢᵃᵗᶦᵛᵃʳ ᶜʰᵃᵗᵇᵒᵗ ⁿᵒ ᵍʳᵘᵖᵒ ᵃᵗᵘᵃˡ~",
cmd: `${Prefijo}apagar chatbot`
}]
}, {
titulo: "[ ⬇️ MODO RESTRITO ]",
func: [{
action: "[ 🌚 Ativado ]",
desc: "~ᴬᵗᶦᵛᵉ ᵃ ᶠᵘⁿᶜ̧ᵃ̃ᵒ ᵖᵃʳᵃ ʳᵉᵐᵒᵛᵉʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉ ᵘᵐ ᵍʳᵘᵖᵒ ⁽ᵖᵒʳ ˢᵘᵃ ᶜᵒⁿᵗᵃ ᵉ ʳᶦˢᶜᵒ⁾~",
cmd: `${Prefijo}encender restringido`
}, {
action: "[ 🌝 Desabilitado ]",
desc: "~ᴬᶜ̧ᵒ̃ᵉˢ ᵖᵃʳᵃ ᵃᵈᶦᶜᶦᵒⁿᵃʳ ᵉ ʳᵉᵐᵒᵛᵉʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵃˢ~",
cmd: `${Prefijo}apagar restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Ativar ]",
desc: "~ᴼ ᵇᵒᵗ ʳᵉᵐᵒᵛᵉʳᵃ́ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉⁿᵛᶦᵃʳᵉᵐ ᵘʳˡˢ~",
cmd: `${Prefijo}encender antiurl`
}, {
action: "[ 😴 Desativar ]",
desc: "~ᴺᵃ̃ᵒ ˢᵉᶦ ˢᵉ ᵉˣᵉᶜᵘᵗᵃʳᵃ́ ᑫᵘᵃˡᑫᵘᵉʳ ᵃᶜ̧ᵃ̃ᵒ ᑫᵘᵃⁿᵈᵒ ᵒˢ ᵘʳˡˢ ᶠᵒʳᵉᵐ ᵉⁿᵛᶦᵃᵈᵒˢ~",
cmd: `${Prefijo}apagar antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI - FALSOS 1 ]",
func: [{
action: "[ 🛡️ Ativar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵃ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵃᵐᵉʳᶦᶜᵃⁿᵒˢ ⁺¹~",
cmd: `${Prefijo}encender antifake1`
}, {
action: "[ ⚰️ Desativar ]",
desc: "~ᴰᵉˢᵃᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ⁿᵒ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - FALSOS 2 ]",
func: [{
action: "[ 🛡️ Ativar ]",
desc: "~ᴬ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵉˢᵗʳᵃⁿʰᵒˢ ᵒᵘ ˢᵘˢᵖᵉᶦᵗᵒˢ ᵉˢᵗᵃ́ ᵃᵗᶦᵛᵃᵈᵃ~",
cmd: `${Prefijo}encender antifake2`
}, {
action: "[ ⚰️ Desativar ]",
desc: "~ᴰᵉˢᵃᵗᶦᵛᵉ ᵒ ᴬⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ⁿᵒ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI - ESTRANGEIROS ]",
func: [{
action: "[ 🏳️ Ativar ]",
desc: "~ᴬ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵈᶦᶠᵉʳᵉⁿᵗᵉˢ ᵈᵒ ᵖʳᵉᶠᶦˣᵒ ᵈᵒ ᵖʳᵒᵖʳᶦᵉᵗᵃ́ʳᶦᵒ ᵉˢᵗᵃ́ ᵃᵗᶦᵛᵃᵈᵃ~\nᴺᵘ́ᵐᵉʳᵒˢ ᶜᵒᵐᵉᶜ̧ᵃⁿᵈᵒ ᶜᵒᵐ +" + PaisPrefix + " ⁿᵃ̃ᵒ ˢᵉʳᵃ̃ᵒ ʳᵉᵐᵒᵛᶦᵈᵒˢ~",
cmd: `${Prefijo}encender antiextranjeros`
}, {
action: "[ 🏴 Desativar ]",
desc: "~ᴰᵉˢᵃᵇᶦˡᶦᵗᵃʳ ᴬⁿᵗᶦ ᴱˢᵗʳᵃⁿᵍᵉᶦʳᵒˢ ⁿᵒ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - CRASH ]",
func: [{
action: "[ 🐸 Ativar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵃ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵈᵉ ᵗʳᵃᵛᵃᵐᵉⁿᵗᵒ ⁿᵒ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}encender antitraba`
}, {
action: "[ 👾 Desativar ]",
desc: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᵉˢᵃᵗᶦᵛᵃᵈᵒ~",
cmd: `${Prefijo}apagar antitraba`
}]
}],
Menl: (a = "") => [`Olá ${a}!, 👋`,
[{
info: `*[ Menu-Completo ♻️ ]*
≡ ~ᴸᶦˢᵗᵃ ᶜᵒᵐᵖˡᵉᵗᵃ ᵈᵉ ᵗᵒᵈᵒˢ ᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ~
${Prefijo}menucompleto`
},
{
info: `...`
}]
],
Menu: (n = "", k = "") => ["_Carregando menu..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
║❂ Tempo ativo: ${n}
║❂ Versão do robô: ${version}
║❂ Proprietário do bot: ${author.name}
║❂ Prefixo único: 「  ${Prefijo}  」
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
╔「 _DOWNLOADER :_ 」
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
╔「 _FERRAMENTAS :_ 」
║╭—————————
║├  ${Prefijo}aichat
║╰—————————
╚══════════
╔「 _ADMINISTRADORES :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║╰—————————
╚══════════
╔「 _ALEATÓRIO :_ 」
║╭—————————
║├  ${Prefijo}sugerir 
║├  ${Prefijo}simi
║╰—————————
╚══════════

Muito em breve mais funções...`],
Boes: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = "", r = "", s = "", t = "") => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo banido* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuário* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PÚBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restrito* : _${g?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ATIVADO [✓]":"DESATIVADO [X]"}_\n${a?`\n*Modo Somente-Admins* : _${j?"Ativo [✓]":"Inativo [X]"}_\n\n*Boas-vindas* : _${k?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Links* : _${l?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti URLs* : _${m?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Estrangeiros* : _${n?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos* : _${o?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos 2* : _${p?"Ativo [✓]":"Inativo [X]"}_\n\n*Detecção* : _${q?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti-caiu* : _${r?"Ativo [✓]":"Inativo [X]"}_\n\n*Chat Bot* : _${s?"Ativo [✓]":"Inativo [X]"}_`:""}\n`
};