import React, { useState, useEffect } from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchAddress from "../SearchAddress/SearchAddress";
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

  // const filteredAddressBook = addressBook.map((address) => {
  //   return Object.values(address).filter(
  //     (addrs) => .toLowerCase().indexOf(searchedTerm) !== -1
  //   );
  // });

  const addressExist = (address: Address) => {
    if (!address) {
      return address;
    }
  };

  const filteredAddressBook = addressBook.reduce(
    (total: Address[], address: Address) => {
      const addressContent = { ...address };
      // address.line1 +
      // address.line2 +
      // address.line3 +
      // address.locality +
      // address.county +
      // address.country +
      // address.postCode;
      if (
        (address.line1.toLowerCase() + address.postCode.toLowerCase()).indexOf(
          searchedTerm
        ) !== -1
      ) {
        total.push(address);
      }
      return total;
    },
    []
  );

  const renderAddresses = () => {
    if (addressBook.length) {
      return filteredAddressBook.map((address) => (
        <Link to={`/contact/${address.id}`} key={address.id}>
          <div className='addresses__list'>
            <div>
              <span>Address :</span>
              {address.line1}
              {address.line2} {address.line3}
            </div>
            <div>
              <span>Locality:</span>
              {address.locality}
            </div>
            <div>
              <span>Town/City :</span>
              {address.townCity}
            </div>
            <div>
              <span>County :</span>
              {address.county}
            </div>
            <div>
              <span>Post code :</span>
              {address.postCode}
            </div>
            <div>
              <span>Country :</span>
              {address.country}
            </div>
          </div>
        </Link>
      ));
    }
    return <div>No address in the address book. Add an address</div>;
  };

  const getSearchTerm = (term: string) => {
    setSearchedTerm(term);
  };

  return (
    <DocumentTitle title={"Address Book"}>
      <main className='addresses'>
        <SearchAddress getSearchTerm={getSearchTerm} />
        <section>
          <h2 className='item item__heading'>Addresses</h2>
          {renderAddresses()}
        </section>
      </main>
    </DocumentTitle>
  );
};

const mapPropsToState = (state: AddressesState) => {
  return { addressBook: Object.values(state.addressBook) };
};

export default connect(mapPropsToState, { fetchContacts })(Addresses);

// const newHigherOrderComponent =(WrappedComponent:React.Component, selectedData:any)=>{
//   return class extends React.Component{
//     constructor(props:any){
//       super(props);
//       this.state = {

//       }
//     }

//     componentDidMount=()=>{

//     }

//     componentWillUnmount=()=>{

//     }

//     render(){
//       return(
//         <WrappedComponent data={selectedData} {...this.props}/>
//       )
//     }
//   }
// }

// const formatCurrency =(currencySymbol, decimalSeperator)=>{
//   return function (value){
//     const wholePart = Math.trunc(value /100);
//     let fractionPart = value % 100;
//     if(fractionPart > 10){
//       fractionPart = '0' + fractionPart;
//     }
//     return `${currencySymbol}${wholePart}${decimalSeperator}${fractionPart}`
//   }

// }

// const getLabel = formatCurrency('$','.')
// console.log(getLabel(50));
