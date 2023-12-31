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
    gameboard.placeShip = function(col, row, ship, axis) {
        // Define ship length
        let length = ship.length;

        // Check if the coordinates are valid
        // Check if ship length fits on board hortizontal x-axis
        if (axis === 0 & row + length > 10) {
            return true; // return true, need to retry with new cords
        }
        // Check if ship length fits on board vertical y-axis
        if (axis === 1 & col + length > 10) {
            return true; // return true, need to retry with new cords
        }

        // Recursive function to verify if the coordinates hasShip already
        function hasShipCheck(col, row, length, axis) {
            if (length === 0) {
                return false;
            } else {
                if (axis === 1 & gameboard.board[row][col].hasShip === false) {
                    return hasShipCheck(col + 1, row, length - 1, axis);
                } else if (axis === 0 & gameboard.board[row][col].hasShip === false){
                    return hasShipCheck(col, row + 1, length - 1, axis);
                } else {
                    return true; // return true, need to retry with new cords
                }
            }           
        }

        // Now mark the cells as hasShip if check passed as false
        if (hasShipCheck(col, row, length, axis)) {
            return true; // return true, need to retry with new cords
        } else {
            // Mark the Primary cell as having a ship
            let cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
            cell.classList.add('has-ship');
            // Mark tail of ship cells as having ship
            for (let i = 0; i < ship.length; i++) {
                // X-axis / horizontal
                if (axis === 1) {
                    gameboard.board[row][col + i].hasShip = true;
                    gameboard.board[row][col + i].ship = ship;
                    cell = document.querySelector(`[data-row='${row}'][data-col='${col + i}']`);
                    cell.classList.add('has-ship');
                }

                // Y-axis / horizontal
                if (axis === 0) {
                    gameboard.board[row + i][col].hasShip = true;
                    gameboard.board[row + i][col].ship = ship;
                    cell = document.querySelector(`[data-row='${row + i}'][data-col='${col}']`);
                    cell.classList.add('has-ship');
                }
                
            }
        }
    }


    // Method for receiving attack
    gameboard.receiveAttack = function(row, col) {
    
        // Check if the cell has already been hit
        if (gameboard.board[row][col].isHit) {
            alert("Cell already hit");
            return true;
        }

        // Mark the cell as hit
        gameboard.board[row][col].isHit = true;
        let cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
        cell.classList.add('is-hit');

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


