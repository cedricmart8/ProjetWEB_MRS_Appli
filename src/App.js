import React, { Component } from 'react';
import logo from './data/logo.png';
import './App.css';
import Connexion from './Connexion.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Inscription from './Inscription.jsx';
import Modification from './Modification';
import Profil from './Profil';
import Home from './Home';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Musique from './Musique'
import ProfilVisiter from './ProfilVisiter';
let res;
let menu;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      navigation: sessionStorage.getItem('navigation'),
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleToggle = () => this.setState({ open: true });
  handleToggleClose = () => this.setState({ open: false });

  handleClick(a) {
    return function (e) {
      console.log('Click happened' + a);
      sessionStorage.setItem('navigation', a);
      window.location.reload();
    }
  }

  render() {
    console.log("navigation : " + this.state.navigation);
    if (parseInt(this.state.navigation, 10) === 2) {
      res = <Inscription name="Inscription" navig={this.handleClick} />
    } else if (parseInt(this.state.navigation, 10) === 3) {
      res = <Modification name="Modification" navig={this.handleClick} />
    } else if (parseInt(this.state.navigation, 10) === 4) {
      res = <Profil name="Profil" navig={this.handleClick} />
    } else if (parseInt(this.state.navigation, 10) === 5) {
      res = <Home name="Home" navig={this.handleClick} />
    } else if (parseInt(this.state.navigation, 10) === 6) {
      res = <Musique name="Musique" navig={this.handleClick} />
    } else if (parseInt(this.state.navigation, 10) === 7) {
      sessionStorage.clear();
      this.handleClick(1);
      window.location.reload();
    } else if (parseInt(this.state.navigation, 10) === 8) {
      res = <ProfilVisiter name="ProfilVisiter" navig={this.handleClick}/>
    } else {
      res = <Connexion name="Connexion" navig={this.handleClick} />
    }

    if (sessionStorage.user == null) {
      menu = <div><MenuItem onClick={this.handleClick(1)}>Connexion</MenuItem>
        <MenuItem onClick={this.handleClick(2)}>Inscription</MenuItem></div>
    } else {
      menu = <div><MenuItem onClick={this.handleClick(7)}>Deconnexion</MenuItem>
        <MenuItem onClick={this.handleClick(3)}>Modification</MenuItem>
        <MenuItem onClick={this.handleClick(4)}>Profil</MenuItem>
        <MenuItem onClick={this.handleClick(5)}>Carte</MenuItem>
        <MenuItem onClick={this.handleClick(6)}>Musique</MenuItem></div>
    }
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <div className="buttonHeader">
              <RaisedButton label="Menu" onClick={this.handleToggle} className="App-Menu" />
              <Drawer open={this.state.open}>
                <RaisedButton label="Close" onClick={this.handleToggleClose} className="buttonMenu" />

                {menu}
              </Drawer>
            </div>
            <div className="imgHeader">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </header>
          {res}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
