import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Connexion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            mdp: "",
            result: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8082/connexion', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'email': this.state.email,
                'mdp': this.state.mdp
            }
        }).then(results => {
            console.log(results);
            
            return results;
        }).then(data => {
            console.log(data.body);
            
            this.setState({ result: data.body });
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {    
        console.log("email : " + this.state.email + "  |  mdp : " + this.state.mdp);
        console.log("result : " + this.state.result);
        
        
        return (
            <div className="blockConnexion">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <form action="profil.html" method="post">
                    <TextField floatingLabelText="Email" name="email" onChange={this.handleChange} errorText="Obligatoire" />
                    <br />
                    <TextField floatingLabelText="Password" name="mdp" onChange={this.handleChange} type="password" errorText="Obligatoire" />
                    <br />
                    <br />
                    <RaisedButton label="Connexion" onClick={this.handleSubmit} />
                </form >
                <br />
                <RaisedButton label="Inscription" onClick={this.props.navig(2)} />
                <br />
                {/* <br />
                <a href="./motdepasseOublier" id="mdpforgot">Mot de passe oublié ?</a> */}
            </div>
        )
    }
};
export default Connexion;