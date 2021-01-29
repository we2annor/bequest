import React, { useState, useEffect, ChangeEvent } from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import { addContact } from "../../actions";
import { countryNames } from "../../api/addressBook";
import { Address, AddressFormProps } from "../../actions/types";
import InputField from "../InputField";
import Error from "../Error";

interface IValidate {
  firstName: string;
  lastName: string;
  houseNo: string;
  postTown: string;
  country: string;
  postCode: string;
}

const AddressForm: React.FC<AddressFormProps> = ({
  selectedAddress,
  postcode,
  addContact,
}) => {
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

  useEffect(() => {
    const getSelectedAddress = () => {
      const address = Object.values(selectedAddress);
      setHouseNo(address[0].toString());
      setStreetName(address[1].toString());
      setLocality(address[2].toString());
      setPostTown(address[3].toString());
      setCountry(address[4].toString());
      setPostCode(postcode);
    };

    getSelectedAddress();
  }, [selectedAddress, postcode]);

  useEffect(() => {
    const fetchCountrySuggestions = async () => {
      if (country) {
        try {
          const response = await countryNames.get(`/name/${country}`);
          setCountrySuggestions(response.data);
        } catch (error) {
          console.log("country suggestion Error", error);
        }
      }
    };

    fetchCountrySuggestions();
  }, [country]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        return;
      case "lastName":
        setLastName(value);
        return;
      case "houseNo":
        setHouseNo(value);
        return;
      case "streetName":
        setStreetName(value);
        return;
      case "locality":
        setLocality(value);
        return;
      case "postTown":
        setPostTown(value);
        return;
      case "country":
        console.log("val");
        setCountry(value);
        return;
      case "postCode":
        setPostCode(value);
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addressValidated()) {
      const formValues: Address = {
        firstName,
        lastName,
        houseNo,
        streetName,
        locality,
        postTown,
        country,
        postCode,
        id: 0,
      };
      addContact(formValues);
      clearAddressForm();
    }
  };

  const clearAddressForm = () => {
    setFirstName("");
    setLastName("");
    setHouseNo("");
    setStreetName("");
    setLocality("");
    setPostTown("");
    setCountry("");
    setPostCode("");
    setValidationError({});
  };

  const isEmpty = (obj: Object) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  const addressValidated = (): boolean => {
    const errors: IValidate = Object();
    if (!houseNo) {
      errors.houseNo = "House number or house name is required";
    }
    if (!postTown) {
      errors.postTown = "Town field is required";
    }
    if (!country) {
      errors.country = "Country field is required";
    }
    if (!postCode) {
      errors.postCode = "Post code field is required";
    }

    return isEmpty(errors);
  };

  const showError = () => {
    const errors = Object.values(validationError);
    const valErrors = errors.map((error, index) => (
      <li key={index} className='field-error__list'>
        <Error message={error as string} />
      </li>
    ));
    return valErrors;
  };

  const getSuggestions = (value: any) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : countrySuggestions.filter(
          (suggestion: any) =>
            suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const onSuggestionsFetchRequested = ({ value }: any) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearedRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion: any) => suggestion.name;
  const renderSuggestion = (suggestion: any) => (
    <div className='countryAutoSuggestion'>{suggestion.name}</div>
  );

  const onChange = (_event: any, { newValue }: any) => {
    setCountry(newValue);
  };

  const inputProps = {
    placeholder: "Country",
    autoComplete: "abcd",
    name: "country",
    id: "country",
    value: country,
    onChange: onChange,
  };

  return (
    <section className='contact-form'>
      <h2 className='u-margin-medium'>Add address manually</h2>
      <form className='contact' onSubmit={(e) => handleSubmit(e)}>
        {validationError && (
          <ul className='contact__field-errors'>{showError()}</ul>
        )}

        <div className='contact__full-name'>
          <InputField
            className='contact__full-name--first-name'
            label='First Name'
            id='firstName'
            value={firstName}
            autoComplete={"off"}
            placeholder='first name'
            onChange={(e) => handleOnChange(e)}
            required={false}
          />
          <InputField
            className='contact__full-name--last-name'
            label='Last Name'
            id='lastName'
            value={lastName}
            autoComplete={"off"}
            placeholder='last name'
            onChange={(e) => handleOnChange(e)}
            required={false}
          />
        </div>
        <div className='contact__address-lines'>
          <InputField
            className='contact__address-lines--house-no'
            label='House / Flat Number'
            id='houseNo'
            value={houseNo}
            autoComplete={"off"}
            placeholder='House / street name'
            onChange={(e) => handleOnChange(e)}
            required
          />
          <InputField
            className='contact__address-lines--street-name'
            label='Street Name'
            id='streetName'
            value={streetName}
            autoComplete='abcd'
            placeholder='Street name'
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>

        <div className='contact__area'>
          <InputField
            className='contact__area--locality'
            label='Locality'
            id='locality'
            value={locality}
            autoComplete='off'
            placeholder='Locality'
            onChange={(e) => handleOnChange(e)}
            required={false}
          />
          <InputField
            className='contact__area--post-town'
            label='Town'
            id='postTown'
            value={postTown}
            autoComplete='off'
            placeholder='Town'
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>

        <div className='contact__country'>
          <div className='input-field contact__country--autoSuggest-container'>
            <label htmlFor='country' aria-label='country'>
              Country
            </label>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearedRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          </div>
          <InputField
            className='contact__country--post-code'
            label='Post code'
            id='postCode'
            value={postCode}
            autoComplete='off'
            placeholder='post code eg: Ha4 5gh'
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>
        <div className='contact__controls'>
          <button className='contact__controls--submit-btn btn' type='submit'>
            Submit
          </button>
          <button
            className='contact__controls--clear-btn btn'
            type='reset'
            onClick={clearAddressForm}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default connect(null, { addContact })(AddressForm);
