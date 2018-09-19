import React, { Component } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
// import { url } from 'inspector';
// import {
//     getFromStorage,
//     setInStorage
// } from "../App/utils/storage";

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: ''
        }
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            email: this.state.email
        }

        axios.post("/api/account/signup", newUser)
            .then(res => {
                console.log("worked")
            })
    }


    render() {
        document.body.style = "";
        return (
            <div>
                <form className="sign-up-form">
                    <input type="text" placeholder="First Name" className="main-text-box" value={this.state.firstName} name="firstName" onChange={this.handleInputChange} />
                    <input type="text" placeholder="Last Name" className="main-text-box" value={this.state.lastName} name="lastName" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="Email" className="main-text-box" value={this.state.email} name="email" onChange={this.handleInputChange}/>
                    <input type="password" placeholder="Password" className="main-text-box" value={this.state.password} name="password" onChange={this.handleInputChange}/>
                    <input type="submit" className="main-btn" onClick={this.handleFormSubmit}/>
                </form>
            </div >
        );
    }

}

export default SignUp;