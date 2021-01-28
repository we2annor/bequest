import React, { useState, useEffect, ChangeEvent } from "react";
import Autosuggest from 'react-autosuggest';
import { connect} from 'react-redux';
import { addContact} from '../../actions';
import {countryNames} from '../../api/addressBook';
import { Address, AddressFormProps } from '../../actions/types';
import Error from '../Error';

interface IValidate {
  firstName: string;
  lastName: string;
  houseNo: string;
  postTown : string;
  country : string;
  postCode : string;
}

const AddressForm: React.FC<AddressFormProps> = ({ selectedAddress, postcode, addContact }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [locality, setLocality] = useState("");
  const [postTown, setPostTown] = useState("");
  const [country, setCountry] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [postCode, setPostCode] = useState("");
  const [validationError, setValidationError] = useState({});
  const [passedValidation, setPassedValidation]=useState(false);

  useEffect(() => {
    const getSelectedAddress = () => {
      if (selectedAddress) {
        const address = Object.values(selectedAddress);
        setFirstName(address[0].toString());
        setLastName(address[1].toString());
        setHouseNo(address[2].toString());
        setStreetName(address[3].toString());
        setLocality(address[4].toString());
        setPostTown(address[5].toString());
        setCountry(address[6].toString());
        setPostCode(postcode);
      }
    };

    getSelectedAddress();
  }, [selectedAddress, postcode]);

  useEffect(()=>{
    const fetchCountrySuggestions = async ()=>{
      if(country){
        try {
          const response = await countryNames.get(`/name/${country}`)
          setCountrySuggestions(response.data)
        } catch (error) {
          console.log('country suggestion Error', error)
        }
      }
    };
 
    fetchCountrySuggestions();
  },[country]);

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
        console.log('val')
        setCountry(value);
        return
      case 'postCode':
        setPostCode(value)
        return
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(validateAddress()){
      const formValues : Address = {firstName, lastName, houseNo,streetName,locality,postTown,country,postCode,id:0};
      addContact(formValues);
      clearAddressForm()
    } 
  };

  const clearAddressForm=()=>{
    setFirstName('');
    setLastName('');
    setHouseNo('');
    setStreetName('');
    setLocality('');
    setPostTown('');
    setCountry('')
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

  const validateAddress = () : boolean =>{
    const errors : IValidate = Object();
    if(!houseNo){
      errors.houseNo = 'House number or house name is required';
    }
    if(!postTown){
      errors.postTown = "Town field is required";
    }
    if(!country){
      errors.country = "Country field is required";
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

  const getSuggestions = (value :any)=>{
    console.log('country', country);
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : countrySuggestions.filter((suggestion : any) => 
      suggestion.name.toLowerCase().slice(0, inputLength) === inputValue)
  }

  const onSuggestionsFetchRequested = ({value}:any) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearedRequested = () => {
    setSuggestions([]);
  }

  const getSuggestionValue = (suggestion : any) => suggestion.name;
  const renderSuggestion =(suggestion: any)=>(
    <div className="countryAutoSuggestion">{suggestion.name}</div>
  )

  const onChange = (_event:any, {newValue}:any)=>{
    setCountry(newValue)
  }

  const inputProps = {
    placeholder: 'Country',
    autoComplete: 'abcd',
    name: "country",
    id: "country" ,
    value: country,
    onChange : onChange
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
            id="firstName"
            value={firstName}
            autoComplete="abcd"
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
            id="lastName"
            value={lastName}
            type='text'
            autoComplete="abcd"
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
            id="houseNo"
            value={houseNo}
            autoComplete="abcd"
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
              id="streetName"
              autoComplete="abcd"
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
            id="locality"
            type='text'
            autoComplete="abcd"
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
            id="postTown"
            type='text'
            value={postTown}
            autoComplete="abcd"
            placeholder='Town'
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>

      <div className="contact contact__country">
        <div className="autoSuggest-container">
          <label htmlFor="country" aria-label="country">Country</label>
          <Autosuggest 
          suggestions={ suggestions }
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearedRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        </div>

        <div>
          <label htmlFor="postCode" aria-label="postCode">Post code</label>
          <input
            className='contact contact__post-code'
            name="postCode"
            id="postCode"
            type='text'
            autoComplete="abcd"
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
