export const gameBoard = (() => {
  var boardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

    const initializeBoard = () => {
    boardState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };


  const renderBoard = () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const cell = document.getElementById(`cell-${row}-${col}`);
        cell.textContent = boardState[row][col];
      }
    }
  };

  const makeMove = (row, col, playerSymbol) => {
    if (boardState[row][col] === "") {
      boardState[row][col] = playerSymbol;
      return true;
    }
    return false;
  };

  const checkWinner = (playerSymbol) => {
    for (let i = 0; i < 3; i++) {
      if (
        (boardState[i][0] === playerSymbol &&
          boardState[i][1] === playerSymbol &&
          boardState[i][2] === playerSymbol) ||
        (boardState[0][i] === playerSymbol &&
          boardState[1][i] === playerSymbol &&
          boardState[2][i] === playerSymbol)
      ) {
        return true;
      }
    }

    if (
      (boardState[0][0] === playerSymbol &&
        boardState[1][1] === playerSymbol &&
        boardState[2][2] === playerSymbol) ||
      (boardState[0][2] === playerSymbol &&
        boardState[1][1] === playerSymbol &&
        boardState[2][0] === playerSymbol)
    ) {
      return true;
    }
  }


  return {
    boardState,
    initializeBoard,
    renderBoard,
    makeMove,
    checkWinner,
  };
})();

