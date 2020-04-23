import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import Header from './Components/Header';
import WildPokemon from './Components/WildPokemon';
import Pokeballs from './Components/Pokeballs';

function App() {
    const [pokedex, setPokedex] = useState([])
    const [wildPokemon, setWildPokemon] = useState({});
    useEffect(() => {
        encounterWildPokemon()
    }, [])

    const pokeId = () => {
        const min = Math.ceil(1)
        const max = Math.floor(151)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const encounterWildPokemon = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
        .then(response => {
            setWildPokemon(response.data);
        })
    }

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

    const releasePokemon = id => {
        setPokedex(state => state.filter(p => p.id !== id))
    }

    return(
        <div>      
            <header className="header">
                <Header />
            </header>
            <div className="wild-pokemon">
                <WildPokemon wildPokename={wildPokemon.name} wildPokeid={wildPokemon.id}/>
                <span className="inlineButtons">
                    <button className="catch-btn" onClick={() => catchPokemon(wildPokemon)}>Catch!</button>
                    <button className="catch-btn" onClick={() => encounterWildPokemon()}>Pass...</button>
                </span>
            </div>

            <div className="pokedex">
                <h2 className="secondHeader">Your collection so far:</h2>
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
        <Pokeballs />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));