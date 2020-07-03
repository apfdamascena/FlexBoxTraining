import React from 'react';
import logo from '../../Images/logoxace.png'
import Button from '../Button/Button';
import './StaticView.css'


const StaticView = () => {
    return(
        <div className= "container">
            <div className="staticView">
                <img id="logoImage"src = {logo}/>
                <Button id = "searchBar"name = "Pesquisar"/>
            </div>
            <div id="content">
                <h2>Cardápio</h2>
            </div>
            <div id="footer">
                <p id="footerContent"><strong>Made with React</strong></p>
            </div>
        </div>
    );
}

export default StaticView;