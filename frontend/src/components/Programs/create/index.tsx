"use client";
import ButtonBack from "@/components/Button/ButtonBack";
import ButtonSave from "@/components/Button/ButtonSave";
import HeaderSection from "@/components/HeaderSection";
import InputNumber from "@/components/Input/InputNumber";
import InputText from "@/components/Input/InputText";
import SelectGroupOne from "@/components/Select/SelectGroupOne";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import { useState } from "react";

const CreateDocument = () => {
  const optionsClass = [
    { value: "10", label: "Lớp 10" },
    { value: "11", label: "Lớp 11" },
    { value: "12", label: "Lớp 12" },
  ];
  const optionsType = [
    { value: "1", label: "Đại số" },
    { value: "2", label: "Hình học" },
  ];
  const optionsChapter = [
    { value: "1", label: "Chương 1" },
    { value: "2", label: "Chương 2" },
  ];
  const [titleValue, setTitleValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <HeaderSection title="Thêm tài liệu" />
      <div className="flex flex-col gap-5.5 p-6.5">
        <InputText
          placeholder="Nhập tiêu đề"
          onChange={handleInputChange}
          name="title"
          value={titleValue}
          required={true}
          label="Tiêu đề"
        />

        <InputText
          placeholder="Nhập mô tả"
          onChange={handleInputChange}
          name="description"
          value=""
          required={true}
          label="Mô tả"
        />

        <InputText
          placeholder="Nhập đường dẫn"
          onChange={handleInputChange}
          name="url"
          value=""
          required={true}
          label="Đường dẫn"
        />
        <div className="flex space-x-5 items-center">
          <SelectGroupOne
            onChange={() => {}}
            name="category"
            label="Lớp"
            options={optionsClass}
            className="w-1/3"
            required={true}
          />
          <SelectGroupOne
            onChange={() => {}}
            name="type"
            label="Loại"
            options={optionsType}
            className="w-1/3"
            required={true}
          />
          <SelectGroupOne
            onChange={() => {}}
            name="category"
            label="Chương"
            options={optionsChapter}
            className="w-1/3"
            required={true}
          />
        </div>
        <div className="flex justify-end space-x-5">
          <ButtonBack link="/admin/documents" />
          <ButtonSave />
        </div>
      </div>
    </div>
  );
};

export default CreateDocument;
