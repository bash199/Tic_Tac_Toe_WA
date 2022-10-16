const squares = document.querySelectorAll('.square');
const player = document.querySelector('.player-turn');
const resetGame = document.querySelector('.reset-game');
const resetBoard = document.querySelector('.reset-board');
const title = document.querySelector('.game-title');
const playerXScore = document.querySelector('.player-x-score');
const playerOScore = document.querySelector('.player-o-score');
const tieScore = document.querySelector('.tie-score');

const winningOptions = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
];

let playerOO = 'O';
let playerXX = 'X';
let currentPlayer1 = playerXX;
let gameStatus1 = false;
let options = ["", "", "", "", "", "", "", "", ""];

startGame1();
function startGame1(){
   squares.forEach(square=>square.addEventListener('click',squareClicked1));
   resetGame.addEventListener('click',resetGame1);
   resetBoard.addEventListener('click',resetBoard1);
   player.textContent=`Player ${currentPlayer1}'s turn`
   gameStatus1 = true;
}
function squareClicked1(){
   let squareIndex = this.getAttribute('id');
   if(options[squareIndex] !== "" || !gameStatus1){
      return;
   }
   updateSquare1(this, squareIndex);
   checkWinner1();
}
function updateSquare1(square,index){
   options[index] = currentPlayer1;
   square.textContent = currentPlayer1;
}
function checkWinner1(){
   let win = false;
   for(let i=0; i<winningOptions.length;i++){
      let condition = winningOptions[i];
      let [a,b,c]= condition;
      if((options[a] == "") || (options[b] == "") || (options[c] == "") ){
          continue;
      }
      if((options[a]==options[b]) && (options[b]==options[c])){
         win = true;
          break;
      }
   }
   if(win){
      title.textContent = `Player (${currentPlayer1}) WON!`;
      currentPlayer1 == playerXX ? playerXScore.textContent++ : playerOScore.textContent++;
      gameStatus1 = false;
   }
   else if(!options.includes("")){
      title.textContent = `Its a Tie!`;
      tieScore.textContent++;
      gameStatus1 = false;
   }
   else{
      changeTurn1()
   }
}
function changeTurn1(){
   currentPlayer1 = ((currentPlayer1 == playerXX) ? playerOO : playerXX);
   player.textContent=`Player ${currentPlayer1}'s turn`
}
function resetGame1(){
   currentPlayer1 = playerXX;
   player.textContent=`Player ${currentPlayer1}'s turn`
   title.textContent = 'Tec Tac Toe';
   options = ["", "", "", "", "", "", "", "", ""];
   squares.forEach(square=>{ square.textContent = ""})
   playerXScore.textContent = 0;
   playerOScore.textContent = 0;
   tieScore.textContent = 0;
   gameStatus1 = true;
}

function resetBoard1(){
   title.textContent = 'Tec Tac Toe';
   options = ["", "", "", "", "", "", "", "", ""];
   squares.forEach(square=>{ square.textContent = ""});
   if(title.textContent == `Player (${currentPlayer1}) WON!`){
      currentPlayer1 = currentPlayer1;
   }
   gameStatus1 = true;
}





