import React, { Component } from 'react';
import Example from '../Map/Map';
import { getFromStorage, setInStorage } from '../../utils/storage';
import Nav from '../Nav/Nav';

class Admin extends Component {

    state = {
        token: getFromStorage("Hiker")
    }

    render() {

        const token = getFromStorage("Hiker");

        if (!token) {
            return <Redirect to="/Admin" />;
        }
        document.body.style = "";

        return (
            <div>
                <Nav onClick={this.handleClick} token={this.state.token} />

                <Example />

            </div>
        );
    };
};

export default Admin;