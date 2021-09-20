import React from "react";
import './experience.css';

const Experience = (props) =>{
    return(
        <div id='mainDiv2'>
            <label className="lbleditor" htmlFor="position">Position:</label>
            <input id="position" type="text" onChange={props.updatePosition}/>
            <label className="lbleditor" htmlFor="workplace">Workplace:</label>
            <input id="workplace" type="text" onChange={props.updateWorkplace}/>
            <label className="lbleditor" htmlFor="fromDate">From:</label>
            <input id="fromDate" type="date" onChange={props.updateFromDate}/>
            <label className="lbleditor" htmlFor="toDate">To:</label>
            <input id="toDate" type="date" onChange={props.updateToDate}/>
        </div>
    );
};

export default Experience;