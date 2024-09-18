import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left Column: Logo */}
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <a href="/">
              <Image src="/logo/logo.png" alt="Logo" width={50} height={50} />
            </a>
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <a href="#" className=" hover:text-gray-200 px-2 py-1 text-sm">
              Privacy Policy
            </a>
            <a href="#" className=" hover:text-gray-200 px-2 py-1 text-sm">
              Terms of Service
            </a>
            <a href="#" className=" hover:text-gray-200 px-2 py-1 text-sm">
              Cookie Policy
            </a>
          </div>

          {/* Right Column: Owner Information */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-sm">
              &copy; 2021 Tailwind CSS Admin Template by{" "}
              <a
                href="https://www.tailwind-kit.com"
                className="text-blue-400 hover:underline"
              >
                Tailwind Kit
              </a>
            </span>
            <span className="text-sm mt-2">
              Developed by{" "}
              <a
                href="https://www.yourwebsite.com"
                className="text-blue-400 hover:underline"
              >
                Your Name
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
