//
//  WildPokemon.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { Component } from 'react'
import pokemonCardLayout from '../images/pokemonCardLayout.png';

export class WildPokemon extends Component {
    render() {
        return (
            <div wildPokemonSection>
                <h2>
                    A wild <span className="underline">
                        <a className="pokemonApiLink" href={"https://www.pokeapi.co/api/v2/pokemon/" + this.props.wildPokeid}>
                            {this.props.wildPokename}
                        </a>
                    </span> has appeared!
                </h2>
                <div className="pokemonCard">
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + 
                            this.props.wildPokeid + ".png"} className="sprite wildPokemonHover pokemonImage" />
                    <img src={pokemonCardLayout} className="sprite wildPokemonHover pokemonCardImage" />
                </div>
                <h3>{this.props.wildPokename}</h3>
            </div>
        )
    }
}

export default WildPokemon
