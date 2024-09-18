import Link from "next/link";
interface ButtonBackProps {
  link?: string;
}

const ButtonBack: React.FC<ButtonBackProps> = ({ link }) => {
  return (
    <Link
      href={link ? link : "#"}
      className="inline-flex items-center justify-center border border-black px-5 py-2 text-center font-medium text-black bg-white hover:bg-gray-100 hover:border-gray-500 hover:shadow-lg"
    >
      Trở về
    </Link>
  );
};

export default ButtonBack;
