import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: "pt",

Domina: "Idioma português",

Start: () => ["Executando o Bot mais Kawaii do terceiro mundo.\nIniciando execução do script...", "\n[!] Código finalizado:"],

Conn: (a = '') => ["Conectando...", "Motivo de desconexão:", "Tempo de conexão esgotado, reconectando...", "Reinício necessário, reiniciando...", "Dispositivo desconectado, por favor, vincule novamente e execute.", "Conexão substituída, uma nova sessão foi aberta, por favor, encerre a sessão atual primeiro.", "Conexão perdida com o servidor, reconectando...", "Conexão fechada, reconectando...", "Arquivo de sessão incorreto, por favor, elimine a sessão atual e vincule novamente", "Conectado ✓", "\n\n[_>] Se você vai utilizar o método de pareamento, por favor, insira o número que se tornará o bot. Certifique-se de inserir o número completo do WhatsApp junto com seu código de país.\nExemplo: +55xxx...\n", `\nCódigo de pareamento para o número "+${a}":`],

Call: (n = '', k = '') => `\n*[ ! ] ${n} Você será bloqueado*\n_Motivo: por fazer uma ${k ? "ligação de vídeo" : "ligação"} para este número sem autorização!_\n`,

GpUp: (n = '', k = '') => ["🔒 *[ GRUPO FECHADO ]* 🔒\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🔓 *[ GRUPO ABERTO ]* 🔓\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ, ᵉˢᵗᵉʲᵃ ᶜᶦᵉⁿᵗᵉ ᵈᵉ ᵖᵉˢˢᵒᵃˢ ᶜᵒᵐ ʳᵉᵗᵃʳᵈᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASSUNTO DE GRUPO ALTERADO ]* 🤳\n\n- Questão principal era: _${n}_\n\n- Novo nome: _${k}_\n`],

RestriN: "[!] Falha ao remover o novo participante, por favor, ative o modo restrito!",

AlertList: "[!] Exclua os números que começam com '1' da Blacklist em ./config.json...!",

WlcAdd: (n = '', e = '', k = '', o = '') => [`⚡ *Bem-vindo(a) ${n} a este incrível grupo* ${e}\n📆 *Data de entrada: ${k}*\n🍷 _*Espero que você aproveite sua estadia aqui, não se esqueça de respeitar os participantes e as regras*_ ;)\n\n📜 *Regras do grupo atualmente:* \n${masss}\n${o}`, "`Se você for personalizar a mensagem de boas-vindas, pode usar esses parâmetros adicionais:`\n- @user \n_(para marcar o usuário)_\n- @group\n_(para usar o nome do grupo)_\n- @date\n_(para indicar a data)_\n- @desc\n_(para exibir a descrição)_\n"],

WlcRemove: (m = '', d = '', z = '') => `[!] Esquerda: @${m} • ${d}\n- Data de partida |  ${z}`,

WlcPromot: (m = '', d = '', z = '') => [`*Parabéns @${m}!, ${z || 'Um administrador'} acabou de te dar um grande poder, agora você é um administrador do grupo*: _${d}_\n`, `~Agora eu tenho o poder absoluto e não me importo!~\n\n*Quero dizer..., _Muito obrigado(a) a ${m || 'um administrador'} por me dar a administração, farei o meu melhor para este grupo!!!_ :D*`],

WlcDemot: (m = '', d = '', z = '') => [`*${z || 'Um administrador'} acabou de rebaixar @${m} e não é mais um administrador do grupo*: _${d}_`, "Que triste, não sou mais um administrador unu"],

Blys: "Outro bot foi detectado no grupo. Para evitar qualquer tipo de conflito ou spam, vou sair de boa 🗿",

Cprint: ["EXECUTANDO", "MENSAGEM", "Por", "De", "Chat", "grupo:","Privado:", "Data"],

MsjRegister: `\`[!] Para usar esta função, primeiro você precisa se registrar!\`\n\n${Prefijo}rg`,

SpmrCmd: (a = '') => ["_Aguarde alguns segundos antes de usar outro comando..._ ✓", `[ ! ] ${a} Por favor, não sobrecarregue o bot ;-;`],

SpmrCnsl: "[SPAMER CMD] Comando:",

Antnlc: (a = '') => ["[ ! ] Meu maluco você acabou de enviar um link, o bom é que o link detectado é desse grupo owo", "*[ ! ] Link detectado [ ! ]*\n\n_Felizmente não sou administrador, então Eu não posso fazer nada unu_", `*[ ! ] Link detectado [ ! ]*\n_Agora se você valesse @${a} Adeus..._\n`],

Antgll: () => ["Você acabou de mencionar todos os participantes deste grupo, não sou um administrador, então não posso fazer nada :0", "A ação de mencionar todos é proibida neste grupo, adeus!"],

Antlnk: (a = '') => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Felizmente, não sou um administrador, então não posso fazer nada :v_"}`,

Antrb: (n = '', k = '') => [`O administrador @${n} acabou de enviar um texto que contém muitos caracteres -.-!`, `*[ ! ] Foi detectada uma mensagem que contém muitos caracteres [ ! ]* ${n ? "" : `${saltos}\nNão sou um administrador, não posso fazer mais nada... :/`}`, `Marcar o chat como lido ✓\n${saltos}\n=> Número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acabou de enviar um texto que contém muitos caracteres que pode causar problemas em dispositivos móveis`],

AiChat: (n = '', k = '') => ["Por favor, seja mais específico em sua mensagem", "E a mensagem?", `"${k}" foi ${n ? "ativado" : "desativado"} com sucesso.`],

Netw: (m = '', d = '', z = '') => `*[ ! ] Por favor, use um link de ${d}*\n_Exemplo de uso:_\n\n${Prefijo + m} ${z}`,

Schd: (m = '', d = '', z = '') => `*[ ! ] Por favor, insira um texto para realizar a pesquisa correspondente em ${d}*\n_Exemplo de uso:_\n\n${Prefijo + m} ${z}`,

Nime: (n="", k="") => ["Use uma captura de tela ou imagem de uma cena de anime", `${n ? 'Se o resultado não for o esperado, tente usar uma imagem de boa resolução de uma cena de “anime”!  ' : 'Não posso garantir que o resultado seja 100% preciso u.u'}`, `*🔖Título:* _${n || "N/N"}_\n*🎴Episódio:* _${k || "N/N"}_\n`],

Vthx: () => "`💻 Redes sociais 📲`\n\n[ > ] Canal do Youtube:\n- https://youtu.be/-BnJigQ4-cM\n\n[ f ] Página do Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://www.tiktok.com/@nekosmic/video/6867645537231850753 \n\n> ᴺᵃ̃ᵒ ᵖᵉᶜ̧ᵒ ᵈᶦⁿʰᵉᶦʳᵒ⁻ ˢᵒ́ ᶜᵒᵐ ᵒ ˢᵉᵘ ᵃᵖᵒᶦᵒ ᶠᶦᶜᵒ ᶠᵉˡᶦᶻ :³",

Tptv: () => "Por favor, responda ou envie um vídeo que não exceda 59 segundos de duração.",

Mlti: (a = '') => `*\`Exemplo de uso (idiomas disponíveis):\`*\n\n> Idioma español 🇵🇪\n-  ${a} es\n\n> English language 🇺🇲\n-  ${a} en\n\n> Idioma português 🇧🇷\n-  ${a} pt\n\n> Bahasa Indo 🇮🇩\n-  ${a} id\n\n> deutsche Sprache 🇩🇪\n-  ${a} de\n\n> Auto... 🌎\n-  ${a} auto\n`,

Gbnd: () => ["Bate-papo banido com sucesso ✓", "Bate-papo desbanido com sucesso ✓"],

Gemx: (a = '') => `*Exemplo de uso:*\n\n${Prefijo+a} 🥺+🥵\n`,

Jttt: (n='', k='') => [`\`[ JOGO DA VELHA ]\`\n      \n*Para criar uma sala, exemplo:*\n\n> Você pode desafiar outro jogador\n${Prefijo+n} aleatório\n\n-\n*Para jogar contra o bot:*\n\n> Modo 1\n${Prefijo+n} bot\n\n> Modo 2\n${Prefijo+n} bot troll\n\n-\n*NOTA:*\n_Quando estiver em uma partida ativa, use os seguintes comandos para fazer um movimento no tabuleiro de 1 a 9, Exemplo:_\n\n${Prefijo+n} 4\n`, `*Você está me desafiando!*\n\n> Você começa primeiro.\n\n${n}\n`, "Você já está jogando contra o bot. Termine o jogo antes de entrar em uma nova sala.", `Você já está na sala "${n}". Termine o jogo antes de entrar em outra sala.`, `A sala "${n}" foi deletada por inatividade.`, `Sala "${n}" criada. Aguardando outro jogador entrar usando o mesmo nome de sala...`, `Você entrou na sala "${n}". O jogo começa agora.\n${k}`, "Movimento inválido. Escolha uma posição livre entre 1 e 9.", `${n}\n\n> Turno de ${k}`, `${n}\n\n> Seu turno`],

Wppr: (n = '', k = '') => [`┏━⊱ Papel de parede: ${n}\n┗⊱ Solicitado por: @${k}`],

Frs: (n="", k="") => `- *Frase:* _${n}.._\n\n> *Autor:* _${k}_\n`,

Fxm3: (m = '', d = '', z ="") => [`*Aqui está uma lista de efeitos disponíveis:*\n\n- ${m}\n\nExemplo de uso: ${Prefijo+d} ${z}`, "`[ ! ] Responda uma mensagem de áudio`\n\n> Máximo 2 minutos de duração"],

AdmOpt: (n = '', k = '') => [`${n ? 'ligado' : 'desligado'} ${k} para este chat`, "Aqui está a lista de opções :3", "Opção:", "Descrição:", "Comando:", [
  {
    t: "[ ⬇️ BOAS-VINDAS AUTOMÁTICAS ]",
    o1: "[ 🛬 Ativar ]",
    d1: "~O bot dará as boas-vindas aos novos participantes em um grupo~",
    c1: `${Prefijo}ligue bemvindo`,
    o2: "[ 🛫 Desativar ]",
    d2: "~O bot não dará as boas-vindas aos novos participantes em um grupo~",
    c2: `${Prefijo}desligue bemvindo`
  },
  {
    t: "[ ⬇️ DESPEDIDA AUTOMÁTICA ]",
    o1: "[ 👋 Ativar ]",
    d1: "~O bot indicará quando um participante sair do grupo~",
    c1: `${Prefijo}ligue despedida`,
    o2: "[ ✊ Desativar ]",
    d2: "~O bot não tomará nenhuma ação de despedida~",
    c2: `${Prefijo}desligue despedida`
  },
  {
    t: "[ ⬇️ SÓ-ADMINS ]",
    o1: "[ ⭐ Ativar ]",
    d1: "~Agora, apenas os administradores do grupo podem usar o bot~",
    c1: `${Prefijo}ligue sóadmins`,
    o2: "[ ✨ Desativar ]",
    d2: "~Agora todos os participantes do grupo podem usar o bot~",
    c2: `${Prefijo}desligue sóadmins`
  },
  {
    t: "[ ⬇️ DETECÇÃO ]",
    o1: "[ 🌕 Ativar ]",
    d1: "~O bot detectará mudanças feitas em um grupo~",
    c1: `${Prefijo}ligue detecção`,
    o2: "[ 🌑 Desativar ]",
    d2: "~As mudanças feitas em um grupo não serão detectadas~",
    c2: `${Prefijo}desligue detecção`
  },
  {
    t: "[ ⬇️ ANTI-WALINKS ]",
    o1: "[ 🗡️ Ativar ]",
    d1: "~O bot removerá qualquer participante que enviar um link em um grupo~",
    c1: `${Prefijo}ligue walink`,
    o2: "[ 😴 Desativar ]",
    d2: "~Nenhuma ação será tomada quando links forem enviados~",
    c2: `${Prefijo}desligue walink`
  },
  {
    t: "[ ⬇️ ANTI-TAGALL ]",
    o1: "[ 🧐 Ativar ]",
    d1: "~O bot removerá participantes que marcarem todos~",
    c1: `${Prefijo}ligue antitagall`,
    o2: "[ 😶 Desativar ]",
    d2: "~O bot não fará nada quando todos forem marcados~",
    c2: `${Prefijo}desligue antitagall`
  },
  {
    t: "[ ⬇️ ANTI-URLS ]",
    o1: "[ 🗡️ Ativar ]",
    d1: "~O bot removerá os participantes que enviarem links~",
    c1: `${Prefijo}ligue antilink`,
    o2: "[ 😴 Desativar ]",
    d2: "~Nenhuma ação será tomada quando links forem enviados~",
    c2: `${Prefijo}desligue antilink`
  },
  {
    t: "[ ⬇️ ANTI-FALSOS 1 ]",
    o1: "[ 🛡️ Ativar ]",
    d1: "~Este comando ativa proteção contra números dos EUA (+1)~",
    c1: `${Prefijo}ligue antifake1`,
    o2: "[ ⚰️ Desativar ]",
    d2: "~Desativar Anti-Falsos 1 no grupo~",
    c2: `${Prefijo}desligue antifake1`
  },
  {
    t: "[ ⬇️ ANTI-FALSOS 2 ]",
    o1: "[ 🛡️ Ativar ]",
    d1: "~A proteção contra números falsos ou virtuais está ativada~",
    c1: `${Prefijo}ligue antifake2`,
    o2: "[ ⚰️ Desativar ]",
    d2: "~Desativar Anti-Falsos 2 no grupo~",
    c2: `${Prefijo}desligue antifake2`
  },
  {
    t: "[ ⬇️ ANTI-ESTRANGEIROS ]",
    o1: "[ 🏳️ Ativar ]",
    d1: `~A proteção contra números diferentes do prefixo do proprietário está ativada. Os números que começarem com  +${LocPref}  não serão removidos~`,
    c1: `${Prefijo}ligue antiestrangeiros`,
    o2: "[ 🏴 Desativar ]",
    d2: "~Desativar Anti-Estrangeiros no grupo~",
    c2: `${Prefijo}desligue antiestrangeiros`
  },
  {
    t: "[ ⬇️ ANTI-TRABA ]",
    o1: "[ 🐸 Ativar ]",
    d1: "~Este comando ativa proteção Anti-Traba no WhatsApp~",
    c1: `${Prefijo}ligue antitraba`,
    o2: "[ 👾 Desativar ]",
    d2: "~Anti-Traba desativado~",
    c2: `${Prefijo}desligue antitraba`
  },
  {
t: "[ ⬇️ CHAT - BOT ]",
o1: "[ 🗣️ Ativar ]",
d1: "~Este comando ativa um chat-bot em um grupo de WhatsApp~",
c1: `${Prefijo}ligue chatbot`,
o2: "[ 👤 Desativar ]",
d2: "~Desativar chat-bot no grupo atual~",
c2: `${Prefijo}desligue chatbot`
},
{
    t: "[ ⬇️ +18 - NSFW ]",
    o1: "[ 🥵️ Ativar ]",
    d1: "~Comandos de conteúdo adulto serão ativados~",
    c1: `${Prefijo}ligue nsfw`,
    o2: "[ 🤠 Desativar ]",
    d2: "~Desativar comandos adultos~",
    c2: `${Prefijo}desligue nsfw`
  }
]
],

OwnOpt: (n = '', k = '') => [`${n ? 'ativado' : 'desativado'} ${k} para este chat`, [
{
t: "[ ⬇️ MODO RESTRITO ]",
o1: "[ 🌚 Ativado ]",
d1: "~Ativa a função para remover participantes em grupos (Não recomendado)~",
c1: `${Prefijo}ativar restrito`,
o2: "[ 🌝 Desativado ]",
d2: "~Ações de remover e adicionar participantes desativadas (recomendado)~",
c2: `${Prefijo}desativar restrito`
}
]
],

Dlig: (a = '') => [`*[ ! ] Link inválido*\n_Por favor, use um link do Instagram_\nExemplo: ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],

Gimg: (a = '') => [`_Pesquisar por ${a}_`],

Bunt: (n = '', k = '') => ["[ ! ] Erro, link do WhatsApp não funciona ou é inválido", `[ ! ] Tenga en cuenta que la cantidad mínima de participantes del grupo debe de ser: *${MinimoDeUsuarios}*, para que el bot funcione`, "Seu grupo será revisado pelo proprietário do bot (ele decidirá se irá adicioná-lo ou não)"],

Dmdf: (n = '', e = '', k = '', o = '', m = '', d = '') => ["*[ ! ] Link inválido*\n_Por favor, use um link do MediaFire_", `*Nome:* ${n}\n*Tamanho:* ${e}\n*Extensão:* ${k}\n*Data de upload:* ${o}\n*Tipo de arquivo:* ${m}\n*URL:* ${d}`],

Menl: (n = '', e = '', k = '', o = '') => [`Olá ${n}!, 👋`, "Exemplo de uso", `*[ ${n} ]*\n≡ ~${e}~\n${Prefijo + k} ${o}`, `╔══════════\n║╭—————————\n`, `║├  ${n}`, `\n║╰—————————\n╚══════════`],

Menu: (n = '', e = '', k = '', o = '', s = '') => ["_Carregando cardápio..._", `╔I [ \`\`\`${n ? e : NombreDelBot}\`\`\` ]
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

Upfl: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', b = '', r = '', u = '') => [`💻 <[ PERFIL E INFORMAÇÕES DO USUÁRIO]> 🌐\n\n➢ Nome: ${n}\n${e?"➢ É administrador: [✓]":"➢ É administrador: [X]"}\n${k?"➢ Usuário premium: Sim":"➢ Usuário premium: Não"} \n${o?"➢ Registrado: [✓]":"➢ Registrado: [X]"} ${o?`\n➢ Nome registrado: ${s}\n➢ Idade: ${m}\n➢ Data de registro: ${i}`:""}${c?`\n➢ Porcentagem gay: ${c}`:""}\n➢ Limites restantes: ${b+r+u}\n- Jogos = ${b}\n- Downloads = ${r}\n- Outros = ${u}\n`,`➢ País: ${n} \n➢ Código do país: ${e} \n➢ Origem do número: ${k||"Não encontrado u.u"} ${o?"\n➢ Número válido: [✓]":"\n➢ Número válido: [X]"} ${s?"\n➢ Dispositivo móvel: [✓]":"\n➢ Dispositivo móvel: [X]"} \n➢ Operadora: ${m} \n➢ Tipo de linha: ${s} \n➢ Formato local: ${i} \n➢ Formato internacional: ${c} \n➢ Código do país: ${b}`],

Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = '', z = '') => ["_Obtendo informações..._",`*~》INFORMAÇÕES《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(ativo)_\n➪ *Dono atual* : _${author.name}_\n➪ *Aplicação Node.js iniciada* : _Há ${a}._\n➪ *Tempo de execução* : _${b}._\n➪ *Apelido no Whatsapp* : _${c}._\n➪ *Total de grupos* :  _${d}_\n➪ *Total de usuários* : _${e}_\n➪ *Grupos ativos* : _${f} / ${g}_\n➪ *Conversas pessoais* : _${h}_\n➪ *Total de conversas* : _${i} / ${j}_\n➪ *Hits globais* : _${k}_\n➪ *Versão do bot* : _${version}_\n➪ *Own-Wpp-Api* : _https://github.com/adiwajshing/_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Pasta temporária* : _${l}_\n➪ *Banco de dados* : _${m}_\n➪ *Versão do NodeJs* : _${n}_\n➪ *Velocidade de processamento* : _${o} s_\n➪ *Velocidade de conexão* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Plataforma* : _${r}_\n➪ *Versão* : _${s}_\n➪ *Sistema operacional base* : _${t}_\n➪ *Arquitetura* : _${u}_\n➪ *Host* : _${v}_\n➪ *Server* : _${w}_\n\n➫ _Consumo de memória :_\n${x} ${""==y?"":`\n➫  _Uso total de CPU:_\n${y}\n➫ _CPU Core(s) Usado_ ${z}`}\n\n┗─━─「 ✵ 」━─━─┛`],

Pimg: (n = '', k = '') => `\n*\`${n}\`*\n\n> ${k} `,

Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = '') => [`🔍 Resultado encontrado para: ${n}\n${e?`✍️ Título: ${e}\n⏳ Duração: 1:23 ━━━━●───────── ${k}\n👀 Visualizações: ${o}\n📝 Autor: ${s}\n📜 Descrição: ${x}\n⛓️ URL: ${d}\n\n\`Enviando áudio, aguarde...\``:""}`],

Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = '') => [`✍️ Título : ${n}\n⚡ Autor : ${e}\n⏰ Duração : ${k}\n👀 Visualizações : ${o}\n📆 Data de upload : ${s}\n📺 Canal : ${m}\n📃 Descrição : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Você pode usar os seguintes comandos para baixar_${masss}\n\n${_}\n`],

Ureg: (k = '', o = '', s = '', m = '', i = '', c = '') => ["Por favor insira seu código de registro","[ ! ] Código de registro incorreto","[✓] Seu registro foi excluído do banco de dados com sucesso 🗑️",`*[ ! ] Você já foi cadastrado em meu banco de dados*\nQuer se cadastrar novamente?\nUse o comando: \n\n${Prefijo}unreg <Código de Registo>\n`,"Nome e idade!?",'*[ ! ] Adicione um hífen entre o nome e a idade*\n\n" - "\n',"*[ ! ] Na idade apenas números são aceitos -.-*","*[ ! ] Mano, o nome é muito longo ._.*","*[ ! ] Idade máxima 30 anos*","*[ ! ] Idade mínima 13 anos*","CADASTRO","Nome: ","Idade: ","Puberto","Adolescente","Jovem","Adulto","Data de registro:","Informação:",`〘  *CADASTRO* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *Cadastro de usuário* : @${k}\n╠≽️ *Nome registrado* : ${o}\n╠≽️ *Data de nascimento* : ${s}\n╠≽️ *De acordo com a sua idade você é um* : ${m}\n╠≽️ *Informação* : ${i}\n╠≽️ *Número* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Código de Registo_ : ${c}\n\nᴺᵃ̃ᵒ ˢᵉ ᵉˢᑫᵘᵉᶜ̧ᵃ ᵈᵉ ˢᵃˡᵛᵃʳ ᵒᵘ ᶜᵒᵖᶦᵃʳ ˢᵉᵘ ᶜᵒ́ᵈᶦᵍᵒ ᵈᵉ ʳᵉᵍᶦˢᵗʳᵒ`],

Bscp: () => [`*🛑 Antes de prosseguir com a leitura, observe os seguintes requisitos:*\n- _Ter o WhatsApp oficial em seu dispositivo_\n- _Ter 200MB de espaço livre em seu dispositivo_\n- _Ter o aplicativo Termux instalado_\n- _Ter uma boa conexão com a internet_\n- _E, por último, mas não menos importante, ter paciência_ :v\n\n\n*[_>] Aqui serão postados tutoriais tanto para o aplicativo Termux quanto para máquinas virtuais:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\n> Precisa de mais ajuda? Entre em contato com o meu criador:`, "Demo Test Tmp"],

Bbot: (a = '', b = '') => ["Você não pode usar este comando sendo um bot [ ! ]", "A opção temporária para ser bot está desativada", `*Olá ${a}!, antes de continuar, por favor, leia este pequeno guia para evitar problemas:*\n\n☝️🤓 Informações e uso do comando:  ${b}\n\n\`1.- Ao solicitar o código de vinculação pela primeira vez, será gerada uma chave única para que você possa usar o comando posteriormente. (não se esqueça de guardar sua chave).\`\n\n\`2.- O comando tem algumas ações que você pode utilizar:\`\n- ${b} sua_chave-xxx...\n> _Você poderá se conectar manualmente caso o bot "desconecte"._\n- ${b} sua_chave-xxx... stop\n> _Interromperá o processo de subbot até que você o reative manualmente com sua chave._\n- ${b} sua_chave-xxx... neocd\n> _Sua sessão atual será encerrada e você poderá solicitar um novo código para vincular._\n\n\`3.- Ao se tornar um subbot, é recomendável testar seu bot em um grupo diferente de onde o bot principal está localizado.\`\n\n\`4.- O proprietário e administrador deste bot reserva-se o direito de interromper, modificar ou desabilitar subbots ativos ou características do sistema sem aviso prévio.\`\n\n\`5.- Lembre-se de usar o código de vinculação que lhe será enviado, se você solicitar o código em vão, será marcado por 1 hora, impedindo temporariamente o acesso ao comando até que possa ser usado novamente.\`\n\n~O criador deste bot não se responsabiliza por qualquer ação, dano ou consequência derivada de seu uso.~`, "[_>] Salvar chave...", "Parando o serviço subbot...", "Serviço atual eliminado, solicite novamente um código de vinculação", "[ ! ] Por favor, use sua chave para continuar...", "[ ! ] Chave incorreta, tente novamente..."],

Bbbot: () => ["Tardou muito para digitalizar um dos códigos, parando o serviço...", '`Use o código a seguir para se tornar um bot temporário`\n1. Toque nos três pontos "︙" no canto superior direito da sua tela inicial\n2. Selecione a opção "dispositivos vinculados"\n3. Toque em "vincular um dispositivo"\n4. Na parte inferior da sua tela, há uma opção chamada "Vincular com o número de telefone", toque lá\n\n~[NOTA] O código expirará se não for usado a tempo!~\n\n_Enviando código de vinculação..._', "Recentemente foi detectado um erro grave na sessão do seu subbot. Você não poderá se conectar como bot até que o proprietário reinicie o banco de dados.", "*Conectado com sucesso*\n\nAqui está sua chave única para se reconectar manualmente caso seja desconectado do serviço de bot temporário:", "Sua conexão como subbot foi restaurada novamente!"],

Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '') => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo banido* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuário* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PÚBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restrito* : _${g?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ATIVADO [✓]":"DESATIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ATIVADO [✓]":"DESATIVADO [X]"}_\n${a?`\n*Modo Somente-Admins* : _${j?"Ativo [✓]":"Inativo [X]"}_\n\n*Boas-vindas* : _${k?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Links* : _${l?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti URLs* : _${m?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Estrangeiros* : _${n?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos* : _${o?"Ativo [✓]":"Inativo [X]"}_\n\n*Sem Falsos 2* : _${p?"Ativo [✓]":"Inativo [X]"}_\n\n*Detecção* : _${q?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti-caiu* : _${r?"Ativo [✓]":"Inativo [X]"}_\n\n*Chat Bot* : _${s?"Ativo [✓]":"Inativo [X]"}_`:""}\n`,

Stks: (a = '') => ["*[ ! ] A duração máxima do vídeo é de 8 segundos!*", `*[ ! ] Por favor, envie ou responda com um vídeo ou imagem usando o comando ${Prefijo+a}*\n_OBSERVAÇÃO: Duração do vídeo de 1 a 8 segundos, no máximo_ ✓`, "[ ! ] URL inválido, tente outro ;3"],

Stke: (a = '') => ["Responda um adesivo do chat atual...", `Envie ou responda um adesivo com o comando ${Prefijo+a}`, "Dica: exclua seu adesivo para todos ;v", "[ ! ] Responda um adesivo para obter os metadados", "[ ! ] Responda um adesivo para atribuir um preço falso :p", "Responda um adesivo para editar o EXIF do seu jeito"],

Bblst: (a = '') => ["Atualmente não há subbots ativos...", "*Lista de números que foram subbots*\n~Alguns números podem estar inativos!~", `\n*🐝 Bot:* wa.me/${a}`],

Gtag: (n = '', e = '', k = '', o = '') => [`*[ ! ] Convocando membros do grupo* :\n${n}\n\n*~> Convocador* : _@${e}_\n*~> Mensagem* : _${k||"Nenhum :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ Qᵘᵉᵐ ᴸᵉ̂ ⁷ʷ⁷"}`],

Jcal: (a = '') => `*[ ! ] Adicione barras entre cada ação*\n_Exemplo de uso_ : \n\n${Prefijo+a} @UsuárioMarcado | abençoame | abençoado\n\n> Não se esqueça de usar esta barra:  " | "`,

Jtop: (n = '', k = '') => [`*[ ! ] Indique uma quantidade para gerar o ranking*\n_Exemplo de uso_ :\n\n${Prefijo+n} 5 Seguidores da gordura :v`, `*\`${n}\`*\n\n`, `_${n}.º @${k}_\n`, `\n> ${NombreDelBot}`],

Jprj: (n = '', e = '', k = '', o = '') => `\n❥ [ CASAL FORMADO ] :\n\n┏─━─━─━∞◆∞━─━─━─┓\n${n} • ${e}\n❤\n️${k} • ${o} \n┗─━─━─━∞◆∞━─━─━─┛`,

Jnij: (n = '', k = '') => ["Insira um nome/apelido/frase/etc...", `\`☯️ Texto ninja para [ ${n} ]:\`\n\n- *${k}*`],

Jqun: (a = '') => [`*[ ! ] Invente um problema*\n_Exemplo:_\n\n${Prefijo+a} é gay :v?\n`, `\n👉 ${a}\n`],

Jtgs: (n = '', e = '', k = '', o = '') => [`*Jogador : ${n}*\n*[ Parabéns, você venceu!!! ]* 🥳🎉\n\n*🎰=====🎉======??*\n*┃ ┌────────┐ ┃*\n*┃  | ${e}*\n*┃ ├────────┤ ┃*\n*┃  | ${k} <==*\n*┃ ├────────┤ ┃*\n*┃  | ${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Todos os seus limites foram restabelecidos*`, `Jogador : ${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n┃  | ${e}\n┃ ├────────┤ ┃\n┃  | ${k}\n┃ ├────────┤ ┃\n┃  | ${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],

Jtgy: (n = '', k = '') => ["sua porcentagem de gays é ", `@${n} é ${k} gay`, "*[ ! ] Limite gay excedido [ ! ]*"],

Clgs: (n = '', k = '') => [`*[ ! ] Use o formato correto!* :\n\n🖼️ ~Para logotipos com texto contínuo~\n[1]  ${Prefijo+n} (efeito) (texto...), _Exemplo de uso:_\n\n${Prefijo+n} space NeKosmic\n\n🖼️ ~Para logotipos com texto separado por uma linha vertical~\n[2]  ${Prefijo+n} (efeito) (texto1)|(texto2), _Exemplo de uso:_\n\n${Prefijo+n} Pornhub-Style-Logo Fap|Not\n\n🎨 Qual logotipo você deseja criar? Aqui está uma lista de efeitos:\n\n${k}`,`[ ! ] O efeito *${n}* não está na lista...`],

Dtkv: (n = '', e = '', k = '', o = '', m = '', d ="", z = '') => [`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Autor: ${n}` : ""} ${e ? `\n🤳 Usuário: ${e}` : ""} ${k ? `\n📝 Descrição: ${k}` : ""} ${o ? `\n💕 Curtidas: ${o}` : ""} ${m ? `\n🎭 Comentários: ${m}` : ""} ${d ? `\n🔄 Compartilhado: ${d}` : ""} ${z ? `\n👀 Visualizações: ${z}` : ""}`],

Tozg: (a = '') => [`*[ ! ] Responda a um adesivo usando o comando:*\n\n${Prefijo + a}`, `Convertido para ${a ? "vídeo" : "imagem"} com sucesso ✓`],

UpBot: (m = '', d = '', z = '') => `*[ ! ] Por favor, especifique o nome do arquivo a ser atualizado.*\n_Aqui está uma lista de possíveis arquivos que podem ser atualizados com seus respectivos exemplos de uso:_\n\n- ${m}\n\n> Se você deseja fazer uma atualização completa, use o comando:\n\n${Prefijo + d} ${z} ++\n`,

Uact: (n = '', e = '', o = '') => ["*Qual participante você deseja tornar administrador?*", `Exemplo de uso:\n\n${Prefijo+n} @51995...\n`, "Quem você quer banir?", "[ ! ] Marque o usuário que você deseja banir", `Usuário banido, ${n} não poderá mais usar o bot [ ! ]`, "*Qual administrador você deseja remover do cargo?*", "Quem você quer desbanir?", `Usuário não banido, ${n} pode usar o bot novamente [✓]`, `Marque ou mencione alguém!\n\nExemplo de uso:\n${Prefijo+n} @${e}`, `*${n}* deixou de ser premium`, "Indique o número de dias", `Apenas números!\n\nExemplo de uso:\n${Prefijo+n} @${e} 369...`, "[ ! ] Máximo 7 dias", `*[ USUÁRIO PREMIUM ]*\n🔖 *Nome:* ${n}\n📆 *Tempo:* ${e} dias\n📉 *Restante:* ${o}MS`, "[ ! ] Seu tempo premium acabou!\n_Eu espero que você tenha gostado :3_\n"],

Gadd: (a = '') => [`[ ! ] Indique o número completo de um usuário do WhatsApp que deseja adicionar ao grupo, Exemplo de uso:\n\n${Prefijo+a} +55999....`, `wa.me/${a} está convidando você para seu grupo de WhatsApp!`, `*[ ! ] Erro, não foi possível adicionar o número @${a} ao grupo*\n\n_Envie-lhe um link de convite manualmente: wa.me/${a}_\n`],

Uban: () => ["Me odeia? :,c", "Qual usuário você deseja excluir!?\nPor favor, marque um"],

Uwrn: (m = '', d = '', z = '') => [`Reduziu o número de avisos ao usuário ${m}\n\n${d} => ${z}\n`, `> O primeiro aviso foi dado ao usuário ${m}. Se acumular mais de três avisos, você será removido do grupo.`],

Wkpd: (n = '', k = '') => ["[ ! ] Sem resultados para a sua pesquisa ;-;", `||  *WIKIPEDIA* ||\n_~> Resultados para: ${n}_\n\n${k}`],

Dytv: (n = '', k = '') => `Título: ${n}\nTamanho: ${k} \nExtensão: .mp4`,

Ytbd: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '') => [`*[ > ] Resultados no YouTube para:* _${a}_\n\n`, `🔖 Título: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Tipo: ${d}\n🖼️ Miniatura: ${e}\n⌚ Duração: ${f}\n📜 Descrição: ${g}\n📆 Data de envio: ${h}\n👀 Visualizações: ${i}\n||\n⚡ Autor: ${j}\n📺 Canal: ${k}\n\n*——————————*\n\n`]

};