import ships from './modules/ship.js';
import gameboards from './modules/gameboard.js';
import players from './modules/player.js';
import enterPlayer from './modules/dom_enterPlayer.js';
import { playerName } from './modules/dom_enterPlayer.js';
import renderGameboards from './renderGameboards.js';
//import gameInitiat from './modules/gameInitiat.js';

//Enter name popup and declare name value
enterPlayer();
let game;


// Everything below here is for testing

const displayBtn = document.getElementById("displayBtn");
displayBtn.addEventListener('click', () => { 
    game = gameInitiat();
    renderGameboards(game.gameBoardHuman.board, true);
})

const attackBtn = document.getElementById("attackBtn");
attackBtn.addEventListener('click', () => { 
    console.log(game)
    console.log(game.humanPlayer.name);
    game.gameBoardCpu.placeShip(0,5, game.carrier, 0);
    game.gameBoardCpu.placeShip(0,3, game.carrier, 0);
    game.gameBoardCpu.receiveAttack(game.cpuPlayer.attack().xCord,game.cpuPlayer.attack().yCord);
    console.log(game.gameBoardCpu.board);
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