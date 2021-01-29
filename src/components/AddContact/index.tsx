import React, { useState, useEffect } from "react";
import { findAddress } from "../../api/addressBook";
import AddressForm from "../AddressForm";
import Error from "../Error";
import { Address, InitialAddressValues } from "../../actions/types";
import AddressSuggestions from "../AddressSuggestions";

interface ISuggestionResult {
  address: string;
  id: string;
  url: string;
}

const AddContact: React.FC = () => {
  const [postCode, setPostCode] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<Address>(
    InitialAddressValues
  );
  const [addressSuggestions, setAddressSuggestions] = useState<ISuggestionResult[]>([]);
  const [findError, setFindError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const API_KEY = "cCzwYuxt30OW7mkyB6DZeQ29886";
  const KeyedCharacters = 2;

  const getAddressId = async (id: string) => {
    const response = await findAddress.get(`get/${id}?api-key=${API_KEY}`);
    setSelectedAddress(response.data.formatted_address);
  };

  useEffect(() => {
    const fetchAddressByPostCode = async () => {
      try {
        const response = await findAddress.get(
          `autocomplete/${postCode}?api-key=${API_KEY}`
        );
        setAddressSuggestions(response.data.suggestions);
      } catch (error) {
        setFetchError(error);
      }
    };

    if (postCode) {
      fetchAddressByPostCode();
      setFindError("");
    }
  }, [postCode]);

  if (findError || fetchError) {
    return <Error message={"wrong post code"} />;
  }

  return (
    <div className='find-address'>
      <form className='find-address__form'>
        <div className='find-address__form--input-field'>
          <label htmlFor='postCode' aria-label='postCode' hidden>
            Find Address
          </label>
          <input
            type='text'
            id='postCode'
            name='postCode'
            placeholder='Find address by post code'
            autoComplete='off'
            onChange={(e) => setPostCode(e.target.value)}
          />
        </div>
        {postCode.length > KeyedCharacters && (
          <AddressSuggestions
            suggestionResults={addressSuggestions}
            getAddressId={getAddressId}
          />
        )}
      </form>
      <AddressForm postcode={postCode} selectedAddress={selectedAddress} />
    </div>
  );
};

export default AddContact;
