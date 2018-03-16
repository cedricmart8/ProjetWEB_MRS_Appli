import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class ProfilVisiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userVisiter: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8082/user', {
            method: 'GET',
            headers: {
                'email': JSON.parse(sessionStorage.userVisiter).email,
                'Content-Type': 'application/json'
            }
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ user: data.interetsMusicaux });
        })
        fetch('http://localhost:8082/user', {
            method: 'GET',
            headers: {
                'email': JSON.parse(sessionStorage.user).email,
                'Content-Type': 'application/json'
            }
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ userVisiter: data.interetsMusicaux });
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
        let commun = this.state.userVisiter.map((commun) => {
            // console.log("user.name : " + user.name.replace("\"", "").replace("\"", "") + "   |   commun.name : " + commun.name.replace("\"", "").replace("\"", ""));
            // console.log(user.name.replace("\"", "").replace("\"", "") === commun.name.replace("\"", "").replace("\"", ""));
            return (
                <div className="buttonGenreMusique" style={{ backgroundImage: `url(${commun.picture})` }}>
                    <p style={{ marginTop: "40px", fontSize: "24px" }}>{commun.name.replace("\"", "").replace("\"", "")}</p>
                </div>
            )
        });
        console.log(commun);

        return (
            <form action="profil.html" method="post">
                <div className="blockTitle">
                    <h1> Profil de {JSON.parse(sessionStorage.userVisiter).nom} </h1>
                </div>
                <div className="blockMyProfil">
                    <div className="block2">
                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Nom : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.userVisiter).nom}</p>
                        </div>
                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Prenom : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.userVisiter).prenom}</p>
                        </div>
                        <div style={{ width: "40%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Date de naissance : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.userVisiter).dateNaissance}</p>
                        </div>
                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                            <h2 style={{ margin: "10px" }}>Age : </h2><p style={{ marginTop: "15px" }}>{JSON.parse(sessionStorage.userVisiter).age}</p>
                        </div>
                    </div>
                </div>
                <h1>Ses interets</h1>
                <div className="tableauListGenre">
                    {user}
                </div>
                <h1>Vos interets</h1>
                <div className="tableauListGenre">
                    {commun}
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