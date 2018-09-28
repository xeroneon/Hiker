import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'whatwg-fetch';
// import { url } from 'inspector';
// import '../../styles/landing.scss';
import Button from '../Button/Button';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";



class Landing extends Component {

state = {
            redirect: false,
            signedIn: false,
            token: getFromStorage("Hiker"),
        }


    componentDidMount() {

    }

    render() {
        document.body.style = "height: 100vh; width: 100vw; background: url('/assets/img/hiking.jpg') center center no-repeat !important; background-size: cover !important;";


        if (this.state.token) {
            this.setState({
                redirect: true
            })
        }

        if (this.state.redirect) {
            return <Redirect to='/Home' />;
        }
        return (
            <div>
                <Nav token={this.state.token}/>
                <div className="landingDiv">
                    <h2><strong>Helping hikers stay safe</strong></h2>
                    <Link to="/signup">
                        <Button btnName="Join" />
                    </Link>
                </div>
            </div>
        );
    }

}

export default Landing;