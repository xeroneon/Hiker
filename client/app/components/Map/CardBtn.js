import React from 'react';
import axios from 'axios';
// import './Card.css';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import { Button, Modal } from 'react-bootstrap';

const CardBtn = props => {
        var body = {
            name: props.trailName,
            token: getFromStorage("Hiker")
            // lastName: this.state.lastName,
            // phoneNumber: this.state.phoneNumber
    }
    console.log(body)
    axios.post("/add-trail", body).then(res => { console.log(res) }).catch(err => {
        console.log(err);
    })
};

export default CardBtn;