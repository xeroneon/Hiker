import React, { Component } from 'react';
import 'whatwg-fetch';
// import { url } from 'inspector';
// import {
//     getFromStorage,
//     setInStorage
// } from "../App/utils/storage";

class SignUp extends Component {

    constructor(props) {
        super(props);

        state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signInEmail: '',
            signInPassword: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: '',
        }
    }

    componentDidMount() {
        // const token = getFromStorage('Hiker')
        // if (token) {
        //     fetch('/api/account/verify?token=' + token)
        //         .then(res => res.json())
        //         .then(json => {
        //             if (json.success) {
        //                 this.setState({
        //                     token,
        //                     isLoading: false
        //                 })
        //             } else {
        //                 this.setState({
        //                     isLoading: false
        //                 })
        //             }
        //         })
        // } else {
        //     this.setState({
        //         isLoading: false
        //     })
        // }
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
    

    render() {
        document.body.style = "";

        const {
            isLoading,
            token,
            signUpError,
            signInError,
            signInEmail,
            signInPassword,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword,
        } = this.state;

        // if(isLoading) {
        //     return (<div><p>...loading</p></div>);
        // }

        // if (!token) {
        //     return (
        //         <div>
        //             Sign In
        //         </div>
        //     )
        // }

        return (
            <div>
                    <form className="sign-up-form">
                        <input type="text" placeholder="First Name" className="main-text-box" value={signUpFirstName} name="signUpFirstName" onChange={this.handleInputChange()}/>
                        <input type="text" placeholder="Last Name" className="main-text-box" value={signUpLastName} name="signUpLastName"/>
                        <input type="text" placeholder="Email" className="main-text-box" value={signUpEmail} name="signUpEmail"/>
                        <input type="password" placeholder="Password" className="main-text-box" value={signUpPassword} name="signUpPassword"/>
                        <input type="submit" className="main-btn"/>
                    </form>
            </div >
        );
    }

}

export default SignUp;