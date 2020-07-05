import React,{ useState,useEffect } from 'react';
import api from '../../services/api';


function Profile() {
    const [pokemon,setPokemon] = useState("");
    const [pokemonsInfos,setPokemonsInfos] = useState([]);
    

    useEffect(()=>{
        console.log('testando');
    },[])
    return (
        <>
        
          <h1>Teste</h1>  
        </>
    )
}

export default Profile;