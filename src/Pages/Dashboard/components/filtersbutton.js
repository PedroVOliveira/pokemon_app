import React,{useState} from 'react';
import { FiltersComponents } from '../styled';
function Filters() {

    const buttons = [
        {
            name: "All",
            value: "all"
        },
        {
            name: "Fire",
            value: "fire"
        },
        {
            name: "Water",
            value: "water"
        },
        {
            name: "Rock",
            value: "rock"
        },
        {
            name: "Poison",
            value: "poison"
        }

    ]   
    function filter(e) {
        let variavel = e.target.value;
        console.log(variavel);
    }

    return (
        <FiltersComponents>
            {buttons && buttons.map(({name,value},index) => (
                <button
                  key={index}
                  value={value}
                  onClick={filter}
                >
                  {name}  
                </button>
            ))}
        </FiltersComponents>
    )
}

export default Filters;