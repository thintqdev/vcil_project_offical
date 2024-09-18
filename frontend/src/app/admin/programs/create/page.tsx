"use client";
import Editor from "@/components/Editor";
import HeaderSection from "@/components/HeaderSection";
import ImageUploader from "@/components/Input/ImageUploader";
import InputText from "@/components/Input/InputText";
import AdminDefaultLayout from "@/components/Layouts/AdminDefaultLayout";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProgramCreatePage = () => {
  const [name, setName] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
  };

  const handleRegistrationLinkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegistrationLink(event.target.value);
  };

  const handleShortDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setShortDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", editorContent);
    formData.append("registration_link", registrationLink);
    formData.append("short_description", shortDescription);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:3333/api/admin/programs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Program created successfully!");
        // Clear form fields
        setName("");
        setEditorContent("");
        setRegistrationLink("");
        setShortDescription("");
        setImage(null);
        router.push("/admin/programs");
      } else {
        toast.error("Failed to create program.");
      }
    } catch (error) {
      toast.error("An error occurred while creating the program.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminDefaultLayout>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <HeaderSection title="Create programs" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <InputText
              label="Name"
              placeholder="Enter name"
              name="title"
              value={name}
              onChange={handleNameChange}
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
            <InputText
              label="Registration link"
              placeholder="Enter registration link"
              name="registrationLink"
              value={registrationLink}
              onChange={handleRegistrationLinkChange}
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
    </AdminDefaultLayout>
  );
};

export default ProgramCreatePage;
