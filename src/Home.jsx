import React, { Component } from 'react';
import './App.css';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
let localisationUser;
let latitude;
let longitude;

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBetIPhBYycYZYvXxuTfeVUdgiXhe9cCOc&callback=initMap",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div className="blockMap" />,
        mapElement: <div style={{ height: `100%` }} />
    }), withScriptjs, withGoogleMap
)(props => (
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 47.214262, lng: -1.551431 }}>
        {localisationUser}
    </GoogleMap>
));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: true,
            showRowHover: false,
            selectable: true,
            showCheckboxes: false,
            height: '300px',
            email: "",
            lat: "",
            lng: "",
            user: []
        };
    }

    componentDidMount() {
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

    handleSubmit(e) {
        console.log("e : " + e);

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
            return "test";
        })
    }

    test(e) {
        console.log(e);
    }


    render() {
        console.log(navigator.geolocation);
        
        if (navigator.geolocation) {            
            navigator.geolocation.getCurrentPosition((position) => {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };                
                console.log("latitude : " + pos.lat + "  | lng  : " + pos.lng);
                console.log("test2");
            });
            
        }

        localisationUser = this.state.user.map((user) => {
            // console.log(user.nom + "  :  " + user.localisation);
            // console.log(Object.values(user.localisation)[0]);
            latitude = Object.values(user.localisation)[0];
            longitude = Object.values(user.localisation)[1];
            return (
                <Marker onClick={this.test.bind(this, user.email)} label={user.nom} position={{ lat: latitude, lng: longitude }} />
            )
        });
        return (
            <div className="blockHome">
                <br />
                <div className="block1Home">
                    <div className="block3Home">
                        <Table height="400px" fixedHeader={this.state.fixedHeader} selectable={this.state.selectable}>
                            <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
                                <TableRow>
                                    <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                        Personne
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip="Nom">Nom</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Prenom">Prenom</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Age">Age</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                                {this.state.user.map((row, index) => (
                                    <TableRow>
                                        <TableRowColumn>{row.nom}</TableRowColumn>
                                        <TableRowColumn>{row.prenom}</TableRowColumn>
                                        <TableRowColumn>{row.age}</TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <MyMapComponent isMarkerShown />
                    {/* <div className="block2Home">
                        <Table height="300px" fixedHeader={this.state.fixedHeader} selectable={this.state.selectable}   >
                            <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
                                <TableRow>
                                    <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                        Personne Proche
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Nom">Nom</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Prenom">Prenom</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Age">Age</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                                {this.state.user.map((row, index) => {
                                    // this.setState({email: row.email});
                                    return (
                                        <TableRow key={index}>
                                            <TableRowColumn>{index}</TableRowColumn>
                                            <TableRowColumn>{row.nom}</TableRowColumn>
                                            <TableRowColumn>{row.prenom}</TableRowColumn>
                                            <TableRowColumn>{row.age}</TableRowColumn>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div> */}
                </div>
            </div>
        )
    }
};
export default Home;