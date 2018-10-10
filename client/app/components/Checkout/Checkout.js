import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'whatwg-fetch';
import axios from 'axios';
import Button from '../Button/Button';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";
import { isMoment } from 'moment';
// import ReactCountdownClock from 'react-countdown-clock';
import moment from 'moment';
import Countdown from 'react-countdown-now';
import "./Checkout.scss";



var ms;
class Checkout extends Component {
    state = {
        redirect: false,
        signedIn: false,
        name: '',
        starttime: 0,
        endTime: 0,
        token: getFromStorage("Hiker"),
    }
    time = {
        start: 0,
        end: 0,
    }
    // componentDidUpdate() {
    //     axios.get(`/api/get-user?token=${this.state.token}`)
    //         .then(res => {
    //             console.log('componentDidUpdate=======================')
    //             console.log(res.data.user.trails)
    //             let ending = res.data.user.trails.slice(-1)[0]
    //             console.log(ending)
    //             this.time.start = moment().format();
    //             this.time.end = ending.completetime
    //             this.setState({ name: ending.name })
    //             var now = moment().format();
    //             // console.log(now) //2018-10-08T18:39:00-07:00
    //             var then = ending.completetime;
    //             // console.log(then)
    //             ms = moment(then, "YYYY/MM/DD HH:mm:ss").diff(moment(now, "YYYY/MM/DD HH:mm:ss"));
    //             console.log(ms);


    //         })
    // }
    componentDidMount() {
        console.log(this.state.token);
        axios.get(`/api/get-user?token=${this.state.token}`)
            .then(res => {
                console.log(res.data.user.trails)
                let ending = res.data.user.trails.slice(-1)[0]
                console.log(ending)
                var now = moment().format();
                // console.log(now) //2018-10-08T18:39:00-07:00
                var then = ending.completetime;
                // console.log(then)
                ms = moment(then, "YYYY/MM/DD HH:mm:ss").diff(moment(now, "YYYY/MM/DD HH:mm:ss"));
                // console.log(ms)
                var d = moment.duration(ms);
                // console.log(d)

                var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
                console.log(s)
                this.setState({ name: ending.name, endTime: ms })
                console.log(this.state.endTime)
                // getTimeDifference(then, [{ now = Date.now, precision = 0, controlled = false }])
            })
            .catch(err => { console.log(err) })

    }
    // var now = moment().format();
    // console.log(now) //2018-10-08T18:39:00-07:00
    // var then = ending.completetime;
    // console.log(then)
    // ms = moment(then, "YYYY/MM/DD HH:mm:ss").diff(moment(now, "YYYY/MM/DD HH:mm:ss"));
    // console.log(ms)
    // var d = moment.duration(ms);
    // console.log(d)

    // // var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    // // console.log(s)
    // this.setState({ timediff: ms })
    // // console.log(this.state.endTime)
    handleClick = event => {
        event.preventDefault();
        let body = {
            token: this.state.token,
        }

        console.log(body)
        axios.post("/api/checkout", body)
            .then(res => {
                if (res.data.success) {
                    this.setState({ redirect: true })
                }
                console.log(res);
            })
    }

    render() {

        const renderer = ({ days, hours, minutes, seconds }) => {

            return (
                <div id="clockdiv">
                    <div>
                        <span className="days">{days}</span>
                        <div className="smalltext">Days</div>
                    </div>
                    <div>
                        <span className="hours">{hours}</span>
                        <div className="smalltext">Hours</div>
                    </div>
                    <div>
                        <span className="minutes">{minutes}</span>
                        <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                        <span className="seconds">{seconds}</span>
                        <div className="smalltext">Seconds</div>
                    </div>
                </div>)


        };


        if (this.state.redirect) {
            return <Redirect to='/Home' />;
        }
        const divStyle = {
            fontSize: '1.3rem'
        };
        const pStyle = {
            fontSize: '2rem'
        };
        let text;
        if (this.state.name.length > 32) {
            console.log(this.state.name.length)
            text = divStyle
        } else {
            text = pStyle
        }
        return (
            <div className='checkout-page'>
                <Nav token={this.state.token} />
                <div className="checkout-div">
                    {/* <h2><strong>Timer</strong></h2> */}
                    <div className='row title-div'>
                        <h2 className='h-two'><strong className='header-trail' style={text}>{this.state.name}</strong></h2>
                    </div>

                    <div className='countdown'>
                        <Countdown
                            date={Date.now() + this.state.endTime}
                            renderer={renderer}
                        />
                    </div>
                    <div className='button-checkout'>
                        <button className='main-btn' id='checkout-btn' onClick={this.handleClick} >Checkout</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Checkout;