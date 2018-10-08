import React from 'react';
import Timepicker from '../Scheduler/Timepicker';





const TrailView = props => {
        const hasImage = props.trailImage;
        if (props.trailName) {

                return (
                        <div className='container'>
                                <div className="modal fade h-100 " id="exampleModal">
                                        <div className="modal-dialog h-100 border border-white" role="document">
                                                <div className="modal-content w-100 h-100">
                                                        <div className="modal-header text-center w-100" id='model-header'>
                                                                <button type="button" className="close m-auto" data-dismiss="modal" aria-label="Close">
                                                                        <h5 className="modal-title m-auto" id="modalHeader">{props.trailName}</h5>
                                                                </button>
                                                        </div>
                                                        <div className="col-12 modal-body h-100">
                                                                <div className='row h-50 picture-frame'>
                                                                        <div className='col-12 m-1 w-100 h-100 p-0'>
                                                                        
                                                                                <img className='h-100 p-2 w-100 m-auto trail-information'  src={props.trailImage} ></img>
                                                                        </div>
                                                                </div>
                                                                <div className='row trail-information'>
                                                                        {/* <div className='col-12 m-4'> */}

                                                                                <h4 className='w-100 m-auto'>Trail length: {props.trailLength}</h4>
                                                                                <h4 className='w-100 m-auto'>Summary: {props.trailSummary}</h4>
                                                                        {/* </div> */}
                                                                </div>
                                                                <div className='row trail-information'>
                                                                        <Timepicker info={props} />
                                                                </div>
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