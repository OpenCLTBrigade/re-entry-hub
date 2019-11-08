import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Logon from "./components/pages/logon/Logon";
import Contact from "./components/pages/contact/Contact";
import RoadMap from "./components/pages/roadmap/RoadMap";
import NotFound from "./components/pages/notFound/NotFound";
import Provider from "./components/pages/provider/Provider";
import Housing from "./components/pages/housing/Housing";
import Health from "./components/pages/health/Health";




const App = () => (
  <Router>

    <div id="one">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/logon" component={Logon} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/roadmap" component={RoadMap} />
          {/* Routes below just used to list json */}
          <Route exact path="/provider" component={Provider} />
          <Route exact path="/housing" component={Housing} />
          <Route exact path="/health" component={Health} />
          <Route component={Home} />
      </Switch>
    </div>
  </Router>
);

// export default withAuthenticator(App, true);
export default App;
