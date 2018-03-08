import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

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
            openSnackbar: false
        };
        this.sendRequete = this.sendRequete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.verifIfEmpty = this.verifIfEmpty.bind(this);
    }

    sendRequete(a) {
        if (this.verifIfEmpty() === false) {
            console.log("error");
        } else {
            console.log("OK");
            this.setState({ openSnackbar: true, });
            return fetch('http://localhost:8082/modifUser', {
                    method: 'PUT',
                    mode: 'no-cors',
                headers: {
                    'id': '5aa0011be22a282458fb1eef'
                }
            })
        }

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    verifIfEmpty(e) {
        // eslint-disable-next-line
        if (this.state.nom == 0 || this.state.prenom == 0 || this.state.dateNaissance == 0 || this.state.email == 0) {
            return true;
        } else {
            return true;
        }
    }

    handleRequestClose = () => {
        this.setState({ openSnackbar: false, });
    };

    render() {
        return (
            <form action="profil.html" method="post">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <div className="blockInscription">
                    <div className="blockGauche">
                        <TextField floatingLabelText="Nom" defaultValue={this.state.nom} name="nom" />
                        <br />
                        <TextField floatingLabelText="Prenom" defaultValue={this.state.prenom} name="prenom" />
                        <br />
                        <TextField floatingLabelText="Mot de passe" defaultValue={this.state.motDePasse} name="motDePasse" type="password" />
                        <br />
                        <TextField floatingLabelText="Email" name="email" defaultValue={this.state.email} />
                        <br />
                    </div>
                    <div className="blockCentrale">
                        <TextField floatingLabelText="Adresse" name="adresse" defaultValue={this.state.adresse} />
                        <br />
                        <TextField floatingLabelText="Date de naissane" name="dateNaissance" defaultValue={this.state.dateNaissance} onChange={this.handleChange} errorText="format : jj/mm/aaaa" />
                        {/* <DatePicker floatingLabelText="Date de naissane" mode="landscape" defaultValue={this.state.dateNaissance}/> */}
                        <br />
                        <div className="toggle">
                            <Toggle label="Compte publique" name="profilPublic" />
                        </div>
                        <br />
                        <div className="toggle">
                            <Toggle label="Autoriser la localisation" name="localisationPartage" defaultToggled={true} />
                        </div>
                    </div>
                </div>
                <br />
                <div className="blockButton">
                    <RaisedButton label="Modification" onClick={this.sendRequete} />
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