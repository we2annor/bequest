import React, { useState, useEffect } from "react";
//import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchAddress from '../SearchAddress';
import { Address, AddressesState} from '../../actions/types';
import {fetchContacts} from '../../actions';

interface AddressesProps {
  fetchContacts: any;
  addressBook: Address[];
}

const Addresses: React.FC<AddressesProps> = ({fetchContacts, addressBook}) => {
  // const [addresses, setAddresses] = useState<Address[]>([]);
  // const [fetchingError, setFetchingError] = useState(null);
   const [searchedTerm, setSearchedTerm] = useState('');

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const renderAddresses = () => {
    if(addressBook){
      return addressBook.map((address)=> (
        <Link to={`/contact/${address.id}`} key={address.id}>
          <div className="addresses__list" >
            <div>{address.houseNo}</div>
            <div>{address.streetName}</div>
            <div>{address.locality}</div>
            <div>{address.postTown}</div>
            <div>{address.county}</div>
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

//    function hasKey<O>(obj: O, key: keyof any): key is keyof O {
//   return key in obj
// }

// if (hasKey(statusDisplays, userStatus)) {
//   statusDisplays[userStatus] // works fine!
// }

  //  const hasKey = (obj: 0, key: keyof any):key is keyof 0 {
  //    return key in obj
  //  }
  //const arr = [{name: 'Joe', age: 12},{name:'sam', age: 4}]

  // const checks = arr.filter(myObject=> Object.keys(myObject).some(key=>myObject[key].includes(2)));
  // console.log(checks)

  // if(addressBook){
  //    const filteredAddress = addressBook.filter(address=>Object.keys(address).some(key => address[key].includes(searchedTerm)));
  //    console.log(filteredAddress);
  // }



//   const filterIt=(arr, searchKey)=> {
//   return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
// }


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
