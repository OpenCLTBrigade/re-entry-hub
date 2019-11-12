import React from "react";
import { Link } from "react-router-dom";
import NavTabs from "../../nav/NavTabs";
import "./Home.scss"


const Home = () => (
  <div id="home">
         <NavTabs />
    <Link to="/about">
      <div className="d-flex justify-content-center">
    <button type="button" className="btn btn-lg btn-outline-success" id="homebtn">Enter</button>
    </div>
    </Link>
  </div>
);

export default Home;
