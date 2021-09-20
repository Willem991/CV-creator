import React from "react";
import './mainInfoCV.css'

const CVMainInfo = (props) => {
    return(
        <div id="CVinfoDiv">
            <p id='CVname'>
                {props.name + " " + props.surname} 
            </p>
            <p id='CVaddress'>
                {props.address + ', ' + props.city + ', ' + props.province}
            </p>
            <p id='CVemail'>
                {props.email}
            </p>
            <p id='CVphone'>
                {props.phone}
            </p>
        </div>
    );
};

export default CVMainInfo;