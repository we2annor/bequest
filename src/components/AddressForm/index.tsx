import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import { addContact } from "../../actions";
import { countryNames } from "../../api/addressBook";
import { Address, AddressFormProps } from "../../actions/types";
import InputField from "../InputField";
import Error from "../Error";

interface IValidate {
  line1: string;
  line2: string;
  line3: string;
  townCity: string;
  county: string;
  country: string;
  postCode: string;
}

const AddressForm: React.FC<AddressFormProps> = ({
  selectedAddress,
  postcode,
  addContact,
  hideAddAddressManuallyForms,
}) => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [country, setCountry] = useState("");
  const [locality, setLocality] = useState("");
  const [townCity, setTownCity] = useState("");
  const [county, setCounty] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [postCode, setPostCode] = useState("");
  const [validationErrors, setvalidationErrors] = useState({});

  const [line1Error, setLine1Error] = useState(false);
  const [townCityError, setTownCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [postCodeError, setPostCodeError] = useState(false);
  const line1Ref = useRef();

  useEffect(() => {
    const getSelectedAddress = () => {
      setPostCode(postcode);
    };

    getSelectedAddress();
  }, [selectedAddress, postcode]);

  useEffect(() => {
    const fetchcountrySuggestions = async () => {
      if (country) {
        try {
          const response = await countryNames.get(`/name/${country}`);
          setCountrySuggestions(response.data);
        } catch (error) {
          console.log("country suggestion Error", error);
        }
      }
    };

    fetchcountrySuggestions();
  }, [country]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "line1":
        setLine1(value);
        return;
      case "line2":
        setLine2(value);
        return;
      case "line3":
        setLine3(value);
        return;
      case "country":
        setCountry(value);
        return;
      case "locality":
        setLocality(value);
        return;
      case "townCity":
        setTownCity(value);
        return;
      case "county":
        setCounty(value);
        return;
      case "postCode":
        setPostCode(value);
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAddressValidated()) {
      const formValues: Address = {
        line1,
        line2,
        line3,
        country,
        locality,
        townCity,
        county,
        postCode,
        id: 0,
      };
      addContact(formValues);
      clearForm();
      hideAddAddressManuallyForms();
    }
  };

  const handleOnBlure = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    if (id === "line1") {
      if (!line1 || line1.length < 3) setLine1Error(true);
      //line1Ref.current.focus();
    }
    if (id === "townCity") {
      if (!townCity || townCity.length < 3) setTownCityError(true);
    }
    if (id === "postCode") {
      if (!postCode || postCode.length < 3) setPostCodeError(true);
    }
    if (id === "country") {
      if (!country || country.length < 3) setCountryError(true);
    }
  };

  const clearForm = () => {
    setLine1("");
    setLine2("");
    setLine3("");
    setCountry("");
    setLocality("");
    setTownCity("");
    setCounty("");
    setPostCode("");
    setvalidationErrors({});
    setLine1Error(false);
    setCountryError(false);
    setTownCityError(false);
    setPostCodeError(false);
  };

  const isEmpty = (obj: Object) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  console.log("errors", validationErrors === null);

  const isAddressValidated = (): boolean => {
    const errors: IValidate = Object();
    if (!line1) {
      errors.line1 = "line1 is a required field, it should not be empty!";
      setLine1Error(true);
    }
    if (!townCity) {
      errors.townCity =
        "Town / City is a required field, it should not be empty!";
      setTownCityError(true);
    }
    if (!country) {
      errors.country = "Country is a required field, it should not be empty!";
      setCountryError(true);
    }
    if (!postCode) {
      errors.postCode = "Post code is a required field it should not be empty!";
      setPostCodeError(true);
    }
    setvalidationErrors(errors);
    return isEmpty(errors);
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
    <div className='countyAutoSuggestion'>{suggestion.name}</div>
  );

  const onChange = (_event: any, { newValue }: any) => {
    setCountry(newValue);
  };

  const inputProps = {
    placeholder: "country",
    autoComplete: "abcd",
    name: "country",
    id: "country",
    value: country,
    onChange: onChange,
    require: `${countryError}`,
    onFocus: () => (countryError ? setCountryError(false) : ""),
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => handleOnBlure(e),
  };

  return (
    <section data-testid='contact-form' className='contact-form'>
      <div className='contact-form__form-container'>
        <h3 title='add-address' aria-label='add-address'>
          Add address manually:
        </h3>
        {!isEmpty(validationErrors) && <Error errors={validationErrors} />}

        <form className='contact' onSubmit={(e) => handleSubmit(e)}>
          <InputField
            className={` ${
              line1Error ? "line1Error" : ""
            } contact__full-name--first-name`}
            label='Line 1'
            id='line1'
            value={line1}
            autoComplete={"off"}
            placeholder='address line 1'
            onChange={(e) => handleOnChange(e)}
            required={line1Error}
            onFocus={() => (line1Error ? setLine1Error(false) : "")}
            onBlur={(e) => handleOnBlure(e)}
            ref={line1Ref}
          />
          <InputField
            className='contact__full-name--line2'
            label='Line 2'
            id='line2'
            value={line2}
            autoComplete='abc'
            placeholder='line 2'
            onChange={(e) => handleOnChange(e)}
            required={false}
            onFocus={() => {}}
            onBlur={() => {}}
          />

          <InputField
            className='contact__address-line3'
            label='Line 3'
            id='line3'
            value={line3}
            autoComplete='abcd'
            placeholder='line 3'
            onChange={(e) => handleOnChange(e)}
            required={false}
            onFocus={() => {}}
            onBlur={() => {}}
          />

          <InputField
            className='contact__area--locality'
            label='Locality'
            id='locality'
            value={locality}
            autoComplete='off'
            placeholder='Locality'
            onChange={(e) => handleOnChange(e)}
            required={false}
            onFocus={() => {}}
            onBlur={() => {}}
          />
          <InputField
            className={`${
              townCityError ? "townCityError" : ""
            } contact__area--post-town`}
            label='Town / City'
            id='townCity'
            value={townCity}
            autoComplete='off'
            placeholder='Town'
            onChange={(e) => handleOnChange(e)}
            required={townCityError}
            onFocus={() => (townCityError ? setTownCityError(false) : "")}
            onBlur={(e) => handleOnBlure(e)}
          />
          <InputField
            className='contact__address-county'
            label='County'
            id='county'
            value={county}
            autoComplete='abcd'
            placeholder='County'
            onChange={(e) => handleOnChange(e)}
            required={false}
            onFocus={() => {}}
            onBlur={() => {}}
          />
          <div
            className={`${
              countryError ? "countryError" : ""
            } input-field contact__country--autoSuggest-container`}
          >
            <label htmlFor='country' aria-label='country'>
              country
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
            className={`${
              postCodeError ? "postCodeError" : ""
            } contact__county--post-code`}
            label='Post code'
            id='postCode'
            value={postCode}
            autoComplete='off'
            placeholder='post code eg: Ha4 5gh'
            onChange={(e) => handleOnChange(e)}
            required={postCodeError}
            onFocus={() => (postCodeError ? setPostCodeError(false) : "")}
            onBlur={(e) => handleOnBlure(e)}
          />

          <div className='contact__controls'>
            <button className='contact__controls--submit-btn btn' type='submit'>
              Submit
            </button>
            <button
              className='contact__controls--clear-btn btn'
              type='reset'
              onClick={clearForm}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default connect(null, { addContact })(AddressForm);
