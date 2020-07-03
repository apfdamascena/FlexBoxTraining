import React from 'react';
import './Home.css';

const Home = (props) => {
    return(
        <div className="container">
            <h2 id="testinho">meu nome é {props.name}</h2>
            <h3 id= "bundinha">meu pai se chama {props.nomePai}</h3>
        </div>
    );
}

export default Home;

