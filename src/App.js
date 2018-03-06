import React, { Component } from 'react';
import logo from './data/logo.jpg';
import './App.css';
import Connexion from './Connexion.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Inscription from './Inscription.jsx';
import Modification from './Modification';
let res;

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { name: "", navigation: sessionStorage.getItem('navigation') };
  }

  handleChange(i) {
    sessionStorage.setItem('navigation', i);
  }

  render() {
    console.log("navigation : " + this.state.navigation);
    if (parseInt(this.state.navigation, 10) === 2) {
      res = <Inscription name="Inscription" change={this.handleChange} />
    } else if (parseInt(this.state.navigation, 10) === 3) {
      res = <Modification name="Modification" change={this.handleChange} />
    } else {
      res = <Connexion name="Connexion" change={this.handleChange}/>
    }
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          {res}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
