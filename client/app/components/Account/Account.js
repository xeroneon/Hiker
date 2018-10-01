import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'whatwg-fetch';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import Button from '../Button/Button';
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";
import axios from "axios";


class Account extends Component {

    state = {
        token: getFromStorage("Hiker"),
        contacts: [1],
        loading: true
    };

    componentWillMount() {
        axios.get("api/account/contacts?token=" + this.state.token)
            .then(results => {
                return results.data
            })
            .then(res => {
                this.setState({
                    contacts: res.contacts,
                    loading: false
                })
            })
    }

    getData = () => {
        axios.get("api/account/contacts?token=" + this.state.token)
            .then(results => {
                return results.data
            })
            .then(res => {
                this.setState({
                    contacts: res.contacts,
                    loading: false
                })
            })
    }

    handleClick = event => {
        event.preventDefault();
        const body = {
            token: this.state.token
        };

        if (this.state.firstName) {
            body.firstName = this.state.firstName
        };
        if (this.state.lastName) {
            body.lastName = this.state.lastName
        };
        if (this.state.email) {
            body.email = this.state.email
        };
        if (this.state.password) {
            body.password = this.state.password
        };

        axios.post("/api/account/update", body)
            .then(res => {
                console.log(res);
            });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.contacts)
    };

    handleDelete = event => {

        console.log(event.target.id);

        const body = {
            token: this.state.token,
            contactId: event.target.id
        }
        axios.post("/api/account/delete-contact", body)
            .then(res => {
                this.getData();
                console.log(res);
            })
    }


    render() {

        const token = getFromStorage("Hiker");

        if (!token) {
            return <Redirect to='/' />;
        }
        document.body.style = "";
        return (
            <div className="account-page">
                <Nav btnName={this.state.btnName} route={this.state.route} onClick={this.handleClick} token={this.state.token} />

                <h1 className="text-white">Account Settings</h1>

                <h3 className="text-white">Account info</h3>

                <form className="main-form">

                    <input
                        name="firstName"
                        className="main-text-box"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        type="text"
                    />

                    <input
                        name="lastName"
                        className="main-text-box"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        type="text"
                    />

                    <input
                        name="email"
                        className="main-text-box"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        type="text"
                    />

                    <input
                        name="password"
                        className="main-text-box"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                    />
                    <br />

                    <button
                        type="submit"
                        className="main-btn"
                        onClick={this.handleClick}
                    >
                        Save
                    </button>
                    <br />
                    <br />

                    <Link to="/emergency">
                        <Button btnName="Add Contact" />
                    </Link>
                </form>


                <div>
                    {
                        this.state.loading === false &&
                        this.state.contacts.map(contact => {
                            return (

                                <div key={contact._id} className="contacts">
                                    <span onClick={this.handleDelete} id={contact._id}>X</span>
                                    <h4>First Name</h4>
                                    <p>{contact.firstName}</p>
                                    <h4>Last Name</h4>
                                    <p>{contact.lastName}</p>
                                    <h4>Phone Number</h4>
                                    <p>{contact.phoneNumber}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        );
    }

}

export default Account;
