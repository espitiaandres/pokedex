import React, { Component } from 'react'
import pokeball from '../Images/pokeball.png';

export class Pokeballs extends Component {
    render() {
        return <span>
        {function () {
            let rows = [];
            for (let i=0; i < 8; i++) {
                rows.push(<img src={pokeball} className="pokeball"/>);
            }
            return rows;
        }() }
        </span>
    }
}

export default Pokeballs
