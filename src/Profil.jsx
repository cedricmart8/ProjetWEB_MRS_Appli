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
                        <h2 style={{margin:"10px"}}>Nom : </h2><p style={{margin:"10px"}}>{JSON.parse(sessionStorage.user).nom}</p>
                        <h2 style={{margin:"10px"}}>Prenom : </h2><p style={{margin:"10px"}}>{JSON.parse(sessionStorage.user).prenom}</p>
                        <h2 style={{margin:"10px"}}>Date de naissance : </h2><p style={{margin:"10px"}}>{JSON.parse(sessionStorage.user).dateNaissance}</p>
                        <h2 style={{margin:"10px"}}>Age : </h2><p style={{margin:"10px"}}>{JSON.parse(sessionStorage.user).age}</p>
                        <h2 style={{margin:"10px"}}>email : </h2><p style={{margin:"10px"}}>{JSON.parse(sessionStorage.user).email}</p>
                        <h2 style={{margin:"10px"}}>Adresse : </h2><p style={{margin:"10px"}}>{JSON.parse(sessionStorage.user).adresse}</p>
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