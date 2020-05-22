//
//  RegionNumber.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

const RegionNumber = (id) => {
    let firstPokemon
    let lastPokemon
    if (id === undefined) {
        id = 1
    }
    if (id === 1) {
        firstPokemon = 1
        lastPokemon = 151
    } else if (id === 2) {
        firstPokemon = 152
        lastPokemon = 251
    } else if (id === 3) {
        firstPokemon = 252
        lastPokemon = 386
    } else if (id === 4) {
        firstPokemon = 387
        lastPokemon = 493
    } else if (id === 5) {
        firstPokemon = 494
        lastPokemon = 649
    } else if (id === 6) {
        firstPokemon = 650
        lastPokemon = 721
    } else if (id === 7) {
        firstPokemon = 722
        lastPokemon = 809
    } else {
        firstPokemon = 1
        lastPokemon = 151
    }
    return {firstPokemon, lastPokemon, id}
}

export default RegionNumber
