import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'whatwg-fetch';
import axios from 'axios';
import Button from '../Button/Button';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";



class Checkout extends Component {

    state = {
        redirect: false,
        signedIn: false,
        token: getFromStorage("Hiker"),
    }
    handleClick = event => {
        event.preventDefault();
        let body = {
            token: this.state.token,
        }
        console.log(body)
        axios.post("/api/checkout", body)
            .then(res => {
                if (res.data.success) {
                    this.setState({ redirect: true })
                }
                console.log(res);
            })
    }

    render() {
        document.body.style = "";


        // if (this.state.token) {
        //     this.setState({
        //         redirect: true
        //     })
        // }

        if (this.state.redirect) {
            return <Redirect to='/Home' />;
        }
        return (
            <div>
                <Nav token={this.state.token} />
                <div className="checkout-div">
                    <h2><strong>Timer</strong></h2>
                    <button className='main-btn' onClick={this.handleClick} >Checkout</button>
                </div>
            </div>
        );
    }

}

export default Checkout;