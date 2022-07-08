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
    } else {
      console.log('Not recognized as a response, please try again.');
      return setTimeout(() => {gameObject.start();}, 2000);
    }
  },
  playGame(){
    // dealCards
  },
  cardIndexRandomDigit() {
    return Math.floor(Math.random() * (gameObject.mainCardLibrary.length - 0 + 1) + 0);
  },
  dealCards(){
    for (let a = 0; a < 3; a++){
      let index = this.cardIndexRandomDigit();
      let card = gameObject.mainCardLibrary[index];
      user.dealtCards.push(card);
      gameObject.playedCards.push(card);
      gameObject.availableCards.splice(index, 1);
    }
  }

}

gameObject.start();