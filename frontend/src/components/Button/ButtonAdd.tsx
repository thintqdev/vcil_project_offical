import Link from "next/link";
interface HeaderListProps {
  name: string;
  url: string;
}
const ButtonAdd: React.FC<HeaderListProps> = ({ name, url }) => {
  return (
    <Link
      href={url}
      className="inline-flex items-center justify-center bg-primary px-6 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      Thêm {name}
    </Link>
  );
};

export default ButtonAdd;
