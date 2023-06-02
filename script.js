// Importing shared dependencies
import { gameBoard, gameLogic, player, computerPlayer, checkWin, displayController } from './shared_dependencies.js';

// DOM elements
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');

// Function to start the game
function startGame() {
  // Initialize the game board
  gameBoard.initialize();

  // Render the board
  renderBoard();

  // Add event listeners to each cell
  cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
  });

  // Display the start message
  message.textContent = 'Click any cell to start the game!';
}

// Function to render the board
function renderBoard() {
  // Clear the board
  board.innerHTML = '';

  // Loop through each cell and add it to the board
  for (let i = 0; i < gameBoard.board.length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.textContent = gameBoard.board[i];
    board.appendChild(cell);
  }
}

// Function to handle a cell click
function handleClick(event) {
  // Get the index of the clicked cell
  const index = event.target.dataset.index;

  // If the cell is already taken, return
  if (gameBoard.board[index] !== '') {
    return;
  }

  // Update the game board
  gameBoard.board[index] = player.symbol;

  // Render the board
  renderBoard();

  // Check if the player has won
  if (checkWin(gameBoard.board, player.symbol)) {
    message.textContent = 'You win!';
    gameOver();
    return;
  }

  // Check if the game is a tie
  if (checkTie(gameBoard.board)) {
    message.textContent = 'It\'s a tie!';
    gameOver();
    return;
  }

  // Switch to the computer player
  switchPlayer();

  // Get the best move for the computer player
  const bestMove = getBestMove();

  // Update the game board
  gameBoard.board[bestMove] = computerPlayer.symbol;

  // Render the board
  renderBoard();

  // Check if the computer player has won
  if (checkWin(gameBoard.board, computerPlayer.symbol)) {
    message.textContent = 'You lose!';
    gameOver();
    return;
  }

  // Check if the game is a tie
  if (checkTie(gameBoard.board)) {
    message.textContent = 'It\'s a tie!';
    gameOver();
    return;
  }

  // Switch to the human player
  switchPlayer();
}

// Function to check if the game is a tie
function checkTie(board) {
  return board.every(cell => cell !== '');
}

// Function to switch players
function switchPlayer() {
  if (player === computerPlayer) {
    player = humanPlayer;
  } else {
    player = computerPlayer;
  }
}

// Function to get the best move for the computer player
function getBestMove() {
  return minimax(gameBoard.board, computerPlayer.symbol).index;
}

// Function to end the game
function gameOver() {
  // Remove event listeners from each cell
  cells.forEach(cell => {
    cell.removeEventListener('click', handleClick);
  });
}

// Start the game
startGame();