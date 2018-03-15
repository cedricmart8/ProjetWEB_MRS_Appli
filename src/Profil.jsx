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

    componentDidMount() {
        fetch('http://localhost:8082/user', {
            method: 'GET',
            headers: {
                'email': JSON.parse(sessionStorage.user).email,
                'Content-Type': 'application/json'
            }
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ user: data.interetsMusicaux });
        })
    }

    render() {
        let user = this.state.user.map((user) => {
            return (
                <div className="buttonGenreMusique" style={{ backgroundImage: `url(${user.picture})` }}>
                    <p style={{ marginTop: "40px", fontSize: "24px" }}>{user.name.replace("\"", "").replace("\"", "")}</p>
                </div>
            )
        });

        return (
            <form action="profil.html" method="post">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <div className="blockMyProfil">
                    <div className="block2">
                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Nom : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.user).nom}</p>
                        </div>
                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Prenom : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.user).prenom}</p>
                        </div>
                        <div style={{ width: "40%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Date de naissance : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.user).dateNaissance}</p>
                        </div>
                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Age : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.user).age}</p>
                        </div>
                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>email : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.user).email}</p>
                        </div>
                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Adresse : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.user).adresse}</p>
                        </div>
                    </div>
                </div>
                <div className="tableauListGenre">
                    {user}
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