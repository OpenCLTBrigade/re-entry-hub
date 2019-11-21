import React from "react";
import { Link } from "react-router-dom";
import NavTabs from "../../nav/NavTabs";
import "./Home.css"


const Home = () => (
  <div id="home">
         <NavTabs />
    <Link to="/about">
      <div className="d-flex justify-content-center shadow bg-gradient-light ">
    <button type="button" className="btn btn-lg btn-success" id="homebtn">Enter</button>
    </div>
    </Link>
  </div>
);

export default Home;
