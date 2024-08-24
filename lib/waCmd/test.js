/**
Basic code structure to add more commands to the bot (You can use this example to make a tests.js command) ☝️🤓
**/



let nekOS = {} // Initialize the code, you can change the variable name to anything else (If you are a JavaScript jaker, you will notice that there are better ways to structure this code 🫵😹)


// Key(s) to activate this command, let's say they are the magic words or texts that make the commands work 🪄
nekOS.comando = { clave: "test" }; // Command array ["", ""], or string "". You can add more commands here if you want 🙀


// This is the core of the code that will be executed :0
nekOS.nk = async (m, { conn }) => { //wasa moment :v
  // Example to send a text message:
  m.reply("Hello world! :D");


  // Here is an example using "console" to visualize information in the console where the bot is running 🧐 :
  
  //console.log(conn); 
};


export default nekOS; //I hope you understand it x'd (I'm not a programmer 🗿)

//Lucky for newbies, ChatGPT exists (in my curious days there was only stackoverflow) 💀
