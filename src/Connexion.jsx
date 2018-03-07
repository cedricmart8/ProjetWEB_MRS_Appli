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
                    <TextField hintText="Email" name="mailConnexion" errorText="This field is required"/>
                    <br />
                    <TextField hintText="Password" name="password" type="password" />
                    <br />
                    <br />
                    <RaisedButton label="Connexion" onClick={this.props.navig(4)} />
                </form >
                <br />
                <RaisedButton label="Inscription" onClick={this.props.navig(2)} />
                <br />
                <br />
                <a href="./motdepasseOublier" id="mdpforgot">Mot de passe oublié ?</a>
            </div>
        )
    }
};
export default Connexion;