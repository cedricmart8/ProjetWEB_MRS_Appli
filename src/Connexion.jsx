import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Connexion extends Component {
    render() {
        return (
            <div className="blockConnexion">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <form action="profil.html" method="post">
                    <TextField hintText="Email" name="mailConnexion" required />
                    <br />
                    <TextField hintText="Password" name="password" type="password" required />
                    <br />
                    <br />
                    <RaisedButton label="Connexion" />
                </form >
                <br />
                <RaisedButton label="Inscription" onClick={this.props.change(2)} />
                <br />
                <br />
                <a href="./motdepasseOublier" id="mdpforgot">Mot de passe oublié ?</a>
            </div>
        )
    }
};
export default Connexion;