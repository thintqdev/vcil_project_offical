import ButtonAdd from "../Button/ButtonAdd";

interface HeaderListProps {
  name: string;
  url: string;
}

const HeaderList: React.FC<HeaderListProps> = ({ name, url }) => {
  return (
    <div className="mb-6 flex justify-between items-center">
      <h4 className="text-xl font-semibold text-black dark:text-white">
        Danh sách {name}
      </h4>
      <ButtonAdd name={name} url={url} />
    </div>
  );
};

export default HeaderList;
