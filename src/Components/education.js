import React from "react";
import './eductation.css'

const Education = (props) => {
    return(
        <div id='mainDiv3'>
            <label className="lbleditor" htmlFor="degree">Degree:</label>
            <input id="degree" type="text" onChange={props.updateDegree}/>
            <label className="lbleditor" htmlFor="university">School/University:</label>
            <input id="university" type="text" onChange={props.updateUni}/>
            <label className="lbleditor" htmlFor="fromDate">From:</label>
            <input id="fromDate" type="date" onChange={props.updateDegreeFrom}/>
            <label className="lbleditor" htmlFor="toDate">To:</label>
            <input id="toDate" type="date" onChange={props.updateDegreeTo}/>
        </div>
    );
};

export default Education;