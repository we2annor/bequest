import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchAddress from "../SearchAddress";
import { Address, AddressesState } from "../../actions/types";
import { fetchContacts } from "../../actions";

interface AddressesProps {
  fetchContacts: any;
  addressBook: Address[];
}

const Addresses: React.FC<AddressesProps> = ({
  fetchContacts,
  addressBook,
}) => {
  const [searchedTerm, setSearchedTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const renderAddresses = () => {
    console.log("book", addressBook.length);
    if (addressBook.length > 0) {
      return addressBook.map((address) => (
        <Link to={`/contact/${address.id}`} key={address.id}>
          <div className='addresses__list'>
            <div>
              <span>Full name :</span>
              {address.firstName} {address.lastName}
            </div>
            <div>
              <span>Address :</span>
              {address.houseNo},{address.streetName}, {address.locality}
            </div>
            <div>
              <span>City :</span>
              {address.postTown}
            </div>
            <div>
              <span>Country :</span>
              {address.country}
            </div>
            <div>
              <span>Post code :</span>
              {address.postCode}
            </div>
          </div>
        </Link>
      ));
    }
    return <div>No contacts</div>;
  };

  const getSearchTerm = (term: string) => {
    setSearchedTerm(term);
  };

  return (
    <div className='addresses'>
      <SearchAddress getSearchTerm={getSearchTerm} />
      <section>
        <h2 className='item item__heading'>Addresses</h2>
        {renderAddresses()}
      </section>
    </div>
  );
};

const mapPropsToState = (state: AddressesState) => {
  return { addressBook: Object.values(state.addressBook) };
};

export default connect(mapPropsToState, { fetchContacts })(Addresses);
