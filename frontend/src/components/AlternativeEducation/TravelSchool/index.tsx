import React from "react";

const TravelSchoolPage = () => {
  return (
    <div className="p-8 bg-gray-100 text-justify">
      <h1 className="text-4xl font-bold text-center mb-8">
        VCIL Travel School
      </h1>

      <section className="mb-8 flex flex-col md:flex-row items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 border-l-8 border-green-500 pl-4">
            Introduction
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Linked with VCIL Community, VCIL Travel School is an international
            experiential/travel learning program which utilizes context-based
            learning in the cross-cultural environment. By combining education
            and traveling with community development for locals, cross-cultural
            collaboration, VCIL Travel School aims to renovate and redefine how
            education as well as tourism has happened.
          </p>
          <p className="text-lg leading-relaxed">
            VCIL Travel School changes the way education happens from the 4
            walls classroom to the outside world where people get
            practical/hands-on experience by working with local organizations
            while creates positive impact for local community and immerse
            participants in different context to reflect upon themselves for
            inner change, diversify & challenge their viewpoint, broaden their
            knowledge/horizon, foster international collaboration.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Introduction"
          className="ml-0 md:ml-4 mt-4 md:mt-0 rounded-lg shadow-md"
        />
      </section>

      <section className="mb-8 flex flex-col md:flex-row items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 border-l-8 border-green-500 pl-4">
            Program History
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Since VCIL Travel School started in 2018, we have launched 8
            learning trips in several countries: Cambodia, Thailand, South Korea
            and India. Each program has its own theme which depends on the
            location we visit. VCIL Travel School makes this happen by bringing
            together a creative network of participants with diverse
            backgrounds, interests & interest to explore the theme together. In
            addition, we also collaborate with local NGOs, local communities and
            eminent resource persons to create this program.
          </p>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">
              <strong className="text-red-500">
                VCIL Travel School 2018 in Thailand & Cambodia:
              </strong>{" "}
              Journey to Happy & Sustainable Education, took place in Thailand &
              Cambodia, from 6th - 16th Sep, 2018
            </li>
            <li className="text-lg mb-2">
              <strong className="text-red-500">
                VCIL Travel School 2019 in Thailand & India:
              </strong>{" "}
              Paradigm Shift towards New Story, took place in Thailand &
              Auroville (India), from 4th - 30th Dec, 2019
            </li>
            <li className="text-lg mb-2">
              <strong className="text-red-500">
                VCIL Travel School 2022 in Ladakh:
              </strong>{" "}
              Mindful Travel & Sustainable Living, took place in Ladakh, India,
              from 27th Aug - 10th Sep, 2022
            </li>
            <li className="text-lg mb-2">
              <strong className="text-red-500">
                VCIL Travel School 2022 in New Delhi & Udaipur:
              </strong>{" "}
              Alternative Education & Alivelihood Career, took place in New
              Delhi & Udaipur, India, from 3rd - 15th Oct, 2022
            </li>
            <li className="text-lg mb-2">
              <strong className="text-red-500">
                VCIL Travel School 2022 in Auroville:
              </strong>{" "}
              New Consciousness, New Society, took place in Auroville, Tamil
              Nadu, India, from 4th - 10th Jan, 2023
            </li>
            <li className="text-lg mb-2">
              <strong className="text-red-500">
                VCIL Travel School 2023 in South Korea:
              </strong>{" "}
              From Miracle Development to Sustainable Alternatives, took place
              in Seoul, Ulsan, Busan, South Korea, from 8th - 18th Oct, 2023
            </li>
          </ul>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Program History"
          className="ml-0 md:ml-4 mt-4 md:mt-0 rounded-lg shadow-md"
        />
      </section>
    </div>
  );
};

export default TravelSchoolPage;
