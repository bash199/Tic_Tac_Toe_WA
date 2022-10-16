//* the selected buttons and elemnts using the doument and the querySelector method.
const squares = document.querySelectorAll('.square');
const player = document.querySelector('.player-turn');
const resetGameBtn = document.querySelector('.reset-game');
const resetBoardBtn = document.querySelector('.reset-board');
const title = document.querySelector('.game-title');
const playerXScore = document.querySelector('.player-x-score');
const playerOScore = document.querySelector('.player-o-score');
const tieScore = document.querySelector('.tie-score');
//* the winning options with the specefic indexes that will be checked with the check winner ("checkWinner1") functions.
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

let playerO = 'O';
let playerX = 'X';
let currentPlayer1 = playerX;
let gameStatus1 = false;
let options = ["", "", "", "", "", "", "", "", ""];

startGame();
//* .A function that start the game by events for the clicks that can be clicked, such as reset buttons and squares.
function startGame(){
   squares.forEach(square=>square.addEventListener('click',squareClicked));
   resetGameBtn.addEventListener('click',resetGamefunc);
   resetBoardBtn.addEventListener('click',resetBoardFunc);
   player.textContent=`Player ${currentPlayer1}'s turn`
   gameStatus1 = true;
}
//* A function that gets the 'callIndex' of each clicked square and  passes it to another function, this function stops a square from updating  it self  if it is  all ready updated(with 'X' or with 'O'). 
function squareClicked(){
   let squareIndex = this.getAttribute('id');
   if(options[squareIndex] !== "" || !gameStatus1){
      return;
   }
   updateSquare(this, squareIndex);
   checkWinner();
}
//* A function that updates the clicked square(passed form the 'squareClicked1' function ) and updates another array with the same value and index that helps checking the winner .
function updateSquare(square,index){
   options[index] = currentPlayer1;
   square.textContent = currentPlayer1;
}
//* A function that checks whom is the winner by checking the clicked and updated  squares with a specific and givien indexes that is a winnig options, when a winner found the function stops and it tells whom is it and stops the iser from inserting another values in unupdated squares, if there are no winner it tells that it is a draw , otherwise it changes player turn...
function checkWinner(){
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
      currentPlayer1 == playerX ? playerXScore.textContent++ : playerOScore.textContent++;
      gameStatus1 = false;
   }
   else if(!options.includes("")){
      title.textContent = `Its a Tie!`;
      tieScore.textContent++;
      gameStatus1 = false;
   }
   else{
      changeTurn()
   }
}
//* A function that changes the values being updated in each clicked square and changes the updated value with each click, it has two values -> 'X' or 'O'.
function changeTurn(){
   currentPlayer1 = ((currentPlayer1 == playerX) ? playerO : playerX);
   player.textContent=`Player ${currentPlayer1}'s turn`
}
//* A function that reset the board and the scores of the two players and the tie score , also it resets the array (optins)  to "" (empty strings) that helps checking the winner (more formated information in the "updateSquare1" function) and also resets the squares to empty string ("") and reset the X player to start, and last it resets the gameStatus to true for the game to be possible to start again...
function resetGamefunc(){
   currentPlayer1 = playerX;
   player.textContent=`Player ${currentPlayer1}'s turn`
   title.textContent = 'Tec Tac Toe';
   options = ["", "", "", "", "", "", "", "", ""];
   squares.forEach(square=>{ square.textContent = ""})
   playerXScore.textContent = 0;
   playerOScore.textContent = 0;
   tieScore.textContent = 0;
   gameStatus1 = true;
}
//* like the reset Game function but this function does not rest the player and the scores but it gives the first run to winner in the last match. 
function resetBoardFunc(){
   title.textContent = 'Tec Tac Toe';
   options = ["", "", "", "", "", "", "", "", ""];
   squares.forEach(square=>{ square.textContent = ""});
   if(title.textContent == `Player (${currentPlayer1}) WON!`){
      currentPlayer1 = currentPlayer1;
   }
   gameStatus1 = true;
}





