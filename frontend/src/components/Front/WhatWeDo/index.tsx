"use client";
import React, { useState, useEffect } from "react";

const WhatWeDo = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:3333/api/admin/what-we-dos"
        );
        const data = await response.json();
        setCards(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const Card = ({ image, text }: { image: string; text: string }) => {
    return (
      <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4">
        <img
          src={image}
          alt={text}
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center bg-black bg-opacity-50 p-2 rounded">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="text-center w-full sm:w-3/4 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        What We Do
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} text={card.title} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
