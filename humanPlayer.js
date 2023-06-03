class HumanPlayer {
    constructor(playerSymbol) {
      this.playerSymbol = playerSymbol;
    }
  
    humanMove(row, column, gameBoard) {
      if (gameBoard.makeMove(row, column, this.playerSymbol)) {
        return true;
      }
      return false;
    }
  }
export const humanPlayer = new HumanPlayer("X");