import React,{ useState,useEffect, } from 'react';
import api from '../../services/api';
import { useParams,Link } from 'react-router-dom';
import { Container,FlexList,PokeName,StatusGrid } from './styled';

function Profile() {
    const [pokemonsInfos,setPokemonsInfos] = useState([]);
    // Pega o nome da Rota
    const { name } = useParams();
    useEffect(()=>{
        async function handlerSearchPokemon() {
            await api.get(`${name}`).then(response => {
                setPokemonsInfos([response.data]);
            })
        }

        handlerSearchPokemon();

    },[])

    return (
        <>
          {pokemonsInfos && pokemonsInfos.map((pokemonInfo) => (
              <Container key={pokemonInfo.id}>
                <FlexList>
                    <li><img src={pokemonInfo.sprites.front_default} /></li>
                    <li><img src={pokemonInfo.sprites.back_default} /></li>
                    <li><img src={pokemonInfo.sprites.front_female} /></li>
                    <li><img src={pokemonInfo.sprites.back_female} /></li>
                </FlexList>
                <PokeName>{pokemonInfo.name}</PokeName>
                <StatusGrid>
                    <div>
                        <h4>Height</h4>
                        <strong>{pokemonInfo.height}</strong>
                    </div>
                    <div>
                        <h4>Weight</h4>
                        <strong>{pokemonInfo.weight}</strong>
                    </div>
                    <div>
                        <h4>Skills</h4>
                        <strong>{pokemonInfo.abilities[0].ability.name}, {pokemonInfo.abilities[1].ability.name}</strong>
                    </div>
                    <div>
                        <h4>Type</h4>
                        <strong>{pokemonInfo.types[0].type.name}</strong>
                    </div>
                </StatusGrid>
                <Link to="/">
                    Voltar
                </Link>
              </Container>
          ))}
        </>
    )
}

export default Profile;