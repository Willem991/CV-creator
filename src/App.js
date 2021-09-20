import React, {Component} from "react";
import MainInfo from "./Components/mainInfo";
import CVMainInfo from "./Components/mainInfoCV";
import './App.css';

class App extends Component{
  constructor(){
    super();


    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);

    this.state = {
      name:'',
      surname:'',
      address:'',
      city:'',
      province:'',
      email:'',
      phone:'',
    };
  };

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

  render(){
    return(
      <div className="mainBody">
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
        <CVMainInfo 
        name={this.state.name}
        surname={this.state.surname}
        address={this.state.address}
        city={this.state.city}
        province={this.state.province}
        email={this.state.email}
        phone={this.state.phone}
        ></CVMainInfo>
      </div>
    );
  };
};

export default App;
