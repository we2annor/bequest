import React, { useState, useEffect, ChangeEvent } from "react";
import { connect} from 'react-redux';
import { addContact} from '../../actions'
import { Address, AddressFormProps } from '../../actions/types';
import Error from '../Error';

interface IValidate {
  houseNo: string;
  postTown : string;
  county : string;
  postCode : string;
}

const AddressForm: React.FC<AddressFormProps> = ({ selectedAddress, postcode, addContact }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [locality, setLocality] = useState("");
  const [postTown, setPostTown] = useState("");
  const [county, setCounty] = useState("");
  const [postCode, setPostCode] = useState("");
  const [validationError, setValidationError] = useState({});
  const [passedValidation, setPassedValidation]=useState(false);

  useEffect(() => {
    const getSelectedAddress = () => {
      if (selectedAddress) {
        const address = Object.values(selectedAddress);
        console.log(address, 'address', selectedAddress, 'selectedAddress')
        setHouseNo(address[0].toString());
        setStreetName(address[1].toString());
        setLocality(address[2].toString());
        setPostTown(address[3].toString());
        setCounty(address[4].toString());
        setPostCode(postcode);
      }
    };

    getSelectedAddress();
  }, [selectedAddress, postcode]);

  const handleOnChange =(e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    switch(name){
      case 'firstName':
        setFirstName(value);
        return;
      case 'lastName': 
        setLastName(value);
        return;
      case 'houseNo':
        setHouseNo(value);
        return;
      case 'streetName':
        setStreetName(value);
        return
      case 'locality':
        setLocality(value);
        return
      case 'postTown':
        setPostTown(value);
        return
      case 'country':
        setCounty(value);
        return
      case 'postCode':
        setPostCode(value)
        return
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(validateAddress()){
      const formValues :Address = {houseNo,streetName,locality,postTown,county,postCode,id:0};
      addContact(formValues);
      clearAddressForm()
    } 
  };

  const clearAddressForm=()=>{
    setHouseNo('');
    setStreetName('');
    setLocality('');
    setPostTown('');
    setCounty('')
    setPostCode('');
    setPassedValidation(false);
  }

 const isEmpty = (obj:Object) => {
    for(const key in obj){
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
    } 

    //return { time: k, messages: counts[k] };

  // const test = ()=>{
  //   for(const key in validationError){
  //     //return {[key: key]: key] :Error, validationError[key]}
  //   }
  // }

  //console.log(test(), validationError[houseNo]);

  const validateAddress = () : boolean =>{
    const errors : IValidate = Object();
    if(!houseNo){
      errors.houseNo = 'House number or house name is required';
    }
    if(!postTown){
      errors.postTown = "Town field is required";
    }
    if(!county){
      errors.county = "Country field is required";
    }
    if(!postCode){
      errors.postCode = "Post code field is required";
    }

    if(isEmpty(errors)){
      setPassedValidation(true)
    } else {
      setPassedValidation(false)
      setValidationError(errors)
    }
    return isEmpty(errors);
  };

  const showError =()=>{
    const errors = Object.values(validationError);
    const valErrors = errors.map((error,index) =>(
      <li key={index} className="field-error__list">
        <Error message={error as string}/>
      </li> 
      ));
      return valErrors;
  }

  return (
    <section className="address-form">
      {validationError && <ul className="field-error">{showError()}</ul>}
    <h2 className="u-margin-medium">Add address manually</h2>
    <form className='form' onSubmit={(e) => handleSubmit(e)}>
      <div className="contact contact__full-name">
        <div className="first-name">
          <label htmlFor="first-name" aria-label="firstName">First Name</label>
          <input
            className='contact__first-name'
            name="firstName"
            value={firstName}
            type='text'
            placeholder='first name'
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="last-name">
          <label htmlFor="last-name" aria-label="lastName">Last Name</label>
          <input
            className='contact__last-name'
            name="lastName"
            value={lastName}
            type='text'
            placeholder='last name'
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>

      <div className="contact contact__address-lines">
        <div className="house-no">
          <label htmlFor="houseNo" aria-label="houseNo">House / Flat Number</label>
          <input
            className='address address__houseNo'
            name="houseNo"
            value={houseNo}
            type='text'
            placeholder='House / street name'
            onChange={(e) => handleOnChange(e)}
            />          
        </div>
        <div>
          <label htmlFor="streetName" aria-label="streetName">Street Name</label>
            <input
              className='contact contact__streetName'
              name="streetName"
              value={streetName}
              type='text'
              placeholder='Street name'
              onChange={(e) => handleOnChange(e)}
            />
        </div>
      </div>

      <div className="contact contact__area">
        <div className="locality">
          <label htmlFor="locality" aria-label="locality">Locality</label>
          <input
            className='contact contact__locality'
            name="locality"
            type='text'
            value={locality}
            placeholder='Locality'
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="post-town">
          <label htmlFor="postTown" aria-label="postTown">Town</label>
          <input
            className='contact contact__post-town'
            name="postTown"
            type='text'
            value={postTown}
            placeholder='Town'
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>

      <div className="contact contact__country">
        <div>
          <label htmlFor="country" aria-label="country">Country</label>
          <input
            className='contact contact__country'
            name="country"
            type='text'
            value={county}
            placeholder='County'
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label htmlFor="postCode" aria-label="postCode">Post code</label>
          <input
            className='contact contact__post-code'
            name="postCode"
            type='text'
            value={postCode}
            placeholder='post code eg: Ha4 5gh'
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>
      <div className="address form__controls">
        <button className='form__controls--btn submit btn' type='submit'>Submit</button>
        <button className="form__controls--btn clear btn" type="reset" onClick={clearAddressForm}>Clear</button>
      </div>
    </form>
  </section>
  );
};

export default connect(null, {addContact})(AddressForm);
