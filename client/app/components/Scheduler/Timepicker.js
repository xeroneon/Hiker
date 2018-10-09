import React from 'react';
import DatePicker from 'react-datepicker';
import "./react-datepicker.scss";
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";
import axios from "axios";
import moment from 'moment';
import { Redirect } from 'react-router';



class Parent extends React.Component {

    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            props,
            startDate: moment(),
            endDate: moment(),
            token: getFromStorage("Hiker")
        };
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
        if (body.completetime == '' || body.name == '') {
            console.log("enter additional info")
        }
        else {

            axios.post("/add-trail", body)
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) })

        }
        this.setState({
            redirect: true
        })
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to='/checkout' />
        }
        return (
            <div className='col-12 timer w-100  trail-information h-100'>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="LLL"
                    timeCaption="time"
                />
                <div className='row opn-and-cls m-auto w-100 position-relative h-50'>
                    <div className='col-12 position-absolute button-loc'>
                        <button className='w-50 btn-primary float-left' toggle='true' data-toggle="modal" data-dismiss="modal" onClick={this.handleSubmit}>Check in</button>
                        <button type="button" className="w-50 btn btn-secondary float-left" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Parent;