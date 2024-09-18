"use client";
import { useState } from "react";
import VolunteerWithUsPage from "./VolunteerWithUsPage";
import JoinMembershipPage from "./JoinMembershipPage";
import JoinOurProgramPage from "./JoinOurProgramPage";

export default function GetInvolvePage() {
  const [activeTab, setActiveTab] = useState("membership");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "membership":
        return <JoinMembershipPage />;
      case "volunteer":
        return <VolunteerWithUsPage />;
      case "programs":
        return <JoinOurProgramPage />;
      default:
        return null;
    }
  };

  return (
    <div className="text-center p-4 sm:p-8 md:p-16 w-full sm:w-3/4 md:w-2/3 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        Get Involve
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>

      <div className="flex">
        <div className="w-full p-4">
          <div className="mb-4 border-b border-green-500 grid grid-cols-3 gap-2">
            <button
              className={`flex items-center justify-center w-full px-4 py-6 ${
                activeTab === "membership"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("membership")}
            >
              Join Membership
            </button>
            <button
              className={`flex items-center justify-center w-full px-4 py-2 ${
                activeTab === "volunteer"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("volunteer")}
            >
              Volunteer With Us
            </button>
            <button
              className={`flex items-center justify-center w-full px-4 py-2 ${
                activeTab === "programs"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("programs")}
            >
              Join Our Programs
            </button>
          </div>
          <div className="mt-8">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
