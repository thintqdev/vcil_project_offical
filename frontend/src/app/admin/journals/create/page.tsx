"use client";
import Editor from "@/components/Editor";
import HeaderSection from "@/components/HeaderSection";
import ImageUploader from "@/components/Input/ImageUploader";
import InputText from "@/components/Input/InputText";
import AdminDefaultLayout from "@/components/Layouts/AdminDefaultLayout";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

const JournalCreatePage = () => {
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(0);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [publishedAt, setPublishedAt] = useState<Date | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch tags from the database
    const fetchTags = async () => {
      try {
        const response = await fetch("http://localhost:3333/api/admin/tags");
        const data = await response.json();
        setTags(
          data.data.map((tag: any) => ({ value: tag.id, label: tag.name }))
        );
      } catch (error) {
        console.error("Failed to fetch tags", error);
      }
    };

    fetchTags();
  }, []);

  useEffect(() => {
    // Fetch categories from the database
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:3333/api/admin/categories"
        );
        const data = await response.json();
        setCategories(
          data.data.data.map((category: any) => ({
            value: category.id,
            label: category.name,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
  };

  const handleShortDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setShortDescription(event.target.value);
  };

  const handleTagsChange = (selectedOptions: any) => {
    setSelectedTags(selectedOptions);
  };

  const handleCategoriesChange = (selectedOptions: any) => {
    setSelectedCategories(selectedOptions);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("short_description", shortDescription);
    formData.append("description", editorContent);
    formData.append("admin_id", "1");
    formData.append("category_id", selectedCategories.value);
    if (publishedAt) {
      formData.append("published_at", publishedAt.toISOString());
    }
    selectedTags.forEach((tag, index) => {
      formData.append(`tags[${index}][name]`, tag.label);
    });
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:3333/api/admin/blogs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Journal created successfully!");
        // Clear form fields
        setTitle("");
        setEditorContent("");
        setShortDescription("");
        setImage(null);
        setSelectedTags([]);
        setPublishedAt(null);
        router.push("/admin/journals");
      } else {
        toast.error("Failed to create journal.");
      }
    } catch (error) {
      toast.error("An error occurred while creating the journal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminDefaultLayout>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <HeaderSection title="Create Journal" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <InputText
              label="Title"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
            <TextArea
              label="Short description"
              placeholder="Enter short description"
              name="shortDescription"
              value={shortDescription}
              onChange={handleShortDescriptionChange}
            />
            <Editor onChange={handleEditorChange} />
            <ImageUploader
              label="Image"
              name="image"
              onChange={handleImageChange}
            />
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="categories"
              >
                Categories
              </label>
              <Select
                options={categories}
                value={selectedCategories}
                onChange={handleCategoriesChange}
                placeholder="Select categories"
                id="categories"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tags"
              >
                Tags
              </label>
              <CreatableSelect
                isMulti
                options={tags}
                value={selectedTags}
                onChange={handleTagsChange}
                placeholder="Select or create tags"
                id="tags"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="publishedAt"
              >
                Publication Date
              </label>
              <DatePicker
                selected={publishedAt}
                onChange={(date: Date) => setPublishedAt(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select publication date"
                className="w-full p-2 border border-gray-300 rounded-md text-base shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                id="publishedAt"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 p-6.5">
            <button
              type="submit"
              className={`inline-flex items-center justify-center px-8 py-3.5 border border-primary bg-primary text-white rounded-md hover:bg-primarydark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-primarydark dark:bg-primarydark dark:text-white dark:hover:bg-primarydarker ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </div>
      </form>
    </AdminDefaultLayout>
  );
};

export default JournalCreatePage;
