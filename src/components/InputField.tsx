import React from "react";

interface IProps {
  className: string;
  label: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete: string;
  required: boolean;
}
const InputField: React.FC<IProps> = ({
  className,
  onChange,
  label,
  id,
  value,
  placeholder,
  autoComplete,
  required,
}) => {
  return (
    <div className={`input-field ${className}`}>
      <label htmlFor={id} aria-label={id}>
        {label}
        {required && (
          <span style={{ color: "red", fontSize: "1.2rem" }}>
            required field *
          </span>
        )}
      </label>
      <input
        type='text'
        id={id}
        name={id}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
