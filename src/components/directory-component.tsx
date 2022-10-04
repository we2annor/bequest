import Address from "./address/address-component";
import { emptyAddressList } from "../constants/constants";

interface IAddress {
  houseFlatNumber: number;
  streetName: string;
  city: string;
  postCode: string;
  county: string;
}

type IProp = {
  addresses: IAddress[];
};

const DirectoryComponent: React.FC<IProp> = ({ addresses }) => {
  const currentAddresses = addresses ? (
    addresses.map((address, index) => <Address key={index} address={address} />)
  ) : (
    <div>{emptyAddressList}</div>
  );

  return (
    <div className='address-list' data-test-id='addrress-list'>
      <h3>Directory</h3>
      {currentAddresses}
    </div>
  );
};

export default DirectoryComponent;
