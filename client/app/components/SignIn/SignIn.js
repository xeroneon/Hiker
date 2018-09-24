import React, { Component } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
// import { url } from 'inspector';
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
        signUpError: '',
        signInError: '',
        btnName: "Sign In",
        route: "signin"
    }


    componentDidMount() {
        if (!this.state.token) {
            this.setState({
                signedIn: true,
                btnName: "Sign In",
                route: "signin"
            })
        } else {
            this.setState({
                signedIn: true,
                btnName: "Sign Out",
                route: "signout"
            })
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const newUser = {
            password: this.state.password,
            email: this.state.email
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
                <Nav btnName={this.state.btnName} route={this.state.route} />
                <form className="main-form">
                    <input type="text" placeholder="Email" className="main-text-box" value={this.state.email} name="email" onChange={this.handleInputChange} />
                    <input type="password" placeholder="Password" className="main-text-box" value={this.state.password} name="password" onChange={this.handleInputChange} />
                    {/* <Button btnName="Sign In" onClick={this.handleFormSubmit}/> */}
                    <button type="submit" className="main-btn" onClick={this.handleFormSubmit}>Sign In</button>
                </form>
            </div >
        );
    }

}

export default SignIn;