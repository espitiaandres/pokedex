import React, { Component } from 'react';
import mainLogo from '../Images/pokemon-logo-png.png';

export class Header extends Component {
    render() {
        return (
            <div>
                <br />
                <div>
                    <h1 className="title">Pokedex</h1>
                </div>
                <br />
                <hr />
                <br />
                <div>
                    <h3 className="subtitle">Are <span className="underline">YOU</span> ready to catch them all?</h3>
                </div>
                <img src={mainLogo} className="pokemonLogo"/>
                <br />
                <hr />
                <br />
                <p className="introStatement">A pokedex built using React.js, ReactDOM, and pokeapi.co</p>
                <br />
            </div>
        )
    }
}

export default Header
