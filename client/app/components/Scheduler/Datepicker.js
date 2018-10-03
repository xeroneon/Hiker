import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "./react-datepicker.scss";
class Example extends React.Component {
    constructor (props) {
        // console.log(props)
      super(props)
      this.state = {
        startDate: moment()
      };
      this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(date) {
      this.setState({
        startDate: date
      });
      console.log(this.state)
    }
   
    render() {
      return <DatePicker className='w-100'
          selected={this.state.startDate}
          onChange={this.handleChange}
      />;
    }
  }
  
  export default Example