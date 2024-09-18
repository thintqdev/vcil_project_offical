"use client";
import React, { useState } from "react";
import FrontDefaultLayout from "@/components/Layouts/FrontDefaultLayout";

interface Blog {
  title: string;
  description: string;
  image: string;
  created_at: string;
}

const CardBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-full transition-transform transform">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex space-x-2 text-sm text-gray-500 mb-2">
          <span className="text-purple-600 font-semibold">CATEGORY</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2 gradient-hover hover:cursor-pointer">
          {blog.title}
        </h2>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <img
            alt="Author's avatar"
            className="w-8 h-8 rounded-full mr-2"
            src="https://via.placeholder.com/32"
          />
          <span>Author Name</span>
          <span className="mx-1">•</span>
          <span>{new Date(blog.created_at).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-700 mb-4">{blog.description}</p>
        <a href="#" className="text-green-600 hover:underline font-semibold">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

const Journal: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Dummy data for blogs
  const blogs: Blog[] = Array.from({ length: 20 }, (_, i) => ({
    title: `Blog Post ${i + 1}`,
    description: `This is a short description for blog post ${i + 1}.`,
    image: `https://via.placeholder.com/150?text=Blog+Image+${i + 1}`,
    created_at: `2023-01-${String(i + 1).padStart(2, "0")}`,
  }));

  // Dummy data for categories and tags
  const categories = [
    { name: "Design", count: 10 },
    { name: "Lifestyle", count: 8 },
    { name: "Travel", count: 5 },
  ];

  const tags = [
    { name: "React", count: 15 },
    { name: "JavaScript", count: 12 },
    { name: "CSS", count: 9 },
  ];

  const newJournals = [
    {
      title: "New Journal 1",
      created_at: "2023-01-01",
      image: "https://via.placeholder.com/150?text=New+Journal+1",
      description: "This is a short description for new journal 1.",
    },
    {
      title: "New Journal 2",
      created_at: "2023-01-02",
      image: "https://via.placeholder.com/150?text=New+Journal+2",
      description: "This is a short description for new journal 2.",
    },
    // Add more new journals here
  ];

  const mostViewJournals = [
    {
      title: "Most View Journal 1",
      views: 150,
      image: "https://via.placeholder.com/150?text=Most+View+Journal+1",
      description: "This is a short description for most view journal 1.",
    },
    {
      title: "Most View Journal 2",
      views: 200,
      image: "https://via.placeholder.com/150?text=Most+View+Journal+2",
      description: "This is a short description for most view journal 2.",
    },
    // Add more most view journals here
  ];
  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <FrontDefaultLayout>
      <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
          <h1 className="text-4xl font-extrabold mb-6 text-center lg:text-left text-gray-800">
            All Journals
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {currentBlogs.map((blog, index) => (
              <CardBlog key={index} blog={blog} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {Array.from(
              { length: Math.ceil(blogs.length / blogsPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 mx-1 rounded-lg transition-colors ${
                    currentPage === i + 1
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="p-6 bg-white rounded-lg shadow-lg text-black transition-transform transform">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul className="text-lg">
              {categories.map((category, index) => (
                <li key={index} className="flex justify-between">
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-black transition-transform transform">
            <h2 className="text-2xl font-bold mb-4">Tags</h2>
            <ul className="text-lg">
              {tags.map((tag, index) => (
                <li key={index} className="flex justify-between">
                  <span>{tag.name}</span>
                  <span>{tag.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-black transition-transform transform">
            <h2 className="text-2xl font-bold mb-4">New Journals</h2>
            <ul className="text-lg">
              {newJournals.map((journal, index) => (
                <li key={index} className="flex items-center space-x-4 my-6">
                  <img
                    src={journal.image}
                    alt={journal.title}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{journal.title}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(journal.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-700">
                      {journal.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-black transition-transform transform">
            <h2 className="text-2xl font-bold mb-4">Most View Journals</h2>
            <ul className="text-lg">
              {mostViewJournals.map((journal, index) => (
                <li key={index} className="flex items-center space-x-4 my-6">
                  <img
                    src={journal.image}
                    alt={journal.title}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{journal.title}</h3>
                    <p className="text-sm text-gray-500">
                      {journal.views} views
                    </p>
                    <p className="text-sm text-gray-700">
                      {journal.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FrontDefaultLayout>
  );
};

export default Journal;
