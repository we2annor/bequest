import React from "react";
import { Router, Route } from "react-router-dom";
import DocumentTitle from "react-document-title";
import Navigation from "../components/Navigation";
import Addresses from "../components/Addresses";
import AddContact from "../components/AddContact";
import ShowContact from "../components/ShowContact";
import history from "../components/history";

const AddressBook: React.FC = () => {
  return (
    <DocumentTitle title='Home - Bequest'>
      <div data-testid='app' className='container'>
        <Router history={history}>
          <Navigation />
          <Route path='/' exact component={Addresses} />
          <Route path='/contacts/new' component={AddContact} />
          <Route path='/contact/:id' component={ShowContact} />
        </Router>
      </div>
    </DocumentTitle>
  );
};

export default AddressBook;
