import React from "react";

const JoinMembershipPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
        <h1 className="text-4xl font-extrabold mb-6 text-center lg:text-left text-gray-800">
          Sign up to our newsletter
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-justify lg:text-left">
          Stay informed about our upcoming events and inspiring stories and
          initiatives we encounter, and get a ‘big picture’ perspective on
          current events.
        </p>
        <div className="flex justify-center lg:justify-start mb-6">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
            Subscribe
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

export default JoinMembershipPage;
