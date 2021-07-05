import React from "react";

interface ErrorProps {
  errors: {} | string;
}

type Errors = { [key: string]: string | number | any };

const Error: React.FC<ErrorProps> = ({ errors }) => {
  const getErrorMessages = () => {
    if (typeof errors === "object") {
      const messages: Errors[] = Object.values(errors);
      return messages.map((message, index) => <li key={index}>{message}</li>);
    } else {
      return <li> {errors}</li>;
    }
  };

  return (
    <ul data-testid='error' className='error_messages'>
      <h3>Oops! Error Occured!</h3>
      {getErrorMessages()}
    </ul>
  );
};

export default Error;
