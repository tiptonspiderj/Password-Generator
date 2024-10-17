# Dice Game
This is a kid's game to be played with yourself online.  If you need to waste a few minutes, this game is for you.

## Description

This project was made using Visual Code for the IDE along with React and Webpack for compiling the code. When you click the "Roll" button, a timer starts and you have 30 seconds to make all ten die the same number.  You click or select the die you wish to keep and they will turn green. If all ten dice are green and the same number under 30 seconds, you win the game.  Otherwise, you will get a notification that you have lost the game as a loser.


## Getting Started

Click on the image below to see the live website.

[![application images](https://github.com/tiptonspiderj/Dice-Game/blob/main/images/Screenshot.png)](https://tiptonspiderj1-dice-game.netlify.app/)

### Installing for Windows

You can make a clone of this repository and then extract all of the files into one folder.  From there, open up the folder with Visual Studio Code.  You will need the live server plugin in Visual Studio Code.  You should be able to google how to enable live server in Visual Studio Code.  You will also have to ensure you have NPM installed onto your local machine first and run the following commands in your terminal within Visual Studio Code: 
```
npm install
npm run build
```
or combine the terminal commands like 
```
npm install && npm run build
```

"npm install"  should create an additional folder within your project in Visual Studio Code.
If you don't know whether or not NPM is installed on your computer, type "npm -v" into your command terminal first.  It should return a version number if it is installed.  

### Dependencies

The dependencies are React and the Webpack compiler.  I also used Visual Studio Code to make the project from scratch.  Visual Studio Code makes running this code really easy if you enable the "Live Server" extension.  If you have quesitons about that, you can find sources on how to enable the extension on YouTube.  Third party libraries used in the project are "nanoid" for creating keys when mapping over arrays and "react-confetti" for displaying a bonus animated graphic when you win the game.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Background Color | ![#0b2434](https://via.placeholder.com/10/0b2434?text=+) #0b2434 |
| Card Background Color | ![#f5f5f5](https://via.placeholder.com/10/f5f5f5?text) #f5f5f5 |
| Dice Color | ![#d7d7d7](https://via.placeholder.com/10/d7d7d7=+) #d7d7d7 |
| Selected Dice Color | ![#59e391](https://via.placeholder.com/10/59e391=+) #59e391 |
| Button Color | ![#5035ff](https://via.placeholder.com/10/5035ff?text=+) #5035ff |


## Authors

Contributors names and contact info

Jeremy Tipton  
[@tiptonspiderj1](https://tiptonspiderj1.com)

## Version History

* 1.0.0
    * Initial Release

## Feedback

If you have any feedback, please reach out to me at <tiptonspiderj1@aol.com>

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Scrimba](https://img.shields.io/badge/scrimba-2B283A?style=for-the-badge&logo=scrimba&logoColor=white)

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)

### Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)
