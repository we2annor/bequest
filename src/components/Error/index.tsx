import React from "react";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div data-testid='error' className='error'>
      {message}
    </div>
  );
};

export default Error;
