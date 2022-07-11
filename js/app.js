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
  computerBattleCard: [],
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
    if (gameObject.availableCards.length > 0) {
      this.dealCards();
      this.theBattle();
    } else {
      this.endGame();
    }
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
  displayHands(){
    
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
  displayCards(){
    console.log(`
      ====================
      ${user.name}'s Pokemon:\n
      --> ${gameObject.userBattleCard[0].name} : ${gameObject.userBattleCard[0].damage}
      ====================\n
      ====================
      ${computerPlayer.name}'s Pokemon:\n
      --> ${gameObject.computerBattleCard[0].name} : ${gameObject.computerBattleCard[0].damage}
      ====================\n
    `)
    return 'displayed';
  },
  userCardChoice(){
    let userPokemonChoice = prompt('Which of your pokemon do you choose?').toLowerCase();
    for (let a = 0; a < user.dealtCards.length; a++){
      let card = user.dealtCards[a];
      if (userPokemonChoice.match(card.name.toLowerCase())){
        gameObject.userBattleCard.push(card);
        return user.dealtCards.splice(a, 1);
      } 
    }
    console.log('No match -- choose again.');
    this.userCardChoice();
    // setTimeout(() => {this.userCardChoice()}, 1000);

    // let userChoice = prompt('Which pokemon do you choose?').toLowerCase();
    // for (let b = 0; b < user.dealtCards.length; b++){
    //   if (userChoice.match(user.dealtCards[b].name.toLowerCase())){
    //     return user.dealtCards[b];
    //   }
    // }
  },
  computerCardChoice(){
    let index = Math.floor(Math.random() * (computerPlayer.dealtCards.length  - 0) + 0);
    gameObject.computerBattleCard.push(computerPlayer.dealtCards[index]);
    return computerPlayer.dealtCards.splice(index, 1);
  },
  theBattle(){

    while (user.dealtCards.length > 0){
      this.displayHands();
      this.userCardChoice();
      this.computerCardChoice();
      this.displayCards();
      if (this.computerBattleCard[0].damage > this.userBattleCard[0].damage){
        console.log(`${computerPlayer.name} wins play!`);
      } else if (this.computerBattleCard[0].damage == this.userBattleCard[0].damage){
        console.log('A tie, no points awarded for this play!')
      } else{
        console.log(`${user.name} wins play!`);
      }
      gameObject.userBattleCard = [];;
      gameObject.computerBattleCard = [];
    }

    return this.playGame();

    // let result = this.userCardChoice();
    // if (!result) {
    //   console.log('No match.');
    //   setTimeout(() => {this.theBattle()},1000);
    // } else
    //   console.log(result);
    //   let computerResult = this.computerCardChoice();
    //   console.log(computerResult);
  },
  endGame(){
    console.log('GAME OVER');
  }
}

gameObject.start();