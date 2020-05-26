//
//  pokeId.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

// Obtains a random pokemon id from the region specified
const PokeId = (firstPokemon, lastPokemon) => {
    const min = Math.ceil(firstPokemon)
    const max = Math.floor(lastPokemon)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default PokeId
