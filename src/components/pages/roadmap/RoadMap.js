import React from "react";
import NavTabs from "../../nav/NavTabs";
import Questions from "../../questions/Questions";
import { Row, Container, Col } from "../../grid";
import {startState, optionsCounty1 } from "../../data/data";
import Select from "react-select";
import { RadioGroup, Radio } from "react-radio-group";
import Employ from "../../employment/Employ";
import Housing from "../../housing/Housing";
import Health from "../../health/Health";
import Food from "../../food/Food"
import IdCard from "../../idCard/IdCard"
import "./roadmap.css";

 let   employData;
 let   housingData;
 let   healthData;
 let   foodData;
 let   data; 
class RoadMap extends React.Component {
  state = {
    selectedState: "",
    selectedCounty: "",
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
    //  this.setState({ selectedState: event });
    console.log(`State selected:`, this.state.selectedState);
  };

  handleChangeCounty = event => {

    event = null
      ? this.setState({ selectedCounty: {} }) 
      : (
        data = event,
        employData = event.employData,
        housingData = event.housingData,
        healthData = event.healthData,
        foodData = event.foodData
        );
  

      console.log(`event:`, event);
    console.log(`County selected:`, this.state.selectedCounty);
  };


  //radio button click handler====================================
  handleChange = event => {
    console.log(event);
    const { name, value } = event;
    this.setState({
      [name]: value
    });

    console.log(this.state);
  };

  // employment section=======================================
  remove = (id) => {
    // Filter employData. for items with an id not equal to the id being removed
    employData = employData.filter(item => item.id !== id);
    // Set employData equal to the new array
    this.setState({ employData });
  };

  reset = (event) => {
    // reset employData state to original
    event.preventDefault();
    employData = data.employData;
    this.setState({ employData });
  };

  training = (event) => {
    event.preventDefault();
    // Filter employData. for items with an id not equal to the id being removed
    employData = employData.filter(item => item.training !== 'no');
    // Set employData equal to the new array
    this.setState({ employData });
  };

 apprenticeship = (event) => {
    event.preventDefault();
    // Filter employData. for items with an id not equal to the id being removed
    employData = employData.filter(item => item.apprenticeship !== 'no');
    // Set employData equal to the new array
    this.setState({ employData });
  };



//housing section============================================
  removeHousing = (id) => {
    // Filter housingData. for items with an id not equal to the id being removed
    housingData = housingData.filter(item => item.id !== id);
    // Set housingData equal to the new array
    this.setState({ housingData });
  };

  resetHousing = (event) => {
    // reset housingData state to original
    event.preventDefault();
    housingData = data.housingData;
    this.setState({ housingData });
  };

  womenOnly = (event) => {
    event.preventDefault();
    // Filter housingData. for items with an id not equal to the id being removed
    housingData = housingData.filter(item => item.womenOnly ==='Yes');
    // Set housingData equal to the new array
    this.setState({ housingData });
  };

 menOnly = (event) => {
    event.preventDefault();
    // Filter housingData. for items with an id not equal to the id being removed
    housingData = housingData.filter(item => item.menOnly ==='Yes');
    // Set housingData equal to the new array
    this.setState({ housingData });
  };


//health section=============================================
  removeMed = (id) => {
    // Filter healthData. for items with an id not equal to the id being removed
    healthData = healthData.filter(item => item.id !== id);
    // Set healthData equal to the new array
    this.setState({ healthData });
  };

  resetMed = (event) => {
    // reset healthData state to original
    event.preventDefault();
    healthData = data.healthData;
    this.setState({ healthData });
  };

//Food section=============================================
  removeFood = (id) => {
    // Filter foodData. for items with an id not equal to the id being removed
    foodData = foodData.filter(item => item.id !== id);
    // Set foodData equal to the new array
    this.setState({ foodData });
  };

  resetFood = (event) => {
    // reset foodData state to original
    event.preventDefault();
    foodData = data.foodData;
    this.setState({ foodData });
  };

  walkins = (event) => {
    event.preventDefault();
    // Filter foodData. for items with an id not equal to the id being removed
    foodData = foodData.filter(item => item.apptReq !== 'Yes');
    // Set foodData equal to the new array
    this.setState({ foodData });
  };

 noID = (event) => {
    event.preventDefault();
    // Filter foodData. for items with an id not equal to the id being removed
    foodData = foodData.filter(item => item.idReq === 'No');
    // Set foodData equal to the new array
    this.setState({ foodData });
  };

  render() {
    return (
      <div>
     <NavTabs />
        <Container  addClasses= "container shadow mt-4 mt-3 p-2">
          <h1 className="text-center mt-4 mb-3" id="roadmap" >RoadMap</h1>
          <form className="mt-4 pb-4">
            <Row addClasses="row">
              <Col addClasses="col-11 offset-1 mb-2">
                <h3 id="start">Let's Get Started! <i className="fa fa-arrow-down" aria-hidden="true"></i></h3>
              </Col>

   {/* State Selector */}
              {/* <Col addClasses="col-xs-6 col-sm-4  offset-1">
             
                <Select
                  className="shadow-sm mt-0"
                  isSearchable={true}
                  isClearable={true}
                  closeMenuOnSelect={true}
                  onChange={this.handleChangeState}
                  options={optionsState}
                  placeholder="Select Your State"
                />
              </Col> */}

              <Col addClasses="col-5 offset-1">
                {/* County Selector */}
                <Select
                  className="shadow-sm mt-0"
                  // isDisabled={!value ? true : false} // If State has been selected, enable county selector.
                  isSearchable={true}
                  isClearable={true}
                  onChange={this.handleChangeCounty}
                  options={optionsCounty1}
                  placeholder="Select Your County"
                />
              </Col>
            </Row>

{/* Question 1 ============================================*/}
            <Row>
              <Col addClasses="col-10 offset-1 mt-3 mb-0 question border shadow-sm">
                <RadioGroup name="id"  onChange={this.handleChange}>
                  <p>Do you have your Id?</p>
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
                          {(() => {
                              switch (this.state.id) {
                                // If have ID Card, Section is done.  Mark Complete.
                                case true: return <span className="done"> "Done!" <i className="fa fa-check-square-o" aria-hidden="true"></i></span>;
                                default:      return "";
                              }
                            })()}
                </RadioGroup>
              </Col>
            </Row>
          {/*ID Card info and FAQs section  */}
          {(() => {
              switch (this.state.id) {
                // If no ID Card, Open instructions and FAQs
                case false:   return <Questions dataTarget="#collapseOne"  idName="collapseOne"><IdCard/></Questions>
                default:      return "";
              }
            })()}

            
  
{/* Question 2 ============================================*/}
            <Row>
              <Col addClasses="col-10 offset-1 question border mt-1 shadow-sm">
                <RadioGroup name="housing" onChange={this.handleChange}>
                  <p>Have you made housing arrangements?</p>
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
                  {(() => {
                              switch (this.state.housing) {
                                // If have housing, Section is done.  Mark Complete.
                                case true: return <span className="done"> "Done!" <i className="fa fa-check-square-o" aria-hidden="true"></i></span>;
                                default:      return "";
                              }
                            })()}

                </RadioGroup>
              </Col>
            </Row>

                      {/*Housing section  */}
          {(() => {
              switch (this.state.housing) {
                // If no ID Card, Open instructions and FAQs
                case false:   return <Questions dataTarget="#collapseTwo"  idName="collapseTwo">
                <h4>Agencies That Can Help You in Your Housing Search</h4>{" "}
                <button className="btn btn-primary btn-sm mb-2 mr-1" onClick={this.resetHousing}>Clear</button>
                <button className="btn btn-success btn-sm mb-2 mr-1" onClick={this.menOnly}>Men Only</button>
                <button className="btn btn-info      btn-sm mb-2 mr-1" onClick={this.womenOnly}>Women Only</button>
        
                       {/*Add'l questions appears when yes is clicked */}
                       {/* Write Questions Here */}
                    { housingData.map(home =>(<Housing
                      name={home.name}
                      address={home.address}
                      ph= {home.ph}
                      url= {home.url}
                      email={home.email}
                      description={home.description} 
                      id ={home.id}
                      key={home.id}
                      removeHousing={this.removeHousing}></Housing>))}
                </Questions>
                default:      return "";
              }
            })()}



 {/* Question 3 ============================================*/}
            <Row>
              <Col addClasses="col-10 offset-1 question border mt-1 shadow-sm">
                <RadioGroup name="employment" onChange={this.handleChange}>
                  <p>Do you have employment?</p>
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
                  {(() => {
                switch (this.state.employment) {
                // If have Employment, Section is done.  Mark Complete.
                case true: return <span className="done"> "Done!" <i className="fa fa-check-square-o" aria-hidden="true"></i></span>;
                default:      return "";
                }
            })()}
                </RadioGroup>
              </Col>
            </Row>

                      {/*Housing section  */}
                      {(() => {
              switch (this.state.employment) {
                // If no Housing, open section
                case false:   return <Questions dataTarget="#collapseThree"  idName="collapseThree">
      
                <h3>Agencies That Can Help You in Your Job Search</h3>{" "}
                <button className="btn btn-primary btn-sm mb-2 mr-1" onClick={this.reset}>Clear</button>
                <button className="btn btn-success btn-sm mb-2 mr-1" onClick={this.training}>Training</button>
                <button className="btn btn-info      btn-sm mb-2 mr-1" onClick={this.apprenticeship}>Apprenticeship</button>
    
    
                       {/*Add'l questions appears when yes is clicked */}
                         {/* Write Questions Here */}
             {employData.map(agency =>(<Employ
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
                </Questions>
                default:      return "";
              }
            })()}


{/* Question 4 ============================================*/}
            <Row>
              <Col addClasses="col-10 offset-1 question border mt-1 shadow-sm">
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
                        {(() => {
                          switch (this.state.transport) {
                          // If have transportation, Section is done.  Mark Complete.
                          case false: return <span className="done"> "Done!" <i className="fa fa-check-square-o" aria-hidden="true"></i></span>;
                          default:      return "";
                        }
                    })()}
                </RadioGroup>
              </Col>
            </Row>
                      {/*Transportation section  */}
            {(() => {
              switch (this.state.transport) {
                // If no transportation, open section
                case true:   return <Questions dataTarget="#collapseFour"  idName="collapseFour">
                {/*Add'l questions appears when yes is clicked */}
                  {/* Write Questions Here */}
                    1.	Question 1<br/>
                    2.	Question 2<br/>         
                    3.	Question 3<br/>
                    4.  Question 4
                    </Questions>          
                default: return "";
              }
            })()}


{/* Question 5============================================*/}
            <Row>
              <Col addClasses="col-10 offset-1 question border mt-1 shadow-sm">
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
                  {(() => {
                    switch (this.state.food) {
                    // If no food security problem, Section is done.  Mark Complete.
                    case false: return <span className="done"> "Done!" <i className="fa fa-check-square-o" aria-hidden="true"></i></span>;
                    default:      return "";
                }
            })()}
                </RadioGroup>
              </Col>
            </Row>
                      {/*Food section  */}
          {(() => {
              switch (this.state.food) {
                // If food security issue, open section
                case true:   return <Questions dataTarget="#collapseFive"  idName="collapseFive">
                <h3>Agencies That Can Help You with Food</h3>{" "}
                 <button className="btn btn-primary btn-sm mb-2 mr-1" onClick={this.resetFood}>Clear</button>
                 <button className="btn btn-success btn-sm mb-2 mr-1" onClick={this.walkins}>No Appointments</button>
                 <button className="btn btn-info      btn-sm mb-2 mr-1" onClick={this.noID}>No ID</button>                    
                       {/*Add'l questions appears when yes is clicked */}
                         {/* Write Questions Here */}
                         { foodData.map(item =>(<Food
                      name={item.name}
                      address={item.address}
                      ph= {item.ph}
                      url= {item.url}
                      email={item.email}
                      description={item.description} 
                      id ={item.id}
                      key={item.id}
                      removeFood={this.removeFood}></Food>))}
                </Questions>         
                default:  return "";
              }
            })()}


{/* Question 6 ============================================*/}
            <Row>
              <Col addClasses="col-10 offset-1 question border mt-1 md-4 shadow-sm">
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
            {(() => {
                switch (this.state.health) {
                // If no health problem, Section is done.  Mark Complete.
                case false: return <span className="done"> "Done!" <i className="fa fa-check-square-o" aria-hidden="true"></i></span>;
                default:      return "";
                }
            })()}


                </RadioGroup>
              </Col>
            </Row>

            {this.state.health === true ? <Questions dataTarget="#collapseSix"  idName="collapseSix">
            <h3>Agencies That Can Help You with Mental Health & Medical</h3>{" "}
            <button className="btn btn-primary mb-2" onClick={this.resetMed}>
           Clear
          </button>

                   {/*Add'l questions appears when yes is clicked */}
                   {/* Write Questions Here */}
                   { healthData.map(med =>(
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
