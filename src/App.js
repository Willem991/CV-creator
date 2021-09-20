import React, {Component} from "react";
import MainInfo from "./Components/mainInfo";
import CVMainInfo from "./Components/mainInfoCV";
import './App.css';
import Education from "./Components/education";
import Experience from "./Components/experience";
import ExperienceCV from "./Components/experienceCV";
import EducationCV from "./Components/educationCV";

class App extends Component{
  constructor(){
    super();

    //MainInfo function Binds
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);

    //Experience function Binds
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleChangeWorkplace = this.handleChangeWorkplace.bind(this);
    this.handleChangeWorkFrom = this.handleChangeWorkFrom.bind(this);
    this.handleChangeWorkTo = this.handleChangeWorkTo.bind(this);

    //Education function Binds
    this.handleChangeDegree = this.handleChangeDegree.bind(this);
    this.handleChangeUni = this.handleChangeUni.bind(this);
    this.handleChangeDegreeFrom = this.handleChangeDegreeFrom.bind(this);
    this.handleChangeDegreeTo = this.handleChangeDegreeTo.bind(this);

    this.state = {
      name:'',
      surname:'',
      address:'',
      city:'',
      province:'',
      email:'',
      phone:'',
      position:'',
      workplace:'',
      workFrom:'',
      workTo:'',
      degree:'',
      uni:'',
      degreeFrom:'',
      degreeTo:'',
    };
  };

  //Handles for the MainInfo
  handleChangeName(e){
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeSurname(e){
    this.setState({
      surname: e.target.value,
    });
  };

  handleChangeAddress(e){
    this.setState({
      address: e.target.value,
    });
  };  

  handleChangeCity(e){
    this.setState({
      city: e.target.value,
    });
  };

  handleChangeProvince(e){
    this.setState({
      province: e.target.value,
    });
  };

  handleChangeEmail(e){
    this.setState({
      email: e.target.value,
    });
  };

  handleChangePhone(e){
    this.setState({
      phone: e.target.value,
    });
  };

  //Handles for Experience
  handleChangePosition(e){
    this.setState({
      position: e.target.value,
    });
  };

  handleChangeWorkplace(e){
    this.setState({
      workplace: e.target.value,
    });
  };

  handleChangeWorkFrom(e){
    this.setState({
      workFrom: e.target.value,
    });
  };

  handleChangeWorkTo(e){
    this.setState({
      workTo: e.target.value,
    });
  };

  //Handles for Education
  handleChangeDegree(e){
    this.setState({
      degree: e.target.value,
    });
  };

  handleChangeUni(e){
    this.setState({
      uni: e.target.value,
    });
  };

  handleChangeDegreeFrom(e){
    this.setState({
      degreeFrom: e.target.value,
    });
  };

  handleChangeDegreeTo(e){
    this.setState({
      degreeTo: e.target.value,
    });
  }

  render(){
    return(
      <div className="mainBody">
        <div id="CVInfo">
          <MainInfo 
              updateName = {this.handleChangeName}
              updateSurname = {this.handleChangeSurname}
              updateAddress = {this.handleChangeAddress}
              updateCity = {this.handleChangeCity}
              updateProvince = {this.handleChangeProvince}
              updateEmail = {this.handleChangeEmail}
              updatePhone = {this.handleChangePhone}
              >
          </MainInfo>
          <Education
              updateDegree = {this.handleChangeDegree}
              updateUni = {this.handleChangeUni}
              updateDegreeFrom = {this.handleChangeDegreeFrom}
              updateDegreeTo = {this.handleChangeDegreeTo}
          ></Education>
          <Experience
              updatePosition = {this.handleChangePosition}
              updateWorkplace = {this.handleChangeWorkplace}
              updateFromDate = {this.handleChangeWorkFrom}
              updateToDate = {this.handleChangeWorkTo}
          ></Experience>
        </div>
        <div id="CV">
          <CVMainInfo 
              name={this.state.name}
              surname={this.state.surname}
              address={this.state.address}
              city={this.state.city}
              province={this.state.province}
              email={this.state.email}
              phone={this.state.phone}
          ></CVMainInfo>
          <EducationCV
              degree = {this.state.degree}
              uni = {this.state.uni}
              from = {this.state.degreeFrom}
              to = {this.state.degreeTo}
          ></EducationCV>
          <ExperienceCV
              position = {this.state.position}
              workplace = {this.state.workplace}
              from = {this.state.workFrom}
              to = {this.state.workTo}
          ></ExperienceCV>
        </div>
      </div>
    );
  };
};

export default App;
