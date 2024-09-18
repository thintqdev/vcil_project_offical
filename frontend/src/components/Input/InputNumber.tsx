import React from "react";

type InputNumberProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  label?: string;
  min?: number;
  max?: number;
  value?: number;
};

const InputNumber = (props: InputNumberProps) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {props.label}
        {props.required ? <span className="text-meta-1">*</span> : null}
      </label>
      <input
        type="number"
        onChange={props.onChange}
        name={props.name}
        required={props.required}
        min={props.min}
        max={props.max}
        value={props.value}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
  );
};

export default InputNumber;
