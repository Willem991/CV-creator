import React from "react";
import './mainInfoCV.css'

const CVMainInfo = (props) => {
    return(
        <div id="CVinfoDiv">
            <p id='CVname'>
                {props.name}
            </p>
            <p id='CVsurname'>
                {props.surname}
            </p>
            <p id='CVaddress'>
                {props.address}
            </p>
            <p id='CVcity'>
                {props.city}
            </p>
            <p id='CVprovince'>
                {props.province}
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