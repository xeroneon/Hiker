import React from 'react';
import CardBtn from './CardBtn';

const TrailView = props => {
        // registerTrail = (trail) => {

        // }

        return (
                <div className="form-group">
                        {/* {props.trailName}
                        {props.trailSummary} */}
                        <button className='w-100'onClick={()=>CardBtn(props)}>{props.trailName}</button>
                        {/* <CardBtn className="check-in" onClick={() => props.trailName}/>Check-in */}
                </div>
        )
};

// $('#myModal2').modal('show');

//         <div class="modal fade bs-example-modal-lg" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
//                 <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                                 <div class="modal-header">
//                                         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//                                         <h4 class="modal-title" id="myModalLabel"> ABOUT </h4>
//                                 </div>
//                                 <div className="form-group">
//                                         {/* {props.trailName}
//                 {props.trailSummary} */}
//                                         <button className='w-100' onClick={() => CardBtn(props)}>{props.trailName}</button>
//                                         {/* <CardBtn className="check-in" onClick={() => props.trailName}/>Check-in */}
//                                 </div>
//                                 <div class="modal-footer">
//                                         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

//                                 </div>
//                         </div>
//                 </div>
//         </div>
export default TrailView;