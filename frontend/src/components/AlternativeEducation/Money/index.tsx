import React from "react";

const MoneyPage = () => {
  return (
    <div className="p-8 bg-gray-100 text-justify">
      <h1 className="text-4xl font-bold text-center mb-8">
        Money IQ - Money EQ
      </h1>

      <section className="mb-8 flex flex-col md:flex-row items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 border-l-8 border-green-500 pl-4">
            Introduction
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Recognizing the importance of financial literacy yet lack of
            training opportunities amongst the youth, Money IQ - Money EQ was
            founded as a learning program to equip young people with necessary
            and holistic training in personal finance. More significantly, the
            program broadens its education to both financial education and
            emotional intelligence regarding money to transform people’s
            relationship with money to live a wealthy and happy life.
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
            Mission
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">
              Transforming misconceptions about money and our relationship with
              money, emphasize on interacting with money with consciousness
              (Money EQ)
            </li>
            <li className="text-lg mb-2">
              Educating the community about personal finance, investing and
              insurance to make wise financial decisions (Money IQ/ Financial
              Literacy)
            </li>
            <li className="text-lg mb-2">
              Promoting the spirit of entrepreneurship/ social entrepreneurship
            </li>
            <li className="text-lg mb-2">
              Promoting rethinking economics and financial system
            </li>
          </ul>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Mission"
          className="ml-0 md:ml-4 mt-4 md:mt-0 rounded-lg shadow-md"
        />
      </section>

      <section className="mb-8 flex flex-col md:flex-row items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 border-l-8 border-green-500 pl-4">
            Vision
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">
              Building a community of young entrepreneurs with financial
              literacy and social business through education.
            </li>
            <li className="text-lg mb-2">
              Creating an environment for learning personal financial knowledge
              and rethinking our relationship with money.
            </li>
            <li className="text-lg mb-2">
              Creating a safe space to share and learn about how to build a
              healthy relationship with money, resolve the trauma of money to
              achieve freedom, happiness, and fulfillment in finance.
            </li>
            <li className="text-lg mb-2">
              Practicing an alternative economy, aimed at regeneration and
              investing in the real economy.
            </li>
          </ul>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Vision"
          className="ml-0 md:ml-4 mt-4 md:mt-0 rounded-lg shadow-md"
        />
      </section>
    </div>
  );
};

export default MoneyPage;
