import React, { Component } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
// import { url } from 'inspector';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router'
import Button from "../Button/Button"

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: getFromStorage("Hiker"),
            signedOut: false
        }
    }

    componentDidMount() {
        localStorage.removeItem('Hiker');
        this.setState({
            signedOut: true
        })
    }



    render() {
        document.body.style = "";
        if (this.state.signedOut) {
            return <Redirect to='/' />;
        }
        return (
            <div>
                Signing out...
            </div >
        );
    }

}

export default SignIn;