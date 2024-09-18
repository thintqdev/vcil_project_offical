"use client";
import ButtonBack from "@/components/Button/ButtonBack";
import ButtonSave from "@/components/Button/ButtonSave";
import HeaderSection from "@/components/HeaderSection";
import InputText from "@/components/Input/InputText";
import SelectGroupOne from "@/components/Select/SelectGroupOne";
import { useState } from "react";

const CreateLecture = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoLink, setVideoLink] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [thumbnailLink, setThumbnailLink] = useState("");

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleVideoLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    setVideoLink(link);
    const videoId = link.split("v=")[1];
    if (videoId) {
      setPreviewLink(`https://www.youtube.com/embed/${videoId}`);
      setThumbnailLink(`https://img.youtube.com/vi/${videoId}/0.jpg`);
    } else {
      setPreviewLink("");
      setThumbnailLink("");
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <HeaderSection title="Tạo bài giảng" />
      <div className="flex flex-col gap-5.5 p-6.5">
        <InputText
          label="Tên bài giảng"
          placeholder="Nhập tên bài giảng"
          value=""
          onChange={() => {}}
          name="lecture_name"
          required={true}
        />
        <InputText
          label="Link Video (YouTube)"
          name="video_link"
          placeholder="Nhập link video"
          value={videoLink}
          onChange={handleVideoLinkChange}
          required={true}
        />
        {previewLink && (
          <div>
            <h4>Xem Trước Video:</h4>
            <iframe
              width="560"
              height="400"
              src={previewLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full justify-center"
            ></iframe>
          </div>
        )}
        {thumbnailLink && (
          <div>
            <h4>Thumbnail của Video:</h4>
            <img src={thumbnailLink} alt="Video Thumbnail" className="w-full" />
            <InputText
              label="Thumbnail của video"
              name="thumbnail_link"
              value={thumbnailLink}
              onChange={handleVideoLinkChange}
              required={true}
              disabled={true}
            />
          </div>
        )}
        <SelectGroupOne
          label="Chọn danh mục"
          options={[
            { value: "math", label: "Toán" },
            { value: "science", label: "Khoa học" },
            { value: "history", label: "Lịch sử" },
            { value: "language", label: "Ngôn ngữ" },
          ]}
          onChange={() => {}}
          name="category"
          required={true}
        />
        <InputText
          label="Thời lượng"
          name="duration"
          required={true}
          placeholder="Nhập thời lượng"
          value=""
          onChange={() => {}}
        />
        <div className="flex justify-end space-x-5">
          <ButtonBack link="/admin/lectures" />
          <ButtonSave />
        </div>
      </div>
    </div>
  );
};

export default CreateLecture;
