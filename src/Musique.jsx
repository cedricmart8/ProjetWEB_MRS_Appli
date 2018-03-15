import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

class Musique extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musique: [],
            email: "",
            idGenreMusical: "",
            openSnackbar: false
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

        fetch('http://localhost:8082/addGenreMusical', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'email': JSON.parse(sessionStorage.user).email,
                'idGenreMusical': this.state.idGenreMusical
            }
        }).then(results => {
            return results;
        }).then(data => {
            this.setState({openSnackbar: true});
            return "test";            
        })
    }

    handleRequestClose = () => {
        this.setState({ openSnackbar: false });
    };


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
                <RaisedButton label="OK" onClick={this.props.navig(5)} />
                <br />                
                <Snackbar open={this.state.openSnackbar} message="Ajouté !" autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
            </div>
        )
    }
};
export default Musique;