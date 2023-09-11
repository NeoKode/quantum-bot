<div align="center">
<p><img src="https://acegif.com/wp-content/gif/outerspace-51.gif" alt="GIF" width="400" height="230"></p><p><a href="https://tinyurl.com/Script-NK-BOT"><img title="WhatsApp-Bot-MD" src="https://img.shields.io/badge/-WHATSAPP--BOT--MD-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge" alt="WhatsApp Bot MD"></a></p><p><a href="https://tinyurl.com/Neo-Kosmo"><img title="Autor" src="https://img.shields.io/badge/Autor-@NeKosmic-orange?style=for-the-badge&logo=github" alt="Autor"></a></p>

<details>
  <summary>Bot Features <img src="https://cbsnews1.cbsistatic.com/hub/i/2017/10/17/b34c14c8-750e-4afa-838d-ba9da0a3b042/171016-nasa-gravitational-waves-article.gif" width="40px"></summary>
  
| functions and commands | Y/N-Maybe |
| :--------------------: | :---: |
| Create Stickers | ✅ |
| Automatic Welcome | ✅ |
| Multi Language | ✅ |
| Jadibot | ✅ |
| Anti Links/Urls | ✅ |
| Anti Weird | ✅ |
| Anti Foreigners | ✅ |
| Anti Calls | ✅ |
| Anti Private | ✅ |
| Anti Spam(Command flood) | ✅ |
| Music/video download | ✅ |
| Public/Private Mode | ✅ |
| Editing Tools | ✅ |
| Games | ✅ |
| AI/Chat Bot | ✅ |
| Random Commands | ✅ |
| More features to come | ♻️ |
</details>
</div>

## Installation  🧑‍💻
  <details><summary>Termux</summary>
    
  [_>] *Copy and paste line by line into termux for installation. it can also be used on systems based on Debian and Ubuntu.*
    
```
~$ apt update && apt upgrade -y

~$ apt install nodejs git libwebp ffmpeg imagemagick yarn -y

~$ git clone https://github.com/NeoKode/quantum-bot

~$ cd quantum-bot

~$ yarn
```
</details>

<details><summary>Node.js</summary>
  
  [_>] *This bot is developed in JavaScript and is compatible with any Node.js service for its execution.*

- Android/iPhone
- PC/RDP/VPS
- Host/Virtual machines 

</details>

## Configure and edit bot
  <details><summary>Basic settings</summary>
    
  [File package.json](https://github.com/NeoKode/quantum-bot/tree/main)
    
```javascript
Note: avoid using special characters when editing the package.json, example: !, @, #, $, %, ^, &, *, etc.
{
"name": "Quantum_Bot", //If you want you can change the name of the project :D
...
"author": {
"name": "Matt_Mdz" //Here enter your name or nickname!
},
...
}
```
  
  [File config.json](https://github.com/NeoKode/quantum-bot/blob/main/config.json)
    
```javascript
{
"Prefijo": "/", //You can change the value with symbols, letters or special characters.

"MultiIdioma": [true, ""], //Within the array you can change the default language, example: [false, "en"], English language.

"Propietario": [ //Owner name and number
["51991378809", "Matt_M", false], //When the third element of the array is false, here you can only add secondary numbers, etc.
["51995386439", "N3K0SM1C", true] //The third element is a boolean that will tell the bot if it is the true owner to give it complete control.
],

"LocPref": "51", //Change the value with the prefix of your main country.

"NombreDelBot": "🄱🄾🅃", //You can give your bot any name.

"MinimoDeUsuarios": 3, //This key works with the "join" command, if someone uses the command the bot will check if the number of participants is more than 3 and will join, otherwise not.

"Limits": {"gms": 5, "dls": 10, "rdn": 15}, //Default limits for each user: games, downloads and other commands respectively.

"DBtype": "json", //I dont know :v

"FakeList": ["20"], //You can add more elements of numbers or prefixes, this works with the "antifakes" command, the bot will eliminate numbers that start with one of the elements of this array

"GrupoWa": "", //WhatsApp link XD

"recursion": false //Activate works recursively to the main executor.
}
```
</details>

<details><summary>Modify texts and multimedia</summary>
  
  > [Text files](https://github.com/NeoKode/quantum-bot/tree/main/lib/idiomas)
Here you can modify most texts by language, available languages: (Español, English, Bahasa Indonesia, Português)

  > [Media files](https://github.com/NeoKode/quantum-bot/tree/main/multimedia)
Here you can modify some images.
</details>

## Start bot script 🙀
```
$ cd quantum-bot
```
Log in with a QR Code:

```
$ npm start 
```
Log in with a Pairing Code:
```
$ npm start +51995xxx
```

## Thanks 🗿

* <a href="https://github.com/adiwajshing/"><img alt="GitHub" src="https://img.shields.io/badge/adiwajshing/Baileys%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white">
