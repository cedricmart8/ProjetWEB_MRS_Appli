import React, { Component } from 'react';
import logo from './data/logo.jpg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class MyProfil extends Component {



    render() {

        // console.log("test");
        // var getJSON = function(url, callback) {
        //     var xhr = new XMLHttpRequest();
        //     xhr.open('GET', 'http://localhost:8082', true);
        //     xhr.responseType = 'json';
        //     xhr.onload = function() {
        //       var status = xhr.status;
        //       console.log(status);
        //       if (status === 200) {
        //         callback(null, xhr.response);
        //       } else {
        //         callback(status, xhr.response);
        //       }
        //     };
        //     xhr.send();
        // };
        // getJSON;

        

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
                        <h2>Nom</h2>
                        <h2>Nom</h2>
                        <h2>Nom</h2>
                        <h2>Nom</h2>
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