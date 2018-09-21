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
            isLoading: true,
            redirect: false,
            token: '',
            signUpError: '',
            signInError: ''
        }
    }

    // componentDidMount() {
    //     const token = getFromStorage("Hiker");

    //     if (token) {
    //         fetch('/api/account/verify?token=' + token)
    //             .then(res => res.json())
    //             .then(json => {
    //                 if (json.success) {
    //                     this.setState({
    //                         token
    //                     })
    //                 }
    //             })
    //     }
    // }

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
            password: this.state.password,
            email: this.state.email
        }

        axios.post("/api/account/signin", newUser)
            .then(res => {
                console.log(res)
                setInStorage("Hiker", res.data.token);
                this.setState({
                    token: res.data.token
                })
            }).catch(err => {
                console.log(err);
            })
    }


    render() {
        document.body.style = "";
        if (this.state.token) {
            return <Redirect to='/Home' />;
        }
        return (
            <div>
                <form className="sign-up-form">
                    <input type="text" placeholder="Email" className="main-text-box" value={this.state.email} name="email" onChange={this.handleInputChange} />
                    <input type="password" placeholder="Password" className="main-text-box" value={this.state.password} name="password" onChange={this.handleInputChange} />
                    {/* <Button btnName="Sign In" onClick={() => this.handleFormSubmit}/> */}
                    <input type="submit" className="main-btn" onClick={this.handleFormSubmit} />
                </form>
            </div >
        );
    }

}

export default SignIn;