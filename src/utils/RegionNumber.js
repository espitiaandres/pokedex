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
    if (id === 1 || id === undefined) {
        firstPokemon = 1
        lastPokemon = 151
    } else if(id === 2) {
        firstPokemon = 152
        lastPokemon = 251
    } else if(id === 3) {
        firstPokemon = 252
        lastPokemon = 386
    } else if(id === 4) {
        firstPokemon = 387
        lastPokemon = 493
    } else if(id === 5) {
        firstPokemon = 494
        lastPokemon = 649
    } else if(id === 6) {
        firstPokemon = 650
        lastPokemon = 721
    } else if(id === 7) {
        firstPokemon = 722
        lastPokemon = 809
    } else if(id === 8) {
        firstPokemon = 810
        lastPokemon = 890
    } else {
        firstPokemon = 152
        lastPokemon = 300
    }
    return {firstPokemon, lastPokemon, id}
}

export default RegionNumber
