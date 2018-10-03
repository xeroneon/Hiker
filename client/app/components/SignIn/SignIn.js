import React, { Component } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Button from "../Button/Button";
import Nav from "../Nav/Nav";

class SignIn extends Component {

    state = {
        isLoading: true,
        redirect: false,
        token: getFromStorage("Hiker"),
        error: "",
        email: '',
        password: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const newUser = {
            password: this.state.password,
            email: this.state.email
        }

        if (!this.validateEmail(this.state.email)) {

            setTimeout(function () {
                this.setState({
                    error: ""
                })
            }.bind(this), 3000)


            return this.setState({
                error: "Not a valid email"
            })
        }

        if (!this.state.password) {
            setTimeout(function () {
                this.setState({
                    error: ""
                })
            }.bind(this), 3000)

            return this.setState({
                error: "You need a password"
            })
        }

        axios.post("/api/account/signin", newUser)
            .then(res => {
                setInStorage("Hiker", res.data.token);
                this.setState({
                    token: res.data.token
                })
            })
            .catch(err => console.log(err));
    }


    render() {
        document.body.style = "";
        if (this.state.token) {
            return <Redirect to='/Home' />;
        }
        return (
            <div>
                <Nav token={this.state.token} />
                <h3 className="text-danger">{this.state.error}</h3>
                <form className="main-form">
                    <input type="email" placeholder="Email" className="main-text-box" value={this.state.email} name="email" onChange={this.handleInputChange} />
                    <input type="password" placeholder="Password" className="main-text-box" value={this.state.password} name="password" onChange={this.handleInputChange} />
                    {/* <Button btnName="Sign In" onClick={this.handleFormSubmit}/> */}
                    <button type="submit" className="main-btn" onClick={this.handleFormSubmit}>Sign In</button>
                </form>
            </div >
        );
    }

}

export default SignIn;