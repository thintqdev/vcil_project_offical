interface Blog {
  title: string;
  description: string;
  image: string;
  created_at: string;
}

const CardBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full sm:w-3/4 md:w-2/3 lg:w-full transition-transform transform hover:scale-105">
      <div className="w-full sm:w-1/3">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover h-60 w-full"
        />
      </div>
      <div className="p-6 w-full sm:w-2/3 flex flex-col justify-between text-left">
        <div>
          <a
            href="#"
            className="text-xl font-bold text-gray-800 mb-2 hover:text-green-500"
          >
            {blog.title}
          </a>
          <p className="text-gray-500 text-sm mb-4">
            {new Date(blog.created_at).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4">{blog.description}</p>
        </div>
        <a
          href="#"
          className="text-green-600 hover:underline font-semibold self-start"
        >
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

const HomeBlog = () => {
  const blogs = [
    {
      title: "The Soil Project",
      description:
        "The Soil Project is a community-driven initiative that aims to promote sustainable agriculture and food security in the region.",
      image:
        "https://s1.1zoom.me/b4445/4/Planets_Nebulae_in_space_518424_600x800.jpg",
      created_at: "2023-01-01",
    },
    {
      title: "Vcil Travel School",
      description:
        "Vcil Travel School is a unique program that offers students the opportunity to learn about different cultures and traditions through travel.",
      image:
        "https://s1.1zoom.me/b4445/4/Planets_Nebulae_in_space_518424_600x800.jpg",
      created_at: "2023-02-01",
    },
    {
      title: "Money IQ - Money EQ",
      description:
        "Money IQ - Money EQ is a financial literacy program that helps individuals develop the skills and knowledge needed to make informed financial decisions.",
      image:
        "https://s1.1zoom.me/b4445/4/Planets_Nebulae_in_space_518424_600x800.jpg",
      created_at: "2023-03-01",
    },
    {
      title: "Customized Programs",
      description:
        "We offer customized programs that are tailored to the needs and interests of our community members. Whether you are looking to learn a new skill or pursue a passion project, we have something for everyone.",
      image:
        "https://s1.1zoom.me/b4445/4/Planets_Nebulae_in_space_518424_600x800.jpg",
      created_at: "2023-04-01",
    },
  ];
  return (
    <div className="text-center w-full sm:w-3/4 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        Blogs
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog, index) => (
          <CardBlog key={index} blog={blog} />
        ))}
      </div>
      <div className="mt-6">
        <a
          href="/blogs"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
        >
          More Blogs
        </a>
      </div>
    </div>
  );
};

export default HomeBlog;
