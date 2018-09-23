
// import React, { Component } from "react";

// import axios from 'axios';

// class TraiLog extends Component {
//   state = {
//     currentTrail: "",
//     checkIn: "",
//     trailHistory: []
//   };
//    // handle any changes to the input fields
//    handleInputChange = event => {
//     // Pull the name and value properties off of the event.target (the element which triggered the event)
//     const { name, value } = event.target;

//     // Set the state for the appropriate input field
//     this.setState({
//       [name]: value
//     });
//   };
//  // When the form is submitted, prevent the default event and alert the username and password
//  handleFormSubmit = event => {
//     event.preventDefault();
//     alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
//     this.setState({ username: "", password: "" });
//   };
// //   onChange = (key, value) => {
// //     this.setState({
// //       [key]: value
// //     });
// // //   };
// //   onSubmit = event => {
// //     event.preventDefault();   
// //     console.log(this.state); this.setState({
// //         firstName: "",
// //         lastName: "",
// //         phoneNumber: Number
// //     })

//     // var body = {
//     //     firstName: this.state.firstName,
//     //     lastName: this.state.lastName,
//     //     phoneNumber: this.state.phoneNumber
//     // }

//     // var body = {
//     //     firstName: 'renata',
//     //     lastName: 'wattier',
//     //     phoneNumber: '4444'
//     // }

//     // render() {
//     //     return (
//     //       <form>
//     //         <p>Trail name: {this.state.currentTrail}</p>
//     //         {/* <p>Password: {this.state.}</p> */}
//     //         <input
//     //           type="text"
//     //           placeholder="Username"
//     //           name="username"
//     //           value={this.state.username}
//     //           onChange={this.handleInputChange}
//     //         />
//     //         <input
//     //           type="password"
//     //           placeholder="Password"
//     //           name="password"
//     //           value={this.state.password}
//     //           onChange={this.handleInputChange}
//     //         />
//     //         <button onClick={this.handleFormSubmit}>Submit</button>
//     //       </form>
//     //     );
//     //   }
// }

// export default TrailLog;
