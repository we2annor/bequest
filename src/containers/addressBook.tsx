import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import AddressList from "../components/addressList-component";

export const AddressBook: React.FC = () => {
  const { addresses, loaded } = useSelector(
    (store: RootStateOrAny) => store.address
  );
  console.log("loaded", loaded);
  return <AddressList addresses={addresses} />;
};
