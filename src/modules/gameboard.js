// This factory creates and manages the gameboards

export default function gameboards(isCpuBoard, allSunk) {
    // Create a new board
    const gameboard = {};

    // Add properties to board
    gameboard.isCpuBoard = isCpuBoard;
    gameboard.allSunk = allSunk;
    gameboard.board = [];

    // Initialize the game board with empty cells
    for (let row = 0; row < 10; row++) {
        const rowCells = [];
        for (let col = 0; col < 10; col++) {
          rowCells.push({
            hasShip: false,
            isHit: false,
          });
        }
        gameboard.board.push(rowCells);
    }

    // Method for placing ships on gameboard
    gameboard.placeShip = function(row, col, ship, axis) {
        // Check if the coordinates are valid
        if (row < 0 || row >= 10 || col < 0 || col >= 10) {
          alert("Origin not on board");
          return;
          // Check if ship length fits on board hortizontal x-axis
        }
        if (axis === 0 & col + ship.length > 10) {
            alert("Tail over side");
            return;
        }
        // Check if ship length fits on board vertical y-axis
        if (axis === 1 & row + ship.length > 10) {
            alert("Tail over end");
            return;
        }
        
      
        // Mark the Primary cell as having a ship
        gameboard.board[row][col].hasShip = true;
        gameboard.board[row][col].ship = ship;
        // Mark tail of ship cells as having ship
        for (let i = 1; i < ship.length; i++) {
            // X-axis / horizontal
            if (axis === 0) {
                gameboard.board[row][col + i].hasShip = true;
                gameboard.board[row][col + i].ship = ship;
            }

            // Y-axis / horizontal
            if (axis === 1) {
                gameboard.board[row + i][col].hasShip = true;
                gameboard.board[row + i][col].ship = ship;
            }
            
        }
        
    }

    // Method for receiving attack
    gameboard.receiveAttack = function(row, col) {
        // Check if the coordinates are valid
        if (row < 0 || row >= 10 || col < 0 || col >= 10) {
            alert("Please target the board");
            return;
        }

        // Check if the cell has already been hit
        if (gameboard.board[row][col].isHit) {
            alert("Cell already hit");
            return;
        }

        // Mark the cell as hit
        gameboard.board[row][col].isHit = true;

        // Check if cell hasShip
        if(gameboard.board[row][col].hasShip) {
            // Hit the ship on that cell using the ship.hit() method
            gameboard.board[row][col].ship.hit();
            console.log('Hit!');
        } else {
            console.log('Missed!');
        }
    }

    // Return the created board
    return gameboard;      
}


