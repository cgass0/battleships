// This factory creates and manages the players

export default function players(name, isCpu) {
    // Create a new player
    const player = {};

    // Add properties to board
    player.name = name;
    player.isCpu = isCpu;
    player.turn = false;

    // Create the switching of turns as well as initiating attack sequence
    player.switchTurn = function() {
        // Check if is not players turn
        if (player.turn !== true) {
            // Switch to this players turn
            player.turn = true;
        } else {
            // Switch to other players turn
            player.turn = false;
        }
    }

    // Method for deciding coordinates to attack
    player.attack = function() {
        // If it is a cpu's turn, assign random cordinates
        if (isCpu) {
            let xCord = Math.floor(Math.random() * 10);
            let yCord = Math.floor(Math.random() * 10);
            return {xCord, yCord};
        } else {
            // This will be where human input comes in
        }
    }



    // Return the created player
    return player;
}