import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useEffect } from "react";

interface InputTimeProps {
  label?: string;
  placeholder?: string;
  timeFormat?: string;
  enableTime?: boolean;
  noCalendar?: boolean;
  time_24hr?: boolean;
  defaultHour?: number;
  defaultMinute?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

const InputTime: React.FC<InputTimeProps> = ({
  label = "Time picker",
  placeholder = "hh:mm",
  timeFormat = "H:i",
  enableTime = true,
  noCalendar = true,
  time_24hr = true,
  defaultHour = 12,
  defaultMinute = 0,
  onChange,
  name,
  value,
}) => {
  useEffect(() => {
    // Init flatpickr
    flatpickr(".form-timepicker", {
      enableTime,
      noCalendar,
      dateFormat: timeFormat,
      time_24hr,
      defaultHour,
      defaultMinute,
      onChange: (selectedDates, dateStr) => {
        if (onChange) {
          const event = {
            target: {
              value: dateStr,
              name: name,
            },
          } as unknown as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
      },
    });
  }, [
    enableTime,
    noCalendar,
    timeFormat,
    time_24hr,
    defaultHour,
    defaultMinute,
    onChange,
    name,
  ]);

  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          className="form-timepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          placeholder={placeholder}
          data-class="flatpickr-right"
          name={name}
          onChange={onChange}
          value={value}
        />

        <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM9 16.2C4.9776 16.2 1.8 13.0224 1.8 9C1.8 4.9776 4.9776 1.8 9 1.8C13.0224 1.8 16.2 4.9776 16.2 9C16.2 13.0224 13.0224 16.2 9 16.2ZM9.9 9V4.5H8.1V10.8H13.5V9H9.9Z"
              fill="#64748B"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputTime;
