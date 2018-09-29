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
        console.log(toggle)
        let toggle = false;
        return (
                <div>

                        
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                {props.trailName}
                        </button>
                        <div className="modal fade h-100" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">{props.trailName}</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                        </button>
                                                </div>
                                                <div className="modal-body">
                                                <img className='w-100' src={props.trailImage}></img>
                                                        {props.trailSummary}
                    </div>
                                                <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button className='w-100'onClick={()=>CardBtn(props)}>{props.trailName}</button>                                                </div>
                                        </div>
                                </div>
                        </div>
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