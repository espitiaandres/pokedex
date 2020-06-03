//
//  WildPokemon.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import pokemonCardLayout from '../images/pokemonCardLayout.png';

function WildPokemon(props) {
    return (
        <div>
            <h2>
            A wild <span className="underline">
                <a style={{color: "#f3f3f3"}} href={"https://www.pokeapi.co/api/v2/pokemon/" + props.wildPokeid}>
                    {props.wildPokename}
                </a>
                </span> has appeared!
            </h2>
            <div className="pokemonCard">
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + 
                    props.wildPokeid + ".png"} className="sprite wildPokemonHover pokemonImage" />
                <img src={pokemonCardLayout} className="sprite wildPokemonHover pokemonCardImage" />
            </div>
            <h3>{props.wildPokename}</h3>
        </div>
    )
}

export default WildPokemon;