import axios from 'axios';

const api = axios.create({
    baseURL:"https://pokeapi.co/api/v2/pokemon/"
})

export function getList() {
    const list = localStorage.getItem("@pokemon");
    let parserPokemon = [];
    if(list) {
        parserPokemon = JSON.parse(list);
    }
    
    return parserPokemon;
}

function setList(list) {
    localStorage.setItem("@pokemon",JSON.stringify(list));
}

export async function searchPokemon(pokemon) {
    const { data } = await api.get(`${pokemon}`);
    const list = getList();
    list.push(data);
    setList(list); 
    return list;
}


export default api;