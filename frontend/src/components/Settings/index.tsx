"use client";
import { useState } from "react";
import HeaderSection from "../HeaderSection";
import InputSocial from "../Input/InputSocial";
import InputText from "../Input/InputText";
import TextArea from "../TextArea";
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ButtonBack from "../Button/ButtonBack";
import ButtonSave from "../Button/ButtonSave";
const Settings = () => {
  const [facebookValue, setFacebookValue] = useState("");
  const [tiktokValue, setTiktokValue] = useState("");
  const [youtubeValue, setYoutubeValue] = useState("");
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <HeaderSection title="Cài đặt trang" />
      <div className="flex flex-col gap-5.5 p-6.5">
        <InputText
          name="title"
          label="Tiêu đề trang"
          placeholder="Nhập tiêu đề trang"
          required={true}
          value=""
          onChange={() => {}}
        />
        <TextArea
          name="description"
          label="Mô tả"
          placeholder="Nhập mô tả"
          value=""
          onChange={() => {}}
        />
        <InputText
          name="address"
          label="Địa chỉ"
          placeholder="Nhập địa chỉ"
          required={true}
          value=""
          onChange={() => {}}
        />
        <InputText
          name="phone"
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          required={true}
          value=""
          onChange={() => {}}
        />
        <InputText
          name="email"
          label="Email"
          placeholder="Nhập email"
          required={true}
          value=""
          onChange={() => {}}
        />
        <InputSocial
          name="facebook"
          label="Facebook"
          placeholder="Enter your Facebook URL"
          value={facebookValue}
          onChange={(e) => setFacebookValue(e.target.value)}
          icon={faFacebook}
        />
        <InputSocial
          name="tiktok"
          label="TikTok"
          placeholder="Enter your TikTok URL"
          value={tiktokValue}
          onChange={(e) => setTiktokValue(e.target.value)}
          icon={faTiktok}
        />
        <InputSocial
          name="youtube"
          label="YouTube"
          placeholder="Enter your YouTube URL"
          value={youtubeValue}
          onChange={(e) => setYoutubeValue(e.target.value)}
          icon={faYoutube}
        />
        <div className="flex justify-end space-x-5">
          <ButtonSave />
        </div>
      </div>
    </div>
  );
};
export default Settings;
