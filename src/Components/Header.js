import React, { Component } from 'react';
import mainLogo from '../Images/pokemon-logo-png.png';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <br />
                <div>
                    <h1 className="title">Pokedex</h1>
                </div>
                <br />
                <div>
                    <h3 className="subtitle">Are <span className="underline">YOU</span> ready to catch them all?</h3>
                </div>
                <img src={mainLogo} className="pokemonLogo"/>
                <br />
            </div>
        )
    }
}

export default Header
