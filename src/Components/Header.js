//
//  Header.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { Component } from 'react';
import mainLogo from '../Images/pokemon-logo-png.png';

export class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="title">React.js Pokedex</h1>
                </div>
                <hr />                
                <div>
                    <h3 className="subtitle">Are <span className="underline">YOU</span> ready to catch them all?</h3>
                </div>
                <img src={mainLogo} className="pokemonLogo"/>
                <hr />
                <p className="introStatement">A pokedex built using React.js, ReactDOM, and pokeapi.co</p>
                <br />
            </div>
        )
    }
}

export default Header
