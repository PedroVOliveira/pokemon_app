import styled from 'styled-components';

export const Container = styled.div`
    max-width:1024px;
    padding-left:15px;
    padding-right:15px;
    margin:0 auto;
    font-family:'Roboto', sans-serif;
    margin-top:80px;

    button {
        width:100%;
        margin:20px 0;
        text-decoration:none;
        color:lightcoral;
        border:0;
        background:transparent;
        outline:none;
    }
`
export const StatusGrid = styled.div`
    display:grid;
    grid-template-columns:300px 100px;
    background-color:#f0f0f0;
    padding:20px;
    margin-top:20px;
    border-radius:8px;

    h4 {
        margin-top:10px;
        margin-bottom:10px;
    }

    strong {
        
    }
`

export const FlexList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;

`
export const PokeName = styled.h2`
    font-size:26pt;
    text-align:center;
`