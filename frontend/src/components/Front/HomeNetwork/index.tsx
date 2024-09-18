"use client";
import React, { useState, useEffect } from "react";

// Import the fetchNetworkItems function
const fetchNetworkItems = async () => {
  try {
    const response = await fetch("http://localhost:3333/api/admin/networks");
    if (response.ok) {
      const data = await response.json();
      console.log(data.data);
      return data.data;
    } else {
      console.error("Failed to fetch network items");
      return [];
    }
  } catch (error) {
    console.error("Error fetching network items:", error);
    return [];
  }
};

const HomeNetwork = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNetworkItems();
      setSlides(data);
    };

    fetchData();
  }, []);

  const chunkSlides = (slides: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < slides.length; i += size) {
      chunks.push(slides.slice(i, i + size));
    }
    return chunks;
  };

  const slideChunks = chunkSlides(slides, 4);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slideChunks.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slideChunks.length]);

  return (
    <div className="text-center w-full sm:w-3/4 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        Our Network
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>

      {slideChunks.map((chunk, chunkIndex) => (
        <div
          key={chunkIndex}
          className={`flex justify-center items-center space-x-4 ${
            chunkIndex === activeSlide ? "block" : "hidden"
          }`}
        >
          {chunk.map((slide, index) => (
            <div key={index} className="w-full h-full">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={slide.logo}
                  alt={slide.name}
                  className="w-64 h-64 object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      ))}

      <div className="flex justify-center space-x-2 mt-4">
        {slideChunks.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === activeSlide ? "bg-green-600" : "bg-boxdark"
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeNetwork;
