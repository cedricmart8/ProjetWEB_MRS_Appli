import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';

class Modification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            motDePasse: "",
            dateNaissance: "",
            email: "",
            adresse: "",
            photo: "",
            profilPublic: false,
            localisationPartage: false,
            listePersonneVisiter: [],
            interetsMusicaux: [],
            openSnackbar: false,
            openSnackbar2: false
        };
        this.sendRequete = this.sendRequete.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    sendRequete(a) {
        console.log("OK");
        this.setState({ openSnackbar: true, });
        fetch('http://localhost:8082/modifUser', {
            method: 'PUT',
            headers: {
                'email': JSON.parse(sessionStorage.user).email,
                'nom': this.state.nom,
                'prenom': this.state.prenom,
                'dateNaissance': this.state.dateNaissance,
                'adresse': this.state.adresse,
                'motDePasse': this.state.motDePasse,
                'localisationPartage': this.state.localisationPartage,
                'profilPublic': this.state.profilPublic
            }
        })
        fetch('http://localhost:8082/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'email': JSON.parse(sessionStorage.user).email
            }
        }).then(results => {
            return results.json();
        }).then(data => {
            sessionStorage.setItem('user',  JSON.stringify(data));
        })
        sessionStorage.setItem('navigation', 5);
        return window.location.reload();
        // return null;
    }

    deleteUser(a) {
        console.log("OK");
        this.setState({ openSnackbar2: true, });
        fetch('http://localhost:8082/deleteUser', {
            method: 'DELETE',
            headers: {
                'email': JSON.parse(sessionStorage.user).email
            }
        })
        sessionStorage.setItem('navigation', 1);
        return window.location.reload();
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.localisationPartage);
        
    }

    handleRequestClose = () => {
        this.setState({ openSnackbar: false, openSnackbar2: false });
    };

    render() {
        return (
            <form action="profil.html" method="post">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <div className="blockInscription">
                    <div className="blockGauche">
                        <TextField floatingLabelText="Nom" defaultValue={JSON.parse(sessionStorage.user).nom} onChange={this.handleChange} name="nom" />
                        <br />
                        <TextField floatingLabelText="Prenom" defaultValue={JSON.parse(sessionStorage.user).prenom} onChange={this.handleChange} name="prenom" />
                        <br />
                        <TextField floatingLabelText="Mot de passe" defaultValue={JSON.parse(sessionStorage.user).motDePasse} name="motDePasse" onChange={this.handleChange} type="password" />
                        <br />
                        <TextField floatingLabelText="Email" name="email" defaultValue={JSON.parse(sessionStorage.user).email} onChange={this.handleChange} />
                        <br />
                    </div>
                    <div className="blockCentrale">
                        <TextField floatingLabelText="Adresse" name="adresse" defaultValue={JSON.parse(sessionStorage.user).adresse} onChange={this.handleChange} />
                        <br />
                        <TextField floatingLabelText="Date de naissane" name="dateNaissance" defaultValue={JSON.parse(sessionStorage.user).dateNaissance} onChange={this.handleChange} errorText="format : jj/mm/aaaa" />
                        {/* <DatePicker floatingLabelText="Date de naissane" mode="landscape" defaultValue={this.state.dateNaissance}/> */}
                        <br />
                        <div className="toggle">
                            <Toggle label="Compte publique" name="profilPublic" onChange={this.handleChange} />
                        </div>
                        <br />
                        <div className="toggle">
                            <Toggle label="Autoriser la localisation" name="localisationPartage" defaultToggled={true} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <br />
                <div className="blockButton">
                    <RaisedButton label="Modification" onClick={this.sendRequete} />
                    <RaisedButton label="Supprimer Compte" backgroundColor="red" onClick={this.deleteUser} />
                    <Snackbar open={this.state.openSnackbar} message="Modifier !" autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
                    <Snackbar open={this.state.openSnackbar2} message="Compte supprimer !" autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
                </div>
            </form >
        )
    }
};
export default Modification;