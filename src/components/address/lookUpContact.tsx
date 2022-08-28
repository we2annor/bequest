interface IProps {
  setPostCode: (e: string) => {};
  error: string;
  setHouseNumber: (e: number) => {};
}

const LookUpContact: React.FC<IProps> = ({
  setPostCode,
  error,
  setHouseNumber,
}) => {
  return (
    <form>
      <div>
        <label htmlFor='postCode'>PostCode</label>
        <input
          className={`postcodd ${error}`}
          type='text'
          id='postCode'
          name='postCode'
          aria-label='postCode'
          aria-required={true}
          placeholder='postCode'
          aria-placeholder='postCode'
          autoComplete='off'
          onChange={(e) => setPostCode(e.target.value)}
          aria-describedby='postCode_error'
        />
      </div>
      <div>
        <label htmlFor='houseNumber'>House Number or Name</label>
        <input
          className='houseNumber'
          type='text'
          id='houseNumber'
          aria-label='houseNumber'
          title='houseNumber'
          aria-required={true}
          placeholder='house number'
          aria-placeholder='house number'
          onChange={(e) => setHouseNumber(parseInt(e.target.value))}
        />
      </div>
    </form>
  );
};

export default LookUpContact;
