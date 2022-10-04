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
      {houseFlatNumber ? <p>Flat Number : {houseFlatNumber}</p> : null}
      {streetName ? <p>Address line 1: {streetName} </p> : null}
      {city ? <p>City :{city}</p> : null}
      {postCode ? <p>Post code : {postCode} </p> : null}
      {county ? <p>County : {county}</p> : null}
    </div>
  );
};

export default Address;
