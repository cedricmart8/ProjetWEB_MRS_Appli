import React, { Component } from 'react';
import logo from './data/logo.jpg';
import './App.css';
import Connexion from './Connexion.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Inscription from './Inscription.jsx';
import Modification from './Modification';
import MyProfil from './MyProfil';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
let res;

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
      res = <MyProfil name="MyProfil" navig={this.handleClick} />
    } else {
      res = <Connexion name="Connexion" navig={this.handleClick} />
    }
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <div className="buttonHeader">
              <RaisedButton label="Menu" onClick={this.handleToggle} className="App-Menu" />
              <Drawer open={this.state.open}>
                <RaisedButton label="Close" onClick={this.handleToggleClose} className="buttonMenu" />
                <MenuItem onClick={this.handleClick(1)}>Connexion</MenuItem>
                <MenuItem onClick={this.handleClick(2)}>Inscription</MenuItem>
                <MenuItem onClick={this.handleClick(3)}>Modification</MenuItem>
                <MenuItem onClick={this.handleClick(4)}>MyProfil</MenuItem>
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