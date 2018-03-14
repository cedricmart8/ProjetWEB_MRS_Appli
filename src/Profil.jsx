import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }

    render() {
        return (
            <form action="profil.html" method="post">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <div className="blockMyProfil">
                    <div className="block2">
                        <div>
                            <h2>Nom : </h2>{JSON.parse(sessionStorage.user).nom}
                            <h2>Prenom : </h2>{JSON.parse(sessionStorage.user).prenom}
                            <h2>Date de naissance : </h2>{JSON.parse(sessionStorage.user).dateNaissance}
                            <h2>Age : </h2>{JSON.parse(sessionStorage.user).age}
                            <h2>email : </h2>{JSON.parse(sessionStorage.user).email}
                            <h2>Adresse : </h2>{JSON.parse(sessionStorage.user).adresse}
                            <h2>Localisation Partager : </h2>{JSON.parse(sessionStorage.user).localisationPartage}
                            <h2>Profil Public : </h2>{JSON.parse(sessionStorage.user).profilPublic}
                        </div>
                    </div>
                </div>
                <br />
                <div className="blockButton">
                    <RaisedButton label="Modification" onClick={this.props.navig(3)} />
                </div>
            </form >
        )
    }
};
export default Profil;