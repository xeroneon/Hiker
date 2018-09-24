import React, { Component } from "react";
import axios from 'axios';

class RegisterTrail extends Component {
    state = {
        name:''
    }

    registerTrail = event => {
        event.preventDefault();
        console.log(this.state); this.setState({
        firstName: "",
        lastName: "",
        phoneNumber: Number
    })

    var body = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber
    }
    
    // var body = {
        //     firstName: 'renata',
        //     lastName: 'wattier',
        //     phoneNumber: '4444'
    // }
    
    axios.post("/add-emergency", body)
    .then(res => {
            console.log(res)
            
        }).catch(err => {
            console.log(err);
        })
    }
}
    
export default RegisterTrail;
