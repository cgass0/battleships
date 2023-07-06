import ships from './modules/ship.js';
import gameboards from './modules/gameboard.js';
import players from './modules/player.js';

// Creating the different battle ships
const ship1 = ships("Carrier", 5, 0, false);
const ship2 = ships("Battleship", 4, 0, false);
const ship3 = ships("Cruiser", 3, 0, false);
const ship4 = ships("Submarine", 3, 0, false);
const ship5 = ships("Destroyer", 2, 0, false);

// Creating the two game boards
const gameboardHuman = gameboards(false, false);
const gameboardCpu = gameboards(true, false);

// Creating the two players
const humanPlayer = players("Curtis", true); //this will eventually need to be from name input
const cpuPlayer = players("CPU", true);


// Everything below here is for testing

console.log(humanPlayer, cpuPlayer);

gameboardCpu.placeShip(0,5, ship1, 0);

gameboardCpu.receiveAttack(humanPlayer.attack().xCord,humanPlayer.attack().yCord);
console.log(gameboardCpu.board);
