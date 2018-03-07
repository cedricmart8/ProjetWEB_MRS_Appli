import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

class Modification extends Component {
    render() {
        return (
            <form action="profil.html" method="post">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <div className="blockInscription">
                    <div className="blockGauche">
                        <TextField hintText="Nom" name="nomInscription" required />
                        <br />
                        <TextField hintText="Prenom" name="prenomInscription" required />
                        <br />
                        <TextField hintText="Mot de passe" name="motdepasseInscription" type="password" required />
                        <br />
                        <TextField hintText="Email" name="mailInscription" required />
                        <br />
                    </div>
                    <div className="blockCentrale">
                        <TextField hintText="Adresse" name="adresseInscription" required />
                        <br />
                        <DatePicker hintText="Date de naissane" mode="landscape" />
                        <br />
                        <div className="toggle">
                            <Toggle label="Compte publique" />
                        </div>
                        <br />
                        <div className="toggle">
                            <Toggle label="Autoriser la localisation" defaultToggled={true} />
                        </div>
                    </div>
                </div>
                <br />
                <div className="blockButton">
                    <RaisedButton label="Modification" onClick={this.props.navig(1)}/>
                    <RaisedButton label="Supprimer Compte" backgroundColor="red" onClick={this.props.navig(10)} />
                </div>
                <br />
                {/* <div>
                    <img src={logo} className="logoInscription" alt="logo" />
                </div> */}
            </form >
        )
    }
};
export default Modification;