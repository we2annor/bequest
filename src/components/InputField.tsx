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
  onFocus: () => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref: string;
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
  onFocus,
  onBlur,
  ref,
}) => {
  return (
    <div className={`input-field ${className}`}>
      <label htmlFor={id} aria-label={id}>
        {label}
        {required && <span className='required'>required field *</span>}
      </label>
      <input
        type='text'
        id={id}
        name={id}
        value={value}
        aria-label={label}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={onChange}
        aria-required={required}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

export default InputField;
