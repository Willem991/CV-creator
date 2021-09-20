import React from "react";

const CVMainInfo = (props) => {
    return(
        <div>
            <p id='name'>
                {props.name}
            </p>
            <p id='surname'>
                {props.surname}
            </p>
            <p id='address'>
                {props.address}
            </p>
            <p id='city'>
                {props.city}
            </p>
            <p id='province'>
                {props.province}
            </p>
            <p id='email'>
                {props.email}
            </p>
            <p id='phone'>
                {props.phone}
            </p>
        </div>
    );
};

export default CVMainInfo;