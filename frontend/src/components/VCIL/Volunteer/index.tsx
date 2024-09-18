const Volunteer: React.FC = () => {
  return (
    <div className="text-center w-full sm:w-3/4 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        Volunteer-based organization
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      {/* Tạo ra 2 phần, 1 bên text, 1 bên hình ảnh */}
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2 p-4">
          <p className="text-xs sm:text-sm md:text-base text-boxdark text-justify">
            <p>
              The core operating team of VCIL Community currently works entirely
              as full-time volunteers. No one receives a salary for their work
              at VCIL Community. Instead, the basic needs of the members are
              covered by a common fund.
            </p>
            <p>
              As the market economy is expanding in every corner of the world,
              everything is slowly commodified which is exchanged for
              credit-based anonymous currency. Even the most sacred thing such
              as human energy and time are traded as “labor markets”.
            </p>
            <p>
              To transcend this paradigm, the act of service in VCIL Community
              is redeemed as PRICELESS. Since working for social change is as
              prestigious as dedicating to something higher than individual
              self, no precise amount of payment can justify the soul.
            </p>
            <p>
              To free ourselves from hierarchical dichotomy between employee and
              employers; all members co-own, co-create, and co-manage VCIL
              Community. While there is organic leadership in an emergent
              situation, we had no boss, no CEO or board of directors to make
              decisions. This design also encourages entrepreneurship spirit
              among core team.
            </p>
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/500"
            alt="volunteer-based-organization"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Volunteer;
