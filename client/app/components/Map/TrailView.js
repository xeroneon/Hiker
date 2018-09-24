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

export default TrailView;