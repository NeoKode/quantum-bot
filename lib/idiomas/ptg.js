import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "pt",
Habla: () => "Idioma português",
Start: () => ["Executando o Bot mais Kawaii do terceiro mundo.\nIniciando execução do script...", "\n[!] Código finalizado:"],
Conn: () => ["Conectando...", "Motivo de desconexão:", "Tempo de conexão esgotado, reconectando...", "Reinicialização necessária, reiniciando...", "Dispositivo encerrou a sessão, por favor escaneie novamente e execute.", "Conexão substituída, uma nova sessão foi aberta, por favor feche a sessão atual primeiro.", "Conexão perdida com o servidor, reconectando...", "Conexão fechada, reconectando...", "Arquivo de sessão inválido, por favor exclua a sessão e escaneie novamente.", "Conectado ✓", "\n\n[_>] Se você vai usar o método de correspondência, por favor insira o número que se tornará o bot. Certifique-se de inserir o número completo do WhatsApp juntamente com o código do país.\nExemplo: +51xxx...\n", "\nSeu código de pareamento:"],
Call: (n = '', k = "") => `\n*[ ! ] ${n} Você será bloqueado*\n_Motivo: por fazer uma ${k ? "ligação de vídeo" : "ligação"} para este número sem autorização!_\n`,
GpUp: (o = "") => ["🔒 *[ GRUPO FECHADO ]* 🔒\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🔓 *[ GRUPO ABERTO ]* 🔓\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ, ᵉˢᵗᵉʲᵃ ᶜᶦᵉⁿᵗᵉ ᵈᵉ ᵖᵉˢˢᵒᵃˢ ᶜᵒᵐ ʳᵉᵗᵃʳᵈᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASSUNTO DE GRUPO ALTERADO ]* 🤳\n\nNovo nome: _${o}_\n`],
RestriN: () => "[!] Falha ao remover o novo participante, por favor, ative o modo restrito!",
AlertList: () => "[!] Exclua os números que começam com '1' da FakeList em ./config.json...!",
WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Bem-vindo(a) @${n} a este incrível grupo* ${e}\n📆 *Data de entrada: ${k}*\n🍷 _*Espero que você aproveite sua estadia aqui, não se esqueça de respeitar os participantes e as regras*_ ;)\n\n📜 *Regras do grupo atualmente:* \n${masss}\n${o}`,
WlcRemove: (n= '', k = "") => `\`\`\`[!] Esquerda: @${n}\`\`\`\n_- Data de partida |  ${k}_`,
WlcPromot: (m = '', d = '', z = "") => [`*Parabéns @${m}!, ${z || 'Um administrador'} acabou de te dar um grande poder, agora você é um administrador do grupo*: _${d}_\n`, `~Agora eu tenho o poder absoluto e não me importo!~\n\n*Quero dizer..., _Muito obrigado(a) a ${m || 'um administrador'} por me dar a administração, farei o meu melhor para este grupo!!!_ :D*`],
WlcDemot: (m = '', d = '', z = "") => [`*${z || 'Um administrador'} acabou de rebaixar @${m} e não é mais um administrador do grupo*: _${d}_`, "Que triste, não sou mais um administrador unu"],
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
Proces: (n = '', k = "") => [`_Processando, ${n} por favor aguarde..._`, `_Procurando, ${k} por favor aguarde..._`],
Error: () => ["[ ! ] Erro, tente novamente mais tarde...", "[ ! ] Ocorreu um erro inesperado u.u [ ! ]"],
Antprv: (a = "") => ["O modo anti-privado está ativado, por favor evite usar este chat ;)", "[ ! ] Último aviso, não fale com o bot em privado!", `*[X] O chat privado é proibido [X]*\nVocê pode entrar em contato com um dos meus proprietários se precisar de mais informações:\n\n${a}\n\n_Adeus..._`],
Antnlc: (a = "") => ["[ ! ] Meu maluco você acabou de enviar um link, o bom é que o link detectado é desse grupo owo", "*[ ! ] Link detectado [ ! ]*\n\n_Felizmente não sou administrador, então Eu não posso fazer nada unu_", `*[ ! ] Link detectado [ ! ]*\n_Agora se você valesse @${a} Adeus..._\n`],
Antgll: () => ["Você acabou de mencionar todos os participantes deste grupo, não sou um administrador, então não posso fazer nada :0", "A ação de mencionar todos é proibida neste grupo, adeus!"],
Antlnk: (a = "") => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Felizmente, não sou um administrador, então não posso fazer nada :v_"}`,
Antrb: (n = '', k = "") => [`O administrador @${n} acabou de enviar um texto que contém muitos caracteres -.-!`, `*[ ! ] Foi detectada uma mensagem que contém muitos caracteres [ ! ]* ${n ? "" : `${saltos}\nNão sou um administrador, não posso fazer mais nada... :/`}`, `Marcar o chat como lido ✓\n${saltos}\n=> Número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acabou de enviar um texto que contém muitos caracteres que pode causar problemas em dispositivos móveis`],
Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "") => ["_Obtendo informações..._",`*~》INFORMAÇÕES《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(ativo)_\n➪ *Dono atual* : _${author.name}_\n➪ *Aplicação Node.js iniciada* : _Há ${a}._\n➪ *Tempo de execução* : _${b}._\n➪ *Apelido no Whatsapp* : _${c}._\n➪ *Total de grupos* :  _${d}_\n➪ *Total de usuários* : _${e}_\n➪ *Grupos ativos* : _${f} / ${g}_\n➪ *Conversas pessoais* : _${h}_\n➪ *Total de conversas* : _${i} / ${j}_\n➪ *Hits globais* : _${k}_\n➪ *Versão do bot* : _${version}_\n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Pasta temporária* : _${l}_\n➪ *Banco de dados* : _${m}_\n➪ *Versão do NodeJs* : _${n}_\n➪ *Velocidade de processamento* : _${o} s_\n➪ *Velocidade de conexão* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Plataforma* : _${r}_\n➪ *Versão* : _${s}_\n➪ *Sistema operacional base* : _${t}_\n➪ *Arquitetura* : _${u}_\n➪ *Host* : _${v}_\n\n➫ _Consumo de memória :_\n${w} ${""==x?"":`\n➫  _Uso total de CPU:_\n${x}\n➫ _CPU Core(s) Usado_ ${y}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] A duração máxima do vídeo é de 8 segundos!*", `*[ ! ] Por favor, envie ou responda com um vídeo ou imagem usando o comando ${Prefijo+a}*\n_OBSERVAÇÃO: Duração do vídeo de 1 a 8 segundos, no máximo_ ✓`, "[ ! ] URL inválido, tente outro ;3"],
Tozg: (a = "") => [`*[ ! ] Responda a um adesivo usando o comando:*\n\n${Prefijo + a}`, `Convertido para ${a ? "vídeo" : "imagem"} com sucesso ✓`],
Tptv: () => "Por favor, responda ou envie um vídeo que não exceda 59 segundos de duração.",
AiChat: (n = "", k = "") => ["Não há sistema!", "Por favor, seja mais específico em sua mensagem", "E a mensagem?", `"${k}" foi ${n ? "ativado" : "desativado"} com sucesso.`],
Dytv: (n = '', k = "") => [`Qual vídeo você deseja baixar do Youtube?, Exemplo de uso: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor , usei um link de um vídeo do YouTube_\n", "[ ! ] Seu video pesa demais, desculpe meu rei, não posso enviar :v", `Título: ${n}\nTamanho: ${k} \nExtensão: .mp4`],
Dyta: (a = "") => [`Que áudio você deseja baixar do Youtube?, Exemplo de uso: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use um link do YouTube_\n", "[ ! ] O áudio está muito pesado, desculpe não poder enviar..."],
Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => ["*[ ! ] Y el Link de tiktok?*", "*[ ! ] Link inválido*\n_Por favor, use un link válido_", `*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+a} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Autor: ${n}` : ""} ${e ? `\n🤳 Usuário: ${e}` : ""} ${k ? `\n📝 Descrição: ${k}` : ""} ${o ? `\n💕 Curtidas: ${o}` : ""} ${m ? `\n🎭 Comentários: ${m}` : ""} ${d ? `\n🔄 Compartilhado: ${d}` : ""} ${z ? `\n👀 Visualizações: ${z}` : ""}`],
Dlig: (a = "") => ["*[ ! ] E o Link do Instagram?*", "*[ ! ] Link inválido*\n_Por favor, use um link válido_", `*[ ! ] Link inválido*\n_Por favor, use um link do Instagram_\nExemplo: ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],
Dfbv: (a = "") => ["*[ ! ] E o Link do Facebook?*", "*[ ! ] Link inválido*\n_Por favor, use um link válido_", `*[ ! ] Link inválido*\n_Por favor, use um Link válido de um vídeo do Facebook_\n\nExemplo de uso: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Erro, talvez o link seja inválido ou o vídeo seja privado, tente novamente mais tarde"],
Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`O que você deseja pesquisar no Youtube? Exemplo de uso: \n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] Sem resultados, tente novamente...",`✍️ Título : ${n}\n⚡ Autor : ${e}\n⏰ Duração : ${k}\n👀 Visualizações : ${o}\n📆 Data de upload : ${s}\n📺 Canal : ${m}\n📃 Descrição : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Você pode usar os seguintes comandos para baixar_${masss}\n\n┌ Áudio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Vídeo -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`Qual áudio do YouTube você deseja baixar? Exemplo de uso: \n\n${Prefijo+n} mtc s3rl`, `🔍 Resultado encontrado para: ${n}\n${e?`✍️ Título: ${e}\n⏳ Duração: 1:23 ━━━━●───────── ${k}\n👀 Visualizações: ${o}\n📝 Autor: ${s}\n📜 Descrição: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Enviando áudio, aguarde...\`\`\``:""}`],
Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`O que você deseja buscar no YouTube? Exemplo de uso: \n\n${Prefijo+a} quanto é 1 + 1`, `*[ > ] Resultados no YouTube para:* _${a}_\n\n`, `🔖 Título: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Tipo: ${d}\n🖼️ Miniatura: ${e}\n⌚ Duração: ${f}\n📜 Descrição: ${g}\n📆 Data de envio: ${h}\n👀 Visualizações: ${i}\n||\n⚡ Autor: ${j}\n📺 Canal: ${k}\n\n*——————————*\n\n`],
Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Convocando membros do grupo* :\n${n}\n\n*~> Convocador* : _@${e}_\n*~> Mensagem* : _${k||"Nenhum :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ Qᵘᵉᵐ ᴸᵉ̂ ⁷ʷ⁷"}`],
GpOpt: (n = '', k = "") => [`Foi ${n ? 'ativada' : 'desativada'} a opção ${k} para este grupo`, "Aqui está a lista de opções :3", "Opção", "Descrição:", "Comando:"],
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
desc: "~ᴬ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵈᶦᶠᵉʳᵉⁿᵗᵉˢ ᵈᵒ ᵖʳᵉᶠᶦˣᵒ ᵈᵒ ᵖʳᵒᵖʳᶦᵉᵗᵃ́ʳᶦᵒ ᵉˢᵗᵃ́ ᵃᵗᶦᵛᵃᵈᵃ~\nᴺᵘ́ᵐᵉʳᵒˢ ᶜᵒᵐᵉᶜ̧ᵃⁿᵈᵒ ᶜᵒᵐ +" + LocPref + " ⁿᵃ̃ᵒ ˢᵉʳᵃ̃ᵒ ʳᵉᵐᵒᵛᶦᵈᵒˢ~",
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
Menu: (n = '', e = '', k = '', o = "") => ["_Carregando menu..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
║❂ Tempo ativo: ${n}
║❂ Versão do robô: ${version}
║❂ Proprietário do bot: ${author.name}
║❂ Prefixo único: 「  ${Prefijo}  」
║❂ Cliente: ${e}
╚══════════ ${k ? '' : `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Sub-bot de wa.me/${o}
┗─── ⊹ ⊱♡⊰ ⊹ ───┛`}
${masss}
~|-------------------------|~
*[_>] _COMANDOS_ ☷*
~|-------------------------|~

╔「 _CONVERSORES :_ 」
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
╔「 _FERRAMENTAS :_ 」
║╭—————————
║├  ${Prefijo}ytbuscar
║├  ${Prefijo}afk
║├  ${Prefijo}robar
║├  ${Prefijo}aichat
║├  ${Prefijo}rentbot
║╰—————————
╚══════════
╔「 _JOGOS :_ 」
║╭—————————
║├  ${Prefijo}ttt
║╰—————————
╚══════════
╔「 _ADMINISTRADORES :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║├  ${Prefijo}invocar 
║├  ${Prefijo}hidetag
║├  ${Prefijo}cgpen
║├  ${Prefijo}agp
║├  ${Prefijo}ban
║╰—————————
╚══════════
╔「 _PROPRIETÁRIO :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║├  ${Prefijo}bot
║├  ${Prefijo}add
║├  ${Prefijo}actualizarbot
║╰—————————
╚══════════
╔「 _ALEATÓRIO :_ 」
║╭—————————
║├  ${Prefijo}criador
║├  ${Prefijo}proprietário
║├  ${Prefijo}infobot
║├  ${Prefijo}simi
║├  ${Prefijo}estadobot
║├  ${Prefijo}join
║├  ${Prefijo}listbots
║├  ${Prefijo}sugerir
║╰—————————
╚══════════

Muito em breve mais funções...`],
Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo banido* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuário* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PÚBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restrito* : _${g?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ATIVADO [✓]":"DESATIVADO [X]"}_\n${a?`\n*Modo Somente-Admins* : _${j?"Ativo [✓]":"Inativo [X]"}_\n\n*Boas-vindas* : _${k?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Links* : _${l?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti URLs* : _${m?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Estrangeiros* : _${n?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos* : _${o?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos 2* : _${p?"Ativo [✓]":"Inativo [X]"}_\n\n*Detecção* : _${q?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti-caiu* : _${r?"Ativo [✓]":"Inativo [X]"}_\n\n*Chat Bot* : _${s?"Ativo [✓]":"Inativo [X]"}_`:""}\n`,
Stke: (a = "") => ["Responda um adesivo do chat atual...", `Envie ou responda um adesivo com o comando ${Prefijo+a}`, "Dica: exclua seu adesivo para todos ;v", "[ ! ] Responda um adesivo para obter os metadados", "[ ! ] Responda um adesivo para atribuir um preço falso :p", "Responda um adesivo para editar o EXIF do seu jeito"],
Jtli: (n = "", k = "") => ["Você já está em uma sala ativa -.-", `*[ ! ] Insira um nome para criar uma nova sala*\n\nExemplo de uso:\n\n${Prefijo+n} latam\n`, "Rival encontrado!\nO jogador X deve começar o jogo escrevendo um número de 1 a 9 para iniciar", "deve começar o jogo", "~Escreva :~\n\nrender\n\n~para desistir~", `*[ ! ] Aguardando oponente*\nPara entrar no jogo, use o comando ${Prefijo+n} ${k}\n\n`, "O jogo terminou", "Inválido", "Posição inválida", "Posição inválida", "Vitória!", "Jogo terminado, empate", "Vez de", "*Sala de Jogo da Velha 3x3 excluída com sucesso ✓*"],
Gadd: (a = "") => ["Ative o modo restrito para realizar esta ação", "[ ! ] Informe o número de um usuário que deseja adicionar ao grupo", `wa.me/${a} está convidando você para o grupo do WhatsApp!`, `*[ ! ] Erro, não foi possível adicionar @${a} ao grupo*\n\n_Por favor, envie um link de convite manualmente para wa.me/${a}_\n`],
Bunt: (n = '', k = "") => ["E o link do WhatsApp?", "[ ! ] Erro, O link não funciona ou é inválido", `[ ! ] A quantidade mínima para entrar no grupo deve ser *${MinimoDeUsuarios}* participantes`, `${NombreDelBot} entrou no grupo ${n} com sucesso \n`],
Uban: (n = "", k = "") => ["Você me odeia? :,c", `*O participante @${n} foi removido do grupo ✓*\n_Ação executada por ${k}_`, "Qual usuário você deseja remover!?\nPor favor, mencione um"],
Gcea: (n = "", k = "") => [`*Em que tempo você deseja fechar o grupo?*\n\n_Exemplo de uso_ : \n${Prefijo+n} 10 segundos`, `*O grupo será fechado em ${n}*\n_Ação executada por : @${k}_`],
Bblst: (n = "", k = "") => ["Atualmente não há subbots ativos...", "*Lista de números que foram subbots*\n~Alguns números podem estar inativos!~", `${n === k ? `\n\n*🐝 Bot:* wa.me/${k}` : `\n\n*👑 Proprietário:* +${n}\n*🐜 Bot:* wa.me/${k}`}`],
Bbot: (a = '', b = '') => ["[ ! ] Você não pode usar este comando sendo um bot [ ! ]", "A opção de ser temporariamente um bot está desativada", `*Olá ${a}!, antes de continuar, por favor, leia este mini guia para evitar problemas:*\n\n☝️🤓 Informações e uso do comando: ${b}\n\n1.- Ao solicitar o código QR pela primeira vez, uma chave única será gerada para que você possa usar o comando posteriormente (não se esqueça de guardar sua chave).\n\n2.- O comando possui algumas ações que você pode utilizar:\n┬[ ${b} sua_chave-xxx...\n└‒> _Você poderá se conectar manualmente caso o bot "desconecte"._\n┬[ ${b} sua_chave-xxx... stop\n└‒> _Isso interromperá o processo do subbot até que você o reative manualmente com sua chave._\n┬[ ${b} sua_chave-xxx... neoqr\n└‒> _Sua sessão atual será encerrada e você poderá solicitar um novo código QR para escanear._\n\n3.- Ao se tornar um subbot, é aconselhável sair dos grupos onde está o bot principal, isso para evitar possíveis erros ou conflitos com o sistema antispam do bot.\n\n4.- O proprietário e administrador deste bot reserva o direito de interromper, modificar ou desativar os subbots ativos ou características do sistema sem aviso prévio.\n\n5.- Lembre-se de escanear um dos códigos QR que lhe serão enviados, se você solicitar o código QR em vão, será marcado por 1 hora, impedindo temporariamente o acesso ao comando até que possa ser utilizado novamente.\n\n~O criador deste bot não se responsabiliza por qualquer ação, dano ou consequência derivada de seu uso.~`, "[_>] Solicitar código QR...", "Parando o serviço do subbot...", "Gerando um novo código QR, não esqueça de escaneá-lo a tempo!", "[ ! ] Por favor, use sua chave para continuar...", "[ ! ] Chave incorreta, tente novamente..."],
Bbbot: () => ["Demorou muito para escanear um dos códigos QR, interrompendo o serviço...", 'Escanee este QR para se tornar um bot temporário\n1. Toque nos três pontos "︙" no canto superior direito\n2. Selecione a opção "dispositivos vinculados"\n3. Toque em "vincular um dispositivo"\n4. Escanee este QR\n\n_[NOTA] Este código QR expirará se não for escaneado a tempo!_', "Foi detectado recentemente uma sessão encerrada do seu subbot. Você não poderá se conectar como bot até que o proprietário reinicie o banco de dados.", "*Conectado com sucesso*\n\nAqui está sua chave única para se reconectar manualmente caso seja desconectado do serviço de bot temporário:", "Conexão restabelecida, você voltou a ser um subbot novamente!"],
Afkpl: (n = "", k = "") => [`📲 *Você não está mais ausente após ${n}.*\nBem-vind@ de volta!!! :D`, `📴 *O usuário mencionado está atualmente ausente, tempo decorrido ${n}.*\n\n┏⊱ *Razão* \n┗━⊱ ${k}\n`, `Por favor, indique o motivo de sua ausência\nExemplo de uso:\n\n${Prefijo+n} vou ao banheiro :v`, "[ ! ] O motivo é muito curto", `*A função de ausência foi ativada com sucesso*\n\n➸ *Usuário*: ${n}\n➸ *Razão*: ${k}`]
};