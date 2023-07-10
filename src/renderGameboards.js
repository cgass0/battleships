// This function renders the gameboards

export default function renderGameboards(gameBoard, isPlayerOne) {

    // Define which gameboard to create
    if (isPlayerOne) {
        const humanGameboardContainer = document.getElementById('gameboard1');
        renderGameboard(gameBoard, humanGameboardContainer);
    } else {
        const cpuGameboardContainer = document.getElementById('gameboard2');
        renderGameboard(gameBoard, cpuGameboardContainer); 
    }

    function renderGameboard(board, container) {
    const gameboardElement = document.createElement('div');
    gameboardElement.classList.add('gameboard');

    // Loop through the rows and cells of the board
    for (let row = 0; row < board.length; row++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');

        for (let col = 0; col < board[row].length; col++) {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.setAttribute('data-row', row);
        cellElement.setAttribute('data-col', col);

        rowElement.appendChild(cellElement);
        }

        gameboardElement.appendChild(rowElement);
    }

    container.appendChild(gameboardElement);
    
    }

}