const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("randomPassword1") 
let password2 = document.getElementById("randomPassword2") 
let passwordLength = 15
let password1Text = ""
let password2Text = ""

function generatePasswords() {    
    password1.value = password(password1Text, passwordLength)
    password(password2Text, passwordLength)
    password2.value = password(password2Text, passwordLength)
    password1Text = ""
    password2Text = ""   
}

function password(textValue, passwordLength) {
    for (let i = 0; i < passwordLength; i++) {
        let tempIndex = Math.floor(Math.random() * characters.length)
        textValue+= characters[tempIndex]      
   }
   return textValue
}








