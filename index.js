const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const password1 = document.getElementById("randomPassword1")
const password2 = document.getElementById("randomPassword2")
const container = document.getElementsByClassName('container')
const length = document.getElementById("passwordLength")

let passwordLength = 12
let passwordText = ""

length.addEventListener('input', function(){
  document.getElementById('passwordInfo').textContent = 'Password length (8-16): ' + length.value
  passwordLength = length.value
})

container[0].addEventListener('click', function(e) {
  if (e.target.id === 'generatePasswords-btn') {
    generatePasswords()
    return
  } else if (e.target.id === 'copyPassword1-btn') {
    copyPassword(password1)
    return
  } else if(e.target.id === 'copyPassword2-btn') {
    copyPassword(password2)
  }
})

function generatePasswords() {
    password1.value = password(passwordText, passwordLength)
    passwordText = ""
    password2.value = password(passwordText, passwordLength)
    passwordText = ""
}

function password(textValue, passwordLength) {
    for (let i = 0; i < passwordLength; i++) {
        let tempIndex = Math.floor(Math.random() * characters.length)
        textValue+= characters[tempIndex]
   }
   return textValue
}

function copyPassword(copiedPassword){
  // Select the text field
  copiedPassword.select();
  copiedPassword.setSelectionRange(0, 99999); // For mobile devices
   // Copy the text inside the text field
  navigator.clipboard.writeText(copiedPassword.value);
}
