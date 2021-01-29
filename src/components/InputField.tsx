import React from "react";

interface IProps {
  className: string;
  label: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete: string;
}
const InputField: React.FC<IProps> = ({
  className,
  onChange,
  label,
  id,
  value,
  placeholder,
  autoComplete,
}) => {
  return (
    <div className={`input-field ${className}`}>
      <label htmlFor={id} aria-label={id}>
        {label}
      </label>
      <input
        type='text'
        id={id}
        name={id}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
