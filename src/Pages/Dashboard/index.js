import React, { useState, useEffect } from 'react';
import { Container, Search, Title,Button,ContainerGrid,PokeCard,PokeName} from './styled';
import { Link } from 'react-router-dom';
import api, { searchPokemon,getList } from '../../services/api';
function Dashboard() {

    const [pokemon,setPokemon] = useState('');
    const [pokemonsInfos,setPokemonsInfos] = useState([]);
    
    useEffect(()=> {
        setPokemonsInfos(getList());
    },[])

    async function handleSearchPokemon() {
        const data = await searchPokemon(pokemon);
        setPokemonsInfos(data);        
 
    }

    return (
        <Container>
            <Title>Pokemon Api</Title>
            <Search
                onChange={ (e) => setPokemon(e.target.value)}
                value={pokemon}
            />
            <Button onClick={handleSearchPokemon}>Search</Button>
            <ContainerGrid>
                {pokemonsInfos && pokemonsInfos.map((pokemonInfo,index) =>(
                    <PokeCard key={index}>
                        <img src={pokemonInfo.sprites.front_default} alt="Foto do pokemon"/>
                        <PokeName>{pokemonInfo.name}</PokeName>
                        <Link to={`/profile/${pokemonInfo.name}`}>
                            Ver detalhes
                        </Link>
                    </PokeCard>
                ))}
            </ContainerGrid>
        </Container>
    )
}

export default Dashboard;