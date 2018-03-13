import React, { Component } from 'react';
import './App.css';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBetIPhBYycYZYvXxuTfeVUdgiXhe9cCOc&callback=initMap",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div className="blockMap" />,
        mapElement: <div style={{ height: `100%` }} />
    }), withScriptjs, withGoogleMap
)(props => (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: 47.214262, lng: -1.551431 }}>
        <Marker position={{ lat: 47.214262, lng: -1.551431 }} />
        <Marker position={{ lat: 47.204105, lng: -1.543529 }} />
        <Marker position={{ lat: 47.201667, lng: -1.572221 }} />
    </GoogleMap>
));

class Home extends Component {

    state = {
        fixedHeader: true,
        showRowHover: false,
        selectable: true,
        showCheckboxes: false,
        height: '300px',
        user: []
    };

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
        return (
            <div className="blockHome">
                <br />
                <div className="block1Home">
                    <div className="block3Home">
                        <Table height="400px" fixedHeader={this.state.fixedHeader} selectable={this.state.selectable}>
                            <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
                                <TableRow>
                                    <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                        Personne Visiter
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
                                {this.state.user.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableRowColumn>{index}</TableRowColumn>
                                        <TableRowColumn>{row.nom}</TableRowColumn>
                                        <TableRowColumn>{row.prenom}</TableRowColumn>
                                        <TableRowColumn>{row.age}</TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <MyMapComponent isMarkerShown />
                    <div className="block2Home">
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
                                {this.state.user.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableRowColumn>{index}</TableRowColumn>
                                        <TableRowColumn>{row.nom}</TableRowColumn>
                                        <TableRowColumn>{row.prenom}</TableRowColumn>
                                        <TableRowColumn>{row.age}</TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
};
export default Home;