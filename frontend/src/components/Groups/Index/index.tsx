import HeaderList from "@/components/HeaderList";

const GroupIndex = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <HeaderList name="lớp học" url="/admin/groups/create" />
      <div className="max-w-full overflow-x-auto"></div>
    </div>
  );
};

export default GroupIndex;
