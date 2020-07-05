import styled from 'styled-components';


export const Container = styled.div`
    max-width:1024px;
    padding-left:15px;
    padding-right:15px;
    margin:0 auto;
    font-family:'Roboto', sans-serif;
`
export const Title = styled.h1`
    font-size:26pt;
    color:lightcoral;
    margin:30px 0;
`

export const Search = styled.input`
    width:700px;
    padding:10px 10px;
    border:2px solid lightcoral;
    border-radius:2px;   
`

export const Button = styled.a`
    background-color:lightcoral;
    color:#fff;
    padding:11px 22px;
    border:0;
    border-radius:3px;
    margin-left:5px;
`
export const ContainerGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    max-width:700px;
    margin-left:30px;
`
export const PokeCard = styled.div`
    width:150px;
    height:150px;
    box-shadow:0px 0px 5px 3px #f0f0f0;
    border:1px solid;
    border-radius:8px;
    box-sizing:border-box;
    margin-top:30px;
    padding:12px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    
    h3 {
        margin-top:-15px;
        margin-bottom:5px;
    }
    a {
        text-decoration:none;
        color:lightcoral;
        font-size:12pt;
        margin-bottom:20px;
    }
`
export const PokeName = styled.h3`
    font-size:16pt;
    color:#000;
`
