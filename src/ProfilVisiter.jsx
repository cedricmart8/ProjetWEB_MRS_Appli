import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class ProfilVisiter extends Component {
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
                        <h2 style={{ margin: "10px" }}>Nom : </h2><p style={{ margin: "10px" }}>{JSON.parse(sessionStorage.userVisiter).nom}</p>
                        <h2 style={{ margin: "10px" }}>Prenom : </h2><p style={{ margin: "10px" }}>{JSON.parse(sessionStorage.userVisiter).prenom}</p>
                        <h2 style={{ margin: "10px" }}>Date de naissance : </h2><p style={{ margin: "10px" }}>{JSON.parse(sessionStorage.userVisiter).dateNaissance}</p>
                        <h2 style={{ margin: "10px" }}>Age : </h2><p style={{ margin: "10px" }}>{JSON.parse(sessionStorage.userVisiter).age}</p>
                        <h2 style={{ margin: "10px" }}>email : </h2><p style={{ margin: "10px" }}>{JSON.parse(sessionStorage.userVisiter).email}</p>
                        <h2 style={{ margin: "10px" }}>Adresse : </h2><p style={{ margin: "10px" }}>{JSON.parse(sessionStorage.userVisiter).adresse}</p>
                    </div>
                </div>
                <br />
                <div className="blockButton">
                    <RaisedButton label="Retour" onClick={this.props.navig(5)} />
                </div>
            </form >
        )
    }
};
export default ProfilVisiter;