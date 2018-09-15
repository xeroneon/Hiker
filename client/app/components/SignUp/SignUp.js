import React, { Component } from 'react';
import 'whatwg-fetch';
// import { url } from 'inspector';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        document.body.style = "";
        return (
            <div>
                    <form className="sign-up-form">
                        <input type="text" placeholder="Username" className="main-text-box" />
                        <input type="text" placeholder="First Name" className="main-text-box" />
                        <input type="text" placeholder="Last Name" className="main-text-box" />
                        <input type="text" placeholder="Email" className="main-text-box" />
                        <input type="password" placeholder="Password" className="main-text-box" />
                        <input type="submit" className="main-btn"/>
                    </form>
            </div >
        );
    }

}

export default Home;