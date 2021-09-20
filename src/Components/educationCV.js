import React from "react";

const educationCV = (props) => {
    return(
        <div>
            <p>
                {props.degree}
            </p>
            <p>
                {props.uni}
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

export default educationCV;