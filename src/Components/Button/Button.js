import React from 'react';
import './Button.css';

const Button = (props) =>{
    return <button  id = {props.id} className="buttonComponent">{props.name}</button>
}

export default Button;