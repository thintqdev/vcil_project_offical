"use client";
import ButtonBack from "@/components/Button/ButtonBack";
import ButtonSave from "@/components/Button/ButtonSave";
import Header from "@/components/Header";
import HeaderSection from "@/components/HeaderSection";
import ImageUploader from "@/components/Input/ImageUploader";
import InputDate from "@/components/Input/InputDate";
import InputNumber from "@/components/Input/InputNumber";
import InputText from "@/components/Input/InputText";
import InputTime from "@/components/Input/InputTime";
import SelectGroupOne from "@/components/Select/SelectGroupOne";
import TextArea from "@/components/TextArea";
import { useState } from "react";

const CreateExam = () => {
  const [titleValue, setTitleValue] = useState("");
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <HeaderSection title="Tạo đề thi" />
      <div className="flex flex-col gap-5.5 p-6.5">
        <InputText
          placeholder="Nhập tiêu đề"
          onChange={handleInputChange}
          name="title"
          value={""}
          required={true}
          label="Tiêu đề"
        />
        <TextArea
          label="Mô tả"
          value={text}
          onChange={handleTextChange}
          placeholder="Nhập mô tả"
          className="custom-class"
        />
        <SelectGroupOne
          label="Hình thức thi"
          options={[
            { value: "1", label: "Thi trực tuyến" },
            { value: "2", label: "Thi tự do" },
          ]}
          onChange={() => {}}
          name="type"
          required={true}
        />

        <SelectGroupOne
          label="Danh mục"
          options={[
            { value: "1", label: "Toán" },
            { value: "2", label: "Văn" },
          ]}
          onChange={() => {}}
          name="category_id"
          required={true}
        />

        <InputNumber
          label="Số câu hỏi"
          onChange={() => {}}
          name="question"
          required={true}
          max={100}
          min={1}
        />

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <InputDate
            label="Ngày bắt đầu"
            onChange={() => {}}
            name="start_date"
            placeholder="mm/dd/yyyy"
          />
          <InputTime
            label="Giờ bắt đầu"
            placeholder="hh:mm"
            timeFormat="H:i"
            enableTime={true}
            noCalendar={true}
            time_24hr={true}
            defaultHour={9}
            defaultMinute={30}
            name="start_time"
            onChange={() => {}}
          />
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <InputDate
            label="Ngày kết thúc"
            onChange={() => {}}
            name="start_date"
            placeholder="mm/dd/yyyy"
          />
          <InputTime
            label="Giờ kết thúc"
            placeholder="hh:mm"
            timeFormat="H:i"
            enableTime={true}
            noCalendar={true}
            time_24hr={true}
            defaultHour={9}
            defaultMinute={30}
            name="end_time"
            onChange={() => {}}
          />
        </div>

        <SelectGroupOne
          label="Số phút làm bài"
          options={[
            { value: "15", label: "30 phút" },
            { value: "45", label: "45 phút" },
            { value: "90", label: "90 phút" },
          ]}
          onChange={() => {}}
          name="time"
          required={true}
        />

        <ImageUploader
          label="Chọn hình ảnh đại diện"
          onChange={handleFileChange}
          className="custom-class"
        />
        <div className="flex justify-end space-x-5">
          <ButtonBack link="/admin/exams" />
          <ButtonSave />
        </div>
      </div>
    </div>
  );
};

export default CreateExam;
