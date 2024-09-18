"use client";

import React, { ChangeEvent, useState } from "react";
import HeaderSection from "@/components/HeaderSection";
import InputText from "@/components/Input/InputText";
import TextArea from "@/components/TextArea";
import InputNumber from "@/components/Input/InputNumber";
import SelectGroupOne from "@/components/Select/SelectGroupOne";
import ScheduleSelector from "@/components/Select/ScheduleSelector";
import ButtonBack from "@/components/Button/ButtonBack";
import ButtonSave from "@/components/Button/ButtonSave";

interface ScheduleItem {
  day: string;
  time: string;
}

const CreateGroup: React.FC = () => {
  const [className, setClassName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [sessionsPerWeek, setSessionsPerWeek] = useState<number>(0);
  const [schedule, setSchedule] = useState<ScheduleItem[]>([
    { day: "", time: "" },
  ]);
  const [maxStudents, setMaxStudents] = useState<number>(0);

  const daysOfWeek = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Tên lớp học:", className);
    console.log("Mô tả:", description);
    console.log("Số lượng buổi trong tuần:", sessionsPerWeek);
    console.log("Lịch học:", schedule);
    console.log("Số lượng học sinh tối đa:", maxStudents);
  };

  const handleScheduleChange = (
    index: number,
    field: keyof ScheduleItem,
    value: string
  ) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };

  const addSchedule = () => {
    if (schedule.length < 7) {
      setSchedule([...schedule, { day: "", time: "" }]);
    } else {
      alert("Không thể thêm lịch học mới!");
    }
  };

  const removeSchedule = () => {
    if (schedule.length > 1) {
      const newSchedule = [...schedule];
      newSchedule.pop();
      setSchedule(newSchedule);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <HeaderSection title="Tạo lớp học" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
        <InputText
          label="Tên lớp học"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />
        <TextArea
          label="Mô tả"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputNumber
          label="Số lượng buổi học trong tuần"
          value={sessionsPerWeek}
          onChange={(e) => setSessionsPerWeek(Number(e.target.value))}
          required={true}
          min={1}
          max={7}
        />
        <label className="flex text-sm font-medium text-black dark:text-white">
          <span>Lịch học</span>
          <span className="text-rose-500">*</span>
          <span className="ml-4 text-rose-500">
            Vui lòng nhập đầy đủ thông tin thứ và giờ trước khi thêm lịch học
            mới.
          </span>
        </label>
        <ScheduleSelector
          schedule={schedule}
          handleScheduleChange={handleScheduleChange}
          addSchedule={addSchedule}
          removeSchedule={removeSchedule}
          daysOfWeek={daysOfWeek}
        />

        <InputNumber
          label="Số lượng học sinh tối đa"
          value={maxStudents}
          onChange={(e) => setMaxStudents(Number(e.target.value))}
          required
          min={1}
        />
        <div className="flex justify-end space-x-5">
          <ButtonBack link="/admin/groups" />
          <ButtonSave />
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
