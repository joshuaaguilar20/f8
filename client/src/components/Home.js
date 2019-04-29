import React, { Component } from 'react'
import { Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import * as actions from "../actions";
import { connect } from 'react-redux';
import "./assets/css/style.css";
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Container,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="header">
                    <Image className="logo"></Image>
                    <div className="languages">Languages Here</div>
                </div>
                <button className="home-button">Infant CPR</button>
                <button className="home-button">Child CPR</button>
                <button className="home-button">Adult CPR</button>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(Home);