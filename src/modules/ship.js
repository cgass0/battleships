// This factory creates and manages the ships

export default function ships(name, length, hits, sunken) {
    // Create a new ship
    const ship = {};

    // Add properties to Ship
    ship.name = name;
    ship.length = length;
    ship.hits = hits;
    ship.sunken = sunken;

    // Add methods hit() and isSunk()
    ship.hit = function() {
        ship.hits += 1;
        ship.isSunk();
    }

    ship.isSunk = function() {
        if (ship.hits === ship.length) {
            ship.sunken = true;
        }

        return ship.sunken
    }

    // Return the created ship
    return ship;
}
