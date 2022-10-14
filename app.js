const squares = document.querySelectorAll('.square');
const board = document.querySelector('.board-container');
const player = document.querySelector('.player-turn');
const resetBtn = document.querySelector('.reset');
const title = document.querySelector('.game-title');
let currentPlayer = 'O';
let gameStatus = true;

function fillSquareContent(event){
   event.target.style.fontSize='80px'
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
   //1 row
   if(squares[0].textContent=='X'&&squares[1].textContent=='X'&&squares[2].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
   }
   //2 row
   else if(squares[3].textContent=='X'&&squares[4].textContent=='X'&&squares[5].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
   }
   //3 row
   else if(squares[6].textContent=='X'&&squares[7].textContent=='X'&&squares[8].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
   }
   // 1 colomn
   else if(squares[0].textContent=='X'&&squares[3].textContent=='X'&&squares[6].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
   }
    // 2 colomn
   else if(squares[1].textContent=='X'&&squares[4].textContent=='X'&&squares[7].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
   }
    // 3 colomn
   else if(squares[2].textContent=='X'&&squares[5].textContent=='X'&&squares[8].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
   }
   // form 0 to 4 to 8 
   else if(squares[0].textContent=='X'&&squares[4].textContent=='X'&&squares[8].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
   }
   // form 6 to 4 to 2 
   else if(squares[6].textContent=='X'&& squares[4].textContent=='X'&& squares[2].textContent=='X'){
      gameStatus = false;
      title.textContent='Player (X) WON!'
   }
   //1 row
   else if(squares[0].textContent=='O'&&squares[1].textContent=='O'&&squares[2].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
   }
   //2 row
   else if(squares[3].textContent=='O'&&squares[4].textContent=='O'&&squares[5].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
   }
   //3 row
   else if(squares[6].textContent=='O'&&squares[7].textContent=='O'&&squares[8].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
   }
   // 1 colomn
   else if(squares[0].textContent=='O'&&squares[3].textContent=='O'&&squares[6].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
   }
    // 2 colomn
   else if(squares[1].textContent=='O'&&squares[4].textContent=='O'&&squares[7].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
   }
    // 3 colomn
   else if(squares[2].textContent=='O'&&squares[5].textContent=='O'&&squares[8].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
   }
   // diagonally 
   else if(squares[0].textContent=='O'&&squares[4].textContent=='O'&&squares[8].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
   }
   // diagonally
   else if(squares[6].textContent=='O'&& squares[4].textContent=='O'&& squares[2].textContent=='O'){
      gameStatus = false;
      title.textContent='Player (O) WON!'
   }
    else if(squares[0].textContent!==''&& squares[1].textContent!==''&&squares[2].textContent!==''&&squares[3].textContent!==''&&squares[4].textContent!==''&&squares[5].textContent!==''&&squares[6].textContent!==''&&squares[7].textContent!==''&&squares[8].textContent!==''){
      gameStatus = false;
      title.textContent="It's A Tie!"
    }
   
};
function resetingGame(){
   for (let i of squares ){
      i.innerHTML='';
   }
   gameStatus = true;
   title.textContent = 'Tec Tac Toe';
};

board.addEventListener('click',fillSquareContent);
resetBtn.addEventListener('click',resetingGame);