import React from 'react';
import DatePicker from 'react-datepicker';
import "./react-datepicker.scss";
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
            props, startDate: moment(), endDate:moment()
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
    }
    // dispatching an action based on state change
    // componentWillUpdate(props, nextState) {
    //     if (nextState.open == true && this.state.open == false) {
    //     }
    //     // CardBtn(this.state)
    // }


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
            <div className='timer w-100 position-relative'>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="LLL"
                    timeCaption="time"
                />
                {/* <DatePicker className='w-100' selected={this.state.startDate} onChange={this.handleChange} />; */}
                {/* <TimePicker className='w-75 main-btn trail-btn' start={myTime} end="24:00" step={30} onChange={this.handleTimeChange} value={this.state.time} /> */}
                <button className='w-100 btn-primary' toggle='true' onClick={() => CardBtn(this.state)}>Check in</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        )
    }
}


export default Parent;