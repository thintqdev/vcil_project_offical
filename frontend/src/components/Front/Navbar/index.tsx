import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuGroupLeft = [
    {
      title: "Vcil Community",
      link: "/vcil-community",
      children: [
        { title: "About Us", link: "/vcil-community#about-us" },
        { title: "Mission", link: "/vcil-community#mission" },
        { title: "Strategy", link: "/vcil-community#strategy" },
        {
          title: "Volunteer-based organization",
          link: "/vcil-community#volunteer-based-organization",
        },
        { title: "People", link: "/vcil-community#people" },
        { title: "Our dreams", link: "/vcil-community#our-dreams" },
        { title: "FAQ", link: "/vcil-community#faq" },
        { title: "Get involved", link: "/vcil-community#get-involved" },
      ],
    },
    {
      title: "Alternative Education",
      link: "/alternative-education",
      children: [
        {
          title: "The Soil Project",
          link: "/alternative-education#the-soil-project",
        },
        {
          title: "Vcil Travel School",
          link: "/alternative-education#vcil-travel-school",
        },
        {
          title: "Money IQ - Money EQ",
          link: "/alternative-education#money-iq-money-eq",
        },
        {
          title: "Customized Programs",
          link: "/alternative-education#customized-programs",
        },
      ],
    },

    {
      title: "Social Enterprise",
      link: "/social-enterprise",
      children: [
        {
          title: "XomTour",
          link: "/social-enterprise#xomtour",
          children: [
            {
              title: "Regenerative tourism",
              link: "/social-enterprise#regenerative-tourism",
            },
            {
              title: "Video giới thiệu",
              link: "/social-enterprise#video-gioi-thieu",
            },
            { title: "Our partners", link: "/social-enterprise#our-partners" },
            {
              title: "Our customers",
              link: "/social-enterprise#our-customers",
            },
          ],
        },
      ],
    },
  ];

  const menuGroupRight = [
    {
      title: "Our Community & Network",
      link: "/our-community-network",
      children: [
        { title: "Membership", link: "/our-community-network#membership" },
        {
          title: "Vcil Coffee Chat",
          link: "/our-community-network#vcil-coffee-chat",
        },
        {
          title: "Building a tribe",
          link: "/our-community-network#building-a-tribe",
        },
        {
          title: "Advisors & Facilitators",
          link: "/our-community-network#advisors-facilitators",
        },
        {
          title: "Global network",
          link: "/our-community-network#global-network",
        },
      ],
    },
    { title: "Journal", link: "/journal" },
    { title: "Publications", link: "/publications" },
  ];

  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex-1 flex justify-start hidden md:flex">
            <ul className="flex space-x-4">
              {menuGroupLeft.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.link}
                    className="text-gray-800 hover:text-green-600 active:text-green-800"
                  >
                    {item.title}
                  </a>
                  {item.children && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:translate-y-1 hidden group-hover:block">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex} className="">
                          <a
                            href={child.link}
                            className="block px-4 py-2 text-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors duration-200 ease-in-out"
                          >
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a href="/" className="text-lg font-bold text-green-600">
              <Image src="/logo/logo.png" alt="Logo" width={100} height={100} />
            </a>
          </div>
          <div className="flex-1 flex justify-end hidden md:flex">
            <ul className="flex space-x-4">
              {menuGroupRight.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.link}
                    className="text-gray-800 hover:text-green-600 active:text-green-800"
                  >
                    {item.title}
                  </a>
                  {item.children && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:translate-y-1 hidden group-hover:block">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex} className="">
                          <a
                            href={child.link}
                            className="block px-4 py-2 text-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors duration-200 ease-in-out"
                          >
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-2">
              {[...menuGroupLeft, ...menuGroupRight].map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.link}
                    className="text-gray-800 hover:text-green-600 active:text-green-800 block px-4 py-2"
                  >
                    {item.title}
                  </a>
                  {item.children && (
                    <ul className="pl-4">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex} className="">
                          <a
                            href={child.link}
                            className="text-gray-800 hover:text-green-600 block px-4 py-2"
                          >
                            {child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
