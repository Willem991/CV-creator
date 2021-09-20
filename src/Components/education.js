import React from "react";
import './eductation.css'

const Education = (props) => {
    return(
        <div id='mainDiv3'>
            <label htmlFor="degree">Degree:</label>
            <input id="degree" type="text" onChange={props.updateDegree}/>
            <label htmlFor="university">School/University:</label>
            <input id="university" type="text" onChange={props.updateUni}/>
            <label htmlFor="fromDate">From:</label>
            <input id="fromDate" type="text" onChange={props.updateDegreeFrom}/>
            <label htmlFor="toDate">To:</label>
            <input id="toDate" type="text" onChange={props.updateDegreeTo}/>
        </div>
    );
};

export default Education;