import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home/Home';
import Button from './Components/Button/Button';

class App extends Component{
  render(){
    return(
      <div className = "container">
        <h2>oi meu nome é alex</h2>
        <Home name="dasjdlkasdjlasjdklasjdlk" nomePai="penelope"/>
        <div id="alex">
          <Button id ="alex1"nome="Adicionar"/>
          <Button id="alex" nome = "Menu"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);




