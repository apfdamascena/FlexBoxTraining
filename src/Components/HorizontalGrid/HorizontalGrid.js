import React from 'react';
import './HorizontalGrid.css';
import Button from '../Button/Button';

const HorizontalGrid = (props) =>{
    return(
        <div className="containerHorizontalGrid">
            <img src = {props.image}></img>
            <div className="info">
                <h2>{props.name}</h2>
                <p>{props.info}</p>
                <h1>{props.price}</h1>
            </div>
            <Button name = "Adicionar"/>             
        </div>
    );
}

export default HorizontalGrid;