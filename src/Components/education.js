import React from "react";
import './eductation.css'

const Education = (props) => {
    return(
        <div id='mainDiv'>
            <label htmlFor="degree">Degree:</label>
            <input id="degree" type="text"/>
            <label htmlFor="university">School/University:</label>
            <input id="university" type="text"/>
            <label htmlFor="fromDate">From:</label>
            <input id="fromDate" type="text"/>
            <label htmlFor="toDate">To:</label>
            <input id="toDate" type="text"/>
        </div>
    );
};

export default Education;