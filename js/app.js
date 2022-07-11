// console.log('Fear is the mind killer.');

let user;
let computerPlayer;

class Player {
  dealtCards = [];
  playedCards = [];
  constructor(name){
    this.name = name;
  }
}

class Computer extends Player {
}

const gameObject = {
  userBattleCard: [],
  mainCardLibrary:[{
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }],
  availableCards:[{
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }],
  playedCards:[],
  start() {
    let userResponse = 'yes'//prompt('Would you like to play?').toLowerCase();
    if (userResponse.match(/yes/)){
      user = new Player('Jonathan');
      computerPlayer = new Computer('Himbo Trainer');
      console.log('Ready to play!');
      this.playGame();
    } else {
      console.log('Not recognized as a response, please try again.');
      return setTimeout(() => {this.start();}, 2000);
    }
  },
  playGame(){
    this.dealCards();
    this.displayCards();
    this.theBattle();
  },
  cardIndexRandomDigit() {
    return Math.floor(Math.random() * (this.availableCards.length - 0) + 0);
  },
  dealCards(){
    for (let a = 0; a < 3; a++){
      let index = this.cardIndexRandomDigit();
      let card = this.availableCards[index];
      user.dealtCards.push(card);
      this.playedCards.push(card);
      this.availableCards.splice(index, 1);
    }
    for (let b = 0; b < 3; b++){
      let index = this.cardIndexRandomDigit();
      let card = this.availableCards[index];
      computerPlayer.dealtCards.push(card);
      this.playedCards.push(card);
      this.availableCards.splice(index, 1);
    }
  },
  displayCards(){
    
    console.log(`
      =============================\n
      ${computerPlayer.name}'s Cards:\n
      =============================
    `);
   for (let a = 0; a < computerPlayer.dealtCards.length; a++) {
     console.log(`
        -----------------
        NAME: ${computerPlayer.dealtCards[a].name}
        DAMAGE: ${computerPlayer.dealtCards[a].damage}
        -----------------
      `);
   } 
    
    console.log(`
      =============================\n
      ${user.name}'s Cards:\n
      =============================
    `);
    for (let a = 0; a < user.dealtCards.length; a++){
      console.log(`
        -----------------
        NAME: ${user.dealtCards[a].name}
        DAMAGE: ${user.dealtCards[a].damage}
        -----------------
      `);
    }       
  },
  userCardChoice(){
    let userChoice = prompt('Which pokemon do you choose?').toLowerCase();
    for (let b = 0; b < user.dealtCards.length; b++){
      if (userChoice.match(user.dealtCards[b].name.toLowerCase())){
        return user.dealtCards[b];
      }
    }
      
  },
  theBattle(){
    let result = this.userCardChoice();
    if (!result) {
      console.log('No match.');
      setTimeout(() => {this.theBattle()},1000);
    } else
      console.log(result);
  }
}

gameObject.start();