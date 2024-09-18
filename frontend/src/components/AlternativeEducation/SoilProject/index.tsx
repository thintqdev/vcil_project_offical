import React from "react";

const SoilProjectPage = () => {
  return (
    <div className="p-8 bg-gray-100 text-justify">
      <h1 className="text-4xl font-bold text-center mb-8">Soil Project</h1>

      <section className="mb-8 flex flex-col md:flex-row items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 border-l-8 border-green-500 pl-4">
            Introduction
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            The Soil Project (TSP) is an international alternative and gap year
            program for young people. As the name implies, The Soil Project,
            with its “soil” educational philosophy, will provide the foundation,
            community, and necessary resources for learners on the journey of
            understanding themselves within and exploring and serving the
            outside world.
          </p>
          <p className="text-lg leading-relaxed">
            The Soil Project is also a self-directed education, giving a
            semi-structure program. It creates a space, a love-based community,
            in which learners support each other and choose their own programs
            and content (self-directed education) as well as internship
            programs, travel experiences, research and social entrepreneurship,
            etc.
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
            Program Structure
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            The Soil Project is a self-directed education, giving a
            semi-structure program. In particular, parts of the program will be
            built by the project organizing team and parts will be created by
            each person's personal experience. The structure of the program will
            take place as follows for each 6-month module:
          </p>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">
              <strong>
                Part 1 - Structured Curriculum (Designed curriculum):
              </strong>{" "}
              The seeds (learners) will participate in the learning / experience
              program designed by the project organizing team or by the learning
              community itself.
            </li>
            <li className="text-lg mb-2">
              <strong>Part 2 - Self Learning Journey:</strong> Seeds will
              actively choose and design their own curriculum, experience,
              internships, travel, etc. Seeds can choose to stay in the "campus"
              or stay with their family or work or travel around themselves, do
              internships, personal projects, etc. whatever is in the personal
              learning and development needs of that individual learner.
            </li>
            <li className="text-lg mb-2">
              <strong>Part 3 - Reflection and Sharing:</strong> Seeds return to
              The Soil Project, reflect and share the journey, lessons,
              re-instructing other seeds of knowledge, skills, etc. that he/she
              has achieved through personal learning journey.
            </li>
          </ul>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Program Structure"
          className="ml-0 md:ml-4 mt-4 md:mt-0 rounded-lg shadow-md"
        />
      </section>

      <section className="mb-8 flex flex-col md:flex-row items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 border-l-8 border-green-500 pl-4">
            Project Outcomes
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            We believe each of us has our own goals and dreams. Even when we say
            the goal is to create free, liberal, or successful people, it's
            still our subjective goal, not that of the learner, and if we keep
            thinking like, unintentionally, the learners, our teammates become
            the tools for us to build up our dreams, not their own dreams.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This is especially important in education, we need to be more
            careful. Each person is their ultimate goal, that's why we are
            looking for a more humane approach. So, at The Soil Project, we
            don't have any fixed goals for learners to achieve but it is
            important that learners have experiences and opportunities to
            connect with themselves, realize their dreams and their own needs,
            so that the learner himself or herself can walk the path of building
            his own dreams, goals, and of course, with the help of the
            community. Just like our philosophy of soil education, the soil can
            provide a habitat for the tree, provide its nutrients but absolutely
            cannot interfere with how the tree grows.
          </p>
          <p className="text-lg leading-relaxed">
            In addition, learning must be a personal journey and a lifelong
            journey with no destination.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Project Outcomes"
          className="ml-0 md:ml-4 mt-4 md:mt-0 rounded-lg shadow-md"
        />
      </section>
    </div>
  );
};

export default SoilProjectPage;
