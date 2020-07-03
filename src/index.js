import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StaticView from './Components/StaticView/StaticView';
import HorizontalGrid from './Components/HorizontalGrid/HorizontalGrid';
import dog from './Images/ColdDog.png';

class App extends Component{
  render(){
    return(
      <div className = "container">
        <StaticView/>
        <div id="cardapio">
          <HorizontalGrid image = {dog} name="Hot Classico" info="coma algo que voce nunca comeu. Ree eh" price = "R$ 200,00"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);




