import React from "react";
import "./mainInfo.css"

const MainInfo = (props) => {

    return(
        <div>
            <div id="infoForm">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={props.updateName}/>
                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" onChange={props.updateSurname}/>
                    <label htmlFor="streetAddress">Street Address:</label>
                    <input type="text" id="streetAddress" onChange={props.updateAddress}/>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" onChange={props.updateCity}/>
                    <label htmlFor="province">Province:</label>
                    <input type="text" id="province" onChange={props.updateProvince}/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={props.updateEmail}/>
                    <label htmlFor="phone">Phone number:</label>
                    <input type="number" id="phone" onChange={props.updatePhone}/>
            </div>
        </div>
    );
};

export default MainInfo;