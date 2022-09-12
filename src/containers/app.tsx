import React from "react";
import { Router, Route } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { AddressBook } from "./addressBook";
import { AddAddress } from "../components/address/addAddress";
import { Layout } from "./layout/layout";
import history from "../components/history";

export const App: React.FC = () => {
  return (
    <DocumentTitle title='Home - Bequest'>
      <Router history={history}>
        <Layout data-testid='app-layout'>
          <Route path='/' exact component={AddressBook} />
          <Route path='/new' component={AddAddress} />
        </Layout>
      </Router>
    </DocumentTitle>
  );
};
