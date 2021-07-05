import React, { useState } from "react";

interface ISuggestionProps {
  suggestionResults: ISuggestionResult[];
  getAddress: AddressId;
}

interface ISuggestionResult {
  address: string;
  id: string;
  url: string;
}

interface AddressId {
  (address: string): void;
}

const AddressSuggestions: React.FC<ISuggestionProps> = ({
  suggestionResults,
  getAddress,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  const onAddressSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const { textContent } = e.currentTarget;
    textContent ? getAddress(textContent) : getAddress("");
    setShowSuggestions(false);
  };

  return (
    <>
      {showSuggestions && suggestionResults && (
        <div className='suggestions'>
          {suggestionResults.map((suggestionResult) => (
            <div
              className='address-select'
              id={suggestionResult.id}
              onClick={(e) => onAddressSelect(e)}
              key={suggestionResult.id}
            >
              {suggestionResult}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AddressSuggestions;
