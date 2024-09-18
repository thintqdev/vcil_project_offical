"use client";
import React, { useState, useEffect } from "react";

const HistoryAndAchievement = () => {
  const [history, setHistory] = useState<string>("");

  useEffect(() => {
    const fetchSetting = (
      name: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      fetch(`http://localhost:3333/api/admin/general-settings?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          const formattedData = data.data.value.replace(/<br\s*\/?>/gi, "\n");
          setter(formattedData);
        });
    };

    fetchSetting("history", setHistory);
  }, []);

  const historyParts = history.split("\n");
  const midIndex = Math.ceil(historyParts.length / 2);
  const leftColumn = historyParts.slice(0, midIndex);
  const rightColumn = historyParts.slice(midIndex);
  return (
    <div className="text-center w-full sm:w-3/4 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        History And Achievement
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      <div className="flex text-justify">
        <div className="w-1/2 pr-4">
          <p className="text-sm sm:text-base md:text-base lg:text-base my-2 sm:my-4 md:my-6">
            {leftColumn.map((part, index) => (
              <span key={index}>
                {part.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    <br />
                  </span>
                ))}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="w-1/2 pl-4">
          <p className="text-sm sm:text-base md:text-base lg:text-base my-2 sm:my-4 md:my-6">
            {rightColumn.map((part, index) => (
              <span key={index}>
                {part.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    <br />
                  </span>
                ))}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryAndAchievement;
