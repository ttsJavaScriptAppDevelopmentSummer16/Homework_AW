var greetingElement =  document.getElementById("greeting");

function greetOnLoad () {
    var name = prompt("Hi! What's your name?");
    greetingElement.innerHTML= "Hello " + name + ", it's nice to meet you!";
}

greetOnLoad();



var hand = ['rock', 'paper', 'scissors'];

function getRandomNum(){
  return parseInt(Math.random()*10)%3
}

function getHand() {
  return hand[getRandomNum()]
}

var player1 = {
  name: 'Amy',
  getHand: getHand,
  wins: 0
}

var player2 = {
  name:'Latori',
  getHand: getHand,
  wins: 0
}

var player3 = {
  name: 'Evan',
  getHand: getHand,
  wins: 0
}

var player4 = {
  name: 'Noah',
  getHand: getHand,
  wins: 0
}

//declares a function playRound that will play a round between 2 players and add win to players win property

function playRound(player1, player2) {
  var player1Hand = player1.getHand();
  var player2Hand = player2.getHand();
  var player1Wins = player1.name + ' wins!';
  var player2Wins = player2.name + ' wins!';

  if (player1Hand === player2Hand) {
    console.log(player1.name + ' threw a ' + player1Hand + ' and ' + player2.name + ' threw a ' + player2Hand + '.  This is a tie, no winner!');
    player1.wins = player1.wins + null;
    player2.wins = player2.wins + null;
  }
  if (player1Hand === 'rock') {
    if (player2Hand === 'paper') {
      player2.wins = player2.wins + 1;
      console.log(player1.name + ' threw a ' + player1Hand + ' and ' + player2.name + ' threw a ' + player2Hand + '.  ' + player2.name + ' is the winner!' );
    } else if (player2Hand === 'scissors') {
      player1.wins = player1.wins + 1;
      console.log (player1.name + ' threw a ' + player1Hand + ' and ' + player2.name + ' threw a ' + player2Hand + '.  ' + player1.name + ' is the winner!');
    }
  } else if (player1Hand === 'paper') {
    if (player2Hand === 'rock') {
      player1.wins = player1.wins + 1;
      console.log(player1.name + ' threw a ' + player1Hand + ' and ' + player2.name + ' threw a ' + player2Hand + '.  ' + player1.name + ' is the winner!' );
    } else if (player2Hand = 'scissors') {
      player2.wins = player2.wins + 1;
      console.log(player1.name + ' threw a ' + player1Hand + ' and ' + player2.name + ' threw a ' + player2Hand + '.  ' + player2.name + ' is the winner!' );
    }
  } else if (player1Hand === 'scissors') {
    if (player2Hand === 'rock') {
      player2.wins = player2.wins + 1;
      console.log(player1.name + ' threw a ' + player1Hand + ' and ' + player2.name + ' threw a ' + player2Hand + '.  ' + player2.name + ' is the winner!' );
    } else if (player2Hand === 'paper') {
      player1.wins = player1.wins + 1;
      console.log(player1.name + ' threw a ' + player1Hand + ' and ' + player2.name + ' threw a ' + player2Hand + '.  ' + player1.name + ' is the winner!');
    }
  }
}

//declares a function to play a game between 2 players for a set number of rounds

function playGame(ply1, ply2, playUntil){
  while (ply1.wins < playUntil && ply2.wins < playUntil) {
    playRound(ply1, ply2);
  }

  if (ply1.wins === playUntil) {
    console.log(ply1.name + ' is the GAME WINNER!');
    return ply1;
  } else {
    console.log(ply2.name + ' is the GAME WINNER!');
    return ply2;
  }
}

//playGame(player1, player2, 5);

//build a tournament using the playGame function
function playTournament(tournPly1, tournPly2, tournPly3, tournPly4) {
  var game1Winner;
  var game2Winner;
  var tournWinner;
  game1Winner = playGame(tournPly1, tournPly2, 1);
  game2Winner = playGame(tournPly3, tournPly4, 1);
  tournWinner = playGame(game1Winner, game2Winner, 2);
  console.log(tournWinner.name + ' is the TOURNAMENT WINNER!!!!');
  return tournWinner.name;

}

//playTournament(player1, player2, player3, player4);

function postResults() {
    var winner = playTournament(player1, player2, player3, player4);
    var myelement = document.getElementById("results");
    myelement.innerHTML= "The winner of the tournament is" + " " + winner + "!!!!";
}

postResults();


//declares a function to play a tournament of 4 players.  Winners of the first round, play another round against each other

// function playTournament(ply1, ply2, ply3, ply4) {
//   var round1winner;
//   while (ply1.wins < 1 && ply2.wins < 1){
//     playRound(ply1, ply2);
//     if (ply1.wins === 1) {
//       round1winner = ply1;
//     } else { round1winner = ply2;
//     }
//   }
//   console.log('The first round winner is ' + round1winner.name + '.');
//   var round2winner;
//   while (ply3.wins < 1 && ply4.wins < 1){
//     playRound(ply3, ply4);
//     if (ply3.wins === 1) {
//       round2winner = ply3;
//     } else {
//       round2winner = ply4;
//     }
//   }
//   console.log('The second round winner is ' + round2winner.name + '.');
//   while (round1winner.wins < 2 && round2winner.wins < 2){
//     playRound(round1winner, round2winner);
//     if (round1winner.wins === 2) {
//       console.log(round1winner.name + ' is the tournament winner!');
//     } else {
//       console.log(round2winner.name + ' is the tournament winner!');
//     }
//   }
// }
//
// playTournament(player1, player2, player3, player4);
