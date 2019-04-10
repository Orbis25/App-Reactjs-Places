import React, { Component } from 'react';
import './App.css';
//importando libs material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Title from './components/Title.jsx';
class App extends Component {

  /**
   * 
   * @param {*} props representa las props pasadas
   */
  constructor(props){
    super(props);

    //objeto especial que guarda datos modelo de datos de React
    this.state = {
      numero:0
    };

    //misma funcion para mantener el this
    this.updateNumber = this.updateNumber.bind(this);

  }

  updateNumber(){
    this.setState({
      numero:this.state.numero+1
    })
  }

  render() {
    return (
      <MuiThemeProvider>
          <div className="app-back">
          <div style={{"width":"80%","margin":"0 auto"}}>
          <div className="header-main">
          <Title></Title>
          <h2>{this.state.numero}</h2>
              <RaisedButton label="Crear cuenta gratuita aqui" primary={true}></RaisedButton>
              <img src={process.env.PUBLIC_URL + '/images/map-location.png'} className="header-imagen"/>
            </div>
            <div>
            </div>
              <ul>
                <li>
                  <h3>Califica con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con numeros</p>
                </li>
                <li>
                  <h3>Sin internet? Sin problemas</h3>
                  <p>Places funciona sin internet o en conexiones inestables</p>
                </li>
                <li>
                  <h3>Tus lugares Favoritos</h3>
                  <p>Define tus lugares favoritos</p>
                </li>
              </ul>
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
