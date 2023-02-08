function boardg(){
    let board = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
  ];

      let turn = Math.random() < 0.5 ? 1 : -1; // randomize who goes first
      let gameOver = false;

  // function to update the board with the current move
  const updateBoard = (col) => {
        for (let row = board.length - 1; row >= 0; row--) {
          if (board[row][col] === 0) {
            board[row][col] = turn;
        break;
      }
    }
  };

  // function to check if the current move results in a win
  const checkWin = () => {
        // check rows
    for (let row = 0; row < board.length; row++) {
          let count = 0;
      for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === turn) {
              count++;
          if (count === 4) return true;
        } else {
              count = 0;
        }
      }
    }

    // check columns
    for (let col = 0; col < board[0].length; col++) {
          let count = 0;
      for (let row = 0; row < board.length; row++) {
            if (board[row][col] === turn) {
              count++;
          if (count === 4) return true;
        } else {
              count = 0;
        }
      }
    }

    // check diagonals
    for (let row = 0; row < board.length - 3; row++) {
          for (let col = 0; col < board[row].length - 3; col++) {
            if (board[row][col] === turn &&
            board[row + 1][col + 1] === turn &&
            board[row + 2][col + 2] === turn &&
            board[row + 3][col + 3] === turn) {
              return true;
        }
        if (board[row][col + 3] === turn &&
            board[row + 1][col + 2] === turn &&
            board[row + 2][col + 1] === turn &&
            board[row + 3][col] === turn) {
              return true;
        }
      }
    }

    return false;
  };

  // function to handle a player move
  const playerMove = (col) => {
        updateBoard(col);
    if (checkWin()) {
          gameOver = true;
      alert("Player " + turn + " wins!");
    } else {
          turn *= -1;
    }
  };
}

boardg()