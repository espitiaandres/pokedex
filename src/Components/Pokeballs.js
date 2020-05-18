//
// Pokeballs.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { Component } from 'react'
import pokeball from '../Images/pokeball.png';

export class Pokeballs extends Component {
    render() {
        return <div className="pokeballFooter">
            <p>&copy; Andres Espitia 2019-2020</p>
            <span>
            {function () {
                let rows = [];
                for (let i=0; i < 8; i++) {
                    rows.push(<img src={pokeball} className="pokeball"/>);
                }
                return rows;
            }() }
            </span>
        </div>

    }
}

export default Pokeballs
