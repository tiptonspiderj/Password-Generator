const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

 const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

 const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
 "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 const numbersAndLetters= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
 "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const password1 = document.getElementById("randomPassword1")
const password2 = document.getElementById("randomPassword2")
const container = document.getElementsByClassName('container')
const length = document.getElementById("passwordLength")
const modal = document.getElementById('modal')
const password1CopyBtn = document.getElementById('copyPassword1-btn')
const password2CopyBtn = document.getElementById('copyPassword2-btn')
const radioButtons = document.querySelectorAll('input[name="passwordType"]');

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
    modal.children[0].innerText = 'Password 1 copied'
    password1CopyBtn.disabled = true;
    password2CopyBtn.disabled = true;
    fade(modal)
    return
  } else if(e.target.id === 'copyPassword2-btn') {
    copyPassword(password2)
    modal.children[0].innerText = 'Password 2 copied'
    password1CopyBtn.disabled = true;
    password2CopyBtn.disabled = true;
    fade(modal)
  }
})

function generatePasswords() {
    password1.value = password(passwordText, passwordLength, getSelectedRadioBtn())
    passwordText = ""
    password2.value = password(passwordText, passwordLength, getSelectedRadioBtn())
    passwordText = ""
}

function password(textValue, passwordLength, passwordArray) {
    for (let i = 0; i < passwordLength; i++) {
        let tempIndex = Math.floor(Math.random() * passwordArray.length)
        textValue+= passwordArray[tempIndex]
   }
   return textValue
}

function getSelectedRadioBtn() {
    let selectedPattern = ''
    for (const radioButton of radioButtons){
      if (radioButton.checked) {
        selectedPattern = radioButton.value;
        break;
      }
    }

    if(selectedPattern === "numbers"){
      return numbers
    } else if (selectedPattern === "letters"){
      return letters
    }else if(selectedPattern === "lettersAndNumbers") {
      return numbersAndLetters
    }else {
      return allCharacters
    }
}

function copyPassword(copiedPassword){
  // Select the text field
  copiedPassword.select();
  copiedPassword.setSelectionRange(0, 99999); // For mobile devices
   // Copy the text inside the text field
  navigator.clipboard.writeText(copiedPassword.value);
  modal.style.display = 'flex'
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
      if (op >= 0.5) {
        element.style.opacity = 1
      }
        if (op < 0.5){
            clearInterval(timer)
            element.style.display = 'none'
            password1CopyBtn.disabled = false;
            password2CopyBtn.disabled = false;
        }
        element.style.opacity = op
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"
        op -= op * 0.025
    }, 50);

  }
