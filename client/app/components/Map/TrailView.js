import React from 'react';
import CardBtn from './CardBtn';
import Timepicker from '../Scheduler/Timepicker';
import Datepicker from '../Scheduler/Datepicker';
// import DatePicker from 'react-datepicker';





const TrailView = props => {

        if (props.trailName) {

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
                                                                        <img className='h-100 m-auto' src={props.trailImage}></img>
                                                                </div>
                                                                <div className='row h-25 m-auto'>
                                                                        <h4>Trail length: {props.trailLength}</h4>
                                                                        <h4>Summary: {props.trailSummary}</h4>  
                                                                </div>
                                                                <div className='row h-25 m-auto'>
                                                                        {/* <Datepicker className='w-100' info={props} /> */}
                                                                        <Timepicker info={props} />
                                                                </div>
                                                        </div>

                                                        <div className="modal-footer">

                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <button type="button" className="main-btn trail-btn" data-toggle="modal" data-target="#exampleModal">
                                        {props.trailName}
                                </button>
                        </div>
                )
        }
};


export default TrailView;