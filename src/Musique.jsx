import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class Musique extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musique: [],
            email: "",
            idGenreMusical: ""
        };
    }

    componentDidMount() {
        console.log("test");
        fetch('http://localhost:8082/allGenreMusical', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ musique: data });
        })
    }

    handleSubmit(e) {
        console.log("e : " + e);
        this.setState({ idGenreMusical: e });

        fetch('http://172.17.0.24:8082/addGenreMusical', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'email': JSON.parse(sessionStorage.user).email,
                'idGenreMusical': this.state.idGenreMusical
            }
        }).then(results => {
            return results;
        }).then(data => {
            return "test";
        })
    }


    render() {
        

        let musique = this.state.musique.map((musique) => {
            return (
                <div className="buttonGenreMusique" onClick={this.handleSubmit.bind(this, musique._id)} style={{ backgroundImage: `url(${musique.picture})` }}>
                    <p style={{ marginTop: "40px", fontSize: "24px" }}>{musique.name.replace("\"", "").replace("\"", "")}</p>
                </div>
            )
        });

        console.log("state : " + this.state.idGenreMusical);

        return (
            <div className="blockConnexion">
                <div className="tableauListGenre">
                    {musique}
                </div>
                <br />
                <RaisedButton label="OK" onClick={this.props.navig(2)} />
                <br />
            </div>
        )
    }
};
export default Musique;