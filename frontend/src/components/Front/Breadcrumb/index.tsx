import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  title: string;
  paths: { name: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, paths }) => {
  return (
    <div className="relative w-full">
      <img
        src="https://i0.wp.com/www.candrbuildingsupply.com/wp-content/uploads/2016/06/breadcrumb-background-medium-dark.jpg?ssl=1https://wallpapers.com/images/hd/library-zoom-background-2048-x-1365-ecyg991xr4v8o84m.jpg"
        alt={title}
        className="w-full object-cover h-64"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl">{title}</h1>
          <nav className="mt-2">
            <ol className="flex space-x-2 text-white text-sm">
              {paths.map((path, index) => (
                <React.Fragment key={index}>
                  {path.href ? (
                    <li>
                      <Link
                        href={path.href}
                        className="text-rose-500 hover:underline"
                      >
                        {path.name}
                      </Link>
                    </li>
                  ) : (
                    <li>{path.name}</li>
                  )}
                  {index < paths.length - 1 && <li>/</li>}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
