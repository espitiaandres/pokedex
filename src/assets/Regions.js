//
//  Regions.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2019-2020 Andres Espitia. All rights reserved.
//

const regions = [
    {   
        id: 1,
        generationNumber: 'I',
        name: 'Kanto',
        firstPokemon: 1,
        lastPokemon: 151
    },
    {
        id: 2,
        generationNumber: 'II',
        name: 'Johto',
        firstPokemon: 152,
        lastPokemon: 251
    },
    {
        id: 3,
        generationNumber: 'III',
        name: 'Hoenn',
        firstPokemon: 252,
        lastPokemon: 386
    },
    {
        id: 4,
        generationNumber: 'IV',
        name: 'Sinnoh',
        firstPokemon: 387,
        lastPokemon: 493
    },
    {
        id: 5,
        generationNumber: 'V',
        name: 'Unova',
        firstPokemon: 494,
        lastPokemon: 649
    },
    {
        id: 6,
        generationNumber:'VI',
        name: 'Kalos',
        firstPokemon: 650,
        lastPokemon: 721
    },
    {
        id: 7,
        generationNumber: 'VII',
        name: 'Alola',
        firstPokemon: 722,
        lastPokemon: 809
    }
    // TODO: add generation 8 when it comes out to the API
    // ,
    // {
    //     id: 8,
    //     generationNumber: 'VIII',
    //     name: 'Galar'
    // }
]

export default regions