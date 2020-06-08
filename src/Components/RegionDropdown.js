//
//  RegionDropdown.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2019-2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import Regions from '../assets/Regions';
import { Link } from 'react-scroll';

// Default values to region 1 (Kanto Region)
let regionNumberParams = 
{
    firstPokemon: 1,
    lastPokemon: 151,
    id: Math.floor(Math.random() * 151) + 1
}

function RegionDropdown({ title, regions=[], encounterWildPokemon }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            setSelection([item]);
            regionNumberParams = (Regions.filter((region) => region.id === item.id))[0];
        } else {
            let selectionAfterRemoval = selection.filter(current => current.id !== item.id);
            setSelection([...selectionAfterRemoval]);
        }
    }

    function isItemInSelection(item) {
        return selection.find(current => current.id === item.id) ? true : false;
    }

    return (
        <div>
            <div
            tabIndex={0} 
            className="dd-header" 
            role="button" 
            onKeyPress={() => toggle(!open)} 
            onClick={() => toggle(!open)}>
                <button className="catch-btn">
                    <p>{title}</p>
                </button>
            </div>
            {open && (
                <ul className="dd-list">
                    {
                        regions.map(region => (
                            <li className="dd-list-item" key={region.generationNumber}>
                                <Link to="wild-pokemon" spy={true} smooth={true} duration={300} >
                                    <button type="button" onClick={() => {handleOnClick(region); toggle(!open); encounterWildPokemon()}}>
                                    <span>
                                        Generation {region.generationNumber}: {region.name}
                                        {isItemInSelection(region) ? <span> &#10003; </span> : ''}
                                    </span>
                                    </button>
                                </Link>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

export {RegionDropdown, regionNumberParams}
