import React from 'react';
import axios from 'axios';
// import './Card.css';

const CardBtn = props => {
    var body = {
        name: props.trailName
        // lastName: this.state.lastName,
        // phoneNumber: this.state.phoneNumber
    }
    console.log(body)
    axios.post("/add-trail", body).then(res => { console.log(res) }).catch(err => {
        console.log(err);
    })
};

export default CardBtn;