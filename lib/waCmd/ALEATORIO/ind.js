import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: "id",

Domina: "Bahasa Indo",

Start: () => ["Menjalankan Bot paling Kawaii dunia ketiga.\nMemulai eksekusi skrip...", "\n[!] Kode selesai:"],

Conn: (a = '') => ["Menghubungkan...", "Alasan terputus:", "Waktu koneksi habis, menghubungkan kembali...", "Diperlukan restart, memulai ulang...", "Perangkat keluar, silakan hubungkan kembali dan jalankan.", "Koneksi diganti, sesi baru dibuka, silakan keluar dari sesi saat ini terlebih dahulu.", "Koneksi terputus dengan server, menghubungkan kembali...", "Koneksi ditutup, menghubungkan kembali...", "File sesi salah, silakan hapus sesi saat ini dan hubungkan kembali", "Terhubung ✓", "\n\n[_>] Jika Anda akan menggunakan metode pencocokan, masukkan nomor yang akan menjadi bot, pastikan untuk memasukkan nomor WhatsApp lengkap beserta kode negaranya.\nContoh: +62xxx...\n", `\nKode pencocokan untuk nomor "+${a}":`],

Call: (n = '', k = "") => `\n*[ ! ] ${n} Anda akan diblokir*\n_Alasan: melakukan ${k ? "panggilan video" : "panggilan"} ke nomor ini tanpa izin!_\n`,

GpUp: (n = '', k = '') => ["🔒 *[ KELOMPOK TERTUTUP ]* 🔒\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ˢᵉᵐᵘᵃ ᵃᵈᵐᶦⁿ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᶦʳᶦᵐ ᵖᵉˢᵃⁿ_", "🔓 *[ GRUP TERBUKA ]* 🔓\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᶦʳᶦᵐ ᵖᵉˢᵃⁿ_", "🧰 *[PENGATURAN DIBUAT PADA GROUP]* ⚙️\n_ˢᵉᵏᵃʳᵃⁿᵍ ʰᵃⁿʸᵃ ᵃᵈᵐᶦⁿ ʸᵃⁿᵍ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵉᵈᶦᵗ ᵖᵉⁿᵍᵃᵗᵘʳᵃⁿ ᵍʳᵘᵖ_", "🧰 *[PENGATURAN DIBUAT PADA GROUP]* ⚙️\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵉᵈᶦᵗ ᵖᵉⁿᵍᵃᵗᵘʳᵃⁿ ᵍʳᵘᵖ_\n~ᴴᵃʳᵃᵖ ᵇᵉʳʰᵃᵗᶦ⁻ʰᵃᵗᶦ ᵗᵉʳʰᵃᵈᵃᵖ ᵒʳᵃⁿᵍ⁻ᵒʳᵃⁿᵍ ᵈᵉⁿᵍᵃⁿ ᵏᵉᵗᵉʳᵇᵉˡᵃᵏᵃⁿᵍᵃⁿ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ SUBYEK KELOMPOK DIUBAH ]* 🤳\n\n- Masalah utama adalah: _${n}_\n\n- Nama baru: _${k}_\n`],

RestriN: () => "[!] Gagal menghapus peserta baru, harap aktifkan mode terbatas!",

AlertList: () => "[!] Hapus nomor yang dimulai dengan '1' dari Blacklist di ./config.json...!",

WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Selamat datang @${n} di grup ini yang luar biasa* ${e}\n📆 *Tanggal bergabung: ${k}*\n🍷 _*Semoga Anda menikmati tinggal di sini, jangan lupa menghormati peserta dan aturan*_ ;)\n\n📜 *Aturan grup saat ini:* \n${masss}\n${o}`,

WlcRemove: (m = '', d = '', z = '') => `[!] Kiri: @${m} • ${d}\n- Tanggal keberangkatan |  ${z}`,

WlcPromot: (m = '', d = '', z = "") => [`*Selamat @${m}!, ${z || 'Seorang administrator'} baru saja memberikanmu kekuatan besar, sekarang kamu menjadi admin grup*: _${d}_\n`, `~Sekarang aku memiliki kekuatan mutlak dan aku tidak peduli!~\n\n*Aku maksud..., _Terima kasih banyak kepada ${m || 'seorang administrator'} karena memberi saya administrasi, saya akan memberikan yang terbaik untuk grup ini!!!_ :D*`],

WlcDemot: (m = '', d = '', z = "") => [`*${z || 'Seorang administrator'} baru saja menurunkan jabatan @${m} dan tidak lagi menjadi administrator grup*: _${d}_`, "Sedih sekali, saya bukan lagi seorang administrator unu"],

Cprint: () => ["SEDANG MENJALANKAN", "PESAN", "Dari", "Dari", "Obrolan", "grup:", "Pribadi:", "Tanggal"],

MsjRowner: () => "*[ ! ]* Perintah ini hanya dapat digunakan *dari bot utama*!",

MsjOwner: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *pemilik bot*!",

MsjMods: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *moderator*!",

MsjPremium: () => "*[ ! ]* Permintaan ini hanya untuk pengguna *premium*!",

MsjGroup: () => "*[ ! ]* Perintah ini hanya dapat digunakan di *grup*!",

MsjPrivate: () => "*[ ! ]* Perintah ini hanya dapat digunakan melalui *chat pribadi*!",

MsjAdmin: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *administrator grup*!",

MsjBotAdmin: () => "*[ ! ]* Bot perlu menjadi *administrator* untuk menggunakan perintah ini!",

MsjRestrict: () => "*[ ! ]* Untuk melakukan tindakan penghapusan, pemilik saya harus mengaktifkan mode terbatas!",

MsjRegister: "`[!] Untuk menggunakan fungsi ini, Anda harus mendaftar terlebih dahulu!`",

SpmrCmd: (a = "") => ["_Tunggu beberapa detik sebelum menggunakan perintah lain..._ ✓", `[ ! ] ${a} Mohon jangan spam bot ;-;`],

SpmrCnsl: () => "[SPAMER CMD] Perintah :",

Error: () => ["[ ! ] Terjadi kesalahan, silakan coba lagi nanti...", "[ ! ] Terjadi kesalahan yang tidak terduga u.u [ ! ]"],

Antnlc: (a = "") => ["[ ! ] Gila saya baru saja mengirim tautan, untungnya tautan yang terdeteksi berasal dari grup ini owo", "*[ ! ] Tautan terdeteksi [ ! ]*\n\n_Untungnya saya bukan admin, jadi Aku tidak bisa melakukan apa-apa unu_", `*[ ! ] Tautan terdeteksi [ ! ]*\n_Sekarang jika Anda layak @${a} Selamat tinggal..._\n`],

Antgll: () => ["Anda baru saja menandai semua peserta dalam grup ini, saya bukan admin jadi saya tidak bisa melakukan apa-apa :0", "Tindakan menandai semua orang dilarang dalam grup ini, adiu!"],

Antlnk: (a = "") => `*[ ! ] Tautan terdeteksi [ ! ]*  ${a ? "" : "\n\n_Sayangnya saya bukan admin, jadi tidak bisa melakukan apa-apa :v_"}`,

Antrb: (n = '', k = "") => [`Administrator @${n} baru saja mengirimkan teks yang berisi banyak karakter -.-!`,"*[ ! ] Terdeteksi pesan yang berisi banyak karakter [ ! ]* "+(n?"":`${saltos}\nSaya bukan administrator, saya tidak bisa melakukan lebih banyak... :/`),`Tandai chat sebagai sudah dibaca ✓\n${saltos}\n=> Nomor : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Baru saja mengirimkan teks yang berisi banyak karakter yang dapat menyebabkan gangguan pada perangkat seluler`],

AiChat: (n = "", k = "") => ["Harap lebih spesifik dalam pesan Anda", "Dan pesannya?", `Berhasil ${n ? "diaktifkan" : "dinonaktifkan"} "${k}".`],

Nime: (n="", k="") => ["Gunakan tangkapan layar atau gambar adegan anime", `${n ? 'Jika hasilnya tidak seperti yang Anda harapkan, coba gunakan gambar adegan "anime" dengan resolusi bagus!  ' : 'Saya tidak dapat meyakinkan Anda bahwa hasilnya 100% akurat u.u'}`, `*🔖Judul* _${n || "N/N"}_\n*🎴Episode:* _${k || "N/N"}_\n`],

Vthx: () => "`💻 Jaringan sosial 📲`\n\n[ > ] Saluran Youtube:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Halaman Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\n> ˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵐᵉᵐᶦⁿᵗᵃ ᵘᵃⁿᵍ⁻ ʰᵃⁿʸᵃ ᵈᵉⁿᵍᵃⁿ ᵈᵘᵏᵘⁿᵍᵃⁿ ᴬⁿᵈᵃ ˢᵃʸᵃ ˢᵉⁿᵃⁿᵍ :³",

Tptv: () => "Harap balas atau kirimkan video yang tidak melebihi 59 detik.",

Mlti: (a = '') => `*\`Contoh penggunaan (bahasa yang tersedia):\`*\n\n> Idioma español 🇵🇪\n-  ${a} es\n\n> English language 🇺🇲\n-  ${a} en\n\n> Idioma português 🇧🇷\n-  ${a} pt\n\n> Bahasa Indo 🇮🇩\n-  ${a} id\n\n> deutsche Sprache 🇩🇪\n-  ${a} de\n\n> Auto... 🌎\n-  ${a} auto\n`,

Gbnd: () => ["Obrolan berhasil diblokir ✓", "Obrolan berhasil dibatalkan pemblokirannya ✓"],

Gemx: (a = "") => `*Contoh penggunaan:*\n\n${Prefijo+a} 🥺+🥵\n`,

Dfbv: (a = "") => [`*[ ! ] Link tidak valid*\n_Silakan gunakan Link yang valid dari video Facebook_\n\nContoh penggunaan: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Terjadi kesalahan, mungkin link tidak valid atau video bersifat pribadi, coba lagi nanti"],

Wppr: (n = "", k = "") => [`┏━⊱ Wallpaper: ${n}\n┗⊱ Diminta oleh : @${k}`],

Frs: (n="", k="") => `- *Frasa:* _${n}.._\n\n> *Pengarang:* _${k}_\n`,

Fxm3: (m = "", d = "", z ="") => [`*Berikut adalah daftar efek yang tersedia:*\n\n- ${m}\n\nContoh penggunaan: ${Prefijo+d} ${z}`, "`[ ! ] Balas pesan suara`\n\n> Maksimal 2 menit durasinya"],

AdmOpt: (n = '', k = "") => [`${n ? 'dinyalakan' : 'dimatikan'} ${k} untuk chat ini`, "Berikut adalah daftar opsi :3", "Opsi:", "Deskripsi:", "Perintah:", [
  {
    t: "[ ⬇️ SAMBUTAN OTOMATIS ]",
    o1: "[ 🛬 Aktifkan ]",
    d1: "~Bot akan menyambut peserta baru di grup~",
    c1: `${Prefijo}lampu wlc`,
    o2: "[ 🛫 Nonaktifkan ]",
    d2: "~Bot tidak akan menyambut peserta baru di grup~",
    c2: `${Prefijo}matikan wlc`
  },
  {
    t: "[ ⬇️ PERPISAHAN OTOMATIS ]",
    o1: "[ 👋 Aktifkan ]",
    d1: "~Bot akan memberi tahu ketika seorang peserta keluar dari grup~",
    c1: `${Prefijo}lampu farewell`,
    o2: "[ ✊ Nonaktifkan ]",
    d2: "~Bot tidak akan mengambil tindakan perpisahan~",
    c2: `${Prefijo}matikan farewell`
  },
  {
    t: "[ ⬇️ HANYA - ADMIN ]",
    o1: "[ ⭐ Aktifkan ]",
    d1: "~Sekarang hanya admin grup yang dapat menggunakan bot~",
    c1: `${Prefijo}lampu admintunggal`,
    o2: "[ ✨ Nonaktifkan ]",
    d2: "~Sekarang semua peserta grup dapat menggunakan bot~",
    c2: `${Prefijo}matikan admintunggal`
  },
  {
    t: "[ ⬇️ DETEKSI ]",
    o1: "[ 🌕 Aktifkan ]",
    d1: "~Bot akan mendeteksi perubahan yang dilakukan di grup~",
    c1: `${Prefijo}lampu deteksi`,
    o2: "[ 🌑 Nonaktifkan ]",
    d2: "~Perubahan yang dilakukan di grup tidak akan terdeteksi~",
    c2: `${Prefijo}matikan deteksi`
  },
  {
    t: "[ ⬇️ ANTI-WALINK ]",
    o1: "[ 🗡️ Aktifkan ]",
    d1: "~Bot akan menghapus peserta yang mengirim tautan di grup~",
    c1: `${Prefijo}lampu walink`,
    o2: "[ 😴 Nonaktifkan ]",
    d2: "~Tidak ada tindakan yang akan diambil saat tautan dikirim~",
    c2: `${Prefijo}matikan walink`
  },
  {
    t: "[ ⬇️ ANTI-TAGALL ]",
    o1: "[ 🧐 Aktifkan ]",
    d1: "~Bot akan menghapus peserta yang menandai semua orang~",
    c1: `${Prefijo}lampu antitagall`,
    o2: "[ 😶 Nonaktifkan ]",
    d2: "~Bot tidak akan melakukan apa-apa saat semua orang ditandai~",
    c2: `${Prefijo}matikan antitagall`
  },
  {
    t: "[ ⬇️ ANTI-URL ]",
    o1: "[ 🗡️ Aktifkan ]",
    d1: "~Bot akan menghapus peserta yang mengirim tautan~",
    c1: `${Prefijo}lampu antilink`,
    o2: "[ 😴 Nonaktifkan ]",
    d2: "~Tidak ada tindakan yang akan diambil saat tautan dikirim~",
    c2: `${Prefijo}matikan antilink`
  },
  {
    t: "[ ⬇️ ANTI-PALSU 1 ]",
    o1: "[ 🛡️ Aktifkan ]",
    d1: "~Perintah ini mengaktifkan perlindungan terhadap nomor AS (+1)~",
    c1: `${Prefijo}lampu antipalsu1`,
    o2: "[ ⚰️ Nonaktifkan ]",
    d2: "~Nonaktifkan Anti-Palsu 1 di grup~",
    c2: `${Prefijo}matikan antipalsu1`
  },
  {
    t: "[ ⬇️ ANTI-PALSU 2 ]",
    o1: "[ 🛡️ Aktifkan ]",
    d1: "~Perlindungan terhadap nomor palsu atau virtual diaktifkan~",
    c1: `${Prefijo}lampu antipalsu2`,
    o2: "[ ⚰️ Nonaktifkan ]",
    d2: "~Nonaktifkan Anti-Palsu 2 di grup~",
    c2: `${Prefijo}matikan antipalsu2`
  },
  {
    t: "[ ⬇️ ANTI-ASING ]",
    o1: "[ 🏳️ Aktifkan ]",
    d1: `~Perlindungan terhadap nomor yang berbeda dari prefiks pemilik diaktifkan. Nomor yang dimulai dengan  +${LocPref}  tidak akan dihapus~`,
    c1: `${Prefijo}lampu antiasing`,
    o2: "[ 🏴 Nonaktifkan ]",
    d2: "~Nonaktifkan Anti-Asing di grup~",
    c2: `${Prefijo}matikan antiasing`
  },
  {
    t: "[ ⬇️ ANTI-TRABA ]",
    o1: "[ 🐸 Aktifkan ]",
    d1: "~Perintah ini mengaktifkan perlindungan Anti-Traba di WhatsApp~",
    c1: `${Prefijo}lampu antitraba`,
    o2: "[ 👾 Nonaktifkan ]",
    d2: "~Anti-Traba dinonaktifkan~",
    c2: `${Prefijo}matikan antitraba`
  }
]
],

OwnOpt: (n = '', k = '') => [`${n ? 'diaktifkan' : 'dinonaktifkan'} ${k} untuk chat ini`, [
{
t: "[ ⬇️ CHAT - BOT ]",
o1: "[ 🗣️ Aktifkan ]",
d1: "~Perintah ini mengaktifkan chat-bot di grup WhatsApp~",
c1: `${Prefijo}aktifkan chatbot`,

o2: "[ 👤 Nonaktifkan ]",
d2: "~Nonaktifkan chat-bot di grup saat ini~",
c2: `${Prefijo}nonaktifkan chatbot`
},
{
t: "[ ⬇️ MODE TERBATAS ]",
o1: "[ 🌚 Diaktifkan ]",
d1: "~Mengaktifkan fungsi untuk menghapus peserta di grup (Tidak disarankan)~",
c1: `${Prefijo}aktifkan terbatas`,

o2: "[ 🌝 Dinonaktifkan ]",
d2: "~Tindakan untuk menghapus dan menambahkan peserta dinonaktifkan (disarankan)~",
c2: `${Prefijo}nonaktifkan terbatas`
}
]
],

Dlig: (a = "") => [`*[ ! ] Link tidak valid*\n_Mohon gunakan tautan Instagram_\nContoh : ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],

Gimg: (a = '') => [`_Telusuri berdasarkan ${a}_`],

Bunt: (n = '', k = "") => ["[ ! ] Error, link WhatsApp tidak berfungsi atau tidak valid", `[ ! ] Perlu diingat bahwa jumlah minimum peserta grup harus: *${MinimoDeUsuarios}*, agar bot dapat berfungsi`, "Grup Anda akan ditinjau oleh pemilik bot (dia akan memutuskan apakah akan menambahkannya atau tidak)"],

Dmdf: (n = "", e = "", k = "", o = "", m = "", d = "") => ["*[ ! ] Link tidak valid*\n_Harap gunakan link MediaFire_", `*Nama:* ${n}\n*Ukuran:* ${e}\n*Ekstensi:* ${k}\n*Tanggal Unggah:* ${o}\n*Jenis Berkas:* ${m}\n*Url :* ${d}`],

Menl: (n = '', e = '', k = '', o = '') => [`Halo ${n}!, 👋`, "Contoh penggunaan", `*[ ${n} ]*\n≡ ~${e}~\n${Prefijo + k} ${o}`, `╔══════════\n║╭—————————\n`, `║├  ${n}`, `\n║╰—————————\n╚══════════`],

Menu: (n = '', e = '', k = '', o = "", s = '') => ["_Memuat menu..._", `╔I [ \`\`\`${n ? e : NombreDelBot}\`\`\` ]
║❂ Waktu aktif: ${k}
║❂ Versi bot: ${version}
║❂ Pemilik bot: ${author.name}
║❂ Awalan unik: 「  ${Prefijo}  」
║❂ Pelanggan: ${o}
╚══════════ ${n ? `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Sub-Bot of ${s}
┗─── ⊹ ⊱♡⊰ ⊹ ───┛` : ''}
${masss}
~|-------------------------|~
*[_>] _PERINTAH_ ☷*
~|-------------------------|~\n`,
`╔「 _${n} :_ 」
║╭—————————\n`,
`║├  ${n}`,
`\n║╰—————————
╚══════════`],

Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ PROFIL & INFO PENGGUNA]> 🌐\n\n➢ Nama: ${n}\n${e?"➢ Admin: [✓]":"➢ Admin: [X]"}\n${k?"➢ Premium: Ya":"➢ Premium: Tidak"} \n${o?"➢ Terdaftar: [✓]":"➢ Terdaftar: [X]"} ${o?`\n➢ Nama Terdaftar: ${s}\n➢ Usia: ${m}\n➢ Tanggal Pendaftaran: ${i}`:""}${c?`\n➢ Persentase Gay: ${c}`:""}\n➢ Batasan Sisa: ${b+r+u}\n- Permainan = ${b}\n- Unduhan = ${r}\n- Lainnya = ${u}\n`,`➢ Negara: ${n} \n➢ Kode Negara: ${e} \n➢ Asal Nomor: ${k||"Tidak Ditemukan u.u"} ${o?"\n➢ Nomor Valid: [✓]":"\n➢ Nomor Valid: [X]"} ${s?"\n➢ Perangkat Mobile: [✓]":"\n➢ Perangkat Mobile: [X]"} \n➢ Operator: ${m} \n➢ Jenis Linia: ${s} \n➢ Format Lokal: ${i} \n➢ Format Internasional: ${c} \n➢ Kode Negara: ${b}`],

Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "", z = '') => ["_Mendapatkan informasi..._",`*~》INFORMASI《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(aktif)_\n➪ *Pemilik saat ini* : _${author.name}_\n➪ *Aplikasi Node.js dimulai* : _${a}yang lalu._\n➪ *Waktu eksekusi* : _${b}._\n➪ *Nama panggilan di WhatsApp* : _${c}._\n➪ *Total grup* :  _${d}_\n➪ *Total pengguna* : _${e}_\n➪ *Grup aktif* : _${f} / ${g}_\n➪ *Obrolan pribadi* : _${h}_\n➪ *Total obrolan* : _${i} / ${j}_\n➪ *Total hits* : _${k}_\n➪ *Versi bot* : _${version}_\n➪ *Own-Wpp-Api* : _https://github.com/adiwajshing/_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Folder sementara* : _${l}_\n➪ *Basis data* : _${m}_\n➪ *Versi NodeJs* : _${n}_\n➪ *Kecepatan pemrosesan* : _${o} s_\n➪ *Kecepatan koneksi* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Platform* : _${r}_\n➪ *Versi* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Arsitektur* : _${u}_\n➪ *Host* : _${v}_\n➪ *Server* : _${w}_\n\n➫ _Pemakaian memori :_\n${x} ${""==y?"":`\n➫  _Total penggunaan CPU:_\n${y}\n➫ _Jumlah Core CPU yang digunakan_ ${z}`}\n\n┗─━─「 ✵ 」━─━─┛`],

Pimg: (n = '', k = '') => `\n*\`${n}\`*\n\n> ${k} `,

Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`🔍 Hasil ditemukan untuk: ${n}\n${e?`✍️ Judul: ${e}\n⏳ Durasi: 1:23 ━━━━●───────── ${k}\n👀 Tampilan: ${o}\n📝 Penulis: ${s}\n📜 Deskripsi: ${x}\n⛓️ URL: ${d}\n\n\`Mengirim audio, harap tunggu...\``:""}`],

Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`✍️ Judul : ${n}\n⚡ Penulis : ${e}\n⏰ Durasi : ${k}\n👀 Tampilan : ${o}\n📆 Tanggal unggah : ${s}\n📺 Saluran : ${m}\n📃 Deskripsi : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Anda dapat menggunakan perintah berikut untuk mengunduh_${masss}\n\n\`Audio\`\n├  ${Prefijo}ytmp3 ${_}\n├  ${Prefijo}yta ${_}\n└  ${Prefijo}ytabochi ${_}\n\n\`Video\`\n├  ${Prefijo}ytmp4 ${_}\n├  ${Prefijo}ytv ${_}\n└  ${Prefijo}ytvbochi ${_}\n`],

Ureg: (k = "", o = "", s = "", m = "", i = "", c = "") => ["Silakan masukkan kode registrasi Anda","[ ! ] Kode registrasi salah","[✓] Catatan Anda berhasil dihapus dari database 🗑️",`*[ ! ] Anda sudah terdaftar di database saya*\nApakah Anda ingin mendaftar lagi?\nGunakan perintah: \n\n${Prefijo}unreg <Kode registrasi>\n`,"Nama dan umur!?",'*[ ! ] Silakan tambahkan garis antara nama dan usia*\n\n" | "\n',"*[ ! ] Dalam usia hanya angka yang diterima -.-*","*[ ! ] Bruh namanya panjang sekali ._.*","*[ ! ] Usia maksimal 30 tahun*","*[ ! ] Usia minimal 13 tahun*","DAFTAR","Nama: ","Usia: ","Masa pubertas","Remaja","Muda","Dewasa","Tanggal registrasi:","Informasi:",`〘  *DAFTAR* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *Daftar pengguna* : @${k}\n╠≽️ *Nama terdaftar* : ${o}\n╠≽️ *Tanggal lahir* : ${s}\n╠≽️ *Menurut umurmu, kamu adalah a* : ${m}\n╠≽️ *Informasi* : ${i}\n╠≽️ *Nomor* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Kode registrasi_ : ${c}\n\nᴶᵃⁿᵍᵃⁿ ˡᵘᵖᵃ ˢᶦᵐᵖᵃⁿ ᵃᵗᵃᵘ ˢᵃˡᶦⁿ ᵏᵒᵈᵉ ʳᵉᵍᶦˢᵗʳᵃˢᶦ ᴬⁿᵈᵃ`],

Bscp: () => [`*🛑 Sebelum melanjutkan membaca, harap perhatikan persyaratan berikut:*\n- _Memiliki WhatsApp resmi di perangkat Anda_\n- _Memiliki 200 MB ruang kosong di perangkat Anda_\n- _Telah menginstal Termux.apk_\n- _Memiliki koneksi internet yang baik_\n- _Dan yang paling penting, bersabar_ :v\n\n\n*[_>] Di sini akan diunggah tutorial untuk aplikasi Termux dan mesin virtual:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\n> Butuh bantuan lebih lanjut? Hubungi pembuat saya:`, "Demo Uji Sementara"],

Bbot: (a = '', b = "") => ["Anda tidak bisa menggunakan perintah ini sebagai bot [ ! ]", "Opsi untuk sementara menjadi bot dinonaktifkan", `*Halo ${a}!, sebelum melanjutkan, silakan baca panduan singkat ini untuk menghindari masalah:*\n\n☝️🤓 Informasi dan penggunaan perintah:  ${b}\n\n\`1.- Saat Anda meminta atau kode pertama kali, Anda akan diberikan kunci unik agar Anda bisa menggunakan perintah ini nanti. (Jangan lupa untuk menyimpan kunci Anda).\`\n\n\`2.- Perintah ini memiliki beberapa tindakan yang bisa Anda gunakan:\`\n- ${b} kunci_anda-xxx...\n> _Anda dapat terhubung secara manual jika bot "terputus"._\n- ${b} kunci_anda-xxx... stop\n> _Akan menghentikan proses subbot hingga Anda mengaktifkannya kembali secara manual dengan kunci Anda._\n- ${b} kunci_anda-xxx... neocd\n> _Sesi Anda saat ini akan ditutup dan Anda dapat meminta kode baru untuk menghubungkan kembali._\n\n\`3.- Saat Anda menjadi subbot, disarankan agar Anda menguji bot Anda di grup yang berbeda dari tempat bot utama berada.\`\n\n\`4.- Pemilik dan administrator bot ini berhak untuk menghentikan, mengubah, atau menonaktifkan subbot yang aktif atau fitur sistem tanpa pemberitahuan sebelumnya.\`\n\n\`5.- Ingatlah untuk menggunakan kode koneksi yang akan dikirimkan kepada Anda, jika Anda meminta kode secara tidak semestinya, Anda akan ditandai selama 1 jam, yang akan sementara menghentikan akses ke perintah ini hingga Anda dapat menggunakannya lagi.\`\n\n~Pembuat bot ini tidak bertanggung jawab atas tindakan, kerusakan, atau konsekuensi yang timbul dari penggunaan bot ini.~`, "[_>] Simpan kunci...", "Menghentikan layanan subbot Anda...", "Layanan saat ini dihapus, silakan minta kode koneksi lagi", "[ ! ] Harap gunakan kunci Anda untuk melanjutkan...", "[ ! ] Kunci salah, coba lagi..."],

Bbbot: () => ["Terlalu lama memindai salah satu kode, layanan dihentikan...", '`Gunakan kode berikut untuk menjadi bot sementara`\n1. Ketuk tiga titik "︙" di sudut kanan atas layar beranda Anda\n2. Pilih opsi "perangkat yang terhubung"\n3. Ketuk "hubungkan perangkat"\n4. Di bagian bawah layar Anda, ada opsi bernama "Hubungkan dengan nomor telepon", ketuk di sana\n\n~[CATATAN] Kode akan kedaluwarsa jika tidak digunakan tepat waktu!~\n\n_Mengirim kode penghubung..._', "Baru-baru ini terdeteksi kesalahan serius dalam sesi subbot Anda. Anda tidak dapat terhubung sebagai bot sampai pemilik mereset basis data.", "*Terhubung dengan benar*\n\nInilah kunci unik Anda untuk kembali terhubung secara manual jika Anda terputus dari layanan bot sementara:", "Koneksi Anda sebagai subbot telah dipulihkan kembali!"],

Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Grup* : _[ ${b} ]_\n\n*Grup Diblokir* : _${c?"[✓]":"[X]"}_\n\n*Admin Bot?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot Pengguna* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PUBLIC [✓]":"MODO-PRIVAT [ ! ]"}_\n\n*Mode Terbatas* : _${g?"AKTIF [✓]":"NONAKTIF [X]"}_\n\n*Anti-Pribadi* : _${h?"AKTIF [✓]":"NONAKTIF [X]"}_\n\n*Jadi Sub-Bot* : _${i?"AKTIF [✓]":"NONAKTIF [X]"}_\n${a?`\n*Mode Hanya-Admins* : _${j?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Selamat Datang* : _${k?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti Tautan* : _${l?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti URL* : _${m?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti Orang Asing* : _${n?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*No Palsu* : _${o?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*No Palsu 2* : _${p?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Deteksi* : _${q?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti-Menabrak* : _${r?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Chat Bot* : _${s?"Aktif [✓]":"Tidak Aktif [X]"}_`:""}\n`,

Stks: (a = "") => ["*[ ! ] Durasi maksimal video adalah 8 detik!*", `*[ ! ] Silakan kirim atau balas dengan video atau gambar menggunakan perintah ${Prefijo+a}*\n_CATATAN: Durasi video maksimal 1 hingga 8 detik_ ✓`, "[ ! ] URL tidak valid, coba yang lain ;3"],

Stke: (a = "") => ["Balas stiker dari obrolan saat ini...", `Kirim atau balas stiker dengan perintah ${Prefijo+a}`, "Tip, hapus stiker Anda untuk semua ;v", "[ ! ] Balas stiker untuk mendapatkan metadata", "[ ! ] Balas stiker untuk menetapkan harga palsu :p", "Balas stiker untuk mengedit EXIF sesuai keinginan Anda"],

Bblst: (a = "") => ["Saat ini tidak ada subbot aktif...", "*Daftar nomor yang digunakan sebagai subbot*\n~Beberapa nomor mungkin tidak aktif!~", `\n*🐝 Bot:* wa.me/${a}`],

Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Memanggil anggota grup* :\n${n}\n\n*~> Pemanggil* : _@${e}_\n*~> Pesan* : _${k||"Tidak ada :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉᵏˢᶦ ˢᶦᵃᵖᵃᵖᵘⁿ ʸᵃⁿᵍ ᴹᵉᵐᵇᵃᶜᵃⁿʸᵃ ⁷ʷ⁷"}`],

Jcal: (a = "") => `*[ ! ] Tambahkan garis miring antara setiap tindakan*\n_Contoh penggunaan_ : \n\n${Prefijo+a} @PenggunaDitandai | berkahilahsaya | diberkati\n\n> Jangan lupa gunakan garis miring ini:  " | "`,

Jnij: (n = "", k = '') => ["Masukkan nama/julukan/frasa/dll...", `\`☯️ Teks ninja untuk [ ${n} ]:\`\n\n- *${k}*`],

Jqun: (a = "") => [`*[ ! ] Buatlah suatu masalah*\n_Contoh:_\n\n${Prefijo+a} gay :v?\n`, `\n👉 ${a}\n`],

Jtgs: (n = "", e = "", k = "", o = "") => [`*Pemain : ${n}*\n*[ Selamat, Anda menang!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*┃  | ${e}*\n*┃ ├────────┤ ┃*\n*┃  | ${k} <==*\n*┃ ├────────┤ ┃*\n*┃  | ${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Semua batasan Anda telah ditetapkan kembali*`, `Pemain : ${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n┃  | ${e}\n┃ ├────────┤ ┃\n┃  | ${k}\n┃ ├────────┤ ┃\n┃  | ${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],

Jtgy: (n = "", k = "") => ["persentase gaynya adalah ", `@${n} ${k} gay`, "*[ ! ] Batas gay terlampaui [ ! ]*"],

Clgs: (n = "", k = "") => [`*[ ! ] Gunakan format yang benar!* :\n\n🖼️ ~Untuk logo dengan teks berlanjut~\n[1]  ${Prefijo+n} (efek) (teks...), _Contoh penggunaan:_\n\n${Prefijo+n} space NeKosmic\n\n🖼️ ~Untuk logo dengan teks yang dipisahkan oleh garis vertikal~\n[2]  ${Prefijo+n} (efek) (teks1)|(teks2), _Contoh penggunaan:_\n\n${Prefijo+n} Pornhub-Style-Logo Fap|Not\n\n🎨 Logo apa yang ingin Anda buat?, berikut adalah daftar efek:\n\n${k}`, `[ ! ] Efek *${n}* tidak ditemukan dalam daftar...`],

Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => [`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Penulis: ${n}` : ""} ${e ? `\n🤳 Pengguna: ${e}` : ""} ${k ? `\n📝 Deskripsi: ${k}` : ""} ${o ? `\n💕 Suka: ${o}` : ""} ${m ? `\n🎭 Komentar: ${m}` : ""} ${d ? `\n🔄 Dibagikan: ${d}` : ""} ${z ? `\n👀 Dilihat: ${z}` : ""}`],

Tozg: (a = "") => [`*[ ! ] Balas stiker menggunakan perintah:*\n\n${Prefijo + a}`, `Berhasil dikonversi ke ${a ? "video" : "gambar"} ✓`],

UpBot: (m = '', d = '', z = '') => `*[ ! ] Harap tentukan nama file yang akan diperbarui.*\n_Berikut adalah daftar file yang dapat diperbarui dengan contoh penggunaannya masing-masing:_\n\n- ${m}\n\n> Jika Anda ingin melakukan pembaruan penuh, gunakan perintah:\n\n${Prefijo + d} ${z} ++\n`,

Uact: (n = "", e = "", o = "") => ["*Peserta mana yang ingin Anda jadikan administrator?*", `Contoh penggunaan:\n\n${Prefijo+n} @51995...\n`, "Siapa yang ingin Anda larang?", "[ ! ] Silakan tandai pengguna yang ingin Anda blokir", `Pengguna diblokir, ${n} tidak dapat lagi menggunakan bot [ ! ]`, "*Administrator mana yang ingin Anda hapus dari posisinya?*", "Siapa yang ingin Anda batalkan pemblokirannya?", `Pengguna yang tidak diblokir, ${n} dapat menggunakan bot itu lagi [✓]`, `Silakan tandai atau sebutkan seseorang!\n\nContoh penggunaan:\n${Prefijo+n} @${e}`, `*${n}* itu berhenti menjadi premium`, "Harap sebutkan jumlah hari", `Hanya angka!\n\nContoh penggunaan:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maksimal 7 hari", `*[ PENGGUNA PREMIUM ]*\n🔖 *Nama:* ${n}\n📆 *Waktu:* ${e} hari\n📉 *Tersisa:* ${o}MS`, "[ ! ] Waktu premium Anda telah berakhir!\n_saya berharap kamu menikmatinya :3_\n"],

Gadd: (a = "") => [`[ ! ] Tunjukkan nomor lengkap pengguna WhatsApp yang ingin Anda tambahkan ke grup, Contoh penggunaan:\n\n${Prefijo+a} +62999....`, `wa.me/${a} mengundang Anda ke grup WhatsApp-nya!`, `*[ ! ] Kesalahan, tidak dapat menambahkan nomor @${a} ke grup*\n\n_Silakan kirimkan dia tautan undangan secara manual: wa.me/${a}_\n`],

Uban: () => ["Kamu membenciku? :,c", "Pengguna mana yang ingin Anda hapus!?\Harap tandai salah satunya"],

Uwrn: (m = '', d = '', z = '') => [`Mengurangi jumlah peringatan kepada pengguna ${m}\n\n${d} => ${z}\n`, `> Peringatan pertama telah diberikan kepada pengguna ${m}. Jika Anda mengumpulkan lebih dari tiga peringatan, Anda akan dikeluarkan dari grup.`],

Wkpd: (n = "", k = "") => ["[ ! ] Tidak ada hasil untuk pencarian Anda ;-;", `||  *WIKIPEDIA* ||\n_~> Hasil untuk : ${n}_\n\n${k}`],

Dytv: (n = '', k = "") => `Judul: ${n}\nUkuran: ${k} \nEkstensi: .mp4`,

Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`*[ > ] Hasil di Youtube untuk:* _${a}_\n\n`, `🔖 Judul: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n??️ Tipe: ${d}\n🖼️ Miniatur: ${e}\n⌚ Durasi: ${f}\n📜 Deskripsi: ${g}\n📆 Tanggal Unggah: ${h}\n👀 Tampilan: ${i}\n||\n⚡Penulis: ${j}\n📺 Saluran: ${k}\n\n*——————————*\n\n`]

};