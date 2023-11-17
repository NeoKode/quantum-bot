import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "id",
Habla: () => "Bahasa Indo",
Start: () => ["Menjalankan Bot paling Kawaii dunia ketiga.\nMemulai eksekusi skrip...", "\n[!] Kode selesai:"],
Conn: () => ["Menghubungkan...", "Alasan Putus Koneksi:", "Waktu koneksi habis, sedang menghubungkan kembali...", "Restart diperlukan, sedang merestart...", "Perangkat keluar, harap scan ulang dan jalankan kembali.", "Koneksi digantikan, sesi baru terbuka, harap tutup sesi saat ini terlebih dahulu.", "Koneksi terputus dari server, menghubungkan kembali...", "Koneksi ditutup, menghubungkan kembali...", "File sesi tidak valid, harap hapus sesi dan scan ulang.", "Terhubung ✓", "\n\n[_>] Jika Anda akan menggunakan metode pencocokan, harap masukkan nomor yang akan menjadi bot. Pastikan untuk memasukkan nomor WhatsApp lengkap beserta kode negaranya.\nContoh: +51xxx...\n", "\nKode penyandingan Anda:"],
Call: (n = '', k = "") => `\n*[ ! ] ${n} Anda akan diblokir*\n_Alasan: melakukan ${k ? "panggilan video" : "panggilan"} ke nomor ini tanpa izin!_\n`,
GpUp: (a = "") => ["🔒 *[ KELOMPOK TERTUTUP ]* 🔒\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ˢᵉᵐᵘᵃ ᵃᵈᵐᶦⁿ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᶦʳᶦᵐ ᵖᵉˢᵃⁿ_", "🔓 *[ GRUP TERBUKA ]* 🔓\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᶦʳᶦᵐ ᵖᵉˢᵃⁿ_", "🧰 *[PENGATURAN DIBUAT PADA GROUP]* ⚙️\n_ˢᵉᵏᵃʳᵃⁿᵍ ʰᵃⁿʸᵃ ᵃᵈᵐᶦⁿ ʸᵃⁿᵍ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵉᵈᶦᵗ ᵖᵉⁿᵍᵃᵗᵘʳᵃⁿ ᵍʳᵘᵖ_", "🧰 *[PENGATURAN DIBUAT PADA GROUP]* ⚙️\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵉᵈᶦᵗ ᵖᵉⁿᵍᵃᵗᵘʳᵃⁿ ᵍʳᵘᵖ_\n~ᴴᵃʳᵃᵖ ᵇᵉʳʰᵃᵗᶦ⁻ʰᵃᵗᶦ ᵗᵉʳʰᵃᵈᵃᵖ ᵒʳᵃⁿᵍ⁻ᵒʳᵃⁿᵍ ᵈᵉⁿᵍᵃⁿ ᵏᵉᵗᵉʳᵇᵉˡᵃᵏᵃⁿᵍᵃⁿ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ SUBYEK KELOMPOK DIUBAH ]* 🤳\n\nNama baru: _${a}_\n`],
RestriN: () => "[!] Gagal menghapus peserta baru, harap aktifkan mode terbatas!",
AlertList: () => "[!] Hapus nomor yang dimulai dengan '1' dari FakeList di ./config.json...!",
WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Selamat datang @${n} di grup ini yang luar biasa* ${e}\n📆 *Tanggal bergabung: ${k}*\n🍷 _*Semoga Anda menikmati tinggal di sini, jangan lupa menghormati peserta dan aturan*_ ;)\n\n📜 *Aturan grup saat ini:* \n${masss}\n${o}`,
WlcRemove: (n = '', k = "") => `\`\`\`[!] Kiri: @${n}\`\`\`\n_- Tanggal keberangkatan |  ${k} `,
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
MsjUnreg: () => `*[ ! ]* Silakan daftar untuk mulai menggunakan fitur ini\n\nContoh: ${Prefijo}rg nama|usia\n\n${Prefijo}rg Juanito|15\n`,
MsjRestrict: () => "[ ! ] Untuk melakukan tindakan penghapusan, pemilik saya harus mengaktifkan mode terbatas!",
SpmrCmd: (a = "") => ["_Tunggu beberapa detik sebelum menggunakan perintah lain..._ ✓", `[ ! ] ${a} Mohon jangan spam bot ;-;`],
SpmrCnsl: () => "[SPAMER CMD] Perintah :",
Proces: (n = '', k = "") => [`_Memproses, ${n} harap tunggu..._`, `_Mencari, ${k} harap tunggu..._`],
Error: () => ["[ ! ] Terjadi kesalahan, silakan coba lagi nanti...", "[ ! ] Terjadi kesalahan yang tidak terduga u.u [ ! ]"],
Antprv: (a = "") => ["Mode anti-private aktif, harap hindari menggunakan obrolan ini ;)", "[ ! ] Peringatan terakhir, jangan mengobrol dengan bot secara pribadi!", `*[X] Obrolan pribadi dilarang [X]*\nAnda dapat menghubungi salah satu dari pemilik saya jika membutuhkan informasi lebih lanjut:\n\n${a}\n\n_Sampai jumpa..._`],
Antnlc: (a = "") => ["[ ! ] Gila saya baru saja mengirim tautan, untungnya tautan yang terdeteksi berasal dari grup ini owo", "*[ ! ] Tautan terdeteksi [ ! ]*\n\n_Untungnya saya bukan admin, jadi Aku tidak bisa melakukan apa-apa unu_", `*[ ! ] Tautan terdeteksi [ ! ]*\n_Sekarang jika Anda layak @${a} Selamat tinggal..._\n`],
Antgll: () => ["Anda baru saja menandai semua peserta dalam grup ini, saya bukan admin jadi saya tidak bisa melakukan apa-apa :0", "Tindakan menandai semua orang dilarang dalam grup ini, adiu!"],
Antlnk: (a = "") => `*[ ! ] Tautan terdeteksi [ ! ]*  ${a ? "" : "\n\n_Sayangnya saya bukan admin, jadi tidak bisa melakukan apa-apa :v_"}`,
Antrb: (n = '', k = "") => [`Administrator @${n} baru saja mengirimkan teks yang berisi banyak karakter -.-!`,"*[ ! ] Terdeteksi pesan yang berisi banyak karakter [ ! ]* "+(n?"":`${saltos}\nSaya bukan administrator, saya tidak bisa melakukan lebih banyak... :/`),`Tandai chat sebagai sudah dibaca ✓\n${saltos}\n=> Nomor : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Baru saja mengirimkan teks yang berisi banyak karakter yang dapat menyebabkan gangguan pada perangkat seluler`],
Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "") => ["_Mendapatkan informasi..._",`*~》INFORMASI《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(aktif)_\n➪ *Pemilik saat ini* : _${author.name}_\n➪ *Aplikasi Node.js dimulai* : _${a}yang lalu._\n➪ *Waktu eksekusi* : _${b}._\n➪ *Nama panggilan di WhatsApp* : _${c}._\n➪ *Total grup* :  _${d}_\n➪ *Total pengguna* : _${e}_\n➪ *Grup aktif* : _${f} / ${g}_\n➪ *Obrolan pribadi* : _${h}_\n➪ *Total obrolan* : _${i} / ${j}_\n➪ *Total hits* : _${k}_\n➪ *Versi bot* : _${version}_\n➪ *Wa-web API* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Folder sementara* : _${l}_\n➪ *Basis data* : _${m}_\n➪ *Versi NodeJs* : _${n}_\n➪ *Kecepatan pemrosesan* : _${o} s_\n➪ *Kecepatan koneksi* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Platform* : _${r}_\n➪ *Versi* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Arsitektur* : _${u}_\n➪ *Host* : _${v}_\n\n➫ _Pemakaian memori :_\n${w} ${""==x?"":`\n➫  _Total penggunaan CPU:_\n${x}\n➫ _Jumlah Core CPU yang digunakan_ ${y}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] Durasi maksimal video adalah 8 detik!*", `*[ ! ] Silakan kirim atau balas dengan video atau gambar menggunakan perintah ${Prefijo+a}*\n_CATATAN: Durasi video maksimal 1 hingga 8 detik_ ✓`, "[ ! ] URL tidak valid, coba yang lain ;3"],
Tozg: (a = "") => [`*[ ! ] Balas stiker menggunakan perintah:*\n\n${Prefijo + a}`, `Berhasil dikonversi ke ${a ? "video" : "gambar"} ✓`],
Tptv: () => "Harap balas atau kirimkan video yang tidak melebihi 59 detik.",
AiChat: (n = "", k = "") => ["Tidak ada sistem!", "Harap lebih spesifik dalam pesan Anda", "Dan pesannya?", `Berhasil ${n ? "diaktifkan" : "dinonaktifkan"} "${k}".`],
Dytv: (n = '', k = "") => [`Video apa yang ingin Anda download dari Youtube?, Contoh penggunaan: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please , saya menggunakan tautan dari video YouTube_\n", "[ ! ] Video Anda terlalu besar, maaf raja saya tidak dapat mengirimkannya :v", `Judul: ${n}\nUkuran: ${k} \nEkstensi: .mp4`],
Dyta: (a = "") => [`Audio apa yang ingin Anda unduh dari Youtube?, Contoh penggunaan: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please , gunakan tautan YouTube_\n", "[ ! ] Audio terlalu berat, maaf saya tidak dapat mengirimkannya..."],
Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => ["*[ ! ] Y el Link de tiktok?*", "*[ ! ] Link inválido*\n_Por favor, use un link válido_", `*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Penulis: ${n}` : ""} ${e ? `\n🤳 Pengguna: ${e}` : ""} ${k ? `\n📝 Deskripsi: ${k}` : ""} ${o ? `\n💕 Suka: ${o}` : ""} ${m ? `\n🎭 Komentar: ${m}` : ""} ${d ? `\n🔄 Dibagikan: ${d}` : ""} ${z ? `\n👀 Dilihat: ${z}` : ""}`],
Dlig: (a = "") => ["*[ ! ] Dan Link Instagram?*", "*[ ! ] Link tidak valid*\n_Mohon gunakan tautan yang valid_", `*[ ! ] Link tidak valid*\n_Mohon gunakan tautan Instagram_\nContoh : ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],
Dfbv: (a = "") => ["*[ ! ] Dan Link Facebook?*", "*[ ! ] Link tidak valid*\n_Silakan gunakan link yang valid_", `*[ ! ] Link tidak valid*\n_Silakan gunakan Link yang valid dari video Facebook_\n\nContoh penggunaan: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Terjadi kesalahan, mungkin link tidak valid atau video bersifat pribadi, coba lagi nanti"],
Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`Apa yang ingin Anda cari di Youtube? Contoh penggunaan:\n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] Tidak ada hasil, coba lagi...",`✍️ Judul : ${n}\n⚡ Penulis : ${e}\n⏰ Durasi : ${k}\n👀 Tampilan : ${o}\n📆 Tanggal unggah : ${s}\n📺 Saluran : ${m}\n📃 Deskripsi : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Anda dapat menggunakan perintah berikut untuk mengunduh_${masss}\n\n┌ Audio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Video -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`Audio apa yang ingin Anda unduh dari YouTube?, Contoh penggunaan: \n\n${Prefijo+n} mtc s3rl`, `🔍 Hasil ditemukan untuk: ${n}\n${e?`✍️ Judul: ${e}\n⏳ Durasi: 1:23 ━━━━●───────── ${k}\n👀 Tampilan: ${o}\n📝 Penulis: ${s}\n📜 Deskripsi: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Mengirim audio, harap tunggu...\`\`\``:""}`],
Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`Apa yang ingin Anda cari di Youtube? Contoh penggunaan: \n\n${Prefijo+a} berapa 1 + 1`, `*[ > ] Hasil di Youtube untuk:* _${a}_\n\n`, `🔖 Judul: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Tipe: ${d}\n🖼️ Miniatur: ${e}\n⌚ Durasi: ${f}\n📜 Deskripsi: ${g}\n📆 Tanggal Unggah: ${h}\n👀 Tampilan: ${i}\n||\n⚡Penulis: ${j}\n📺 Saluran: ${k}\n\n*——————————*\n\n`],
Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Memanggil anggota grup* :\n${n}\n\n*~> Pemanggil* : _@${e}_\n*~> Pesan* : _${k||"Tidak ada :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉᵏˢᶦ ˢᶦᵃᵖᵃᵖᵘⁿ ʸᵃⁿᵍ ᴹᵉᵐᵇᵃᶜᵃⁿʸᵃ ⁷ʷ⁷"}`],
GpOpt: (n = '', k = "") => [`Berhasil ${n ? 'mengaktifkan' : 'menonaktifkan'} ${k} untuk grup ini`, "Berikut adalah daftar opsi :3", "Opsi", "Deskripsi:", "Perintah:"],
GpActn: () => [{
titulo: "[ ⬇️ SELAMAT DATANG OTOMATIS ]",
func: [{
action: "[ 🛬 Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿʸᵃᵐᵇᵘᵗ ᵖᵉˢᵉʳᵗᵃ ᵇᵃʳᵘ ᵏᵉ ᵈᵃˡᵃᵐ ᵍʳᵘᵖ~",
cmd: `${Prefijo}encender bienvenida`
}, {
action: "[ 🛫 Menonaktifkan ]",
desc: "~ᴾᵉˢᵉʳᵗᵃ ᵇᵃʳᵘ ᵈᵃˡᵃᵐ ᵍʳᵘᵖ ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵈᶦᵗᵉʳᶦᵐᵃ~",
cmd: `${Prefijo}apagar bienvenida`
}]
}, {
titulo: "[ ⬇️ HANYA - ADMIN ]",
func: [{
action: "[ ⭐ Mengaktifkan ]",
desc: "~ˢᵉᵏᵃʳᵃⁿᵍ ʰᵃⁿʸᵃ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳ ʸᵃⁿᵍ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵍᵘⁿᵃᵏᵃⁿ ᵇᵒᵗ~",
cmd: `${Prefijo}encender soloadmins`
}, {
action: "[ ✨ Menonaktifkan ]",
desc: "~ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵃᵏᵃⁿ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵍᵘⁿᵃᵏᵃⁿ ᵇᵒᵗ~",
cmd: `${Prefijo}apagar soloadmins`
}]
}, {
titulo: "[ ⬇️ DETEKSI ]",
func: [{
action: "[ 🌕 Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵈᵉᵗᵉᵏˢᶦ ᵖᵉⁿʸᵉˢᵘᵃᶦᵃⁿ ʸᵃⁿᵍ ᵈᶦˡᵃᵏᵘᵏᵃⁿ ᵖᵃᵈᵃ ᵍʳᵘᵖ~",
cmd: `${Prefijo}encender deteccion`
}, {
action: "[ 🌑 Menonaktifkan ]",
desc: "~ˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵗᵃʰᵘ ᵃᵏᵃⁿ ᵐᵉⁿᵈᵉᵗᵉᵏˢᶦ ᵖᵉⁿʸᵉˢᵘᵃᶦᵃⁿ ʸᵃⁿᵍ ᵈᶦˡᵃᵏᵘᵏᵃⁿ ᵖᵃᵈᵃ ᵍʳᵘᵖ~",
cmd: `${Prefijo}apagar deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI-WA_LINKS ]",
func: [{
action: "[ 🗡️ Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵐᵉʳᵉᵏᵃ ʸᵃⁿᵍ ᵐᵉⁿᵍᶦʳᶦᵐ ᵗᵃᵘᵗᵃⁿ ᵂʰᵃᵗˢᴬᵖᵖ ᵏᵉ ᵍʳᵘᵖ~",
cmd: `${Prefijo}encender antienlaces`
}, {
action: "[ 😴 Menonaktifkan ]",
desc: "~ᵀᶦᵈᵃᵏ ᵃᵈᵃ ᵗᶦⁿᵈᵃᵏᵃⁿ ʸᵃⁿᵍ ᵃᵏᵃⁿ ᵈᶦᵃᵐᵇᶦˡ ˢᵃᵃᵗ ᵗᵃᵘᵗᵃⁿ ᵂʰᵃᵗˢᴬᵖᵖ ᵈᶦᵏᶦʳᶦᵐ~",
cmd: `${Prefijo}apagar antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ʸᵃⁿᵍ ᵐᵉⁿᵃⁿᵈᵃᶦ ˢᵉᵐᵘᵃ ᵒʳᵃⁿᵍ~",
cmd: `${Prefijo}encender antitagall`
}, {
action: "[ 😶 Menonaktifkan ]",
desc: "~ᴮᵒᵗ ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵐᵉˡᵃᵏᵘᵏᵃⁿ ᵃᵖᵃ ᵖᵘⁿ ˢᵃᵃᵗ ˢᵉᵐᵘᵃ ᵒʳᵃⁿᵍ ᵈᶦᵇᵉʳᶦ ᵗᵃᵍ~",
cmd: `${Prefijo}apagar antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Mengaktifkan ]",
desc: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᶜʰᵃᵗᵇᵒᵗ ᵈᶦ ᵍʳᵘᵖ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}encender chatbot`
}, {
action: "[ 👤 Menonaktifkan ]",
desc: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᶜʰᵃᵗᵇᵒᵗ ᵈᶦ ᵍʳᵘᵖ ˢᵃᵃᵗ ᶦⁿᶦ~",
cmd: `${Prefijo}apagar chatbot`
}]
}, {
titulo: "[ ⬇️ MODE TERBATAS ]",
func: [{
action: "[ 🌚 Diaktifkan ]",
desc: "~ᴬᵏᵗᶦᶠᵏᵃⁿ ᶠᵘⁿᵍˢᶦ ᵘⁿᵗᵘᵏ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ᵈᵃʳᶦ ᵍʳᵘᵖ ⁽ᵈᵉⁿᵍᵃⁿ ʳᶦˢᶦᵏᵒ ᴬⁿᵈᵃ ˢᵉⁿᵈᶦʳᶦ⁾~",
cmd: `${Prefijo}encender restringido`
}, {
action: "[ 🌝 dengan disabilitas ]",
desc: "~ᵀᶦⁿᵈᵃᵏᵃⁿ ᵘⁿᵗᵘᵏ ᵐᵉⁿᵃᵐᵇᵃʰ ᵈᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ᵈᶦⁿᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ~",
cmd: `${Prefijo}apagar restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ʸᵃⁿᵍ ᵐᵉⁿᵍᶦʳᶦᵐ ᵘʳˡ~",
cmd: `${Prefijo}encender antiurl`
}, {
action: "[ 😴 Menonaktifkan ]",
desc: "~ˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵗᵃʰᵘ ᵃᵏᵃⁿ ᵐᵉˡᵃᵏᵘᵏᵃⁿ ᵗᶦⁿᵈᵃᵏᵃⁿ ᵃᵖᵃ ᵖᵘⁿ ˢᵃᵃᵗ ᵗᵃᵘᵗᵃⁿ⁻ᵘʳˡ ᵈᶦᵏᶦʳᶦᵐ~",
cmd: `${Prefijo}apagar antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI-PALSU 1 ]",
func: [{
action: "[ 🛡️ Mengaktifkan ]",
desc: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᵖᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ᴬˢ ⁺¹~",
cmd: `${Prefijo}encender antifake1`
}, {
action: "[ ⚰️ Menonaktifkan ]",
desc: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᵃⁿᵗᶦ⁻ᵖᵃˡˢᵘ ¹ ᵈᶦ ᵍʳᵘᵖ~",
cmd: `${Prefijo}apagar antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - PALSU 2 ]",
func: [{
action: "[ 🛡️ Mengaktifkan ]",
desc: "~ᴾᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ᵃⁿᵉʰ ᵃᵗᵃᵘ ᵐᵉⁿᶜᵘʳᶦᵍᵃᵏᵃⁿ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ~",
cmd: `${Prefijo}encender antifake2`
}, {
action: "[ ⚰️ Menonaktifkan ]",
desc: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᵃⁿᵗᶦ⁻ᵖᵃˡˢᵘ ² ᵈᵃˡᵃᵐ ᵍʳᵘᵖ~",
cmd: `${Prefijo}apagar antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI - ORANG ASING ]",
func: [{
action: "[ 🏳️ Mengaktifkan ]",
desc: "~ᴾᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ˢᵉˡᵃᶦⁿ ᵃʷᵃˡᵃⁿ ᵖᵉᵐᶦˡᶦᵏ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ~\nᴬⁿᵍᵏᵃ ʸᵃⁿᵍ ᵈᶦᵐᵘˡᵃᶦ ᵈᵉⁿᵍᵃⁿ +" + LocPref + " ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵈᶦʰᵃᵖᵘˢ~",
cmd: `${Prefijo}encender antiextranjeros`
}, {
action: "[ 🏴 Menonaktifkan ]",
desc: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᴬⁿᵗᶦ ᴼʳᵃⁿᵍ ᴬˢᶦⁿᵍ ᵈᶦ ᵍʳᵘᵖ~",
cmd: `${Prefijo}apagar antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - MENCARA ]",
func: [{
action: "[ 🐸 Mengaktifkan ]",
desc: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᵖᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ᵖᵉˢᵃⁿ ᵐᵒᵍᵒᵏ ᵈᶦ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}encender antitraba`
}, {
action: "[ 👾 Menonaktifkan ]",
desc: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᶦⁿᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ~",
cmd: `${Prefijo}apagar antitraba`
}]
}],
Menl: (a = "") => [`Halo ${a}!, 👋`,
[{
info: `*[ Menu-Lengkap ♻️ ]*
≡ ~ᴰᵃᶠᵗᵃʳ ˡᵉⁿᵍᵏᵃᵖ ˢᵉᵐᵘᵃ ᵖᵉʳᶦⁿᵗᵃʰ~
${Prefijo}menulengkap`
},
{
info: `...`
}]
],
Menu: (n = '', e = '', k = '', o = "") => ["_Menu pemuatan..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
║❂ Waktu aktif: ${n}
║❂ Versi bot: ${version}
║❂ Pemilik Bot: ${author.name}
║❂ Awalan unik: 「  ${Prefijo}  」
║❂ Klien: ${e}
╚══════════ ${k ? '' : `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Sub-Bot dari wa.me/${o}
┗─── ⊹ ⊱♡⊰ ⊹ ───┛`}
${masss}
~|-------------------------|~
*[_>] _PERINTAH_ ☷*
~|-------------------------|~

╔「 _CONVERTER :_ 」
║╭—————————
║├  ${Prefijo}sticker
║├  ${Prefijo}aimg
║├  ${Prefijo}amp4
║├  ${Prefijo}aptv
║╰—————————
╚══════════
╔「 _PENGUNDUH :_ 」
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
╔「 _PERALATAN :_ 」
║╭—————————
║├  ${Prefijo}ytbuscar
║├  ${Prefijo}afk
║├  ${Prefijo}mencuri
║├  ${Prefijo}aichat
║├  ${Prefijo}rentbot
║╰—————————
╚══════════
╔「 _PERMAINAN/RPG :_ 」
║╭—————————
║├  ${Prefijo}ttt
║├  ${Prefijo}fitnah
║├  ${Prefijo}namaninja
║├  ${Prefijo}siapa
║├  ${Prefijo}keberuntungan
║├  ${Prefijo}testgay
║├  ${Prefijo}mulaiperjalanan
║├  ${Prefijo}usaha
║├  ${Prefijo}jelajahi
║├  ${Prefijo}inventaris
║├  ${Prefijo}perbaikankapal
║├  ${Prefijo}naiktingkat
║╰—————————
╚══════════
╔「 _ADMIN :_ 」
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
╔「 _PEMILIK :_ 」
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
║├  ${Prefijo}updatebot
║╰—————————
╚══════════
╔「 _ACAK :_ 」
║╭—————————
║├  ${Prefijo}pencipta
║├  ${Prefijo}pemilik
║├  ${Prefijo}rg
║├  ${Prefijo}desrg
║├  ${Prefijo}profilsaya
║├  ${Prefijo}infobot
║├  ${Prefijo}simi
║├  ${Prefijo}estadobot
║├  ${Prefijo}joinbot
║├  ${Prefijo}listbots
║├  ${Prefijo}instalbot
║├  ${Prefijo}sugerir
║├  ${Prefijo}mendukung
║╰—————————
╚══════════

Muito em breve mais funções...`],
Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Grup* : _[ ${b} ]_\n\n*Grup Diblokir* : _${c?"[✓]":"[X]"}_\n\n*Admin Bot?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot Pengguna* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PUBLIC [✓]":"MODO-PRIVAT [ ! ]"}_\n\n*Mode Terbatas* : _${g?"AKTIF [✓]":"NONAKTIF [X]"}_\n\n*Anti-Pribadi* : _${h?"AKTIF [✓]":"NONAKTIF [X]"}_\n\n*Jadi Sub-Bot* : _${i?"AKTIF [✓]":"NONAKTIF [X]"}_\n${a?`\n*Mode Hanya-Admins* : _${j?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Selamat Datang* : _${k?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti Tautan* : _${l?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti URL* : _${m?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti Orang Asing* : _${n?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*No Palsu* : _${o?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*No Palsu 2* : _${p?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Deteksi* : _${q?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti-Menabrak* : _${r?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Chat Bot* : _${s?"Aktif [✓]":"Tidak Aktif [X]"}_`:""}\n`,
Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ PROFIL & INFO PENGGUNA]> 🌐\n\n➢ Nama: ${n}\n${e?"➢ Admin: [✓]":"➢ Admin: [X]"}\n${k?"➢ Premium: Ya":"➢ Premium: Tidak"} \n${o?"➢ Terdaftar: [✓]":"➢ Terdaftar: [X]"} ${o?`\n➢ Nama Terdaftar: ${s}\n➢ Usia: ${m}\n➢ Tanggal Pendaftaran: ${i}`:""}${c?`\n➢ Persentase Gay: ${c}`:""}\n➢ Batasan Sisa: ${b+r+u}\n- Permainan = ${b}\n- Unduhan = ${r}\n- Lainnya = ${u}\n`,`➢ Negara: ${n} \n➢ Kode Negara: ${e} \n➢ Asal Nomor: ${k||"Tidak Ditemukan u.u"} ${o?"\n➢ Nomor Valid: [✓]":"\n➢ Nomor Valid: [X]"} ${s?"\n➢ Perangkat Mobile: [✓]":"\n➢ Perangkat Mobile: [X]"} \n➢ Operator: ${m} \n➢ Jenis Linia: ${s} \n➢ Format Lokal: ${i} \n➢ Format Internasional: ${c} \n➢ Kode Negara: ${b}`],
Stke: (a = "") => ["Balas stiker dari obrolan saat ini...", `Kirim atau balas stiker dengan perintah ${Prefijo+a}`, "Tip, hapus stiker Anda untuk semua ;v", "[ ! ] Balas stiker untuk mendapatkan metadata", "[ ! ] Balas stiker untuk menetapkan harga palsu :p", "Balas stiker untuk mengedit EXIF sesuai keinginan Anda"],
Jtli: (n = "", k = "") => ["Anda sudah berada dalam ruangan aktif -.-", `*[ ! ] Masukkan nama untuk membuat ruangan baru*\n\nContoh penggunaan:\n\n${Prefijo+n} latam\n`, "Lawan ditemukan!\nPemain pertama harus memulai permainan dengan menulis angka dari 1 hingga 9 untuk memulai", "harus memulai permainan", "~Tulis :~\n\nnyerah\n\n~untuk menyerah~", `*[ ! ] Menunggu lawan*\nUntuk bergabung dengan permainan, gunakan perintah ${Prefijo+n} ${k}\n\n`, "Permainan telah selesai", "Tidak valid", "Posisi tidak valid", "Posisi tidak valid", "Kemenangan!", "Permainan berakhir, seri", "Giliran", "*Ruangan tictactoe berhasil dihapus ✓*"],
Jcal: (a = "") => [`*[ ! ] Gunakan dengan baik perintah :*\n${Prefijo+a} @tag|message|reply`, `*[ ! ] Tambahkan garis miring di antara setiap kata sekaligus*\n\n_Contoh penggunaan_ : \n${Prefijo+a} @taggeduser|blessme|blessed\n~Jangan lupa gunakan garis miring ini~ : " | "`, "Tanpa teks :v", " gunakan 2 garis miring!!!\n\n@tag|pesan|balasan ✓"],
Jnij: (a = "") => ["Gunakan nama atau nama panggilan...", `☯️ Nama Ninja untuk _${a}_:`],
Jqun: (a = "") => [`*[ ! ] Buatlah suatu masalah*\n_Contoh:_\n\n${Prefijo+a} gay :v?\n`, "*[ ! ] Persoalannya sangat singkat*"],
Jtgs: (n = "", e = "", k = "", o = "") => [`*Pemain : @${n}*\n*[ Selamat, Anda menang!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${e}*\n*┃ ├────────┤ ┃*\n*${k} <==*\n*┃ ├────────┤ ┃*\n*${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Semua batasan Anda telah ditetapkan kembali*`, `Pemain : @${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${e}\n┃ ├────────┤ ┃\n${k}\n┃ ├────────┤ ┃\n${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],
Jtgy: (n = "", k = "") => [`_Menghitung persentase..._\n💉${n}🔬`, "persentase gaynya adalah ", `@${n} ${k} gay`, "*[ ! ] Batas gay terlampaui [ ! ]*"],
RpgX: (n = "", e = "", k = "", o = "") => [`\`\`\`Harap konfirmasi bahwa Anda akan memulai game RPG, Contoh penggunaan:\`\`\`\n\n- Untuk melanjutkan permainan:\n${Prefijo+n} true\n\n- Untuk menjeda permainan:\n${Prefijo+n} false`, '```Game RPG dimulai dengan sukses ✓```', `\n_Silakan pilih ras Anda untuk memulai, Ras yang Tersedia:_\n\n\n${n}\n• Kemampuan: Manipulasi Energi, Penerbangan.\n- Tujuan: Melestarikan Kebijaksanaan, Eksplorasi Kosmik.\nGunakan perintah:\n${Prefijo+o} ${k.myphers}\n\n\n${e}\n• Kemampuan: Regenerasi, Kekuatan Fisik.\n- Tujuan: Domain Militer, Kehormatan dan Kesetiaan.\nGunakan perintah:\n${Prefijo+o} ${k.drakonites}\n`, `\`\`\`Anda telah memilih perlombaan ${n}!\`\`\` ${"myphers"===n?"\n\n*Latar Belakang Myphers:*\n\n_Myphers adalah makhluk etereal yang berasal dari planet gas Myphoria. Masyarakat mereka sangat dalam terkait dengan spiritualitas dan hubungan dengan energi kosmik yang meresap ke atmosfer mereka. Seiring berjalannya zaman, mereka telah mengembangkan kebijaksanaan nenek moyang yang memandu mereka dalam pencarian pengetahuan dan kedamaian di alam semesta yang luas._\n\n_Myphers telah menyempurnakan seni manipulasi energi kosmik, memungkinkan mereka melakukan keajaiban mulai dari menyembuhkan luka hingga menciptakan pagar pertahanan yang kuat. Kemampuan bawaan mereka untuk terbang memberi mereka keunggulan dalam eksplorasi planet gas dan memungkinkan mereka bergerak dengan anggun dan cepat._\n\n_Tujuan utama mereka adalah mempertahankan kebijaksanaan kuno ras mereka dan memperluas pemahaman mereka tentang alam semesta. Myphers percaya pada harmoni universal dan berusaha membagikan pengetahuan mereka dengan ras lain untuk mendorong perdamaian dan pemahaman di galaksi._":"\n\n*Latar Belakang Drakonites:*\n\n_Drakonites, yang berasal dari planet Draconis yang panas, adalah ras reptilia kuat dan tahan banting. Mereka telah bertahan selama generasi di lingkungan yang keras, membentuk karakter mereka yang garang dan tekad mereka yang tidak tergoyahkan. Sejak zaman kuno, mereka telah menghormati kode kehormatan dan kesetiaan, nilai-nilai yang telah membimbing masyarakat mereka selama ribuan tahun._\n\n_Kemampuan regeneratif Drakonites memungkinkan mereka pulih dengan cepat dari luka, sementara kekuatan fisik dan daya tahan mereka membuat mereka prajurit tangguh dalam pertempuran. Mereka telah menyempurnakan seni pertempuran jarak dekat dan mengembangkan teknologi canggih untuk membela rumah mereka dan memperluas dominasi mereka._\n\n_Tujuan utama Drakonites adalah membangun dominasi militer di alam semesta, memperluas pengaruh mereka dan menjamin kelangsungan hidup spesies mereka. Mereka sangat menghargai kehormatan di atas segalanya, mencari sekutu yang memiliki nilai-nilai yang sama dan bersedia berjuang bersama mereka dalam penaklukan dunia baru._"} `, "[ ! ] Ras ini tidak ada, harap pilih ras yang valid", `Untuk menghentikan permainan RPG gunakan perintah:\n\n${Prefijo+n} false`, "🌌 Game RPG dijeda dengan benar ✓"],
RpgA: (a) => ["Kapal Anda tidak dapat menjelajahi planet lain dalam kondisinya saat ini. Anda perlu mengumpulkan lebih banyak sumber daya untuk memperbaikinya.", `Anda dapat melakukan petualangan lain dalam ${a}`, `Anda kembali ke planet: *${a}*...`, `Anda telah menemukan planet baru: *${a}*!`],
RpgE: (n='', e='', k='', o='', m='', d='', z='') => [`*[ ! ] Anda telah melakukan pemindaian baru-baru ini, harap tunggu*\n🕐 ${n}...*\n`, `🪨 ${n ?  '*Anda tidak menemukan sumber daya untuk saat ini u.u*' : '*Sudahkah Anda menemukan:* '}\n${e ?  `\n🛢️ Bensin: ${e}` : ''} ${k ?  `\n⚒️ Wolfram: ${k}` : ''} ${o ?  `\n⚒️ Emas: ${o}` : ''} ${m ?  `\n⚒️ Setrika: ${m}` : ''} ${d ?  `\n⚒️ Aluminium: ${d}` : ''} ${z ?  `\n⚒️ Silikon: ${z}` : ''}\n`, "🗑️ *Tidak ada yang ditemukan sejauh ini*\n\n", `*🏳️ Anda telah menemukan peradaban baru:* ${n}!, aliansi menghasilkan ${e}, sekarang gerombolan Anda terdiri dari ${k} unit.`, "🏴 Sejauh ini, belum ada penampakan kehidupan alien yang tercatat di planet ini."],
RpgI: (a='', b='', c='', d='', e='', f='', g='', h='', i='', j='', k='', l='', m='', n='', o='', p='', q='', r='', s='') => `\`\`\`Inventaris milik @${a} (${b})\`\`\`\n\n*[🪐] Planet yang Ditemukan:*\n   - Total: _${c}_ ${d?`\n   - Planet saat ini: _${d}_`:""}\n\n*[🚀] Kapal:*\n   - Gas: _${e}_\n   - Teknologi: _${f}_\n   - Status: _${g}_\n\n*[🌌] Eksplorasi:*\n   - Odise Terakhir: _${0===h?"Tanpa perjalanan":`Sejak ${i}`}._\n   - Eksplorasi Terakhir: _${0===j?"Tanpa eksplorasi":`Sejak ${k}`}._\n\n*[🎒] Barang:*\n   - Wolfram: _${l}_\n   - Emas: _${m}_\n   - Besi: _${n}_\n   - Aluminium: _${o}_\n   - Silikon: _${p}_\n\n*[👥] Horde:*\n   - _${q} unit_\n\n*[🌟] Pengalaman:*\n   - _${r} poin_\n\n*[👑] Peran:*\n   - _${s}_\n`,
RpgR: (m='', d='', z='') => [`*[🚀] Apa bahan yang ingin Anda gunakan untuk memperbaiki pesawat Anda:*\n\n🪨 W74 (Wolframio):\n_1 dari W74 memberikan 50 teknologi_\n\n🪨 Au79 (Emas)\n_3 dari Au79 memberikan 45 teknologi_\n\n🪨 Fe26 (Besi)\n_5 dari Fe26 memberikan 20 teknologi_\n\n🪨 Al13 (Aluminium)\n_10 dari Al13 memberikan 15 teknologi_\n\n🪨 Si14 (Silikon)\n_20 dari Si14 memberikan 5 teknologi_\n\nContoh penggunaan:\n\n${Prefijo+m} Si14\n`, `Anda tidak memiliki cukup bahan untuk memperbaiki kapal, Anda memerlukan ${m} dari ${d}, saat ini Anda memiliki ${z}`, `Anda baru saja memperbaiki kapal Anda dengan teknologi ${m}.`, "Este material no existe"],
RpgS: (m='', d='', z='') => [`${m}\n\n- Level yang dicapai: _${d}_\n- Peran ditetapkan berdasarkan level: ${z}`, `Level Anda saat ini adalah ${m}, sesuai dengan level Anda, peran Anda adalah: ${d}`],
Lvls: () => ({0:"Budak Tingkat-Ⅱ",3:"Budak Tingkat-Ⅲ",4:"Budak Tingkat-Ⅳ",5:"Budak Tingkat-Ⅴ",6:"Budak Tingkat-VI",7:"Budak Tingkat-VII",8:"Budak Tingkat-VIII",9:"Budak Tingkat-IX",10:"Budak Tingkat-X",11:"Anda tidak lagi menjadi budak, selamat 🥳",12:"Kecerdasan rendah",13:"Kecerdasan sedang",15:"Kecerdasan tinggi",16:"Pemula dalam pelatihan ✓",20:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",24:"Rekrut Tingkat-Ⅰ",28:"Rekrut Tingkat-Ⅱ",32:"Rekrut Tingkat-Ⅲ",36:"Rekrut Tingkat-Ⅳ",40:"Rekrut Tingkat-Ⅴ",44:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",48:"Pasukan Kelas Pertama",52:"Pasukan Dengan Kehormatan",56:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",60:"Spesialis",64:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",68:"Kopral Sub-1",72:"Kopral Sub-2",76:"Kopral Sub-3",80:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",84:"Sersan",88:"Sersan Kelas Kedua",92:"Sersan Kelas Pertama",96:"Sersan Madya",100:"Sersan Pertama",104:"Sersan Mayor",108:"Sersan Mayor Komando",112:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",116:"Letnan",120:"Letnan Pertama",124:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",128:"Kapten",132:"Kapten Letnan",136:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",140:"Mayor",144:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",148:"Letnan Kolonel",152:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",156:"Kolonel [－]",160:"Kolonel [＝]",164:"Kolonel [≡]",168:"Kolonel [≥]",172:"Kolonel [≧]",176:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",180:"Jenderal Brigadir ㈠",184:"Jenderal Brigadir ㈡",188:"Jenderal Brigadir ㈢",192:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",196:"Jenderal ︾",200:"Jenderal ︾︾",204:"Jenderal ︾︾︾",208:"*SELAMAT*\n_Kamu hampir naik ke level baru, teruskan begitu!!!_ 🪀\n",212:"Pemimpin Tinggi •",216:"Pemimpin Tinggi ••",220:"Pemimpin Tinggi ⊙",224:"Pemimpin Tinggi ⊚",228:"Pemimpin Tinggi ⊛",232:"*SELAMAT*\n_Kamu hampir mencapai level baru, teruslah seperti ini!!!_ 🪀\n",236:"Purna Dinas dengan Hormat",240:"*SELAMAT*\n_Kamu hampir mencapai level baru, teruslah seperti ini!!!_ 🪀\n",244:"Pahlawan Perunggu ☆",248:"Pahlawan Perak ☆",252:"Pahlawan Emas ☆",256:"Pahlawan Berlian ☆",260:"*SELAMAT*\n_Kamu hampir mencapai level baru, teruslah seperti ini!!!_ 🪀\n",264:"Legenda ✩",268:"Legenda ✩✩",272:"Legenda ✩✩✩",276:"Legenda ✩✩✩✩",280:"Legenda ✩✩✩✩✩",284:"Menaiki level suci, teruskan perjalananmu... 🌌",288:"Malaikat ✬",292:"Malaikat ✬✬",296:"Malaikat ✬✬✬",300:"Menaiki level suci, teruskan perjalananmu... 🌌",304:"Pangeran ✯",308:"Pangeran ✯✯",312:"Pangeran ✯✯✯",316:"Menaiki level suci, teruskan perjalananmu... 🌌",320:"Kekuasaan ✪",324:"Kekuasaan ✪✪",328:"Kekuasaan ✪✪✪",332:"Menaiki level suci, teruskan perjalananmu... 🌌",336:"Grigori ♧",340:"Grigori ♧♧",344:"Grigori ♧♧♧",348:"Menaiki level suci, teruskan perjalananmu... 🌌",352:"Paladin ♤",356:"Paladin ♤♤",360:"Paladin ♤♤♤",364:"Menaiki level suci, teruskan perjalananmu... 🌌",368:"Penguasa Tipe 1",372:"Penguasa Tipe 2",376:"Penguasa Tipe 3",380:"Penguasa Tipe 4",384:"Penguasa Tipe 5",388:"Menaiki level suci, teruskan perjalananmu... 🌌",392:"Malaikat Pelindung •",396:"Malaikat Pelindung ○",400:"Malaikat Pelindung ●",404:"Malaikat Pelindung □",408:"Malaikat Pelindung ■",412:"Menaiki level suci, teruskan perjalananmu... 🌌",416:"Penjaga Surgawi Tipe 1",420:"Penjaga Surgawi Tipe 2",424:"Penjaga Surgawi Tipe 3",428:"Penjaga Surgawi Tipe 4",432:"Penjaga Surgawi Tipe 5",436:"Menaiki level suci, teruskan perjalananmu... 🌌",440:"Proses Kenaikan Ilahi 1.0...",444:"Proses Kenaikan Ilahi 2.0...",448:"Proses Kenaikan Ilahi 3.0...",452:"Proses Kenaikan Ilahi 4.0...",456:"Proses Kenaikan Ilahi 5.0...",460:"Menaiki Kekuatan Ilahi 🧿\n*SELAMAT TERUSKAN*",464:"Entitas Minor Tipe I",468:"Entitas Minor Tipe II",472:"Entitas Minor Tipe III",476:"Entitas Minor Tipe IV",480:"Entitas Minor Tipe V",484:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",488:"Entitas Mayor Tipe I",492:"Entitas Mayor Tipe II",496:"Entitas Mayor Tipe III",500:"Entitas Mayor Tipe IV",504:"Entitas Mayor Tipe V",508:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",512:"Semi-Dewa ◇",516:"Semi-Dewa ◇◇",520:"Semi-Dewa ◇◇◇",524:"Semi-Dewa ◇◇◇◇",528:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",532:"Pembuat Dunia •",536:"Pembuat Dunia ▪︎",540:"Pembuat Dunia ○",544:"Pembuat Dunia ●",548:"Pembuat Dunia □",552:"Pembuat Dunia ■",556:"Pembuat Dunia ♡",560:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",564:"Dewa Level 0",568:"Dewa Level 1",572:"Dewa Level 2",576:"Dewa Level 3",580:"Dewa Level 4",584:"Dewa Level 5",588:"Dewa Level 8",592:"Dewa Level 10",596:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",600:"Penguasa Pantheon Tipe-I",604:"Penguasa Pantheon Tipe-II",608:"Penguasa Pantheon Tipe-III",612:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",616:"Hakim Takdir Fase Menengah",620:"Hakim Takdir Fase Lanjutan",624:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",628:"Kontrol Materi Fase 1",632:"Kontrol Materi Fase 2",636:"Kontrol Materi Fase 3",640:"Kontrol Materi Fase 4",644:"Kontrol Materi Fase 5",648:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",652:"Pengendali Alam Semesta\nFase 1",656:"Pengendali Alam Semesta\nFase 2",799:"Pengendali Alam Semesta\nFase 3",800:"Pengendali Alam Semesta\nFase 4",850:"Pengendali Alam Semesta\nFase 5",870:"Meningkatkan Kekuatan ⚜️\n*SELAMAT, TERUSKAN!*",930:"MENINGKAT KE KEKUATAN YANG TAK TERBAYANG... ☯️",950:"\n*Kontrol Mutlak di Atas Dewa* 🔥\n",1e3:"[ SELAMAT!!! ]\nAnda mencapai level maksimum, terima kasih banyak telah berinteraksi dengan saya :,3"}),
Gadd: (a = "") => ["Aktifkan mode terbatas untuk melakukan tindakan ini", "[ ! ] Harap berikan nomor pengguna yang ingin Anda tambahkan ke grup", `wa.me/${a} mengundang Anda ke grup WhatsApp mereka!`, `*[ ! ] Galat, tidak dapat menambahkan @${a} ke grup*\n\n_Silakan kirimkan tautan undangan secara manual ke wa.me/${a}_\n`],
Bunt: (n = '', k = "") => ["Dan tautan WhatsApp?", "[ ! ] Kesalahan, Tautan tidak berfungsi atau tidak valid", `[ ! ] Jumlah minimum untuk bergabung dengan grup harus *${MinimoDeUsuarios}* peserta`, `${NombreDelBot} bergabung dengan grup ${n} berhasil \n`],
Uban: (n = "", k = "") => ["Kamu membenciku? :,c", `*Peserta @${n} telah dihapus dari grup ✓*\n_Tindakan dilakukan oleh ${k}_`, "Ke pengguna mana Anda ingin menghapus!? Tolong tandai salah satu"],
Uact: (n = "", e = "", o = "") => ["*Peserta mana yang ingin Anda jadikan administrator?*", `Contoh penggunaan:\n\n${Prefijo+n} @51995...\n`, "Siapa yang ingin Anda larang?", "[ ! ] Silakan tandai pengguna yang ingin Anda blokir", `Pengguna diblokir, ${n} tidak dapat lagi menggunakan bot [ ! ]`, "*Administrator mana yang ingin Anda hapus dari posisinya?*", "Siapa yang ingin Anda batalkan pemblokirannya?", `Pengguna yang tidak diblokir, ${n} dapat menggunakan bot itu lagi [✓]`, `Silakan tandai atau sebutkan seseorang!\n\nContoh penggunaan:\n${Prefijo+n} @${e}`, `*${n}* itu berhenti menjadi premium`, "Harap sebutkan jumlah hari", `Hanya angka!\n\nContoh penggunaan:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maksimal 7 hari", `*[ PENGGUNA PREMIUM ]*\n🔖 *Nama:* ${n}\n📆 *Waktu:* ${e} hari\n📉 *Tersisa:* ${o}MS`, "[ ! ] Waktu premium Anda telah berakhir!\n_saya berharap kamu menikmatinya :3_\n"],
Gbnd: () => ["Obrolan berhasil diblokir ✓", "Obrolan berhasil dibatalkan pemblokirannya ✓"],
Gpbc: (n = "", k = "") => ["[ ! ] Dan pesan yang ingin Anda sampaikan?", `Mengirim siaran ke ${n} grup, dalam waktu sekitar ${k} detik`],
Gcea: (n = "", k = "") => [`*Kapan Anda ingin menutup grup ini?*\n\n_Contoh penggunaan_ : \n${Prefijo + n} 10 detik`, `*Grup akan ditutup dalam ${n}*\n_Aksi dilakukan oleh: @${k}_`],
Bblst: (n = "", k = "") => ["Saat ini tidak ada subbot aktif...", "*Daftar nomor yang digunakan sebagai subbot*\n~Beberapa nomor mungkin tidak aktif!~", `${n === k ? `\n\n*🐝 Bot:* wa.me/${k}` : `\n\n*👑 Pemilik:* +${n}\n*🐜 Bot:* wa.me/${k}`}`],
Bbot: (a = '', b = '') => ["[ ! ] Anda tidak dapat menggunakan perintah ini sebagai bot [ ! ]", "Opsi menjadi bot sementara dinonaktifkan", `*Halo ${a}!, sebelum melanjutkan, tolong baca panduan singkat ini untuk menghindari masalah:*\n\n☝️🤓 Informasi dan penggunaan perintah: ${b}\n\n1.- Saat Anda pertama kali meminta kode QR, Anda akan menerima kunci unik agar Anda dapat menggunakan perintah ini di masa depan (jangan lupa simpan kuncinya).\n\n2.- Perintah ini memiliki beberapa tindakan yang bisa Anda gunakan:\n┬[ ${b} tu_kunci-xxx...\n└‒> _Anda dapat terhubung secara manual jika bot "terputus"._\n┬[ ${b} tu_kunci-xxx... stop\n└‒> _Akan menghentikan proses subbot sampai Anda mengaktifkannya kembali secara manual dengan kunci Anda._\n┬[ ${b} tu_kunci-xxx... neoqr\n└‒> _Sesi Anda saat ini akan ditutup dan Anda dapat meminta kode QR baru untuk dipindai._\n\n3.- Saat Anda menjadi subbot, disarankan untuk meninggalkan grup tempat bot utama berada, hal ini untuk menghindari kemungkinan kesalahan atau konflik dengan sistem antispam bot.\n\n4.- Pemilik dan administrator bot ini berhak menghentikan, mengubah, atau menonaktifkan subbot aktif atau fitur sistem tanpa pemberitahuan terlebih dahulu.\n\n5.- Ingatlah untuk memindai salah satu kode QR yang akan dikirimkan. Jika Anda meminta kode QR tanpa alasan, Anda akan dikenai hukuman selama 1 jam, yang akan sementara mencegah akses ke perintah sampai dapat digunakan kembali.\n\n~Pembuat bot ini tidak bertanggung jawab atas tindakan, kerusakan, atau konsekuensi yang timbul dari penggunaannya.~`, "[_>] Meminta kode...", "Menghentikan layanan subbot...", "Menghasilkan kode QR baru, jangan lupa memindainya tepat waktu!", "[ ! ] Silakan gunakan kunci Anda untuk melanjutkan...", "[ ! ] Kunci salah, coba lagi..."],
Bbbot: () => ["Mengambil terlalu lama untuk memindai salah satu kode QR, layanan dihentikan...", 'Pindai QR ini untuk menjadi bot sementara\n1. Ketuk tiga titik "︙" di pojok kanan atas\n2. Pilih opsi "perangkat terhubung"\n3. Ketuk "hubungkan perangkat"\n4. Anda dapat memindai QR ini atau menggunakan metode "Tautan dengan nomor telepon" di bagian bawah layar\n~[CATATAN] Kode QR akan kedaluwarsa jika tidak dipindai tepat waktu!~\n\n_Mengirim kode penyandingan..._', "Sesi subbot Anda baru saja ditutup. Anda tidak dapat terhubung sebagai bot sampai pemilik mengatur ulang basis data.", "*Terhubung berhasil*\n\nBerikut adalah kunci unik Anda untuk terhubung kembali secara manual jika terputus dari layanan bot sementara:", "Koneksi telah dipulihkan, Anda kembali menjadi subbot!"],
Afkpl: (n = "", k = "") => [`📲 *Anda tidak lagi AFK setelah ${n}.*\nSelamat datang kembali!!! :D`, `📴 *Pengguna yang disebutkan sedang tidak hadir, waktu yang telah berlalu ${n}.*\n\n┏⊱ *Alasan* \n┗━⊱ ${k}\n`, `Silakan berikan alasan Anda untuk pergi AFK\nContoh penggunaan:\n\n${Prefijo+n} saya akan pergi ke kamar mandi :v`, "[ ! ] Alasan terlalu singkat", `*Fungsi AFK berhasil diaktifkan*\n\n➸ *Pengguna*: ${n}\n➸ *Alasan*: ${k}`],
Ureg: (k = "", o = "", s = "", m = "", i = "", c = "") => ["Silakan masukkan kode registrasi Anda","[ ! ] Kode registrasi salah","[✓] Catatan Anda berhasil dihapus dari database 🗑️",`*[ ! ] Anda sudah terdaftar di database saya*\nApakah Anda ingin mendaftar lagi?\nGunakan perintah: \n\n${Prefijo}desrg <Kode registrasi>\n`,"Nama dan umur!?",'*[ ! ] Silakan tambahkan garis antara nama dan usia*\n\n" | "\n',"*[ ! ] Dalam usia hanya angka yang diterima -.-*","*[ ! ] Bruh namanya panjang sekali ._.*","*[ ! ] Usia maksimal 30 tahun*","*[ ! ] Usia minimal 13 tahun*","DAFTAR","Nama: ","Usia: ","Masa pubertas","Remaja","Muda","Dewasa","Tanggal registrasi:","Informasi:",`〘  *DAFTAR* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *Daftar pengguna* : @${k}\n╠≽️ *Nama terdaftar* : ${o}\n╠≽️ *Tanggal lahir* : ${s}\n╠≽️ *Menurut umurmu, kamu adalah a* : ${m}\n╠≽️ *Informasi* : ${i}\n╠≽️ *Nomor* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Kode registrasi_ : ${c}\n\nᴶᵃⁿᵍᵃⁿ ˡᵘᵖᵃ ˢᶦᵐᵖᵃⁿ ᵃᵗᵃᵘ ˢᵃˡᶦⁿ ᵏᵒᵈᵉ ʳᵉᵍᶦˢᵗʳᵃˢᶦ ᴬⁿᵈᵃ`],
Bscp: () => [`*🛑 Sebelum melanjutkan membaca, harap perhatikan persyaratan berikut:*\n- _Memiliki WhatsApp resmi di perangkat Anda_\n- _Memiliki 200 MB ruang kosong di perangkat Anda_\n- _Telah menginstal Termux.apk_\n- _Memiliki koneksi internet yang baik_\n- _Dan yang paling penting, bersabar_ :v\n\n\n*[_>] Di sini akan diunggah tutorial untuk aplikasi Termux dan mesin virtual:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\nButuh bantuan lebih lanjut? Hubungi pembuat saya:`, "Demo Uji Sementara"],
Vthx: () => "💻 *Jaringan sosial* 📲\n\n[ > ] Saluran Youtube:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Halaman Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\nˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵐᵉᵐᶦⁿᵗᵃ ᵘᵃⁿᵍ⁻ ʰᵃⁿʸᵃ ᵈᵉⁿᵍᵃⁿ ᵈᵘᵏᵘⁿᵍᵃⁿ ᴬⁿᵈᵃ ˢᵃʸᵃ ˢᵉⁿᵃⁿᵍ :³"
};