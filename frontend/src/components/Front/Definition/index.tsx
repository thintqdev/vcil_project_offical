"use client";
import { useEffect, useState } from "react";

const Definition = () => {
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    const fetchSetting = (
      name: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      fetch(`http://localhost:3333/api/admin/general-settings?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setter(data.data.value);
        });
    };

    fetchSetting("definition", setDefinition);
  }, []);
  return (
    <div className="border border-secondary text-center p-4 sm:p-8 md:p-16 w-full sm:w-3/4 md:w-2/3 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        What is Vcil?
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      <p className="text-xs sm:text-sm md:text-base text-boxdark text-justify">
        {definition}
      </p>
    </div>
  );
};

export default Definition;
