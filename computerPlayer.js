class ComputerPlayer {
    constructor(playerSymbol) {
      this.playerSymbol = playerSymbol;
    }
  
    computerMove(gameBoard) {
      let availableMoves = [];

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (gameBoard[row][col] === "") {
            availableMoves.push({ row, col });
          }
        }
      }

  
      if (availableMoves.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableMoves.length);
        const chosenMove = availableMoves[randomIndex];
        return { row: chosenMove.row, col: chosenMove.col };
      }
  
      return null;
    }
  }

export const computerPlayer = new ComputerPlayer("O");

