import React, { useState, useEffect } from 'react';
import { Container, Search, Title,Button,ContainerGrid,PokeCard,PokeName} from './styled';
import { Link } from 'react-router-dom';
import api from '../../services/api';
function Dashboard() {

    const [pokemon,setPokemon] = useState('');
    const [pokemonsInfos,setPokemonsInfos] = useState([]);

    async function handleSearchPokemon() {
        
        await api.get(`${pokemon}`).then(response =>{
            if(pokemonsInfos.length < 0) {
                setPokemonsInfos([response.data]);
            }
            setPokemonsInfos([...pokemonsInfos,response.data]);
            console.log(response.data);
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
                    {pokemonsInfos.map((pokemonInfo,index) =>(
                        
                        <PokeCard key={pokemonInfo.id}>
                            <img src={pokemonInfo.sprites.front_default} alt={'Foto do pokemon'}/>
                            <PokeName>{pokemonInfo.name}</PokeName>
                            <Link to="`/profile/${pokemonInfo.id}`">
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