const squares = document.querySelectorAll('.square');
const board = document.querySelector('.board-container');
const player = document.querySelector('.player-turn');
const resetGame = document.querySelector('.reset-game');
const resetBoard = document.querySelector('.reset-board');
const title = document.querySelector('.game-title');
const playerXScore = document.querySelector('.player-x-score');
const playerOScore = document.querySelector('.player-o-score');
const tieScore = document.querySelector('.tie-score');
let currentPlayer = 'O';
let gameStatus = true;
let docWidth = document.body.clientWidth;
function fillSquareContent(event){
   if(docWidth <=300){
      event.target.style.fontSize='30px'
   }
   else if(docWidth > 300&&docWidth <=500){
      event.target.style.fontSize='50px'
   }
   else{
      event.target.style.fontSize='80px'
   }
   event.target.style.fontFamily="'Montserrat', sans-serif"
   if(currentPlayer == 'O' &&gameStatus&& !event.target.textContent){
      gameStatus = true;
      player.textContent = "Player O's turn"
      currentPlayer = 'X'
      event.target.textContent = currentPlayer
   }
   else if(currentPlayer == 'X'&&gameStatus&& !event.target.textContent){
      player.textContent = "Player X's turn"
      gameStatus = true;
      currentPlayer = 'O'
      event.target.textContent = currentPlayer
   }
   checkWinner();
};
function checkWinner(){
   if(gameStatus){
   //1 row
   if(squares[0].textContent=='X'&&squares[1].textContent=='X'&&squares[2].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
      playerXScore.innerText++
   }
   //2 row
   else if(squares[3].textContent=='X'&&squares[4].textContent=='X'&&squares[5].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
      playerXScore.innerText++
   }
   //3 row
   else if(squares[6].textContent=='X'&&squares[7].textContent=='X'&&squares[8].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
      playerXScore.innerText++
   }
   // 1 colomn
   else if(squares[0].textContent=='X'&&squares[3].textContent=='X'&&squares[6].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
      playerXScore.innerText++
   }
    // 2 colomn
   else if(squares[1].textContent=='X'&&squares[4].textContent=='X'&&squares[7].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
      playerXScore.innerText++
   }
    // 3 colomn
   else if(squares[2].textContent=='X'&&squares[5].textContent=='X'&&squares[8].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
      playerXScore.innerText++
   }
   // form 0 to 4 to 8 
   else if(squares[0].textContent=='X'&&squares[4].textContent=='X'&&squares[8].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
      playerXScore.innerText++
   }
   // form 6 to 4 to 2 
   else if(squares[6].textContent=='X'&& squares[4].textContent=='X'&& squares[2].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
      playerXScore.innerText++
   }
   //1 row
   else if(squares[0].textContent=='O'&&squares[1].textContent=='O'&&squares[2].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
      playerOScore.innerText++;
   }
   //2 row
   else if(squares[3].textContent=='O'&&squares[4].textContent=='O'&&squares[5].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
      playerOScore.innerText++;
   }
   //3 row
   else if(squares[6].textContent=='O'&&squares[7].textContent=='O'&&squares[8].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
      playerOScore.innerText++;
   }
   // 1 colomn
   else if(squares[0].textContent=='O'&&squares[3].textContent=='O'&&squares[6].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
      playerOScore.innerText++;
   }
    // 2 colomn
   else if(squares[1].textContent=='O'&&squares[4].textContent=='O'&&squares[7].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
      playerOScore.innerText++;
   }
    // 3 colomn
   else if(squares[2].textContent=='O'&&squares[5].textContent=='O'&&squares[8].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
      playerOScore.innerText++;
   }
   // diagonally 
   else if(squares[0].textContent=='O'&&squares[4].textContent=='O'&&squares[8].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
      playerOScore.innerText++;
   }
   // diagonally
   else if(squares[6].textContent=='O'&& squares[4].textContent=='O'&& squares[2].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
      playerOScore.innerText++;
   }
    else if(squares[0].textContent!==''&& squares[1].textContent!==''&&squares[2].textContent!==''&&squares[3].textContent!==''&&squares[4].textContent!==''&&squares[5].textContent!==''&&squares[6].textContent!==''&&squares[7].textContent!==''&&squares[8].textContent!==''){
      gameStatus = false;
      title.textContent="It's A Tie!"
      tieScore.innerText++;
    }
   }
};
function resetingBoard(){
   for (let i of squares ){
      i.innerHTML='';
   }
   gameStatus = true;
   title.textContent = 'Tec Tac Toe';
};
function resetingGame(){
   for (let i of squares ){
      i.innerHTML='';
   }
   gameStatus = true;
   title.textContent = 'Tec Tac Toe';
   tieScore.innerText=0;
   playerOScore.innerText=0;
   playerXScore.innerText=0;
};
board.addEventListener('click',fillSquareContent);
resetBoard.addEventListener('click',resetingBoard);
resetGame.addEventListener('click',resetingGame);