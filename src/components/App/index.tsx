import React from "react";
import { Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import Addresses from "../Addresses";
import AddContact from "../AddContact";
import ShowContact from "../ShowContact";
import history from "../history";

const App: React.FC = () => {
  return (
    <div className='container'>
      <Router history={history}>
        <Navigation />
        <Route path='/' exact component={Addresses} />
        <Route path='/contacts/new' component={AddContact} />
        <Route path='/contact/:id' component={ShowContact} />
      </Router>
    </div>
  );
};

export default App;
