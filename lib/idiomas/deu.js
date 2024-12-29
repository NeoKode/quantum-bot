import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: "de",

Domina: "Deutsche sprache",

Start: () => ["Führt den meisten Kawaii-Bot der Dritten Welt aus.\nStart der Skriptausführung...", "\n[!] Code beendet:"],

Conn: (a = '') => ["Verbindung wird hergestellt...", "Trennungsgrund:", "Verbindungstimeout, erneuter Verbindungsversuch...", "Neustart erforderlich, wird neu gestartet...", "Gerät abgemeldet, bitte erneut verbinden und ausführen.", "Verbindung ersetzt, neue Sitzung geöffnet, bitte zuerst die aktuelle Sitzung schließen.", "Verbindung zum Server verloren, erneuter Verbindungsversuch...", "Verbindung geschlossen, erneuter Verbindungsversuch...", "Falsche Sitzungsdatei, bitte aktuelle Sitzung löschen und erneut verbinden.", "Verbunden ✓", "\n\n[_>] Wenn Sie die Pairing-Methode verwenden möchten, geben Sie bitte die Nummer ein, die zum Bot wird. Stellen Sie sicher, dass Sie die vollständige WhatsApp-Nummer zusammen mit dem Ländercode eingeben.\nBeispiel: +49xxx...\n", `\nPairing-Code für die Nummer "+${a}":`],

Call: (n = '', k = "") => `\n*[ ! ] ${n} Sie werden gesperrt*\n_Grund: weil Sie ohne Autorisierung einen ${k?"Videoanruf":"Anruf"} an diese Nummer getätigt haben!_\n`,

GpUp: (n = '', k = '') => ["🔒 *[ GESCHLOSSENE GRUPPE ]* 🔒\n_ᴶᵉᵗᶻᵗ ᵏᵒ̈ⁿⁿᵉⁿ ⁿᵘʳ ᴬᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳᵉⁿ ᴺᵃᶜʰʳᶦᶜʰᵗᵉⁿ ˢᵉⁿᵈᵉⁿ_", "🔓 *[ OFFENE GRUPPE ]* 🔓\n_ᴶᵉᵗᶻᵗ ᵏᵒ̈ⁿⁿᵉⁿ ᵃˡˡᵉ ᵀᵉᶦˡⁿᵉʰᵐᵉʳ ᴺᵃᶜʰʳᶦᶜʰᵗᵉⁿ ˢᵉⁿᵈᵉⁿ_", "🧰 *[IN DER GRUPPE DURCHGEFÜHRTE ANPASSUNGEN]* ⚙️\n_ᴶᵉᵗᶻᵗ ᵏᵒ̈ⁿⁿᵉⁿ ⁿᵘʳ ᴬᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳᵉⁿ ᴳʳᵘᵖᵖᵉⁿᵉᶦⁿˢᵗᵉˡˡᵘⁿᵍᵉⁿ ᵇᵉᵃʳᵇᵉᶦᵗᵉⁿ_", "🧰 *[IN DER GRUPPE DURCHGEFÜHRTE ANPASSUNGEN]* ⚙️\n_ᴬˡˡᵉ ᵀᵉᶦˡⁿᵉʰᵐᵉʳ ᵏᵒ̈ⁿⁿᵉⁿ ⁿᵘⁿ ᴳʳᵘᵖᵖᵉⁿᵉᶦⁿˢᵗᵉˡˡᵘⁿᵍᵉⁿ ᵇᵉᵃʳᵇᵉᶦᵗᵉⁿ_\n~ᴮᶦᵗᵗᵉ ˢᵉᶦᵉⁿ ˢᶦᵉ ᵃᵘᶠᵐᵉʳᵏˢᵃᵐ ᵍᵉᵍᵉⁿᵘ̈ᵇᵉʳ ᴹᵉⁿˢᶜʰᵉⁿ ᵐᶦᵗ ᵍᵉᶦˢᵗᶦᵍᵉʳ ᴮᵉʰᶦⁿᵈᵉʳᵘⁿᵍ~", `✍️ *[ GEÄNDERTE GRUPPENAUSGABE ]* 🤳\n\n- Hauptproblem war: _${n}_\n\n- Neues Thema: _${k}_\n`],

RestriN: () => "[ ! ] Neuer Teilnehmer konnte nicht entfernt werden, bitte aktivieren Sie den eingeschränkten Modus!",

AlertList: () =>  "[ ! ] Löschen Sie Nummern, die mit  '1'  beginnen, aus der Blacklist in ./config.json...!",

WlcAdd: (n = '', e = '', k = '', o = "") => [`⚡ *Willkommen ${n} in dieser großartigen Gruppe* ${e}\n📆 *Eintrittsdatum | ${k}*\n🍷 _*Ich hoffe, du genießt deinen Aufenthalt hier. Vergiss nicht, die Teilnehmer und die Regeln zu respektieren*_ ;)\n\n📜 *Gruppenregeln derzeit:* \n${masss}\n${o}`, "`Wenn Sie die Willkommensnachricht anpassen möchten, können Sie diese zusätzlichen Parameter verwenden:`\n- @user \n_(um den Benutzer zu markieren)_\n- @group\n_(um den Gruppennamen zu verwenden)_\n- @date\n_(um das Datum anzugeben)_\n- @desc\n_(um die Beschreibung anzuzeigen)_\n"],

WlcRemove: (m = '', d = '', z = '') => `[!] Links: @${m} • ${d}\n- Startdatum | ${z}`,

WlcPromot: (m = '', d = '', z = "") => [`*Herzlichen Glückwunsch @${m}!, ${z || 'ein Administrator'} hat dir große Macht verliehen, du bist jetzt Gruppenadministrator* : _${d}_\n`, `~Jetzt habe ich absolute Macht und es ist mir egal!~\n\n*Ich meine..., _Vielen Dank an ${m || 'einen Administrator'} dafür, dass mir die Administration gegeben wurde. Ich werde mein Bestes für diese Gruppe geben!!!_ :D*`],

WlcDemot: (m = '', d = '', z = "") => [`*${z || 'Ein Administrator'} hat @${m} gerade degradiert, er ist nicht mehr Administrator der Gruppe*: _${d}_`, "Schale, ich bin kein Administrator mehr unu"],

Blys: "Ein weiterer Bot wurde in der Gruppe erkannt. Um Konflikte oder Spam zu vermeiden, werde ich mich gechillt zurückziehen 🗿",

Cprint: () => ["AUSFÜHREN", "NACHRICHT", "Für", "Von", "Chat", "Gruppe:", "Privat:", "Datum"],

MsjRowner: () => "*[ ! ]* Dieser Befehl kann nur *vom Hauptbot* verwendet werden!",

MsjOwner: () => "*[ ! ]* Dieser Befehl kann nur *vom Bot-Eigentümer* verwendet werden!",

MsjMods: () => "*[ ! ]* Dieser Befehl kann nur *von einem Moderator* verwendet werden!",

MsjPremium: () => "*[ ! ]* Diese Anfrage ist nur für *Premium-Benutzer*!",

MsjGroup: () => "*[ ! ]* Dieser Befehl kann nur in *Gruppen* verwendet werden!",

MsjPrivate: () => "*[ ! ]* Dieser Befehl kann nur im *privaten Chat* verwendet werden!",

MsjAdmin: () => "*[ ! ]* Dieser Befehl kann nur *von Gruppenadministratoren* verwendet werden!",

MsjBotAdmin: () => "*[ ! ]* Der Bot muss *Administrator sein*, um diesen Befehl zu verwenden!",

MsjRestrict: () => "*[ ! ]* Um Löschaktionen auszuführen, muss mein Besitzer den eingeschränkten Modus aktivieren!",

MsjRegister: "`[!] Um diese Funktion zu nutzen, müssen Sie sich zuerst registrieren!`",

SpmrCmd: (a = "") => ["_Bitte warten Sie einige Sekunden, bevor Sie einen anderen Befehl verwenden..._ ✓", `[ ! ] ${a} Bitte überlasten Sie den Bot nicht ;-;`],

SpmrCnsl: () => "[SPAMER CMD] Befehl :",

Error: () => ["[ ! ] Fehler, bitte versuchen Sie es später erneut...", "[ ! ] Ein unerwarteter Fehler ist aufgetreten u.u [ ! ]"],

Antnlc: (a = "") => ["[ ! ] Mein Verrückter, du hast gerade einen Link gesendet. Zum Glück stammt der erkannte Link aus dieser Gruppe owo", "*[ ! ] Link erkannt [ ! ]*\n\n_Zum Glück bin ich kein Admin, also kann ich nichts tun unu_", `*[ ! ] Link erkannt [ ! ]*\n_Nun, wenn du wertvoll wärst @${a} Auf Wiedersehen..._\n`],

Antgll: () => ["Sie haben gerade alle Teilnehmer in dieser Gruppe erwähnt, aber ich bin kein Admin, daher kann ich nichts tun :0", "Das Markieren von allen ist in dieser Gruppe verboten, tschüss!"],

Antlnk: (a = "") => `*[ ! ] Link entdeckt [ ! ]*  ${a ? "" : "\n\n_Glücklicherweise bin ich kein Admin, also kann ich nichts tun :v_"}`,

Antrb: (n = '', k = "") => [`Der Administrator @${n} hat gerade eine Nachricht mit vielen Zeichen gesendet -.-!`,`*[ ! ] Es wurde eine Nachricht mit vielen Zeichen erkannt [ ! ]* ${n?"":`${saltos}\nIch bin kein Administrator, ich kann nichts weiter tun... :/`}`,`Chat als gelesen markieren ✓\n${saltos}\n=> Die Nummer: wa.me/${n}\n=> Alias: ${k}\n[ ! ] Hat gerade eine Nachricht gesendet, die viele Zeichen enthält und auf mobilen Geräten Fehler verursachen kann`],

AiChat: (n = "", k = "") => ["Bitte geben Sie eine genauere Nachricht an", "Und die Nachricht?", `"${k}" wurde erfolgreich ${n ? "aktiviert" : "deaktiviert"}.`],

Nime: (n="", k="") => ["Verwenden Sie einen Screenshot oder ein Bild einer Anime-Szene", `${n ? 'Wenn das Ergebnis nicht wie erwartet ist, versuchen Sie ein Bild mit guter Auflösung einer "Anime"-Szene zu verwenden!' : 'Ich kann nicht garantieren, dass das Ergebnis zu 100 % genau ist u.u'}`, `*🔖Titel:* _${n || "N/N"}_\n*🎴Episode:* _${k || "N/N"}_\n`],

Vthx: () => "`💻 Soziale Netzwerke 📲`\n\n[ > ] YouTube-Kanal:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Facebook-Seite:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\n> ᴵᶜʰ ᵇʳᵃᵘᶜʰᵉ ᵏᵉᶦⁿ ᴳᵉˡᵈ⁻ ⁿᵘʳ ᵐᶦᵗ ᵈᵉᶦⁿᵉʳ ᵁⁿᵗᵉʳˢᵗüᶻᵘⁿᵍ ᵇᶦⁿ ᶦᶜʰ ᶠʳᶦᵉᵈᶦᶷ  :³",

Tptv: () => "Bitte antworten oder ein Video senden, das nicht länger als 59 Sekunden dauert.",

Mlti: (a = '') => `*\`Anwendungsbeispiel (verfügbare Sprachen):\`*\n\n> Idioma español 🇵🇪\n-  ${a} es\n\n> English language 🇺🇲\n-  ${a} en\n\n> Idioma português 🇧🇷\n-  ${a} pt\n\n> Bahasa Indo 🇮🇩\n-  ${a} id\n\n> deutsche Sprache 🇩🇪\n-  ${a} de\n\n> Auto... 🌎\n-  ${a} auto\n`,

Gbnd: () => ["Chat erfolgreich gesperrt ✓", "Chat erfolgreich entsperrt ✓"],

Gemx: (a = "") => `*Beispiel für die Verwendung:*\n\n${Prefijo+a} 🥺+🥵\n`,

Jttt: (n='', k='') => [`\`[ DREI GEWINNT SPIEL ]\`\n      \n*Um ein Spielzimmer zu erstellen, Beispiel:*\n\n> Du kannst einen anderen Spieler herausfordern\n${Prefijo+n} zufällig\n\n-\n*Um gegen den Bot zu spielen:*\n\n> Modus 1\n${Prefijo+n} bot\n\n> Modus 2\n${Prefijo+n} bot troll\n\n-\n*HINWEIS:*\n_Wenn du in einem aktiven Spiel bist, verwende die folgenden Befehle, um einen Zug auf dem Brett von 1 bis 9 zu machen, Beispiel:_\n\n${Prefijo+n} 4\n`, `*Du forderst mich heraus!*\n\n> Du beginnst zuerst.\n\n${n}\n`, "Du spielst bereits gegen den Bot. Beende das Spiel, bevor du einem neuen Raum beitrittst.", `Du bist bereits im Raum "${n}". Beende das Spiel, bevor du einem anderen Raum beitrittst.`, `Der Raum "${n}" wurde aufgrund von Inaktivität gelöscht.`, `Raum "${n}" erstellt. Warte auf einen anderen Spieler, der denselben Raumnamen verwendet, um beizutreten...`, `Du bist dem Raum "${n}" beigetreten. Das Spiel beginnt jetzt.\n${k}`, "Ungültiger Zug. Wähle eine freie Position zwischen 1 und 9.", `${n}\n\n> Zug von ${k}`, `${n}\n\n> Dein Zug`],

Dfbv: (a = "") => [`*[ ! ] Ungültiger Link*\n_Bitte verwenden Sie einen gültigen Facebook-Video-Link_\n\nBeispiel für die Verwendung: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Fehler, möglicherweise ist der Link ungültig oder das Video ist privat, bitte versuchen Sie es später noch einmal"],

Wppr: (n = "", k = "") => [`┏━⊱ Hintergrund: ${n}\n┗⊱  Angefordert von: @${k}`],

Frs: (n="", k="") => `- *Satz:* _${n}.._\n\n> *Autor:* _${k}_\n`,

Fxm3: (m = "", d = "", z ="") => [`*Hier ist eine Liste der verfügbaren Effekte:*\n\n- ${m}\n\nBeispiel zur Verwendung: ${Prefijo+d} ${z}`, "`[ ! ] Antworten Sie auf eine Audionachricht`\n\n> Maximal 2 Minuten Dauer"],

AdmOpt: (n = '', k = "") => [`${n ? 'eingeschaltet' : 'ausgeschaltet'} ${k} für diesen Chat`, "Hier ist die Liste der Optionen :3", "Option:", "Beschreibung:", "Befehl:", [
  {
    t: "[ ⬇️ AUTOMATISCHE WILLKOMMEN ]",
    o1: "[ 🛬 Aktivieren ]",
    d1: "~Der Bot wird neue Teilnehmer in einer Gruppe begrüßen~",
    c1: `${Prefijo}licht willkommen`,
    o2: "[ 🛫 Deaktivieren ]",
    d2: "~Der Bot wird keine neuen Teilnehmer in einer Gruppe begrüßen~",
    c2: `${Prefijo}abschalten willkommen`
  },
  {
    t: "[ ⬇️ AUTOMATISCHER ABSCHIED ]",
    o1: "[ 👋 Aktivieren ]",
    d1: "~Der Bot wird anzeigen, wenn ein Teilnehmer die Gruppe verlässt~",
    c1: `${Prefijo}licht abschied`,
    o2: "[ ✊ Deaktivieren ]",
    d2: "~Der Bot wird keine Abschiedshandlungen durchführen~",
    c2: `${Prefijo}abschalten abschied`
  },
  {
    t: "[ ⬇️ NUR-ADMINS ]",
    o1: "[ ⭐ Aktivieren ]",
    d1: "~Jetzt können nur Gruppen-Admins den Bot verwenden~",
    c1: `${Prefijo}licht nuradmins`,
    o2: "[ ✨ Deaktivieren ]",
    d2: "~Jetzt können alle Teilnehmer der Gruppe den Bot verwenden~",
    c2: `${Prefijo}abschalten nuradmins`
  },
  {
    t: "[ ⬇️ ERKENNUNG ]",
    o1: "[ 🌕 Aktivieren ]",
    d1: "~Der Bot erkennt Änderungen, die in einer Gruppe vorgenommen werden~",
    c1: `${Prefijo}licht erkennung`,
    o2: "[ 🌑 Deaktivieren ]",
    d2: "~Änderungen, die in einer Gruppe vorgenommen werden, werden nicht erkannt~",
    c2: `${Prefijo}abschalten erkennung`
  },
  {
    t: "[ ⬇️ ANTI-WALINKS ]",
    o1: "[ 🗡️ Aktivieren ]",
    d1: "~Der Bot entfernt Teilnehmer, die einen Link in einer Gruppe senden~",
    c1: `${Prefijo}licht walink`,
    o2: "[ 😴 Deaktivieren ]",
    d2: "~Es wird keine Aktion unternommen, wenn Links gesendet werden~",
    c2: `${Prefijo}abschalten walink`
  },
  {
    t: "[ ⬇️ ANTI-TAGALL ]",
    o1: "[ 🧐 Aktivieren ]",
    d1: "~Der Bot entfernt Teilnehmer, die alle markieren~",
    c1: `${Prefijo}licht antitagall`,
    o2: "[ 😶 Deaktivieren ]",
    d2: "~Der Bot wird nichts tun, wenn alle markiert werden~",
    c2: `${Prefijo}abschalten antitagall`
  },
  {
    t: "[ ⬇️ ANTI-URLS ]",
    o1: "[ 🗡️ Aktivieren ]",
    d1: "~Der Bot entfernt Teilnehmer, die Links senden~",
    c1: `${Prefijo}licht antilink`,
    o2: "[ 😴 Deaktivieren ]",
    d2: "~Es wird keine Aktion unternommen, wenn Links gesendet werden~",
    c2: `${Prefijo}abschalten antilink`
  },
  {
    t: "[ ⬇️ ANTI-FAKES 1 ]",
    o1: "[ 🛡️ Aktivieren ]",
    d1: "~Dieser Befehl aktiviert den Schutz gegen US-Nummern (+1)~",
    c1: `${Prefijo}licht antifake1`,
    o2: "[ ⚰️ Deaktivieren ]",
    d2: "~Anti-Fakes 1 in der Gruppe deaktivieren~",
    c2: `${Prefijo}abschalten antifake1`
  },
  {
    t: "[ ⬇️ ANTI-FAKES 2 ]",
    o1: "[ 🛡️ Aktivieren ]",
    d1: "~Schutz gegen gefälschte oder virtuelle Nummern wird aktiviert~",
    c1: `${Prefijo}licht antifake2`,
    o2: "[ ⚰️ Deaktivieren ]",
    d2: "~Anti-Fakes 2 in der Gruppe deaktivieren~",
    c2: `${Prefijo}abschalten antifake2`
  },
  {
    t: "[ ⬇️ ANTI-AUSLÄNDER ]",
    o1: "[ 🏳️ Aktivieren ]",
    d1: `~Schutz gegen Nummern, die nicht mit dem Präfix des Besitzers übereinstimmen, wird aktiviert. Nummern, die mit +${LocPref} beginnen, werden nicht entfernt.~`,
    c1: `${Prefijo}licht antiausländer`,
    o2: "[ 🏴 Deaktivieren ]",
    d2: "~Anti-Ausländer in der Gruppe deaktivieren~",
    c2: `${Prefijo}abschalten antiausländer`
  },
  {
    t: "[ ⬇️ ANTI-TRABA ]",
    o1: "[ 🐸 Aktivieren ]",
    d1: "~Dieser Befehl aktiviert den Anti-Traba-Schutz auf WhatsApp~",
    c1: `${Prefijo}licht antitraba`,
    o2: "[ 👾 Deaktivieren ]",
    d2: "~Anti-Traba deaktiviert~",
    c2: `${Prefijo}abschalten antitraba`
  },
  {
t: "[ ⬇️ CHAT - BOT ]",
o1: "[ 🗣️ Aktivieren ]",
d1: "~Dieser Befehl aktiviert einen Chat-Bot in einer WhatsApp-Gruppe~",
c1: `${Prefijo}licht chatbot`,
o2: "[ 👤 Deaktivieren ]",
d2: "~Deaktivieren Sie den Chat-Bot in der aktuellen Gruppe~",
c2: `${Prefijo}abschalten chatbot`
}
]
],

OwnOpt: (n = '', k = '') => [`${n ? 'aktiviert' : 'deaktiviert'} ${k} für diesen Chat`, [
{
t: "[ ⬇️ EINGESCHRÄNKTER MODUS ]",
o1: "[ 🌚 Aktiviert ]",
d1: "~Aktiviert die Funktion zum Entfernen von Teilnehmern in Gruppen (Nicht empfohlen)~",
c1: `${Prefijo}aktivieren freedom`,
o2: "[ 🌝 Deaktiviert ]",
d2: "~Aktionen zum Entfernen und Hinzufügen von Teilnehmern deaktiviert (empfohlen)~",
c2: `${Prefijo}deaktivieren freedom`
}
]
],

Dlig: (a = "") => [`*[ ! ] Link ungültig*\n_Bitte verwenden Sie einen Instagram-Link_\nBeispiel: ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],

Gimg: (a = '') => [`_Suche nach ${a}_`],

Bunt: (n = '', k = "") => ["[ ! ] Fehler, WhatsApp-Link funktioniert nicht oder ist ungültig", `[ ! ] Bitte beachten Sie, dass die Mindestanzahl der Gruppenteilnehmer sein muss: *${MinimoDeUsuarios}*, damit der Bot funktioniert`,"Ihre Gruppe wird vom Eigentümer des Bots überprüft (er entscheidet, ob er sie hinzufügt oder nicht)."],

Dmdf: (n = "", e = "", k = "", o = "", m = "", d = "") => ["*[ ! ] Ungültiger Link*\n_Bitte verwenden Sie einen MediaFire-Link_", `*Name:* ${n}\n*Größe:* ${e}\n*Verlängerung:* ${k}\n*Datum des Hochladens:* ${o}\n*Dateityp:* ${m}\n*URL:* ${d}`],

Menl: (n = '', e = '', k = '', o = '') => [`Hallo ${n}!, 👋`, "Anwendungsbeispiel", `*[ ${n} ]*\n≡ ~${e}~\n${Prefijo + k} ${o}`, `╔══════════\n║╭—————————\n`, `║├  ${n}`, `\n║╰—————————\n╚══════════`],

Menu: (n = '', e = '', k = '', o = "", s = '') => ["_Lade Menü..._", `╔I [ \`\`\`${n ? e : NombreDelBot}\`\`\` ]
║❂ Aktive Zeit: ${k}
║❂ Bot-Version: ${version}
║❂ Bot-Besitzer: ${author.name}
║❂ Einzigartiges Präfix: 「  ${Prefijo}  」
║❂ Kunde: ${o}
╚══════════ ${n ? `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Unter-Bot von ${s}
┗─── ⊹ ⊱♡⊰ ⊹ ───┛` : ''}
${masss}
~|-------------------------|~
*[_>] _BEFEHLE_ ☷*
~|-------------------------|~\n`,
`╔„ _${n} :_ 」
║╭—————————\n`,
`║├  ${n}`,
`\n║╰—————————
╚══════════`],

Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ PROFIL & BENUTZERINFO]> 🌐\n\n➢ Name: ${n}\n${e?"➢ Ist Administrator: [✓]":"➢ Ist Administrator: [X]"}\n${k?"➢ Premium-Nutzer: Ja":"➢ Premium-Nutzer: Nein"} \n${o?"➢ Registriert: [✓]":"➢ Registriert: [X]"} ${o?`\n➢ Registrierter Name: ${s}\n➢ Alter: ${m}\n➢ Registrierungsdatum: ${i}`:""}${c?`\n➢ Prozentsatz homosexuell: ${c}`:""}\n➢ Verbleibende Grenzen: ${b+r+u}\n- Spiele = ${b}\n- Downloads = ${r}\n- Andere = ${u}\n`,`➢ Land: ${n} \n➢ Ländercode: ${e} \n➢ Nummerherkunft: ${k||"Nicht gefunden u.u"} ${o?"\n➢ Gültige Nummer: [✓]":"\n➢ Gültige Nummer: [X]"} ${s?"\n➢ Mobiles Gerät: [✓]":"\n➢ Mobiles Gerät: [X]"} \n➢ Betreiber: ${m} \n➢ Leitungstyp: ${s} \n➢ Lokales Format: ${i} \n➢ Internationales Format: ${c} \n➢ Ländercode: ${b}`],

Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "", z = "") => ["_Informationen werden abgerufen..._",`*~》INFORMATIONEN《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(aktiv)_\n➪ *Aktueller Besitzer* : _${author.name}_\n➪ *Node.js Anwendung gestartet* : _Vor ${a}._\n➪ *Aktuelle Laufzeit* : _${b}._\n➪ *Spitzname in Whatsapp* : _${c}._\n➪ *Gesamtanzahl der Gruppen* :  _${d}_\n➪ *Gesamtanzahl der Benutzer* : _${e}_\n➪ *Aktive Gruppen* : _${f} / ${g}_\n➪ *Persönliche Chats* : _${h}_\n➪ *Gesamtanzahl der Chats* : _${i} / ${j}_\n➪ *Globale Treffer* : _${k}_\n➪ *Bot-Version* : _${version}_\n➪ *Own-Wpp-Api* : _https://github.com/adiwajshing/_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Temporärer Ordner* : _${l}_\n➪ *Datenbank* : _${m}_\n➪ *NodeJs-Version* : _${n}_\n➪ *Verarbeitungsgeschwindigkeit* : _${o} s_\n➪ *Verbindungsgeschwindigkeit* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Plattform* : _${r}_\n➪ *Version* : _${s}_\n➪ *Basis-OS* : _${t}_\n➪ *Architektur* : _${u}_\n➪ *Host* : _${v}_\n➪ *Server* : _${w}_\n\n➫ _Speichernutzung :_\n${x} ${""==y?"":`\n➫  _Gesamte CPU-Auslastung:_\n${y}\n➫ _Verwendete CPU-Kerne_ ${z}`}\n\n┗─━─「 ✵ 」━─━─┛`],

Pimg: (n = '', k = '') => `\n*\`${n}\`*\n\n> ${k} `,

Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`?? Gefundenes Ergebnis für: ${n}\n${e?`✍️ Titel: ${e}\n⏳ Dauer: 1:23 ━━━━●───────── ${k}\n👀 Ansichten: ${o}\n📝 Autor: ${s}\n📜 Beschreibung: ${x}\n⛓️ URL: ${d}\n\n\`Audio wird gesendet, bitte warten...\``:""}`],

Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`✍️ Titel : ${n}\n⚡ Autor : ${e}\n⏰ Dauer : ${k}\n👀 Aufrufe : ${o}\n📆 Hochladedatum : ${s}\n📺 Kanal : ${m}\n📃 Beschreibung : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Sie können die folgenden Befehle verwenden, um herunterzuladen_${masss}\n\n${_}\n`],

Ureg: (k = "", o = "", s = "", m = "", i = "", c = "") => ["Bitte geben Sie Ihren Registrierungscode ein","[ ! ] Falscher Registrierungscode","[✓] Ihr Eintrag wurde erfolgreich aus der Datenbank gelöscht 🗑️",`*[ ! ] Sie sind bereits in meiner Datenbank registriert*\nMöchten Sie sich erneut registrieren?\nVerwenden Sie den Befehl:\n\n${Prefijo}unreg <Registrierungscode>\n`,"Name und Alter!?",'*[ ! ] Bitte fügen Sie zwischen Name und Alter einen Bindestrich ein*\n\n" - "\n',"*[ ! ] Im Alter sind nur Zahlen erlaubt -.-*","*[ ! ] Der Name ist zu lang ._.*","*[ ! ] Maximales Alter 30 Jahre*","*[ ! ] Mindestalter 13 Jahre*","REGISTRIEREN","Name: ","Alter: ","Pubertät","Teenager","Jung","Erwachsener","Registrierungsdatum:","Informationen:",`〘 *REGISTRIEREN* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *Benutzer registrieren* : @${k}\n╠≽️ *Registrierter Name* : ${o}\n╠≽️ *Geburtsdatum* : ${s}\n╠≽️ *Gemäß Ihrem Alter sind Sie* : ${m}\n╠≽️ *Informationen* : ${i}\n╠≽️ *Nummer* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Registrierungscode_ : ${c}\n\nⱽᵉʳᵍᵉˢˢᵉⁿ ˢᶦᵉ ⁿᶦᶜʰᵗ- ᴵʰʳᵉⁿ ᴿᵉᵍᶦˢᵗʳᶦᵉʳᵘⁿᵍˢᶜᵒᵈᵉ ᶻᵘ ˢᵖᵉᶦᶜʰᵉʳⁿ ᵒᵈᵉʳ ᶻᵘ ᵏᵒᵖᶦᵉʳᵉⁿ`],

Bscp: () => [`*🛑 Bevor Sie mit dem Lesen fortfahren, beachten Sie bitte die folgenden Anforderungen:*\n- _WhatsApp auf Ihrem Gerät installiert haben_\n- _200 MB freien Speicherplatz auf Ihrem Gerät haben_\n- _Termux.apk installiert haben_\n- _Eine gute Internetverbindung haben_\n- _Und schließlich, und am wichtigsten, Geduld haben_ :v\n\n\n*[_>] Hier werden sowohl Tutorials für die Termux-Anwendung als auch für virtuelle Maschinen hochgeladen:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\n> Brauchen Sie mehr Hilfe?, kontaktieren Sie meinen Ersteller:`, "Demo Test Tmp"],

Bbot: (a = '', b = "") => ["Sie können diesen Befehl nicht als Bot verwenden [ ! ]", "Die Option, temporär ein Bot zu sein, ist deaktiviert", `*Hallo ${a}!, bevor Sie fortfahren, lesen Sie bitte diese Kurzanleitung, um Probleme zu vermeiden:*\n\n☝️🤓 Informationen und Verwendung des Befehls: ${b}\n\n\`1.- Wenn Sie zum ersten Mal den Verbindungsschlüssel anfordern, wird ein eindeutiger Schlüssel für Sie generiert, den Sie später für die Verwendung des Befehls verwenden können. (Vergessen Sie nicht, Ihren Schlüssel zu speichern).\`\n\n\`2.- Der Befehl hat einige Aktionen, die Sie verwenden können:\`\n- ${b} deine_schlüssel-xxx...\n> _Sie können sich manuell verbinden, wenn der Bot "getrennt" wird._\n- ${b} deine_schlüssel-xxx... stop\n> _Stoppt den Subbot-Prozess, bis Sie ihn manuell mit Ihrem Schlüssel wieder aktivieren._\n- ${b} deine_schlüssel-xxx... neocd\n> _Ihre aktuelle Sitzung wird beendet, und Sie können einen neuen Verbindungsschlüssel anfordern._\n\n\`3.- Wenn Sie ein Subbot werden, wird empfohlen, dass Sie Ihren Bot in einer anderen Gruppe testen als der, in der sich der Hauptbot befindet.\`\n\n\`4.- Der Eigentümer und Administrator dieses Bots behält sich das Recht vor, aktive Subbots oder Systemfunktionen ohne Vorankündigung zu stoppen, zu ändern oder zu deaktivieren.\`\n\n\`5.- Denken Sie daran, den Ihnen zugesandten Verbindungsschlüssel zu verwenden. Wenn Sie den Schlüssel umsonst anfordern, werden Sie für eine Stunde markiert, was vorübergehend den Zugang zum Befehl verhindert, bis er erneut verwendet werden kann.\`\n\n~Der Ersteller dieses Bots übernimmt keine Verantwortung für Handlungen, Schäden oder Folgen, die sich aus der Nutzung ergeben.~`, "[_>] Schlüssel speichern...", "Stoppen des Subbot-Dienstes...", "Aktueller Dienst entfernt, fordern Sie erneut einen Verbindungsschlüssel an", "[ ! ] Bitte verwenden Sie Ihren Schlüssel, um fortzufahren...", "[ ! ] Falscher Schlüssel, bitte versuchen Sie es erneut..."],

Bbbot: () => ["Es dauerte zu lange, um einen der Codes zu scannen, Dienst wird gestoppt...", '`Verwenden Sie den folgenden Code, um vorübergehend ein Bot zu werden`\n1. Tippen Sie auf die drei Punkte "︙" in der oberen rechten Ecke auf Ihrem Startbildschirm\n2. Wählen Sie die Option "Verbundene Geräte"\n3. Tippen Sie auf "Gerät verbinden"\n4. Am unteren Rand Ihres Bildschirms befindet sich eine Option namens "Mit Telefonnummer verknüpfen", tippen Sie darauf\n\n~[HINWEIS] Der Code läuft ab, wenn er nicht rechtzeitig verwendet wird!~\n\n_Verbindungscodes senden..._', "Es wurde kürzlich ein schwerwiegender Fehler in der Sitzung Ihres Subbots festgestellt. Sie können sich nicht als Bot verbinden, bis der Besitzer die Datenbank neu startet.", "*Erfolgreich verbunden*\n\nHier ist Ihr eindeutiger Schlüssel, um sich manuell wieder zu verbinden, wenn Sie vom temporären Bot-Dienst getrennt werden:", "Deine Verbindung als Subbot wurde wieder wiederhergestellt!"],

Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Gruppe* : _[ ${b} ]_\n\n*Gruppe gesperrt* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot Benutzer* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"ÖFFENTLICHER-MODUS [✓]":"PRIVAT-MODUS [ ! ]"}_\n\n*Eingeschränkter Modus* : _${g?"AKTIVIERT [✓]":"DEAKTIVIERT [X]"}_\n\n*Anti-Privat* : _${h?"AKTIVIERT [✓]":"DEAKTIVIERT [X]"}_\n\n*Unter-Bot sein* : _${i?"AKTIVIERT [✓]":"DEAKTIVIERT [X]"}_\n${a?`\n*Nur-Admins-Modus* : _${j?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Willkommen* : _${k?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Anti Links* : _${l?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Anti URLs* : _${m?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Anti Ausländer* : _${n?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Keine Falschen* : _${o?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Keine Falschen 2* : _${p?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Erkennung* : _${q?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Anti-Spam* : _${r?"Aktiv [✓]":"Inaktiv [X]"}_\n\n*Chat Bot* : _${s?"Aktiv [✓]":"Inaktiv [X]"}_`:""}\n`,

Stks: (a = "") => ["*[ ! ] Die maximale Videolänge beträgt 8 Sekunden!*", `*[ ! ] Bitte senden oder antworten Sie mit dem Befehl ein Video oder Bild ${Prefijo+a}*\n_HINWEIS: Videodauer maximal 1 bis 8 Sekunden_ ✓`, "[ ! ] Ungültige URL, versuchen Sie es mit einer anderen ;3"],

Stke: (a = "") => ["Auf einen Sticker aus dem aktuellen Chat antworten...", `Sende oder antworte einem Sticker mit dem Befehl ${Prefijo+a}`, "Tipp, lösche deinen Sticker für alle ;v", "[ ! ] Auf einen Aufkleber antworten, um die Metadaten zu erhalten", "[ ! ] Auf einen Aufkleber antworten, um einen gefälschten Preis zuzuweisen :p", "Auf einen Aufkleber antworten, um das EXIF ​​nach Ihren Wünschen zu bearbeiten"],

Bblst: (a = '') => ["Derzeit gibt es keine aktiven Subbots...", "*Liste der Nummern, die zu Subbots wurden*\n~Einige Nummern sind möglicherweise inaktiv!~\n", `\n*🐝 Bot:* wa.me/${a}`],

Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Gruppenmitglieder aufrufen* :\n${n}\n\n*~> Beschwörer* : _@${e}_\n*~> Nachricht* : _${k||"Es gibt kein :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ ʷᵉʳ ᵉˢ ˡᶦᵉˢᵗ ⁷ʷ⁷"}`],

Jcal: (a = "") => `*[ ! ] Fügen Sie Schrägstriche zwischen jede Aktion ein*\n_Beispiel der Verwendung_ : \n\n${Prefijo+a} @MarkierterBenutzer | segne mich | gesegnet\n\n> Vergessen Sie nicht, diesen Schrägstrich zu verwenden:  " | "`,

Jtop: (n = '', k = '') => [`*[ ! ] Geben Sie eine Anzahl an, um die Top-Liste zu erstellen*\n_Beispiel für die Verwendung_ :\n\n${Prefijo+n} 5 Anhänger des Fettes :v`, `*\`${n}\`*\n\n`, `_${n}.º @${k}_\n`, `\n> ${NombreDelBot}`],

Jprj: (n = "", e = "", k = "", o = "") => `\n❥ [ GEFORMTES PAAR ] :\n\n┏─━─━─━∞◆∞━─━─━─┓\n${n} • ${e}\n❤\n️${k} • ${o} \n┗─━─━─━∞◆∞━─━─━─┛`,

Jnij: (n = "", k = '') => ["Geben Sie einen Namen/Spitznamen/Satz/etc. ein...", `\`☯️ Ninja-Text für [ ${n} ]:\`\n\n- *${k}*`],

Jqun: (a = "") => [`*[ ! ] Erfinde ein Problem*\n_Beispiel:_\n\n${Prefijo+a} ist schwul :v?\n`, `\n👉 ${a}\n`],

Jtgs: (n = "", e = "", k = "", o = "") => [`*Spieler : ${n}*\n*[ Herzlichen Glückwunsch, Sie haben gewonnen!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*┃  | ${e}*\n*┃ ├────────┤ ┃*\n*┃  | ${k} <==*\n*┃ ├────────┤ ┃*\n*┃  | ${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Alle Ihre Grenzen wurden wiederhergestellt*`, `Spieler : ${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n┃  | ${e}\n┃ ├────────┤ ┃\n┃  | ${k}\n┃ ├────────┤ ┃\n┃  | ${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],

Jtgy: (n = "", k = "") => ["sein Anteil an Schwulen beträgt ", `@${n} ist zu  ${k} Fröhlich`, "*[ ! ] Schwulengrenze überschritten [ ! ]*"],

Clgs: (n = "", k = "") => [`*[ ! ] Verwenden Sie das richtige Format!* :\n\n🖼️ ~Für Logos mit durchgehendem Text~\n[1]  ${Prefijo+n} (Effekt) (Text...), _Beispielverwendung:_\n\n${Prefijo+n} space NeKosmic\n\n🖼️ ~Für Logos mit durch eine vertikale Linie getrenntem Text~\n[2]  ${Prefijo+n} (Effekt) (Text1)|(Text2), _Beispielverwendung:_\n\n${Prefijo+n} Pornhub-Style-Logo Fap|Not\n\n🎨 Welches Logo möchten Sie erstellen? Hier ist eine Liste der Effekte:\n\n${k}`, `[ ! ] Der Effekt *${n}* befindet sich nicht in der Liste...`],

Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => [`*[ ! ] Ungültiger Link*\n_Bitte verwenden Sie einen Tik Tok-Link_\nBeispiel : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Autor: ${n}` : ""} ${e ? `\n🤳 Benutzer: ${e}` : ""} ${k ? `\n📝 Beschreibung: ${k}` : ""} ${o ? `\n💕 Ich mag das: ${o}` : ""} ${m ? `\n🎭 Kommentare: ${m}` : ""} ${d ? `\n🔄 Geteilt: ${d}` : ""} ${z ? `\n👀 Ansichten: ${z}` : ""}`],

Tozg: (a = "") => [`*[ ! ] Reagieren Sie auf einen Aufkleber mit dem folgenden Befehl:*\n\n${Prefijo + a}`, `Konvertiert zu ${a ? "video" : "bild"} korrekt ✓`],

UpBot: (m = '', d = '', z = '') => `*[ ! ] Bitte geben Sie den Namen der Datei an, die aktualisiert werden soll.*\n_Hier ist eine Liste möglicher Dateien, die aktualisiert werden können, mit ihren jeweiligen Anwendungsbeispielen:_\n\n- ${m}\n\n> Wenn Sie ein vollständiges Update durchführen möchten, verwenden Sie den Befehl:\n\n${Prefijo + d} ${z} ++\n`,

Uact: (n = "", e = "", o = "") => ["*Welchen Teilnehmer möchten Sie zum Administrator machen?*", `Beispiel zur Verwendung:\n\n${Prefijo+n} @51995...\n`, "Wen möchten Sie sperren?", "[ ! ] Bitte markieren Sie den Benutzer, den Sie sperren möchten", `Benutzer gesperrt, ${n} kann den Bot nicht mehr verwenden [ ! ]`, "*Welchem Administrator möchten Sie die Rechte entziehen?*", "Wen möchten Sie entsperren?", `Benutzer entsperrt, ${n} kann den Bot wieder verwenden [✓]`, `Bitte markieren oder erwähnen Sie jemanden!\n\nBeispiel zur Verwendung:\n${Prefijo+n} @${e}`, `*${n}* ist nicht mehr premium`, "Bitte geben Sie die Anzahl der Tage an", `Nur Zahlen!\n\nBeispiel zur Verwendung:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maximal 7 Tage", `*[ PREMIUM BENUTZER ]*\n🔖 *Name:* ${n}\n📆 *Zeit:* ${e} Tag(e)\n📉 *Verbleibend:* ${o}MS`, "[ ! ] Deine Premium-Zeit ist abgelaufen!\n_Ich hoffe, es hat dir gefallen :3_\n"],

Gadd: (a = "") => [`[ ! ] Geben Sie die vollständige Nummer eines WhatsApp-Benutzers an, den Sie der Gruppe hinzufügen möchten. Anwendungsbeispiel:\n\n${Prefijo+a} +49999....`, `wa.me/${a} lädt Sie in seine WhatsApp-Gruppe ein!`, `*[ ! ] Fehler, Nummer @${a} konnte der Gruppe nicht hinzugefügt werden*\n\n_Bitte senden Sie ihm manuell einen Einladungslink: wa.me/${a}_\n`],

Uban: () => ["Du hasst mich? :,c", "Welchen Benutzer möchten Sie löschen!?\Bitte markieren Sie einen"],

Uwrn: (m = '', d = '', z = '') => [`Die Anzahl der Warnungen an Benutzer ${m} wurde reduziert.\n\n${d} => ${z}\n`, `> Die erste Warnung wurde an Benutzer ${m} gesendet. Wenn Sie mehr als drei Warnungen sammeln, werden Sie aus der Gruppe entfernt.`],

Wkpd: (n = "", k = "") => ["[ ! ] Keine Ergebnisse für Ihre Suche ;-;", `|| *WIKIPEDIA* ||\n_~> Ergebnisse für: ${n}_\n\n${k}`],

Dytv: (n = '', k = "") => `Qualifikation: ${n}\nGröße: ${k}\nVerlängerung: .mp4`,

Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`*[ > ] Ergebnisse auf Youtube für:* _${a}_\n\n`, `🔖 Qualifikation: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Kerl: ${d}\n🖼️ Miniatur: ${e}\n⌚ Dauer: ${f}\n📜 Beschreibung: ${g}\n📆 Datum des Hochladens: ${h}\n👀 Ansichten: ${i}\n||\n⚡Autor: ${j}\n📺 Kanal: ${k}\n\n*——————————*\n\n`],

}