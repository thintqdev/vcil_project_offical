"use client";
import CustomizedProgramPage from "@/components/AlternativeEducation/CustomizedProgram";
import MoneyPage from "@/components/AlternativeEducation/Money";
import SoilProjectPage from "@/components/AlternativeEducation/SoilProject";
import TravelSchoolPage from "@/components/AlternativeEducation/TravelSchool";
import FrontDefaultLayout from "@/components/Layouts/FrontDefaultLayout";
import Link from "next/link";
import { useState } from "react";

export default function AlternativeEducationPage() {
  const [activeTab, setActiveTab] = useState("soil");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "soil":
        return <SoilProjectPage />;
      case "travel":
        return <TravelSchoolPage />;
      case "money":
        return <MoneyPage />;
      case "customize":
        return <CustomizedProgramPage />;
      default:
        return null;
    }
  };
  return (
    <FrontDefaultLayout>
      <div className="flex">
        <div className="w-full p-4">
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Alternative Education"
            className="w-full h-96 object-cover mb-10"
          />
          <div className="mb-4 border-b border-green-500 grid grid-cols-4 gap-2">
            <button
              className={`flex items-center justify-center w-full px-4 py-6 ${
                activeTab === "soil" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("soil")}
            >
              The Soil Project
            </button>
            <button
              className={`flex items-center justify-center w-full px-4 py-2 ${
                activeTab === "travel"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("travel")}
            >
              Travel School
            </button>
            <button
              className={`flex items-center justify-center w-full px-4 py-2 ${
                activeTab === "money"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("money")}
            >
              Money IQ - Money EQ
            </button>
            <button
              className={`flex items-center justify-center w-full px-4 py-2 ${
                activeTab === "customize"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("customize")}
            >
              Customized Program
            </button>
          </div>
          <div className="mt-8">{renderTabContent()}</div>
        </div>
      </div>
    </FrontDefaultLayout>
  );
}
