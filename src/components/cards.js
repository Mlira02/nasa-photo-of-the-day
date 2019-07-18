import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    max-width: 700px;
    max-height:900px;
    margin: 5px;
    border:2px solid black;
    border-radius:3px;

    img {
        max-width: 100%;
    }
     `

const Cards = (props) => {
    console.log(props);
    return ( 
        <CardContainer>
            <h2>{props.data.title}</h2>
            <img src={props.data.hdurl} alt={props.data.title} />
            <p>{props.data.explanation}</p>
        </CardContainer>
     );
}
 export default Cards;

