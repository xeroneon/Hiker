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

    render() {
        document.body.style = "height: 100vh; width: 100vw; background: url('/assets/img/hiking.jpg') center center no-repeat !important; background-size: cover !important;";

        const token = getFromStorage("Hiker");

        if (token) {
            this.setState({
                redirect: true
            })
        }

        if (this.state.redirect) {
            return <Redirect to='/Home' />;
        }
        return (
            <div>
                <Nav btnName={this.state.btnName} route={this.state.route}/>
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