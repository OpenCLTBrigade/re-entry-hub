import React from "react";
import NavTabs from "../../nav/NavTabs";
import Questions from "../../questions/Questions";
import { Row, Container, Col } from "../../grid";
import { optionsState, optionsCounty, startState } from "../../data/data";
import Select from "react-select";
import { RadioGroup, Radio } from "react-radio-group";
import Employ from "../../employment/Employ";
import Housing from "../../housing/Housing";
import Health from "../../health/Health";
import Food from "../../food/Food"
import Identify from "../../identify/Identify"
import employData from "../../data/employData.json";
import housingData from "../../data/housingData.json";
import healthData from "../../data/healthData.json";
import foodData from "../../data/foodData.json"
var jsonQuery = require('json-query');

class RoadMap extends React.Component {
  state = {
    selectedState: "",
    selectedCounty: "",
    employData,
    housingData,
    healthData,
    foodData 
  };

  componentDidMount = () => {
    startState.forEach(element => {
      console.log(element);
      const { name, value } = element;
      console.log(name);
      console.log(value);
      this.setState({
        [name]: value
      });
  
      
    });
    console.log(this.state);
  };

  handleChangeState = event => {
    console.log(event);

    event == null
      ? this.setState({ selectedState: {} })
      : this.setState({ selectedState: event });
    console.log(`State selected:`, this.state.selectedState);
  };

  handleChangeCounty = event => {
    event == null
      ? this.setState({ selectedCounty: {} })
      : this.setState({ selectedCounty: event });
    console.log(`County selected:`, this.state.selectedCounty);
  };

  handleChange = event => {
    console.log(event);
    const { name, value } = event;
    this.setState({
      [name]: value
    });

  var result=  jsonQuery('NC[value=49].label', {
      data: optionsCounty
    })
    // console.log(this.state);
    console.log(result);
  };

  // employment section=======================================
  remove = (id) => {
    // Filter this.state.employData. for items with an id not equal to the id being removed
    const employData = this.state.employData.filter(item => item.id !== id);
    // Set this.state.employData equal to the new array
    this.setState({ employData });
  };

  reset = (event) => {
    // reset employData state to original
    event.preventDefault();
    this.setState({ employData });
  };

//housing section============================================
  removeHousing = (id) => {
    // Filter this.state.employData. for items with an id not equal to the id being removed
    const housingData = this.state.housingData.filter(item => item.id !== id);
    // Set this.state.employData equal to the new array
    this.setState({ housingData });
  };

  resetHousing = (event) => {
    // reset employData state to original
    event.preventDefault();
    this.setState({ housingData });
  };

//health section=============================================
  removeMed = (id) => {
    // Filter this.state.employData. for items with an id not equal to the id being removed
    const healthData = this.state.healthData.filter(item => item.id !== id);
    // Set this.state.employData equal to the new array
    this.setState({ healthData });
  };

  resetMed = (event) => {
    // reset employData state to original
    event.preventDefault();
    this.setState({ healthData });
  };

//Food section=============================================
  removeFood = (id) => {
    // Filter this.state.employData. for items with an id not equal to the id being removed
    const foodData = this.state.foodData.filter(item => item.id !== id);
    // Set this.state.employData equal to the new array
    this.setState({ foodData });
  };

  resetFood = (event) => {
    // reset employData state to original
    event.preventDefault();
    this.setState({ foodData });
  };


  render() {
    const { value } = this.state.selectedState;
    // console.log(value)
    return (
      <div>
     <NavTabs />
        <Container  addClasses= "container">
          <h1 className="text-center mt-3">RoadMap</h1>
          <form className="mt-4 pb-4">
            <Row addClasses="row">
              <Col addClasses="col-12 offset-1 mt-4">
                <p>Select Your State and County.</p>
              </Col>

              <Col addClasses="col-xs-6 col-sm-4  offset-1">
                {/* State Selector */}
                <Select
                  className="shadow-sm mt-0"
                  isSearchable={true}
                  isClearable={true}
                  closeMenuOnSelect={true}
                  onChange={this.handleChangeState}
                  options={optionsState}
                  placeholder="Select Your State"
                />
              </Col>

              <Col addClasses="col-xs-6 col-sm-4">
                {/* County Selector */}
                <Select
                  className="shadow-sm mt-0"
                  isDisabled={!value ? true : false} // If State has been selected, enable county selector.
                  isSearchable={true}
                  isClearable={true}
                  onChange={this.handleChangeCounty}
                  options={optionsCounty[value]}
                  placeholder="Select Your County"
                />
              </Col>
            </Row>

            {/* Question 1 ============================================*/}
            <Row>
              <Col addClasses="col-10 offset-1 mt-3">
                <RadioGroup name="id"  onChange={this.handleChange}>
                  <p>Do you need an Id?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "id" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "id" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.id === true ? <Questions dataTarget="#collapseOne"  idName="collapseOne">
                   {/*Add'l questions appears when yes is clicked */}
                     {/* Write Questions Here */}
           <Identify></Identify>
            </Questions> : ""}{" "}
  
{/* Question 2 ============================================*/}
            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="housing" onChange={this.handleChange}>
                  <p>Do you need housing?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "housing" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "housing" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.housing === true ? <Questions dataTarget="#collapseTwo"  idName="collapseTwo">
            <h4>Agencies That Can Help You in Your Housing Search</h4>{" "}
            <button className="btn btn-primary btn-sm mb-2" onClick={this.resetHousing}>
            Reset 
          </button>

                   {/*Add'l questions appears when yes is clicked */}
                   {/* Write Questions Here */}
                { this.state.housingData.map(home =>(<Housing
                  name={home.name}
                  address={home.address}
                  ph= {home.ph}
                  url= {home.url}
                  email={home.email}
                  description={home.description} 
                  id ={home.id}
                  key={home.id}
                  removeHousing={this.removeHousing}></Housing>))}
            </Questions> : ""}             

 {/* Question 3 ============================================*/}
            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="employment" onChange={this.handleChange}>
                  <p>Do you need employment?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "employment" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "employment" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.employment === true ? <Questions dataTarget="#collapseThree"  idName="collapseThree">
      
            <h3>Agencies That Can Help You in Your Job Search</h3>{" "}
            <button className="btn btn-primary mb-2" onClick={this.reset}>
            Reset
          </button>


                   {/*Add'l questions appears when yes is clicked */}
                     {/* Write Questions Here */}
         { this.state.employData.map(agency =>(<Employ
                id ={agency.id}
                key={agency.id}
                name={agency.name}
                address={agency.address}
                ph= {agency.ph}
                url= {agency.url}
                email={agency.email}
                description={agency.description}
                remove={this.remove}

                ></Employ>))}
            </Questions> : ""}             

            {/* Question 4 ============================================*/}
            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="transport" onChange={this.handleChange}>
                  <p>Do you need help with transportation?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "transport" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "transport" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>
            
            {this.state.transport === true ? <Questions dataTarget="#collapseFour"  idName="collapseFour">
                   {/*Add'l questions appears when yes is clicked */}
                     {/* Write Questions Here */}
            1.	Question 1<br/>
            2.	Question 2<br/>         
            3.	Question 3<br/>
            4.  Question 4
            </Questions> : ""}             

            {/* Question 5============================================*/}
            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="food" onChange={this.handleChange}>
                  <p>Do you need help with food security?</p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "food" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "food" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.food === true ? <Questions dataTarget="#collapseFive"  idName="collapseFive">
            <h3>Agencies That Can Help You with Food</h3>{" "}
             <button className="btn btn-primary mb-2" onClick={this.resetFood}>
              Reset
             </button>

                  
                   {/*Add'l questions appears when yes is clicked */}
                     {/* Write Questions Here */}
                     { this.state.foodData.map(item =>(<Food
                  name={item.name}
                  address={item.address}
                  ph= {item.ph}
                  url= {item.url}
                  email={item.email}
                  description={item.description} 
                  id ={item.id}
                  key={item.id}
                  removeFood={this.removeFood}></Food>))}
            </Questions> : ""}             

            {/* Question 6 ============================================*/}
            <Row>
              <Col addClasses="col-12 offset-1">
                <RadioGroup name="health" onChange={this.handleChange}>
                  <p>
                    Do you have health concerns (physical, mental or substance
                    abuse)?
                  </p>
                  <label>
                    <Radio
                      className="mr-1"
                      value={{ value: true, name: "health" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Radio
                      className="ml-3 mr-1"
                      value={{ value: false, name: "health" }}
                    />
                    No
                  </label>
                </RadioGroup>
              </Col>
            </Row>

            {this.state.health === true ? <Questions dataTarget="#collapseSix"  idName="collapseSix">
            <h3>Agencies That Can Help You with Mental Health & Medical</h3>{" "}
            <button className="btn btn-primary mb-2" onClick={this.resetMed}>
            Reset
          </button>

                   {/*Add'l questions appears when yes is clicked */}
                   {/* Write Questions Here */}
                   { this.state.healthData.map(med =>(
                   <Health
                   name={med.name}
                   address={med.address}
                   ph= {med.ph}
                   url= {med.url}
                   email={med.email}
                   description={med.description}
                   id ={med.id}
                   key={med.id}
                   removeMed={this.removeMed}></Health>))}
            </Questions> : ""}             

          </form>
        </Container>
      </div>
    );
  }
}

export default RoadMap;
