"use client";
import Editor from "@/components/Editor";
import HeaderSection from "@/components/HeaderSection";
import ImageUploader from "@/components/Input/ImageUploader";
import InputText from "@/components/Input/InputText";
import AdminDefaultLayout from "@/components/Layouts/AdminDefaultLayout";
import SelectGroupOne from "@/components/Select/SelectGroupOne";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoryCreatePage = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("1");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        "http://localhost:3333/api/admin/categories",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Category created successfully!");
        // Clear form fields
        setName("");
        setType("1");
        setImage(null);
        router.push("/admin/categories");
      } else {
        toast.error("Failed to create category.");
      }
    } catch (error) {
      toast.error("An error occurred while creating the category.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <HeaderSection title="Create Category" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <InputText
              label="Name"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <div>
              <SelectGroupOne
                label="Type"
                name="type"
                onChange={handleTypeChange}
                options={[
                  { value: "1", label: "Journals" },
                  { value: "2", label: "Resources" },
                ]}
              />
            </div>
            <ImageUploader
              label="Image"
              name="image"
              onChange={handleImageChange}
            />
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
    </>
  );
};

export default CategoryCreatePage;
