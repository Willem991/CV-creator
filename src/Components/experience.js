import React from "react";

const Experience = (props) =>{
    return(
        <div id='mainDiv'>
            <label htmlFor="position">Position:</label>
            <input id="position" type="text"/>
            <label htmlFor="workplace">Workplace:</label>
            <input id="workplace" type="text"/>
            <label htmlFor="fromDate">From:</label>
            <input id="fromDate" type="text"/>
            <label htmlFor="toDate">To:</label>
            <input id="toDate" type="text"/>
        </div>
    );
};

export default Experience;