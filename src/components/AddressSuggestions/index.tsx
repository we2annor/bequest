import React, { useState } from "react";

interface ISuggestionProps {
  suggestionResults: ISuggestionResult[];
  getAddressId: AddressId;
}

interface ISuggestionResult {
  address: string;
  id: string;
  url: string;
}

interface AddressId {
  (id: string): void;
}

const AddressSuggestions: React.FC<ISuggestionProps> = ({
  suggestionResults,
  getAddressId,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  const onAddressSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    getAddressId(id);
    setShowSuggestions(false);
  };

  console.log('suggest', suggestionResults)

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
              {suggestionResult.address}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AddressSuggestions;
