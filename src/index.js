//
//  index.js
//  pokedex
//
//  Created by Andres Espitia.
//  Copyright © 2019-2020 Andres Espitia. All rights reserved.
//


// TODO: get strengths and weaknesses for each pokemon
// TODO: make type names with different colors

import React from 'react';
import ReactDOM from 'react-dom';
import ReactPokedex from './components/ReactPokedex';

function App() {
    return (
        <div>
            <ReactPokedex />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
