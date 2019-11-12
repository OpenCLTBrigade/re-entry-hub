import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Logon from "./components/pages/logon/Logon";
import Contact from "./components/pages/contact/Contact";
import RoadMap from "./components/pages/roadmap/RoadMap";
// import NotFound from "./components/pages/notFound/NotFound";
import Footer from "./components/pages/footer/Footer";

const App = () => (
  <div id="head">
  <Router>
    <div id="one">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/logon" component={Logon} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/roadmap" component={RoadMap} />
{/* Default changed from Notfound to Home due to compatibility issue with gh-pages.  
      Change back to deploy */}
          <Route component={Home} /> 
      </Switch>
    </div>
    <Footer></Footer>
  </Router>

  </div>
);

// export default withAuthenticator(App, true);
export default App;
