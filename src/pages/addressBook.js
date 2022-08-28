import { useSelector } from "react-redux";
import AddressList from "../components/address/addressList-componen";

export const AddressBook = () => {
  const { addresses } = useSelector((store) => store.address);

  return <AddressList addresses={addresses} />;
};
