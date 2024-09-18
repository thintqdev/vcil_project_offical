const AboutUs: React.FC = () => {
  return (
    <div className="border border-secondary text-center p-4 sm:p-8 md:p-16 w-full sm:w-3/4 md:w-2/3 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        About Us
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      <p className="text-xs sm:text-sm md:text-base text-boxdark text-justify">
        VCIL Community is a network and community of people who advocate
        paradigm shift toward a regenerative and well-being society through
        alternative education and social entrepreneurship. In other words, VCIL
        Community is also a platform supporting social changes to realize a "new
        civilization."
      </p>
    </div>
  );
};
export default AboutUs;
