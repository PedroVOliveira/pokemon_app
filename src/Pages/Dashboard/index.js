import React, { useState, useEffect } from 'react';
import { Container, Search, Title,Button,ContainerGrid,PokeCard,PokeName} from './styled';
import { Link } from 'react-router-dom';
import api from '../../services/api';
function Dashboard() {

    const [pokemon,setPokemon] = useState('');
    const [pokemonsInfos,setPokemonsInfos] = useState([]);
    
    useEffect(()=>{
        if(pokemonsInfos!== []) {
            // Pega os Itens em local Storage
            const pokemonStorage = localStorage.getItem("@pokemon");
            const parserPokemon = JSON.parse(pokemonStorage);
            setPokemonsInfos(parserPokemon);
        }

    },[])

    async function handleSearchPokemon(e) {
        e.preventDefault();
        await api.get(`${pokemon}`).then(response =>{
            let parserPokemon;
            if(pokemonsInfos) {
                setPokemonsInfos([...pokemonsInfos,response.data]);
                parserPokemon = JSON.stringify([...pokemonsInfos,response.data]);
                localStorage.setItem("@pokemon",parserPokemon);
            } else {
                setPokemonsInfos([response.data]);
                parserPokemon = JSON.stringify([response.data]);
                localStorage.setItem("@pokemon", parserPokemon);
            }

        }); 
    }



    return (
        <>
            <Container>
                <Title>Pokemon Api</Title>
                <Search
                    onChange={ (e) => setPokemon(e.target.value)}
                    value={pokemon}
                />
                <Button href="#" onClick={handleSearchPokemon}>Search</Button>
                <ContainerGrid>
                    {pokemonsInfos && pokemonsInfos.map((pokemonInfo,index) =>(
                        
                        <PokeCard key={pokemonInfo.id}>
                            <img src={pokemonInfo.sprites.front_default} alt="Foto do pokemon"/>
                            <PokeName>{pokemonInfo.name}</PokeName>
                            <Link to={`/profile/${pokemonInfo.name}`}>
                                Ver detalhes
                            </Link>
                        </PokeCard>
                    ))}
                </ContainerGrid>
            </Container>
        </>
    )
}

export default Dashboard;