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
Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => ["*[ ! ] Y el Link de tiktok?*", "*[ ! ] Link inválido*\n_Por favor, use un link válido_", `*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Autor: ${n}` : ""} ${e ? `\n🤳 Usuário: ${e}` : ""} ${k ? `\n📝 Descrição: ${k}` : ""} ${o ? `\n💕 Curtidas: ${o}` : ""} ${m ? `\n🎭 Comentários: ${m}` : ""} ${d ? `\n🔄 Compartilhado: ${d}` : ""} ${z ? `\n👀 Visualizações: ${z}` : ""}`],
Dlig: (a = "") => ["*[ ! ] E o Link do Instagram?*", "*[ ! ] Link inválido*\n_Por favor, use um link válido_", `*[ ! ] Link inválido*\n_Por favor, use um link do Instagram_\nExemplo: ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],
Dfbv: (a = "") => ["*[ ! ] E o Link do Facebook?*", "*[ ! ] Link inválido*\n_Por favor, use um link válido_", `*[ ! ] Link inválido*\n_Por favor, use um Link válido de um vídeo do Facebook_\n\nExemplo de uso: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Erro, talvez o link seja inválido ou o vídeo seja privado, tente novamente mais tarde"],
Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`O que você deseja pesquisar no Youtube? Exemplo de uso: \n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] Sem resultados, tente novamente...",`✍️ Título : ${n}\n⚡ Autor : ${e}\n⏰ Duração : ${k}\n👀 Visualizações : ${o}\n📆 Data de upload : ${s}\n📺 Canal : ${m}\n📃 Descrição : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Você pode usar os seguintes comandos para baixar_${masss}\n\n┌ Áudio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Vídeo -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`Qual áudio do YouTube você deseja baixar? Exemplo de uso: \n\n${Prefijo+n} mtc s3rl`, `🔍 Resultado encontrado para: ${n}\n${e?`✍️ Título: ${e}\n⏳ Duração: 1:23 ━━━━●───────── ${k}\n👀 Visualizações: ${o}\n📝 Autor: ${s}\n📜 Descrição: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Enviando áudio, aguarde...\`\`\``:""}`],
Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`O que você deseja buscar no YouTube? Exemplo de uso: \n\n${Prefijo+a} quanto é 1 + 1`, `*[ > ] Resultados no YouTube para:* _${a}_\n\n`, `🔖 Título: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Tipo: ${d}\n🖼️ Miniatura: ${e}\n⌚ Duração: ${f}\n📜 Descrição: ${g}\n📆 Data de envio: ${h}\n👀 Visualizações: ${i}\n||\n⚡ Autor: ${j}\n📺 Canal: ${k}\n\n*——————————*\n\n`],
Gimg: (m = "", d = "", z = "") => ["O que você deseja pesquisar nas imagens do Google?", "[ ! ] Sem resultados", `*[ GOOGLE-CHAN ] ✓*\n*~> Resultado para* : _${m}_\n*~> Tamanho*: _${d} x ${z} PX_`],
Wppr: (n = "", k = "") => ["Que papel de parede você deseja procurar?", `┏━⊱ Papel de parede: ${n}\n┗⊱ Solicitado por: @${k}`],
Nime: (n="", k="") => ["Use uma captura de tela ou imagem de uma cena de anime", `${n ? 'Se o resultado não for o esperado, tente usar uma imagem de boa resolução de uma cena de “anime”!  ' : 'Não posso garantir que o resultado seja 100% preciso u.u'}`, `*🔖Título:* _${n || "N/N"}_\n*🎴Episódio:* _${k || "N/N"}_\n`],
Wkpd: (n = "", k = "") => ["Qual é a sua pesquisa na Wikipédia?", "[ ! ] Sem resultados para a sua pesquisa ;-;", `||  *WIKIPEDIA* ||\n_~> Resultados para: ${n}_\n\n${k}`],
Gemx: (a = "") => `*Exemplo de uso:*\n\n${Prefijo+a} 🥺+🥵\n`,
Frs: (n="", k="") => `*Frase:* _${n}.._\n\n*Autor:* _${k}_\n`,
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
╔「 _PESQUISADORES :_ 」
║╭—————————
║├  ${Prefijo}ytbuscar
║├  ${Prefijo}imagem
║├  ${Prefijo}wallpaper
║├  ${Prefijo}name?
║├  ${Prefijo}wikipedia
║╰—————————
╚══════════
╔「 _FERRAMENTAS :_ 」
║╭—————————
║├  ${Prefijo}afk
║├  ${Prefijo}roubar
║├  ${Prefijo}emojimix
║├  ${Prefijo}aichat
║├  ${Prefijo}rentbot
║╰—————————
╚══════════
╔「 _JOGOS :_ 」
║╭—————————
║├  ${Prefijo}ttt
║├  ${Prefijo}calúnia
║├  ${Prefijo}nomeninja
║├  ${Prefijo}quem
║├  ${Prefijo}sorte
║╰  ${Prefijo}testgay
╟「 _RPG :_ 」
║╭  ${Prefijo}iniciarviagem
║├  ${Prefijo}risco
║├  ${Prefijo}explorar
║├  ${Prefijo}inventario
║├  ${Prefijo}repararnave
║├  ${Prefijo}subirnivel
║├  ${Prefijo}ranking
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
║├  ${Prefijo}promote
║├  ${Prefijo}demote
║╰—————————
╚══════════
╔「 _PROPRIETÁRIO :_ 」
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
╔「 _ALEATÓRIO :_ 」
║╭—————————
║├  ${Prefijo}criador
║├  ${Prefijo}proprietário
║├  ${Prefijo}rg
║├  ${Prefijo}desrg
║├  ${Prefijo}meuperfil
║├  ${Prefijo}infobot
║├  ${Prefijo}simi
║├  ${Prefijo}frase
║├  ${Prefijo}estadobot
║├  ${Prefijo}djbot
║├  ${Prefijo}juntesebot
║├  ${Prefijo}listbots
║├  ${Prefijo}instalarbot
║├  ${Prefijo}sugerir
║├  ${Prefijo}apoiar
║╰—————————
╚══════════

Muito em breve mais funções...`],
Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo banido* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuário* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PÚBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restrito* : _${g?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ATIVADO [✓]":"DESATIVADO [X]"}_\n${a?`\n*Modo Somente-Admins* : _${j?"Ativo [✓]":"Inativo [X]"}_\n\n*Boas-vindas* : _${k?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Links* : _${l?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti URLs* : _${m?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Estrangeiros* : _${n?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos* : _${o?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos 2* : _${p?"Ativo [✓]":"Inativo [X]"}_\n\n*Detecção* : _${q?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti-caiu* : _${r?"Ativo [✓]":"Inativo [X]"}_\n\n*Chat Bot* : _${s?"Ativo [✓]":"Inativo [X]"}_`:""}\n`,
Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ PERFIL E INFORMAÇÕES DO USUÁRIO]> 🌐\n\n➢ Nome: ${n}\n${e?"➢ É administrador: [✓]":"➢ É administrador: [X]"}\n${k?"➢ Usuário premium: Sim":"➢ Usuário premium: Não"} \n${o?"➢ Registrado: [✓]":"➢ Registrado: [X]"} ${o?`\n➢ Nome registrado: ${s}\n➢ Idade: ${m}\n➢ Data de registro: ${i}`:""}${c?`\n➢ Porcentagem gay: ${c}`:""}\n➢ Limites restantes: ${b+r+u}\n- Jogos = ${b}\n- Downloads = ${r}\n- Outros = ${u}\n`,`➢ País: ${n} \n➢ Código do país: ${e} \n➢ Origem do número: ${k||"Não encontrado u.u"} ${o?"\n➢ Número válido: [✓]":"\n➢ Número válido: [X]"} ${s?"\n➢ Dispositivo móvel: [✓]":"\n➢ Dispositivo móvel: [X]"} \n➢ Operadora: ${m} \n➢ Tipo de linha: ${s} \n➢ Formato local: ${i} \n➢ Formato internacional: ${c} \n➢ Código do país: ${b}`],
Stke: (a = "") => ["Responda um adesivo do chat atual...", `Envie ou responda um adesivo com o comando ${Prefijo+a}`, "Dica: exclua seu adesivo para todos ;v", "[ ! ] Responda um adesivo para obter os metadados", "[ ! ] Responda um adesivo para atribuir um preço falso :p", "Responda um adesivo para editar o EXIF do seu jeito"],
Jtli: (n = "", k = "") => ["Você já está em uma sala ativa -.-", `*[ ! ] Insira um nome para criar uma nova sala*\n\nExemplo de uso:\n\n${Prefijo+n} latam\n`, "Rival encontrado!\nO jogador X deve começar o jogo escrevendo um número de 1 a 9 para iniciar", "deve começar o jogo", "~Escreva :~\n\nrender\n\n~para desistir~", `*[ ! ] Aguardando oponente*\nPara entrar no jogo, use o comando ${Prefijo+n} ${k}\n\n`, "O jogo terminou", "Inválido", "Posição inválida", "Posição inválida", "Vitória!", "Jogo terminado, empate", "Vez de", "*Sala de Jogo da Velha 3x3 excluída com sucesso ✓*"],
Jcal: (a = "") => [`*[ ! ] Use bem o comando :*\n${Prefijo+a} @tag|mensagem|resposta`, `*[ ! ] Adicione barras entre cada palavra todas juntas*\n\n_Exemplo de uso_ : \n${Prefijo+a} @taggeduser|blessme|blessed\n~Não se esqueça de usar esta barra~ : " | "`, "Sem texto :v", " use 2 barras!!!\n\n@tag|mensagem|resposta ✓"],
Jnij: (a = "") => ["Use um nome ou apelido...", `☯️ Nome Ninja para _${a}_:`],
Jqun: (a = "") => [`*[ ! ] Invente um problema*\n_Exemplo:_\n\n${Prefijo+a} é gay :v?\n`, "*[ ! ] A questão é muito curta*"],
Jtgs: (n = "", e = "", k = "", o = "") => [`*Jogador : @${n}*\n*[ Parabéns, você ganhou!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${e}*\n*┃ ├────────┤ ┃*\n*${k} <==*\n*┃ ├────────┤ ┃*\n*${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Todos os seus limites foram restabelecidos*`, `Jogador : @${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${e}\n┃ ├────────┤ ┃\n${k}\n┃ ├────────┤ ┃\n${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],
Jtgy: (n = "", k = "") => [`_Calculando porcentagem..._\n💉${n}🔬`, "sua porcentagem de gays é ", `@${n} é ${k} gay`, "*[ ! ] Limite gay excedido [ ! ]*"],
RpgX: (n = "", e = "", k = "", o = "") => [`\`\`\`Por favor, confirme que você vai iniciar o jogo RPG, exemplo de uso:\`\`\`\n\n- Para continuar o jogo:\n${Prefijo+n} true\n\n- Para pausar o jogo:\n${Prefijo+n} false`, '```Jogo de RPG iniciado com sucesso ✓```', `\n_Escolha sua raça para começar. Raças disponíveis:_\n\n\n${n}\n• Habilidades: Manipulação de Energia, Voo.\n- Objetivos: Preservar a Sabedoria, Exploração Cósmica.\nUse o comando:\n${Prefijo+o} ${k.myphers}\n\n\n${e}\n• Habilidades: Regeneração, Força Física.\n- Objetivos: Domínio Militar, Honra e Lealdade.\nUse o comando:\n${Prefijo+o} ${k.drakonites}\n`, `\`\`\`Você escolheu a corrida ${n}!\`\`\` ${"myphers"===n?"\n\n*Antecedentes dos Myphers:*\n\n_Os Myphers são seres etéreos originários do planeta gasoso Myphoria. Sua sociedade está profundamente enraizada na espiritualidade e na conexão com as energias cósmicas que impregnam sua atmosfera. Ao longo das eras, desenvolveram uma sabedoria ancestral que os orienta em sua busca por conhecimento e paz no vasto universo._\n\n_Os Myphers aperfeiçoaram a arte da manipulação de energia cósmica, permitindo-lhes realizar feitos incríveis, desde curar feridas até criar poderosas barreiras defensivas. Sua habilidade inata de voar lhes confere uma vantagem na exploração de planetas gasosos e lhes permite se deslocar com graça e velocidade._\n\n_Seus objetivos primordiais são preservar a sabedoria antiga de sua raça e expandir sua compreensão do universo. Os Myphers acreditam na harmonia universal e buscam compartilhar seu conhecimento com outras raças para promover a paz e a compreensão na galáxia._":"\n\n*Antecedentes dos Drakonites:*\n\n_Os Drakonites, originários do abrasador planeta Draconis, são uma raça de répteis fortes e resilientes. Eles sobreviveram a gerações em um ambiente hostil, o que moldou seu caráter feroz e determinação inabalável. Desde os tempos antigos, honraram o código de honra e lealdade, valores que guiaram sua sociedade por milênios._\n\n_A habilidade regenerativa dos Drakonites permite que eles se recuperem rapidamente de ferimentos, enquanto sua força física e resistência os tornam guerreiros formidáveis em batalha. Eles aprimoraram as artes do combate corpo a corpo e desenvolveram tecnologias avançadas para defender seu lar e expandir seu domínio._\n\n_O objetivo principal dos Drakonites é estabelecer um domínio militar no universo, expandindo sua influência e garantindo a sobrevivência de sua espécie. Valorizando a honra acima de tudo, procuram aliados que compartilhem seus valores e estejam dispostos a lutar ao lado deles na conquista de novos mundos._"} `, "[ ! ] Esta raça não existe, por favor escolha uma raça válida", `Para parar o jogo de RPG use o comando:\n\n${Prefijo+n} false`, "🌌 Jogo de RPG pausado corretamente ✓"],
RpgA: (a) => ["Sua nave não pode explorar mais planetas no estado atual. Você precisa coletar mais recursos para repará-lo.", `Você poderia embarcar em outra aventura dentro de ${a}`, `Você retornou ao planeta: *${a}*...`, `Você descobriu um novo planeta: *${a}*!`],
RpgE: (n='', e='', k='', o='', m='', d='', z='') => [`*[ ! ] Ya realizaste una exploración recientemente, por favor espera*\n🕐 ${n}...*\n`,`🪨 ${n?"*No encontraste recursos por ahora u.u*":"*Has descubierto:*"}\n${e?`\n🛢️ Gas: ${e}`:""} ${k?`\n⚒️  Wolframio: ${k}`:""} ${o?`\n⚒️  Oro: ${o}`:""} ${m?`\n⚒️  Hierro: ${m}`:""} ${d?`\n⚒️  Aluminio: ${d}`:""} ${z?`\n⚒️  Silicio: ${z}`:""}\n`,"🏜️ *No se encontró nada por ahora*\n\n",`\n*🏳️ Has encontrado una nueva civilización:* ${n}!, alianzas realizadas ${e}, ahora tu horda está conformada por ${k} unidades.`,"\n🏴 Hasta el momento, no se ha registrado ningún avistamiento de vida alienígena en este planeta."],
RpgI: (a='', b='', c='', d='', e='', f='', g='', h='', i='', j='', k='', l='', m='', n='', o='', p='', q='', r='', s='') => `\`\`\`Inventário de @${a} (${b})\`\`\`\n\n*[🪐] Planetas descobertos:*\n   - Total: _${c}_ ${d?`\n   - Planeta atual: _${d}_`:""}\n\n*[🚀] Nave:*\n   - Gás: _${e}_\n   - Tecnologia: _${f}_\n   - Estado: _${g}_\n\n*[🌌] Explorações:*\n   - Última Odisséia: _${0===h?"Sem viagens":`Há ${i}`}._\n   - Última Exploração: _${0===j?"Sem explorações":`Há ${k}`}._\n\n*[🎒] Itens:*\n   - Wolframio: _${l}_\n   - Ouro: _${m}_\n   - Ferro: _${n}_\n   - Alumínio: _${o}_\n   - Silício: _${p}_\n\n*[👥] Horda:*\n   - _${q} unidades_\n\n*[🌟] Experiência:*\n   - _${r} pontos_\n\n*[👑] Papel:*\n   - _${s}_\n`,
RpgR: (m='', d='', z='') => [`*[🚀] Qual material você deseja usar para reparar sua nave:*\n\n🪨 W74 (Wolframio):\n_1 de W74 fornece 50 de tecnologia_\n\n🪨 Au79 (Ouro)\n_3 de Au79 fornece 45 de tecnologia_\n\n🪨 Fe26 (Ferro)\n_5 de Fe26 fornece 20 de tecnologia_\n\n🪨 Al13 (Alumínio)\n_10 de Al13 fornece 15 de tecnologia_\n\n🪨 Si14 (Silício)\n_20 de Si14 fornece 5 de tecnologia_\n\nExemplo de uso:\n\n${Prefijo+m} Si14\n`, `Você não tem material suficiente para consertar o navio, você precisa de +${m} de ${d}, atualmente você tem ${z}`, `Você acabou de consertar sua nave com a tecnologia ${m}.`, "Este material no existe"],
RpgS: (m='', d='', z='') => [`${m}\n\n- Nível alcançado: _${d}_\n- Função atribuída por nível: ${z}`, `Seu nível atual é ${m}, de acordo com seu nível sua função é: ${d}`],
Lvls: () => ({0:"Escravo Nível-Ⅱ",3:"Escravo Nível-Ⅲ",4:"Escravo Nível-Ⅳ",5:"Escravo Nível-Ⅴ",6:"Escravo Nível-VI",7:"Escravo Nível-VII",8:"Escravo Nível-VIII",9:"Escravo Nível-IX",10:"Escravo Nível-X",11:"Você deixou de ser um escravo, parabéns 🥳",12:"Sendo de baixa inteligência",13:"Sendo de inteligência média",15:"Sendo de alta inteligência",16:"Novato em treinamento ✓",20:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",24:"Recruta Nível-Ⅰ",28:"Recruta Nível-Ⅱ",32:"Recruta Nível-Ⅲ",36:"Recruta Nível-Ⅳ",40:"Recruta Nível-Ⅴ",44:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",48:"Soldado de Primeira Classe",52:"Soldado com Honras",56:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",60:"Especialista",64:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",68:"Cabo Sub-1",72:"Cabo Sub-2",76:"Cabo Sub-3",80:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",84:"Sargento",88:"Sargento de Segunda Classe",92:"Sargento de Primeira Classe",96:"Sargento Mestre",100:"Sargento Primeiro",104:"Sargento-Mor",108:"Sargento-Mor de Comando",112:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",116:"Tenente",120:"Tenente Primeiro",124:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",128:"Capitão",132:"Capitão Tenente",136:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",140:"Major",144:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",148:"Tenente-Coronel",152:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",156:"Coronel [－]",160:"Coronel [＝]",164:"Coronel [≡]",168:"Coronel [≥]",172:"Coronel [≧]",176:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",180:"General de Brigada ㈠",184:"General de Brigada ㈡",188:"General de Brigada ㈢",192:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",196:"General ︾",200:"General ︾︾",204:"General ︾︾︾",208:"*PARABÉNS*\n_Você está prestes a passar para um novo nível, continue assim!!!_ 🪀\n",212:"Líder de Alto Mando •",216:"Líder de Alto Mando ••",220:"Líder de Alto Mando ⊙",224:"Líder de Alto Mando ⊚",228:"Líder de Alto Mando ⊛",232:"*PARABÉNS*\n_Você está prestes a subir de nível, continue assim!!!_ 🪀\n",236:"Aposentado com Honras",240:"*PARABÉNS*\n_Você está prestes a subir de nível, continue assim!!!_ 🪀\n",244:"Herói Bronze ☆",248:"Herói Prata ☆",252:"Herói Ouro ☆",256:"Herói Diamante ☆",260:"*PARABÉNS*\n_Você está prestes a subir de nível, continue assim!!!_ 🪀\n",264:"Lenda ✩",268:"Lenda ✩✩",272:"Lenda ✩✩✩",276:"Lenda ✩✩✩✩",280:"Lenda ✩✩✩✩✩",284:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",288:"Anjo ✬",292:"Anjo ✬✬",296:"Anjo ✬✬✬",300:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",304:"Principado ✯",308:"Principado ✯✯",312:"Principado ✯✯✯",316:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",320:"Potestade ✪",324:"Potestade ✪✪",328:"Potestade ✪✪✪",332:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",336:"Grigori ♧",340:"Grigori ♧♧",344:"Grigori ♧♧♧",348:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",352:"Paladino ♤",356:"Paladino ♤♤",360:"Paladino ♤♤♤",364:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",368:"Regente Tipo 1",372:"Regente Tipo 2",376:"Regente Tipo 3",380:"Regente Tipo 4",384:"Regente Tipo 5",388:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",392:"Arcanjo •",396:"Arcanjo ○",400:"Arcanjo ●",404:"Arcanjo □",408:"Arcanjo ■",412:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",416:"Guardião Celestial Tipo 1",420:"Guardião Celestial Tipo 2",424:"Guardião Celestial Tipo 3",428:"Guardião Celestial Tipo 4",432:"Guardião Celestial Tipo 5",436:"Ascendendo a níveis sagrados, continue com sua jornada... 🌌",440:"Ascensão Divina Processo 1.0...",444:"Ascensão Divina Processo 2.0...",448:"Ascensão Divina Processo 3.0...",452:"Ascensão Divina Processo 4.0...",456:"Ascensão Divina Processo 5.0...",460:"Ascendendo a Poderes Divinos 🧿\n*PARABÉNS, CONTINUE ASSIM*",464:"Entidade Menor Tipo I",468:"Entidade Menor Tipo II",472:"Entidade Menor Tipo III",476:"Entidade Menor Tipo IV",480:"Entidade Menor Tipo V",484:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",488:"Entidade Maior Tipo I",492:"Entidade Maior Tipo II",496:"Entidade Maior Tipo III",500:"Entidade Maior Tipo IV",504:"Entidade Maior Tipo V",508:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",512:"Semi-Deus ◇",516:"Semi-Deus ◇◇",520:"Semi-Deus ◇◇◇",524:"Semi-Deus ◇◇◇◇",528:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",532:"Forjador de Mundos •",536:"Forjador de Mundos ▪︎",540:"Forjador de Mundos ○",544:"Forjador de Mundos ●",548:"Forjador de Mundos □",552:"Forjador de Mundos ■",556:"Forjador de Mundos ♡",560:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",564:"Deus Nível 0",568:"Deus Nível 1",572:"Deus Nível 2",576:"Deus Nível 3",580:"Deus Nível 4",584:"Deus Nível 5",588:"Deus Nível 8",592:"Deus Nível 10",596:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",600:"Senhor de Panteão Tipo-I",604:"Senhor de Panteão Tipo-II",608:"Senhor de Panteão Tipo-III",612:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",616:"Juiz do Destino Fase Intermediária",620:"Juiz do Destino Fase Avançada",624:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",628:"Controle da Matéria Fase 1",632:"Controle da Matéria Fase 2",636:"Controle da Matéria Fase 3",640:"Controle da Matéria Fase 4",644:"Controle da Matéria Fase 5",648:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",652:"Controlador do Universo\nFase 1",656:"Controlador do Universo\nFase 2",799:"Controlador do Universo\nFase 3",800:"Controlador do Universo\nFase 4",850:"Controlador do Universo\nFase 5",870:"Ascendendo de Poder ⚜️\n*PARABÉNS, CONTINUE ASSIM*",930:"EM ASCENSÃO PARA UM PODER INIMAGINÁVEL... ☯️",950:"\n*Controle do Todo Absoluto Acima de Deus* 🔥\n",1e3:"[ Parabéns!!! ]\nVocê atingiu o nível máximo, muito obrigado por interagir comigo :,3"}),
RpgT: (m = "", d = "", z = "") => [`Formato incorreto, use dados válidos:\n\nLista de tipos que você pode usar:\n- nivel\n- experiencia\n- horda\n- elementos\n- planetas\n- gays\n\n_Exemplo de uso:_\n${Prefijo+m} nivel\n`,`*🌟 Classificação ${m}:*\n\n${d} ${z>0?`\n\n_📍Sua posição é: ${z}_`:""}`],
Gadd: (a = "") => ["Ative o modo restrito para realizar esta ação", "[ ! ] Informe o número de um usuário que deseja adicionar ao grupo", `wa.me/${a} está convidando você para o grupo do WhatsApp!`, `*[ ! ] Erro, não foi possível adicionar @${a} ao grupo*\n\n_Por favor, envie um link de convite manualmente para wa.me/${a}_\n`],
Bunt: (n = '', k = "") => ["E o link do WhatsApp?", "[ ! ] Erro, O link não funciona ou é inválido", `[ ! ] A quantidade mínima para entrar no grupo deve ser *${MinimoDeUsuarios}* participantes`, `${NombreDelBot} entrou no grupo ${n} com sucesso \n`],
Uban: (n = "", k = "") => ["Você me odeia? :,c", `*O participante @${n} foi removido do grupo ✓*\n_Ação executada por ${k}_`, "Qual usuário você deseja remover!?\nPor favor, mencione um"],
Uact: (n = "", e = "", o = "") => ["*Qual participante você deseja tornar administrador?*", `Exemplo de uso:\n\n${Prefijo+n} @51995...\n`, "Quem você quer banir?", "[ ! ] Marque o usuário que você deseja banir", `Usuário banido, ${n} não poderá mais usar o bot [ ! ]`, "*Qual administrador você deseja remover do cargo?*", "Quem você quer desbanir?", `Usuário não banido, ${n} pode usar o bot novamente [✓]`, `Marque ou mencione alguém!\n\nExemplo de uso:\n${Prefijo+n} @${e}`, `*${n}* deixou de ser premium`, "Indique o número de dias", `Apenas números!\n\nExemplo de uso:\n${Prefijo+n} @${e} 369...`, "[ ! ] Máximo 7 dias", `*[ USUÁRIO PREMIUM ]*\n🔖 *Nome:* ${n}\n📆 *Tempo:* ${e} dias\n📉 *Restante:* ${o}MS`, "[ ! ] Seu tempo premium acabou!\n_Eu espero que você tenha gostado :3_\n"],
Gbnd: () => ["Bate-papo banido com sucesso ✓", "Bate-papo desbanido com sucesso ✓"],
Gpbc: (n = "", k = "") => ["[ ! ] E a mensagem que você quer transmitir?", `Enviando transmissão para ${n} grupo(s), em aproximadamente ${k} segundo(s)`],
Gcea: (n = "", k = "") => [`*Em que tempo você deseja fechar o grupo?*\n\n_Exemplo de uso_ : \n${Prefijo+n} 10 segundos`, `*O grupo será fechado em ${n}*\n_Ação executada por : @${k}_`],
Bblst: (n = "", k = "") => ["Atualmente não há subbots ativos...", "*Lista de números que foram subbots*\n~Alguns números podem estar inativos!~", `${n === k ? `\n\n*🐝 Bot:* wa.me/${k}` : `\n\n*👑 Proprietário:* +${n}\n*🐜 Bot:* wa.me/${k}`}`],
Bbot: (a = '', b = '') => ["[ ! ] Você não pode usar este comando sendo um bot [ ! ]", "A opção de ser temporariamente um bot está desativada", `*Olá ${a}!, antes de continuar, por favor, leia este mini guia para evitar problemas:*\n\n☝️🤓 Informações e uso do comando: ${b}\n\n1.- Ao solicitar o código QR pela primeira vez, uma chave única será gerada para que você possa usar o comando posteriormente (não se esqueça de guardar sua chave).\n\n2.- O comando possui algumas ações que você pode utilizar:\n┬[ ${b} sua_chave-xxx...\n└‒> _Você poderá se conectar manualmente caso o bot "desconecte"._\n┬[ ${b} sua_chave-xxx... stop\n└‒> _Isso interromperá o processo do subbot até que você o reative manualmente com sua chave._\n┬[ ${b} sua_chave-xxx... neoqr\n└‒> _Sua sessão atual será encerrada e você poderá solicitar um novo código QR para escanear._\n\n3.- Ao se tornar um subbot, é aconselhável sair dos grupos onde está o bot principal, isso para evitar possíveis erros ou conflitos com o sistema antispam do bot.\n\n4.- O proprietário e administrador deste bot reserva o direito de interromper, modificar ou desativar os subbots ativos ou características do sistema sem aviso prévio.\n\n5.- Lembre-se de escanear um dos códigos QR que lhe serão enviados, se você solicitar o código QR em vão, será marcado por 1 hora, impedindo temporariamente o acesso ao comando até que possa ser utilizado novamente.\n\n~O criador deste bot não se responsabiliza por qualquer ação, dano ou consequência derivada de seu uso.~`, "[_>] Solicitar código...", "Parando o serviço do subbot...", "Gerando um novo código QR, não esqueça de escaneá-lo a tempo!", "[ ! ] Por favor, use sua chave para continuar...", "[ ! ] Chave incorreta, tente novamente..."],
Bbbot: () => ["Demorou muito para escanear um dos códigos QR, interrompendo o serviço...", 'Escanee este QR para se tornar um bot temporário\n1. Toque nos três pontos "︙" no canto superior direito\n2. Selecione a opção "dispositivos vinculados"\n3. Toque em "vincular um dispositivo"\n4. Você pode ler este QR ou usar o método "Vincular com número de telefone" na parte inferior da tela\n~[NOTA] O código QR irá expirar se não for lido a tempo!~\n\n_Enviando código de emparelhamento..._', "Foi detectado recentemente uma sessão encerrada do seu subbot. Você não poderá se conectar como bot até que o proprietário reinicie o banco de dados.", "*Conectado com sucesso*\n\nAqui está sua chave única para se reconectar manualmente caso seja desconectado do serviço de bot temporário:", "Conexão restabelecida, você voltou a ser um subbot novamente!"],
Afkpl: (n = "", k = "") => [`📲 *Você não está mais ausente após ${n}.*\nBem-vind@ de volta!!! :D`, `📴 *O usuário mencionado está atualmente ausente, tempo decorrido ${n}.*\n\n┏⊱ *Razão* \n┗━⊱ ${k}\n`, `Por favor, indique o motivo de sua ausência\nExemplo de uso:\n\n${Prefijo+n} vou ao banheiro :v`, "[ ! ] O motivo é muito curto", `*A função de ausência foi ativada com sucesso*\n\n➸ *Usuário*: ${n}\n➸ *Razão*: ${k}`],
Ureg: (k = "", o = "", s = "", m = "", i = "", c = "") => ["Por favor insira seu código de registro","[ ! ] Código de registro incorreto","[✓] Seu registro foi excluído do banco de dados com sucesso 🗑️",`*[ ! ] Você já foi cadastrado em meu banco de dados*\nQuer se cadastrar novamente?\nUse o comando: \n\n${Prefijo}desrg <Código de Registo>\n`,"Nome e idade!?",'*[ ! ] Adicione uma barra entre nome e idade*\n\n" | "\n',"*[ ! ] Na idade apenas números são aceitos -.-*","*[ ! ] Mano, o nome é muito longo ._.*","*[ ! ] Idade máxima 30 anos*","*[ ! ] Idade mínima 13 anos*","CADASTRO","Nome: ","Idade: ","Puberto","Adolescente","Jovem","Adulto","Data de registro:","Informação:",`〘  *CADASTRO* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *Cadastro de usuário* : @${k}\n╠≽️ *Nome registrado* : ${o}\n╠≽️ *Data de nascimento* : ${s}\n╠≽️ *De acordo com a sua idade você é um* : ${m}\n╠≽️ *Informação* : ${i}\n╠≽️ *Número* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Código de Registo_ : ${c}\n\nᴺᵃ̃ᵒ ˢᵉ ᵉˢᑫᵘᵉᶜ̧ᵃ ᵈᵉ ˢᵃˡᵛᵃʳ ᵒᵘ ᶜᵒᵖᶦᵃʳ ˢᵉᵘ ᶜᵒ́ᵈᶦᵍᵒ ᵈᵉ ʳᵉᵍᶦˢᵗʳᵒ`],
Bscp: () => [`*🛑 Antes de prosseguir com a leitura, observe os seguintes requisitos:*\n- _Ter o WhatsApp oficial em seu dispositivo_\n- _Ter 200MB de espaço livre em seu dispositivo_\n- _Ter o aplicativo Termux instalado_\n- _Ter uma boa conexão com a internet_\n- _E, por último, mas não menos importante, ter paciência_ :v\n\n\n*[_>] Aqui serão postados tutoriais tanto para o aplicativo Termux quanto para máquinas virtuais:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\nPrecisa de mais ajuda? Entre em contato com o meu criador:`, "Demo Test Tmp"],
Vthx: () => "💻 *Redes sociais* 📲\n\n[ > ] Canal do Youtube:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Página do Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\nᴺᵃ̃ᵒ ᵖᵉᶜ̧ᵒ ᵈᶦⁿʰᵉᶦʳᵒ⁻ ˢᵒ́ ᶜᵒᵐ ᵒ ˢᵉᵘ ᵃᵖᵒᶦᵒ ᶠᶦᶜᵒ ᶠᵉˡᶦᶻ :³"
};