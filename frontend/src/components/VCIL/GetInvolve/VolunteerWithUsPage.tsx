import React from "react";

const VolunteerWithUsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
        <h1 className="text-4xl font-extrabold mb-6 text-center lg:text-left text-gray-800">
          Volunteer with us
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-justify lg:text-left">
          We have a number of projects you can contribute to, depending on your
          skills and experience: design, video editors, filming, audio
          transcribe/recap, making video subtitles, translations of new
          materials and proofread of existing translations. If you are
          interested, please contact us.
        </p>
        <div className="flex justify-center lg:justify-start mb-6">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
            Contact us
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default VolunteerWithUsPage;
