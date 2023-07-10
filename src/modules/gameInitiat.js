// Importing necessary functions 
import ships from './modules/ship.js';
import gameboards from './modules/gameboard.js';
import players from './modules/player.js';
import { playerName } from './modules/dom_enterPlayer.js';

// Factory function for initiating a new game
export default function gameInitiat() {

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