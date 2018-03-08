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

const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];

class Home extends Component {


    render() {
        return (
            <div className="blockHome">
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <br />
                <div className="block1Home">
                    <div className="block3Home">
                        <Table height="400px" fixedHeader="true" selectable="true">
                            <TableHeader adjustForCheckbox="false">
                                <TableRow>
                                    <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                        Personne Visiter
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableRowColumn>{index}</TableRowColumn>
                                        <TableRowColumn>{row.name}</TableRowColumn>
                                        <TableRowColumn>{row.status}</TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <MyMapComponent isMarkerShown />
                    <div className="block2Home">
                        <Table height="300px" fixedHeader="true" selectable="true">
                            <TableHeader adjustForCheckbox="false">
                                <TableRow>
                                    <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
                                        Personne Proche
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableRowColumn>{index}</TableRowColumn>
                                        <TableRowColumn>{row.name}</TableRowColumn>
                                        <TableRowColumn>{row.status}</TableRowColumn>
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