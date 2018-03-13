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
        return fetch('http://localhost:8082/modifUser', {
            method: 'PUT',
            headers: {
                'email': 'cedricmart8@gmail.com',
                'nom': this.state.nom,
                'prenom': this.state.prenom,
                'dateNaissance': this.state.dateNaissance,
                'adresse': this.state.adresse,
                'motDePasse': this.state.motDePasse,
                'localisationPartage': this.state.localisationPartage,
                'profilPublic': this.state.profilPublic
            }
        })
    }

    deleteUser(a) {
        console.log("OK");
        this.setState({ openSnackbar2: true, });
        return fetch('http://localhost:8082/deleteUser', {
            method: 'DELETE',
            headers: {
                'email': 'sam@lmzkf.zf'
            }
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleRequestClose = () => {
        this.setState({ openSnackbar: false, openSnackbar2: false});
    };

    render() {
        return (
            <form action="profil.html" method="post">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <div className="blockInscription">
                    <div className="blockGauche">
                        <TextField floatingLabelText="Nom" defaultValue={this.state.nom} onChange={this.handleChange} name="nom" />
                        <br />
                        <TextField floatingLabelText="Prenom" defaultValue={this.state.prenom} onChange={this.handleChange} name="prenom" />
                        <br />
                        <TextField floatingLabelText="Mot de passe" defaultValue={this.state.motDePasse} name="motDePasse" onChange={this.handleChange} type="password" />
                        <br />
                        <TextField floatingLabelText="Email" name="email" defaultValue={this.state.email} onChange={this.handleChange} />
                        <br />
                    </div>
                    <div className="blockCentrale">
                        <TextField floatingLabelText="Adresse" name="adresse" defaultValue={this.state.adresse} onChange={this.handleChange} />
                        <br />
                        <TextField floatingLabelText="Date de naissane" name="dateNaissance" defaultValue={this.state.dateNaissance} onChange={this.handleChange} errorText="format : jj/mm/aaaa" />
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