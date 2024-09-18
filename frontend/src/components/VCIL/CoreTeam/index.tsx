const CoreTeam = () => {
  return (
    <div className="text-center w-full sm:w-3/4 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        Core Team
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Advisor 1"
            className="w-48 h-48 rounded-full"
          />
          <p className="text-sm sm:text-base md:text-base lg:text-base my-2 sm:my-4 md:my-6">
            Advisor 1
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Advisor 2"
            className="w-48 h-48 rounded-full"
          />
          <p className="text-sm sm:text-base md:text-base lg:text-base my-2 sm:my-4 md:my-6">
            Advisor 2
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Advisor 3"
            className="w-48 h-48 rounded-full"
          />
          <p className="text-sm sm:text-base md:text-base lg:text-base my-2 sm:my-4 md:my-6">
            Advisor 3
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Advisor 4"
            className="w-48 h-48 rounded-full"
          />
          <p className="text-sm sm:text-base md:text-base lg:text-base my-2 sm:my-4 md:my-6">
            Advisor 4
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Advisor 5"
            className="w-48 h-48 rounded-full"
          />
          <p className="text-sm sm:text-base md:text-base lg:text-base my-2 sm:my-4 md:my-6">
            Advisor 5
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
