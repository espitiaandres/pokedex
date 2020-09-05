//
//  Header.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2019-2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import mainLogo from '../images/pokemon-logo-png.png';

function Header() {
    return (
        <div>
            <div>
                <h1 className="title">React.js Pokedex</h1>
            </div>
            <hr />                
            <div>
                <h3 className="subtitle">Are <span className="underline">YOU__</span> ready to catch them all?</h3>
            </div>
            <img src={mainLogo} className="pokemonLogo"/>
            <hr />
            <p className="introStatement">A pokedex built using React.js, ReactDOM, and pokeapi.co</p>
            <br />
        </div>
    )
}

export default Header;
