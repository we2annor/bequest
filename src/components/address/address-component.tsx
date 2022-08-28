interface IProps {
  address: {
    houseFlatNumber: number;
    streetName: string;
    city: string;
    postCode: string;
    county: string;
  };
}
const Address: React.FC<IProps> = ({ address }) => {
  const { houseFlatNumber, streetName, city, postCode, county } = address;
  return (
    <div className='address'>
      <p>{houseFlatNumber}</p>
      <p>{streetName} </p>
      <p>{city}</p>
      <p>{postCode} </p>
      <h3>{county}</h3>
    </div>
  );
};

export default Address;
