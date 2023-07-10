import ships from './modules/ship.js';
import gameboards from './modules/gameboard.js';
import players from './modules/player.js';
import enterPlayer from './modules/dom_enterPlayer.js';
import { playerName } from './modules/dom_enterPlayer.js';
import renderGameboards from './modules/renderGameboards.js';
//import gameInitiat from './modules/gameInitiat.js';

//Enter name popup and declare name value
enterPlayer();
let game;


// Everything below here is for testing

const displayBtn = document.getElementById("displayBtn");
displayBtn.addEventListener('click', () => { 
    game = gameInitiat();
    renderGameboards(game.gameBoardCpu.board, false);
    cpuShipPlacing(game.carrier);
    cpuShipPlacing(game.battleship);
    cpuShipPlacing(game.cruiser);
    cpuShipPlacing(game.submarine);
    cpuShipPlacing(game.destroyer);
})

const attackBtn = document.getElementById("attackBtn");
attackBtn.addEventListener('click', () => { 

    // Need recursive function to try until empty cell hit
    if (game.gameBoardCpu.receiveAttack(game.cpuPlayer.attack().xCord,game.cpuPlayer.attack().yCord)) {
        console.log("retry")
        game.gameBoardCpu.receiveAttack(game.cpuPlayer.attack().xCord,game.cpuPlayer.attack().yCord);
    }
});






// Function to initiat a new game without needed to recall everything
function gameInitiat() {

    // Create the game
    const game = {};

    // Creating new gameBoards (not constant)
    game.gameBoardHuman = gameboards(false, false);
    game.gameBoardCpu = gameboards(true, false);

    // Create new players (constant)
    game.humanPlayer = players(playerName, false); 
    game.cpuPlayer = players("CPU", true);

    // Create the ships
    game.carrier = ships("Carrier", 5, 0, false);
    game.battleship = ships("Battleship", 4, 0, false);
    game.cruiser = ships("Cruiser", 3, 0, false);
    game.submarine = ships("Submarine", 3, 0, false);
    game.destroyer = ships("Destroyer", 2, 0, false);
    
    // Return the created game
    return game;
} 

// Function to place the cpu ships
function cpuShipPlacing(ship) {

    let xCord = Math.floor(Math.random() * 10);
    let yCord = Math.floor(Math.random() * 10);
    let axis = Math.round(Math.random());

    if (game.gameBoardCpu.placeShip(xCord, yCord, ship, axis)) {
        return cpuShipPlacing(ship);
    } else {
        game.gameBoardCpu.placeShip(xCord, yCord, ship, axis);
    }
}