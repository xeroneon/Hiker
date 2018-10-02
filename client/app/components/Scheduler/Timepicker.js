import React from 'react';
import DatePicker from 'react-datepicker';
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import axios from "axios";

import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import CardBtn from '../Map/CardBtn';
// console.log(CardBtn.TimeBtn)


class Parent extends React.Component {

    constructor(props) {
        // console.log(props.info)
        let currentTime = moment().format('HH:MM')
        super();
        // CardBtn(props)
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleChange = this.handleChange.bind(this);


        this.state = {
            props,
            startDate: moment(),
            endDate: moment(),
            token: getFromStorage("Hiker")
        };
        // console.log(this.state)
        // CardBtn({ completeTime: this.state.time })
    }

    handleTimeChange(time) {
        // console.log(time);     // <- prints "3600" if "01:00" is picked
        this.setState({ time })
        // CardBtn(this.state)
        console.log(this.state)
    }

    handleChange(date) {
        this.setState({
            endDate: date
        });

        console.log(date.format())
    }

    handleSubmit = () => {
        let body = {
            token: this.state.token,
            endDate: this.state.endDate.format(),
            name: this.state.props.info.trailName,
            begintime: this.state.startDate,
            completetime: this.state.endDate,
        }
        axios.post("/api/checkin", body)
            .then(res => {
                console.log(res);
            })

        console.log(body)
        // console.log(timer)
        if (body.completetime == '' || body.name == '') {
            console.log("enter additional info")
        }
        else {

            axios.post("/add-trail", body)
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) })

        }
    }


    render() {
        // console.log(currentTime)
        let myTime;
        if (moment().minute() > 30) {
            myTime = moment().format('HH:30');
            console.log(myTime)
        } else {
            myTime = moment().format('HH:00');
            console.log(myTime)

        }

        return (
            <div className='timer'>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={1}
                    dateFormat="LLL"
                    timeCaption="time"
                />
                {/* <DatePicker className='w-100' selected={this.state.startDate} onChange={this.handleChange} />; */}
                {/* <TimePicker className='w-75 main-btn trail-btn' start={myTime} end="24:00" step={30} onChange={this.handleTimeChange} value={this.state.time} /> */}
                <button className='w-100 btn-primary' toggle='true' onClick={this.handleSubmit}>Check in</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        )
    }
}


export default Parent;