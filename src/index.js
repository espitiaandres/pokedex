//
//  index.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, animateScroll } from 'react-scroll';
import './index.css';
import Header from './Components/Header';
import WildPokemon from './Components/WildPokemon';
import Pokeballs from './Components/Pokeballs';



// TODO: allow user to choose what region of pokemon they want to select (Kanto, Johto, all regions..)
// TODO: make pokemon cards moveable/draggable in the pokedex
// TODO: make HP, attack, defense, speed, sp atk, sp def values into a bar graph
// TODO: get strengths and weaknesses for each pokemon:


function App() {
    const [pokedex, setPokedex] = useState([])
    const [wildPokemon, setWildPokemon] = useState({});
    useEffect(() => {
        encounterWildPokemon()
    }, [])

    // Obtains a random pokemon id from the Kanto region (pokemon #1-151)
    const pokeId = () => {
        const min = Math.ceil(1)
        const max = Math.floor(151)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // Fetches a wild pokemon for the user to catch
    const encounterWildPokemon = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
        .then(response => {
            setWildPokemon(response.data)
            console.log('Success')
        }).catch((e) => {
            console.log('Please try later, something went wrong...', e)
        })
    }

    // Allows user to catch pokemon and store in their pokedex below
    const catchPokemon = (pokemon) => {
        setPokedex(state => {
            const monExists = (state.filter(p => pokemon.id === p.id).length > 0);
            if(!monExists) {
                state = [...state, pokemon]
                state.sort(function(a, b){
                    return a.id - b.id
                })
            }
            return state
        })
        encounterWildPokemon()
    }

    //Allows user to delete a caught pokemon from their pokedex
    const releasePokemon = id => {
        setPokedex(state => state.filter(p => p.id !== id))
    }

    return(
        <div>      
            <header className="header">
                <Header />
            </header>
            <div className="wild-pokemon" id="wild-pokemon">
                <WildPokemon wildPokename={wildPokemon.name} wildPokeid={wildPokemon.id}/>
                <span className="inlineButtons">
                    <button className="catch-btn" onClick={() => {catchPokemon(wildPokemon)}}>
                        <Link to="wild-pokemon" spy={true} smooth={true} duration={400} onClick={() => {catchPokemon(wildPokemon)}}>
                            Catch!
                        </Link>
                    </button>
                    <button className="catch-btn" onClick={() => encounterWildPokemon()}>
                        <Link to="wild-pokemon" spy={true} smooth={true} duration={400} onClick={() => encounterWildPokemon()}>
                            Pass...
                        </Link>
                    </button>
                    <button className="catch-btn" >
                    <Link to="pokedex" spy={true} smooth={true} duration={400}>
                        See my collection
                    </Link>
                    </button>
                </span>
            </div>

            <div className="pokedex" id="pokedex">
                <h2 className="collectionHeader">Your collection so far:</h2>
                <br/>
                <div className="pokedex-list">
                    {pokedex.map(pokemon => (
                        <div className="pokemon" key={pokemon.id}>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + 
                            pokemon.id + ".png"} className="sprite" />
                            <div className="pokemon-name">
                                <h3>{pokemon.name}</h3>
                                <h5>pokemon #{pokemon.id}</h5>
                            </div>
                            <hr/>
                            <div>
                                {
                                    pokemon.types.map(p => p.type.name).length > 1 ? (
                                        <h5 className="pokemon-stat">
                                            types: <span className="pokemon-category">{pokemon.types.map(p => p.type.name).map(poketype => (<div key={poketype}>&Xi; {poketype}</div>))}</span>
                                        </h5>
                                    ) : (
                                        <h5 className="pokemon-stat">
                                            type: <span className="pokemon-category">{pokemon.types.map(p => p.type.name).map(poketype => (<div key={poketype}>&Xi;  {poketype}</div>))}</span>
                                        </h5>
                                    )
                                }
                            </div>
                            <hr/>
                            <h5 className="pokemon-stat">
                                abilities: 
                                <span className="pokemon-category">
                                    {pokemon.abilities.map(p => p.ability.name).map(a => (<div key={a}>&Xi; {a}</div>))}
                                </span>
                            </h5>
                            <hr/>
                            <h5 className="pokemon-stat">
                                base xp: 
                                <div className="pokemon-category">
                                    {pokemon.base_experience}
                                </div>
                            </h5>
                            <hr/>
                            <h5 className="pokemon-stat">
                                stats:  
                                <span className="pokemon-category">
                                    {pokemon.stats.map(s => s).map(stat => (<div key={stat.stat.name}>&Xi; {stat.stat.name}: {stat.base_stat}</div>))}
                                </span>
                            </h5>
                            <h5 className="pokemon-stat">
                                moves:
                                <span className="pokemon-category">
                                    {pokemon.moves.map(s => s).map(move => (<div key={move.move.name}>&Xi; {move.move.name}</div>))}
                                </span>
                            </h5> 
                            <hr/>
                            <button className="remove" onClick={() => releasePokemon(pokemon.id)}>&times;</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footerButtons">
                <span className="inlineButtons">
                    <button className="catch-btn" >
                    <Link to="wild-pokemon" spy={true} smooth={true} duration={400}>
                        More pokemon!
                    </Link>
                    </button>
                </span>   
            </div>
        <Pokeballs />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));