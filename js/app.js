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

const gameObject = {
  userBattleCard: [],
  computerBattleCard: [],
  scoreboard: [
    {
      name: 'user',
      points: 0,
      round: 0, 
    },
    {
      name: 'computer',
      points: 0,
      round: 0,
    },
  ],
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
    let userResponse = prompt('Would you like to play? (Yes / No)').toLowerCase();
    if (userResponse.match(/yes/)){
      user = new Player(prompt('What is your name?'));
      computerPlayer = new Player('Himbo Trainer');
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
      // TODO: Move this step:
      // this.playedCards.push(card);
      this.availableCards.splice(index, 1);
    }
    for (let b = 0; b < 3; b++){
      let index = this.cardIndexRandomDigit();
      let card = this.availableCards[index];
      computerPlayer.dealtCards.push(card);
      // TODO: Move this step:
      // this.playedCards.push(card);
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
  displayScore(){
    console.log(`
      ===========================
      ${computerPlayer.name}'s Score:
      Points: ${this.scoreboard[1].points}
      Rounds Won: ${this.scoreboard[1].round}
      ===========================
      ===========================
      ${user.name}'s Score:
      Points: ${this.scoreboard[0].points}
      Rounds Won: ${this.scoreboard[0].round}
      ===========================
    `);
  },
  userCardChoice(){
    let userPokemonChoice = prompt('Which of your pokemon do you choose?').toLowerCase();
    for (let a = 0; a < user.dealtCards.length; a++){
      let card = user.dealtCards[a];
      if (userPokemonChoice.match(card.name.toLowerCase())){
        gameObject.userBattleCard.push(card);
        user.playedCards.push(card);
        return user.dealtCards.splice(a, 1);
      } 
    }
    console.log('No match -- choose again.');
    this.userCardChoice();
  },
  computerCardChoice(){
    let index = Math.floor(Math.random() * (computerPlayer.dealtCards.length  - 0) + 0);
    gameObject.computerBattleCard.push(computerPlayer.dealtCards[index]);
    computerPlayer.playedCards.push(computerPlayer.dealtCards[index]);
    return computerPlayer.dealtCards.splice(index, 1);
  },
  moveToPlayed(){
    this.playedCards.push(this.userBattleCard[0]);
    this.playedCards.push(this.computerBattleCard[0]);
    console.log('played');
  },
  theBattle(){
      let userPoints = 0;
      let compPoints = 0;
    while (user.dealtCards.length > 0){
      this.displayHands();
      this.userCardChoice();
      this.computerCardChoice();
      this.displayCards();
      if (this.computerBattleCard[0].damage > this.userBattleCard[0].damage){
        console.log(`${computerPlayer.name} wins play!`);
        compPoints += 1;
        this.moveToPlayed();
      } else if (this.computerBattleCard[0].damage == this.userBattleCard[0].damage){
        console.log('A tie, no points awarded for this play!')
        this.moveToPlayed();
      } else{
        console.log(`${user.name} wins play!`);
        userPoints += 1;
        this.moveToPlayed();
      }
      gameObject.userBattleCard = [];;
      gameObject.computerBattleCard = [];
    }
    if (userPoints > compPoints){
      console.log(`${user.name} wins the round!`);
      this.scoreboard[0].points += userPoints;
      this.scoreboard[0].round += 1;
      this.scoreboard[1].points += compPoints;
    } else {
      console.log(`${computerPlayer.name} wins the round!`);
      this.scoreboard[1].points += compPoints;
      this.scoreboard[1].round += 1;
      this.scoreboard[0].points += userPoints;
    }
    this.displayScore();
    return this.playGame();
  },
  endGame(){
    console.log(`
      =============================
         Game Over - Final Score:
      =============================
    `)
    this.displayScore();
    if (this.scoreboard[0].round > this.scoreboard[1].round){
      console.log(`${user.name} WINS THE GAME!`)
    } else {
      console.log(`${computerPlayer.name} WINS THE GAME!`)
    }
  },
}

gameObject.start();