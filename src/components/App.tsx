import React from "react";
import SearchAddress from "./SearchAddress/SearchAddress";
import AddressForm from "./AddressForm";
import { Address } from "../actions/types";

const App = () => {
  const getSearchTerm = (term: string) => {
    return term;
  };

  const props = {
    selectedAddress: "",
    postcode: "",
    addContact: (formValues: Address) => formValues,
    hideAddAddressManuallyForms: () => "yes",
  };

  return (
    <div className='container'>
      <SearchAddress getSearchTerm={getSearchTerm} />
      <AddressForm {...props} />
    </div>
  );
};

export default App;
