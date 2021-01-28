import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchAddress from '../SearchAddress';
import { Address, AddressesState } from '../../actions/types';
import {fetchContacts} from '../../actions';

interface AddressesProps {
  fetchContacts: any;
  addressBook: Address[];
}

const Addresses: React.FC<AddressesProps> = ({fetchContacts, addressBook}) => {
   const [searchedTerm, setSearchedTerm] = useState('');

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const renderAddresses = () => {
    if(addressBook){
      return addressBook.map((address)=> (
        <Link to={`/contact/${address.id}`} key={address.id}>
          <div className="addresses__list" >
            <div>{address.firstName}</div>
            <div>{address.lastName}</div>
            <div>{address.houseNo}</div>
            <div>{address.streetName}</div>
            <div>{address.locality}</div>
            <div>{address.postTown}</div>
            <div>{address.country}</div>
            <div>{address.postCode}</div>
          </div>        
        </Link>
      ))
    }
    
    return <div>No address</div>
   }
  
   const getSearchTerm = (term:string) =>{
     setSearchedTerm(term)
   }

  return <div className="addresses">
    <SearchAddress getSearchTerm={getSearchTerm}/>
    <section>
      <h2 className="item item__heading">Addresses</h2>
      { renderAddresses() }
    </section>
  </div>
};

const mapPropsToState=(state:AddressesState)=>{
      return {addressBook: Object.values(state.addressBook)}
}

export default connect(mapPropsToState, {fetchContacts})(Addresses);
