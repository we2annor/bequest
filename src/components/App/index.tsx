import React from "react";
import {Router, Route} from 'react-router-dom';
import Navigation from '../Navigation';
import Addresses from "../Addresses";
import AddContact from '../FindAddress';
import ShowContact from '../ShowContact';
import history from '../history';

const App: React.FC = () => {
  return (
    <div className='container'>
      
      <Router history={history}>
        <Navigation />
        <Route path="/" exact component={Addresses} />
        <Route path="/contact/new" component={AddContact} />
        <Route path="/contact/:id" component={ShowContact} />
      </Router>
    </div>
  );
};

export default App;
