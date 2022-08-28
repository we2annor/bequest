import Address from "./address-component";

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

const AddressList: React.FC<IProp> = ({ addresses }) => {
  const addressList = addresses.map((address, index) => (
    <Address key={index} address={address} />
  ));

  return (
    <div>
      <h3>Address Book</h3>
      {addressList}
    </div>
  );
};

export default AddressList;
