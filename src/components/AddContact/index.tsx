import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addContact } from "../../actions";
import { findAddress, API_KEY } from "../../api/addressBook";
import AddressForm from "../AddressForm";
import Error from "../Error";
import { Address, InitialAddressValues } from "../../actions/types";
import AddressSuggestions from "../AddressSuggestions";

interface ISuggestionResult {
  address: string;
  id: string;
  url: string;
}

interface IProps {
  addContact: Address;
}

const AddContact: React.FC<IProps> = ({ addContact }) => {
  const [postCode, setPostCode] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<number>();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState<
    ISuggestionResult[]
  >([]);
  const [findError, setFindError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [showForms, setShowForms] = useState(false);
  const KeyedCharacters = 6;

  const getAddress = async (address: string) => {
    //const response = await findAddress.get(`get/${id}?api-key=${API_KEY}`);
    setSelectedAddress(address);
  };

  useEffect(() => {
    const fetchAddressByPostCode = async () => {
      // if (postCode.length > KeyedCharacters) {
      //   try {
      //     const response = await findAddress.get(
      //       `find/${postCode}?api-key=${API_KEY}`
      //     );
      //     console.log(response.data);
      //     setSelectedAddress(response.data);
      //     setAddressSuggestions(response.data.suggestions);
      //   } catch (error) {
      //     setFetchError(error);
      //   }
      // }
    };

    if (postCode) {
      fetchAddressByPostCode();
      setFindError("");
    }
  }, [postCode]);

  const onFindButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postCode && houseNumber ? findByPostCodeAndHouseNumber() : findByPostCode();
  };

  const findByPostCode = async () => {
    try {
      const response = await findAddress.get(
        `find/${postCode}?api-key=${API_KEY}`
      );
      console.log(response.data.addresses);
      console.log(formatAddress(response.data.addresses));
      setAddressSuggestions(response.data.addresses);
    } catch (err) {
      console.log("you entered wrong post code", err);
      setFetchError(err);
    }
  };

  const findByPostCodeAndHouseNumber = async () => {
    try {
      const response = await findAddress.get(
        `find/${postCode}/${houseNumber}?api-key=${API_KEY}`
      );
      const address = formatAddress(response.data.addresses)[0];
      console.log("formated address", address);
      const formValues: Address = {
        line1: address[0].toString(),
        line2: address[1].toString(),
        line3: address[2].toString(),
        locality: address[3].toString(),
        townCity: address[4].toString(),
        county: address[5].toString(),
        country: address[6].toString(),
        postCode: postCode,
        id: 0,
      };
      addContact(formValues);
    } catch (err) {
      console.log("house number error", err);
      <Error errors={err} />;
    }
  };

  if (findError || fetchError) {
    return <Error errors={"wrong post code"} />;
  }

  const formatAddress = (newAddress: string[]) => {
    const formatAdd = newAddress.map((address) => {
      return address.split(",");
    });
    return formatAdd;
  };

  const hideAddAddressManuallyForms = () => {
    showForms ? setShowForms(false) : setShowForms(true);
  };

  const onAddManuallyButtonClicked = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    showForms ? setShowForms(false) : setShowForms(true);
  };

  const error = false;

  return (
    <div className='find-address'>
      <div className='find-address__form-bg'>
        <div className='find-address__form-container'>
          <form
            className='find-address__form'
            aria-label='find-address-form'
            title='find-address-form'
          >
            <div className='find-address__form--input-field'>
              <label
                htmlFor='postCode'
                aria-label='postCode'
                className='find-label'
              >
                Find Address by post code or{" "}
                <span
                  onClick={(e) => onAddManuallyButtonClicked(e)}
                  aria-label='add-address-manually'
                  title='add-address-manually'
                  role='button'
                >
                  add address manually
                </span>
              </label>

              <input
                className={`postcodd ${error}`}
                type='text'
                id='postCode'
                name='postCode'
                aria-label='postCode'
                aria-required={true}
                placeholder='Find address by post code'
                aria-placeholder='Find address by post code'
                autoComplete='off'
                onChange={(e) => setPostCode(e.target.value)}
                aria-describedby='postCode_error'
              />
              {/* <span id='postCode_error' className='postCode_error'></span> */}

              <input
                className='house-number'
                type='text'
                id='houseNumber'
                aria-label='houseNumber'
                title='houseNumber'
                aria-required={true}
                placeholder='house number'
                aria-placeholder='house number'
                onChange={(e) => setHouseNumber(parseInt(e.target.value))}
              />

              <button
                className='find-address__find-btn btn'
                type='submit'
                onClick={(e) => onFindButtonClicked(e)}
                aria-label='find-address-button'
                title='find-address-button'
              >
                Search
              </button>
            </div>

            {postCode.length > KeyedCharacters && (
              <AddressSuggestions
                suggestionResults={addressSuggestions}
                getAddress={getAddress}
              />
            )}
          </form>
        </div>
      </div>
      {showForms && (
        <AddressForm
          postcode={postCode}
          selectedAddress={selectedAddress}
          hideAddAddressManuallyForms={hideAddAddressManuallyForms}
        />
      )}
    </div>
  );
};

export default connect(null, { addContact })(AddContact);
