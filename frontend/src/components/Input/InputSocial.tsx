import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type InputSocialProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  icon?: IconDefinition;
};

const InputSocial = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  icon,
}: InputSocialProps) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <div className="flex items-center border-[1.5px] border-stroke rounded-lg bg-transparent px-5 py-3 transition focus-within:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-within:border-primary">
        <div className="mr-2">
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className="text-black dark:text-white"
            />
          )}
        </div>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-black outline-none dark:text-white"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default InputSocial;
