const ContactUs = () => {
  return (
    <div className="text-center p-4 sm:p-8 md:p-16 w-full sm:w-3/4 md:w-2/3 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      <div className="container mx-auto py-16">
        <h2 className="text-center text-2xl font-bold mb-8 text-green-500">
          STAY CONNECTED ON SOCIAL MEDIA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src="/icons/facebook.svg"
                alt="facebook"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="text-xl font-bold">@vcil</h3>
            </div>
            <p className="text-sm text-gray-400">
              Vcil's official Facebook account. Like us for the latest news
              about NASA and space.
            </p>
          </div>
          <div className="rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src="/icons/youtube.svg"
                alt="Youtube"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="text-xl font-bold">@vcil</h3>
            </div>
            <p className="text-sm text-gray-400">
              Subscribe to the official Vcil YouTube channel for the latest
              videos about Vcil.
            </p>
          </div>
          <div className="rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src="/icons/instagram.svg"
                alt="instagram"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="text-xl font-bold">@vcil</h3>
            </div>
            <p className="text-sm text-gray-400">
              We're launching learning to new heights with STEM resources.
            </p>
          </div>
          <div className="rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src="/icons/twitter.svg"
                alt="NASA logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="text-xl font-bold">@vcil</h3>
            </div>
            <p className="text-sm text-gray-400">
              Follow Vcil for the latest updates on Vcil missions, watch Vcil
              TV, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
