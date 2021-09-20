import React from "react";
import './experienceCV.css'

const ExperienceCV = (props) => {
    return(
        <div id='workDiv'>
            <p id="CVposition">
                {props.position}
            </p>
            <p id = 'CVworkplace'>
                {props.workplace}
            </p>
            <p id = 'CVworkDate'>
                {props.from + ' - ' + props.to}
            </p>
        </div>
    );
};

export default ExperienceCV