import React from 'react';
import CardBtn from './CardBtn';
// import Popup from './Popup';
import { Button, Modal } from 'react-bootstrap';

// const toggle = false;

// const btnToggle = (toggle) => {
//         console.log(toggle)
//         // $('.switch').click(function () {
//         toggle = true;
//         return toggle
//         console.log('toggle' + toggle)
// }


const TrailView = props => {

        return (
                <div className='container'>
                        <div className="modal fade h-100" id="exampleModal">
                                <div className="modal-dialog h-100" role="document">
                                        <div className="modal-content w-100 h-100">
                                                <div className="modal-header text-center w-100">
                                                        <button type="button" className="close m-auto" data-dismiss="modal" aria-label="Close">
                                                                <h5 className="modal-title m-auto" id="modalHeader">{props.trailName}</h5>
                                                        </button>
                                                </div>
                                                <div className="col-12 modal-body">
                                                        <div className='row h-50 m-auto'>
                                                                <img className='h-100' src={props.trailImage}></img>
                                                        </div>
                                                        <div className='row h-50 m-auto'>
                                                                <h4>Trail length: {props.trailLength}</h4>
                                                                <h4>Summary: {props.trailSummary}</h4>
                                                        </div>
                                                </div>

                                                <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button className='w-100 btn-primary' onClick={() => CardBtn(props)}>Check in</button>                                                </div>
                                        </div>
                                </div>
                        </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                {props.trailName}
                        </button>
                </div>
                // <div className="form-group">
                //         <Button  bsStyle="primary" bsSize="large" >
                //                 {props.trailName}
                //         </Button>
                //         <Modal show={toggle} >
                //                 <Modal.Header closeButton>
                //                         <Modal.Title>{props.trailName}</Modal.Title>
                //                 </Modal.Header>
                //                 <Modal.Body>
                //                         <img className='w-100 h-50' src={props.trailImage}></img>
                //                         <h4>{props.trailLength}</h4>
                //                         <p>{props.trailSummary}</p>
                //                 </Modal.Body>
                //         </Modal>
                // </div>
        )
};


export default TrailView;