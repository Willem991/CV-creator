import React from "react";

const ExperienceCV = (props) => {
    return(
        <div>
            <p>
                {props.position}
            </p>
            <p>
                {props.workplace}
            </p>
            <p>
                {props.from}
            </p>
            <p>
                {props.to}
            </p>
        </div>
    );
};

export default ExperienceCV