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

~$ npm i
```
</details>

<details><summary>Node.js</summary>
  
  [_>] *This bot is developed in JavaScript and is compatible with any Node.js service for its execution.*

- Android/iPhone
- PC/RDP/VPS
- Host/Virtual machines 

</details>

## Configure and edit bot 🔧
  <details><summary>Basic settings</summary>
    
  [File package.json](https://github.com/NeoKode/quantum-bot/blob/main/package.json)
    
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
"Prefijo": ".", //You can change the value with symbols, letters or special characters.
	
"MultiIdioma": [ //Multi language setting
true, //You can change to false if you want to define your language or leave it as is
"" //If you put false in the first element, here you can indicate your language, such as: "es", "en", "id", "pt"
],
	
"Propietario": [ //Owner information and adjustment 
[
"51991378809", //Primary owner number 
"Matt_Mdz", //Name or nickname
true //You can use all functions
],
[
"51999999999", //Here you can add your other or trusted numbers 
"you", //Nickname
false //Can you control the bot?
]
],
	
"OptConn": [ //Connection option 
"Whatsapp", //Main bot on WhatsApp
"+ " //Full bot number including prefix (If you do not enter the number when starting the bot, it generates a QR code, otherwise the 8-digit linking code)
],

"Mode": "default", //Here you can set the way in which you are going to run the bot, the "default" mode is for general use and to test code use "test"
	
"LocPref": "51", //Prefix of your current country (optional)
	
"NombreDelBot": "QUANTUM-BOT", //Name of your bot
	
"MinimoDeUsuarios": 3, //If you join your bot to a group and it does not meet this number of members, the bot will not respond at all
	
"Limits": { //Adjustment of user limits 
"gms": 10, //For game commands 
"dls": 20, //For download commands
"rdm": 30 //For random commands 
},
	
"Blacklist": ["20","90", ""], //Here you can add telephone prefixes or complete specific numbers that you think are bad

"AntiFlood": "low" //Adjust the bot's strictness against spam and usage requests: options are "low", "medium", and "extreme". (Or just put false)

"CanalJid": "...@newsletter", //Here you can put the identifier of your WhatsApp channel or simply leave it empty.

"WlcLink": "", //You can put any link, You can see this in the automatic welcome messages 
	
"FakeServer": false, //This was used in repl.co and uptime-robot (I currently don't know of any similar method)
	
"recursion": false //Activate works recursively to the main executor. 
}
```
</details>

<details><summary>Modify texts and multimedia</summary>
  
  * [Text files](https://github.com/NeoKode/quantum-bot/tree/main/lib/idiomas)
Here you can modify most texts by language, available languages: (Español, English, Bahasa Indonesia, Português)

  * [Media files](https://github.com/NeoKode/quantum-bot/tree/main/multimedia)
Here you can modify some images.
</details>

## Create your own commands 💅
* [`Basic structure example v:`](https://github.com/NeoKode/quantum-bot/blob/main/lib/waCmd/test.js)

## Start bot script 🙀
```
$ cd quantum-bot
```
Log in using QR or linking code (Depending on your settings in the config.json file)

```
$ npm start 
```

## ```Special thanks! 🗿```

> <a href="https://github.com/adiwajshing/"><img alt="GitHub" src="https://img.shields.io/badge/adiwajshing/Baileys%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"> ᴬᴾᴵ ᴰᵉᵛᵉˡᵒᵖᵉʳ 

> [![Custom badge](https://img.shields.io/badge/MhankBarBar-Termux|Wabot-000000?style=for-the-badge)](https://github.com/MhankBarBar/termux-wabot)
 ᴹᵃᶦⁿ ᵇᵃˢᵉ ᵒᶠ ᵗʰᶦˢ ᵇᵒᵗ
