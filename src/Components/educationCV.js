import React from "react";
import './educationCV.css'

const EducationCV = (props) => {
    return(
        <div id='educationCVDiv'>
            <p id='CVdegree'>
                {props.degree}
            </p>
            <p id='CVuni'>
                {props.uni}
            </p>
            <p id = 'CVdegreeDate'>
                {props.from + ' - ' + props.to}
            </p>
        </div>
    );
};

export default EducationCV;