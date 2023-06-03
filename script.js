import { gameBoard } from "./gameBoard.js";
import { computerPlayer } from "./computerPlayer.js";
import { humanPlayer } from "./humanPlayer.js";

document.addEventListener("DOMContentLoaded", () => {
  gameBoard.initializeBoard;
  gameBoard.renderBoard;
  attachEventListeners();
});

function attachEventListeners() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cell = document.getElementById(`cell-${row}-${col}`);
      cell.addEventListener("click", handleClick);
    }
  }

}

function handleClick(event) {
        const [row, col] = event.target.id.split("-").slice(1).map(Number);
        if (gameBoard.boardState[row][col] !== "") return;
      
        if(gameBoard.makeMove(row, col, humanPlayer.playerSymbol)){
            gameBoard.renderBoard();
            updateGameStatus();
            const dict = computerPlayer.computerMove(gameBoard.boardState);
            gameBoard.makeMove(dict['row'], dict['col'],computerPlayer.playerSymbol);
            gameBoard.renderBoard();
            updateGameStatus();
        }
}



function updateGameStatus() {
  const gameStatus = document.getElementById("gameStatus");
  const winner1 = gameBoard.checkWinner("O");
  const winner2 = gameBoard.checkWinner("X");

  if (winner1) {
    gameStatus.textContent = "Computer won!";
    
  } 
else if (winner2) {
    gameStatus.textContent = "You won!";
  }


}