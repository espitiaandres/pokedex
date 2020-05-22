//
//  RegionDropdown.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import RegionNumber from '../utils/RegionNumber';

// Default values to region 1 (Kanto)
var regionNumberParams = 
{
    firstPokemon : 1,
    lastPokemon : 151,
    id : Math.floor(Math.random() * (151 - 1 + 1)) + 1
}

function RegionDropdown({ title, regions=[] }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            setSelection([item])
            regionNumberParams = RegionNumber(item.id)
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id)
            setSelection([...selectionAfterRemoval])
        }
    }

    function isItemInSelection(item) {
        if (selection.find(current => current.id === item.id)) {
            return true
        }
        return false
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
                                <button type="button" onClick={() => {handleOnClick(region); toggle(!open)}}>
                                <span>Generation {region.generationNumber}: {region.name}</span>
                                <span>{isItemInSelection(region) && 'Selected'}</span>
                                </button>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

export {RegionDropdown, regionNumberParams}
