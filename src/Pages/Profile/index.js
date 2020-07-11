import React,{ useState,useEffect, } from 'react';
import api, {getList} from '../../services/api';
import { useParams,Link, useHistory } from 'react-router-dom';
import { Container,FlexList,PokeName,StatusGrid } from './styled';

function Profile() {
    const [pokemonsInfos,setPokemonsInfos] = useState(null);
    // Pega o nome da Rota
    const { name } = useParams();
    const history = useHistory();

    useEffect(()=>{
        const list = getList();
        const pokemon = list.find((poke) => poke.name === name);
        setPokemonsInfos(pokemon);
    },[name])

    return (
        <>
          {pokemonsInfos && (
              <Container>
                <FlexList>
                    <li><img src={pokemonsInfos.sprites.front_default} /></li>
                    <li><img src={pokemonsInfos.sprites.back_default} /></li>
                    <li><img src={pokemonsInfos.sprites.front_female} /></li>
                    <li><img src={pokemonsInfos.sprites.back_female} /></li>
                </FlexList>
                <PokeName>{pokemonsInfos.name}</PokeName>
                <StatusGrid>
                    <div>
                        <h4>Height</h4>
                        <strong>{pokemonsInfos.height}</strong>
                    </div>
                    <div>
                        <h4>Weight</h4>
                        <strong>{pokemonsInfos.weight}</strong>
                    </div>
                    <div>
                        <h4>Skills</h4>
                        <strong>{pokemonsInfos.abilities[0].ability.name}, {pokemonsInfos.abilities[1].ability.name}</strong>
                    </div>
                    <div>
                        <h4>Type</h4>
                        <strong>{pokemonsInfos.types[0].type.name}</strong>
                    </div>
                </StatusGrid>
                <button onClick={history.goBack}>Voltar</button>
              </Container>
          )}
        </>
    )
}

export default Profile;