function decode()
{
var cipher_text = document.getElementById("message").value;
var plain_text = [];
var morsabet = {  
   "-----":"0",   ".----":"1",
   "..---":"2",   "...--":"3",
   "....-":"4",   ".....":"5",
   "-....":"6",   "--...":"7",
   "---..":"8",   "----.":"9",
   ".-":"a",   "-...":"b",
   "-.-.":"c",   "-..":"d",
   ".":"e",   "..-.":"f",
   "--.":"g",   "....":"h",
   "..":"i",   ".---":"j",
   "-.-":"k",   ".-..":"l",
   "--":"m",   "-.":"n",
   "---":"o",   ".--.":"p",
   "--.-":"q",   ".-.":"r",
   "...":"s",   "-":"t",
   "..-":"u",   "...-":"v",
   ".--":"w",   "-..-":"x",
   "-.--":"y",   "--..":"z",
   "/":" ",   "-·-·--":"!",
   "·-·-·-":".",   "--··--":","
};

cipher_text.split("/").map(function (word) {
    word.split(" ").map(function (letter) {
        plain_text.push(morsabet[letter]);
    });
    plain_text.push(" ");
});
 
document.getElementById("output").innerHTML = plain_text.join ("");

}


function encode() {
var plain_text = document.getElementById("message").value.toLowerCase(); 
var alphabet = {  
   "0":"-----",   "1":".----",
   "2":"..---",   "3":"...--",
   "4":"....-",   "5":".....",
   "6":"-....",   "7":"--...",
   "8":"---..",   "9":"----.",
   "a":".-",   "b":"-...",
   "c":"-.-.",   "d":"-..",
   "e":".",   "f":"..-.",
   "g":"--.",   "h":"....",
   "i":"..",   "j":".---",
   "k":"-.-",   "l":".-..",
   "m":"--",   "n":"-.",
   "o":"---",   "p":".--.",
   "q":"--.-",   "r":".-.",
   "s":"...",   "t":"-",
   "u":"..-",   "v":"...-",
   "w":".--",   "x":"-..-",
   "y":"-.--",   "z":"--..",
   " ":"/",   "!":"-·-·--",
   ".":"·-·-·-",   ",":"--··--"
};
var cipher_text = [];

plain_text.split(" ").map(function (word) {
    word.split("").map(function (letter) {
        cipher_text.push(alphabet[letter]);
    });
    cipher_text.push("/ ");
});
document.getElementById("output").innerHTML = cipher_text.join(" ");
}