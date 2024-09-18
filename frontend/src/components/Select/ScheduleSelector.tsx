"use client";
import React from "react";
import InputTime from "../Input/InputTime";

interface ScheduleItem {
  day: string;
  time: string;
}

interface ScheduleSelectorProps {
  schedule: ScheduleItem[];
  handleScheduleChange: (
    index: number,
    field: keyof ScheduleItem,
    value: string
  ) => void;
  addSchedule: () => void;
  removeSchedule: () => void;
  daysOfWeek: string[];
}

const ScheduleSelector: React.FC<ScheduleSelectorProps> = ({
  schedule,
  handleScheduleChange,
  addSchedule,
  removeSchedule,
  daysOfWeek,
}) => {
  return (
    <div>
      <div className="mb-4.5 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        {schedule.map((session, index) => (
          <div
            key={index}
            className="relative z-20 bg-transparent dark:bg-form-input"
          >
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Thứ
            </label>
            <select
              value={session.day}
              onChange={(e) =>
                handleScheduleChange(index, "day", e.target.value)
              }
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              required
            >
              <option value="" disabled>
                Chọn thứ
              </option>
              {daysOfWeek.map((day, index) => (
                <option key={index} value={index + 1}>
                  {day}
                </option>
              ))}
            </select>
            <InputTime
              value={session.time}
              onChange={(e) =>
                handleScheduleChange(index, "time", e.target.value)
              }
              placeholder="hh:mm"
              timeFormat="H:i"
              enableTime={true}
              noCalendar={true}
              time_24hr={true}
              defaultHour={7}
              defaultMinute={0}
              name={`time-${index}`}
              label="Giờ học"
            />
          </div>
        ))}
      </div>
      <div>
        <button
          type="button"
          onClick={addSchedule}
          className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Thêm buổi học
        </button>
        <button
          type="button"
          onClick={removeSchedule}
          className="ml-2 mt-2 inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          Xóa buổi học
        </button>
      </div>
    </div>
  );
};

export default ScheduleSelector;
