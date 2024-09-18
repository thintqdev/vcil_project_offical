import React from "react";
import HeaderList from "../HeaderList";

const Exams = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <HeaderList name="đề thi" url="/admin/exams/create" />
      <div className="max-w-full overflow-x-auto"></div>
    </div>
  );
};

export default Exams;
