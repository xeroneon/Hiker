import React from 'react';
import axios from 'axios';
// import './Card.css';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";


const CardBtn = (props, state) => {
    console.log(props)
    var body = { name: props.props.info.trailName, begintime:props.startDate, completetime: props.endDate, token: getFromStorage("Hiker") }
   
    console.log(body)
    // console.log(timer)
    if (body.completetime == ''||body.name == '') {
        console.log("enter additional info")
    }
    else {
        
        axios.post("/add-trail", body).then(res => { console.log(res) }).catch(err => {
            console.log(err);
        })
 
    }
};




export default CardBtn;
// export default TimeBtn;
