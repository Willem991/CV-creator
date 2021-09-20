import React from "react";
import "./mainInfo.css"

const MainInfo = (props) => {

    return(
            <div id="mainDiv1">
                    <label className="lbleditor" htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={props.updateName}/>
                    <label className="lbleditor" htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" onChange={props.updateSurname}/>
                    <label className="lbleditor" htmlFor="streetAddress">Street Address:</label>
                    <input type="text" id="streetAddress" onChange={props.updateAddress}/>
                    <label className="lbleditor" htmlFor="city">City:</label>
                    <input type="text" id="city" onChange={props.updateCity}/>
                    <label className="lbleditor" htmlFor="province">Province:</label>
                    <input type="text" id="province" onChange={props.updateProvince}/>
                    <label className="lbleditor" htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={props.updateEmail}/>
                    <label className="lbleditor" htmlFor="phone">Phone number:</label>
                    <input type="number" id="phone" onChange={props.updatePhone}/>
            </div>
    );
};

export default MainInfo;