import React from "react";

type InputEmailProps = {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  required?: boolean;
  label?: string;
};

const InputEmail: React.FC<InputEmailProps> = ({
  placeholder,
  onChange,
  name,
  value,
  required,
  label,
}) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
        {required ? <span className="text-meta-1">*</span> : null}
      </label>
      <input
        type="email"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        required={required}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
  );
};

export default InputEmail;
