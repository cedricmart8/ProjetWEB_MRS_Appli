import React, { Component } from 'react';
import logo from './data/logo.jpg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class MyProfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }

    componentDidMount() {
        console.log("test");
        fetch('http://localhost:8082/allPersonne', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ user: data });
        })
    }

    render() {
        console.log(this.state.user);

        let users = this.state.user.map((user) => {
            return (
                <div>
                    <h2>Nom : {user.nom}</h2>
                    <h2>Prenom : {user.prenom}</h2>
                    <h2>Date de naissance : {user.dateNaissance}</h2>
                    <h2>Age : {user.age} </h2>
                    <h2> email : {user.email} </h2>
                    <h2> Adresse : {user.adresse} </h2>
                    <h2> Localisation Partager : {user.localisationPartage}</h2>
                    <h2> Profil Public : {user.profilPublic}</h2>
                    <h2> Photo : {user.photo} </h2>
                </div>
            )
        });

        return (
            <form action="profil.html" method="post">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <div className="blockMyProfil">
                    <div className="block1">
                        <img src={logo} className="photoProfil" alt="logo" />
                    </div>
                    <div className="block2">
                        {users[0]}
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
export default MyProfil;