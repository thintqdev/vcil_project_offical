"use client";
import ImageUploader from "@/components/Input/ImageUploader";
import InputText from "@/components/Input/InputText";
import AdminDefaultLayout from "@/components/Layouts/AdminDefaultLayout";
import Modal from "@/components/Modal";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface NetworkItem {
  id: number;
  logo: string;
  name: string;
  url: string;
}

interface WhatWeDoItem {
  id: number;
  title: string;
  description: string;
  image: string | File | null;
}

const SettingHomePage = () => {
  const [activeTab, setActiveTab] = useState("definition");
  const [items, setItems] = useState<NetworkItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<NetworkItem | null>(null);
  const [definition, setDefinition] = useState("");
  const [history, setHistory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [whatWeDoItems, setWhatWeDoItems] = useState<WhatWeDoItem[]>([]);
  const router = useRouter();

  const saveGeneralSetting = (name: string, value: string) => {
    fetch("http://localhost:3333/api/admin/general-settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, value }),
    });
  };

  const saveDefinition = () => {
    saveGeneralSetting("definition", definition);
  };

  const saveHistory = () => {
    saveGeneralSetting("history", history);
  };

  const saveNetworkItem = async () => {
    try {
      const formData = new FormData();
      formData.append("name", currentItem?.name || "");
      formData.append("link", currentItem?.url || "");
      if (image) {
        formData.append("logo", image);
      }

      const response = await fetch("http://localhost:3333/api/admin/networks", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newItem = await response.json();
        setItems((prevItems) =>
          currentItem?.id
            ? prevItems.map((item) =>
                item.id === currentItem.id ? newItem : item
              )
            : [...prevItems, newItem]
        );
        setIsModalOpen(false);
        router.push("/admin/settings/home");
      } else {
        console.error("Failed to save network item");
      }
    } catch (error) {
      console.error("Error saving network item:", error);
    }
  };

  const saveWhatWeDoItems = async () => {
    try {
      const formData = new FormData();
      whatWeDoItems.forEach((item, index) => {
        formData.append(`items[${index}][title]`, item.title);
        formData.append(`items[${index}][description]`, item.description);
        if (item.image instanceof File) {
          formData.append(`items[${index}][image]`, item.image);
        }
      });

      const response = await fetch(
        "http://localhost:3333/api/admin/what-we-dos",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("What We Do items saved successfully");
      } else {
        console.error("Failed to save What We Do items");
      }
    } catch (error) {
      console.error("Error saving What We Do items:", error);
    }
  };

  const deleteNetworkItem = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3333/api/admin/networks/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete network item");
      }
    } catch (error) {
      console.error("Error deleting network item:", error);
    }
  };

  const fetchNetworkItems = async () => {
    try {
      const response = await fetch("http://localhost:3333/api/admin/networks");
      if (response.ok) {
        const data = await response.json();
        setItems(data.data);
      } else {
        console.error("Failed to fetch network items");
      }
    } catch (error) {
      console.error("Error fetching network items:", error);
    }
  };

  const fetchWhatWeDoItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:3333/api/admin/what-we-dos"
      );
      if (response.ok) {
        const data = await response.json();
        setWhatWeDoItems(data.data);
      } else {
        console.error("Failed to fetch What We Do items");
      }
    } catch (error) {
      console.error("Error fetching What We Do items:", error);
    }
  };

  useEffect(() => {
    const fetchSetting = (
      name: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      fetch(`http://localhost:3333/api/admin/general-settings?name=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setter(data.data.value);
        });
    };

    fetchSetting("definition", setDefinition);
    fetchSetting("history", setHistory);
    fetchNetworkItems();
    fetchWhatWeDoItems();
  }, []);

  const openModal = (item: NetworkItem | null = null) => {
    setCurrentItem(item);
    setImage(null); // Reset image state when opening the modal
    setIsModalOpen(true);
  };

  const handleImageChange = (index: number, file: File | null) => {
    const newItems = [...whatWeDoItems];
    newItems[index].image = file;
    setWhatWeDoItems(newItems);
  };

  const handleTitleChange = (index: number, value: string) => {
    const newItems = [...whatWeDoItems];
    newItems[index].title = value;
    setWhatWeDoItems(newItems);
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const newItems = [...whatWeDoItems];
    newItems[index].description = value;
    setWhatWeDoItems(newItems);
  };

  return (
    <AdminDefaultLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Setting Home</h1>

          <div className="mb-8">
            <button
              className={`px-4 py-2 mr-2 ${
                activeTab === "definition"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
              onClick={() => setActiveTab("definition")}
            >
              Definition
            </button>
            <button
              className={`px-4 py-2 mr-2 ${
                activeTab === "whatWeDo"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
              onClick={() => setActiveTab("whatWeDo")}
            >
              What We Do
            </button>
            <button
              className={`px-4 py-2 mr-2 ${
                activeTab === "history"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
              onClick={() => setActiveTab("history")}
            >
              History and Achievement
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "network"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
              onClick={() => setActiveTab("network")}
            >
              Network
            </button>
          </div>

          {activeTab === "definition" && (
            <section className="mb-8">
              <div className="bg-white p-4 rounded shadow">
                <TextArea
                  label="Definition"
                  placeholder="Type definition here..."
                  value={definition}
                  onChange={(e) => setDefinition(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={saveDefinition}
                >
                  Save
                </button>
              </div>
            </section>
          )}

          {activeTab === "whatWeDo" && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <div className="bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {whatWeDoItems.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded p-4 flex flex-col items-left"
                  >
                    <ImageUploader
                      className="mb-4 w-full"
                      onChange={(file) => handleImageChange(index, file)}
                    />
                    <InputText
                      label={`Title`}
                      placeholder={`Enter title here...`}
                      value={item.title}
                      onChange={(e) => handleTitleChange(index, e.target.value)}
                    />
                    <InputText
                      label={`Description`}
                      placeholder={`Enter description here...`}
                      value={item.description}
                      onChange={(e) =>
                        handleDescriptionChange(index, e.target.value)
                      }
                    />
                  </div>
                ))}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-1/4"
                  onClick={saveWhatWeDoItems}
                >
                  Save
                </button>
              </div>
            </section>
          )}

          {activeTab === "history" && (
            <section className="mb-8">
              <div className="bg-white p-4 rounded shadow">
                <TextArea
                  label="History and Achievement"
                  placeholder="Type history here..."
                  value={history}
                  onChange={(e) => setHistory(e.target.value)}
                />

                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={saveHistory}
                >
                  Save
                </button>
              </div>
            </section>
          )}

          {activeTab === "network" && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Network</h2>
              <div className="bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded p-4 flex flex-col items-center"
                  >
                    <img
                      src={item.logo || "https://via.placeholder.com/200"}
                      alt={`Logo ${item.id}`}
                      className="mb-4 w-full h-32 object-cover rounded"
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <a href={item.url} className="text-blue-500 underline">
                      {item.url}
                    </a>
                    <div className="flex space-x-2 mt-4">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => openModal(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => deleteNetworkItem(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={() => openModal()}
              >
                Add New Item
              </button>

              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <div className="p-4">
                    <ImageUploader
                      className="mb-4 w-full"
                      onChange={(file) => setImage(file)}
                    />
                    <InputText
                      label="Name"
                      placeholder="Enter name here..."
                      value={currentItem ? currentItem.name : ""}
                      onChange={(e) =>
                        setCurrentItem({
                          ...currentItem,
                          name: e.target.value,
                        } as NetworkItem)
                      }
                    />
                    <InputText
                      label="URL"
                      placeholder="Enter URL here..."
                      value={currentItem ? currentItem.url : ""}
                      onChange={(e) =>
                        setCurrentItem({
                          ...currentItem,
                          url: e.target.value,
                        } as NetworkItem)
                      }
                    />
                    <div className="flex justify-end space-x-4">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        onClick={saveNetworkItem}
                      >
                        Save
                      </button>
                      <button
                        className="bg-graydark text-white px-4 py-2 rounded mt-4"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
            </section>
          )}
        </div>
      </div>
    </AdminDefaultLayout>
  );
};

export default SettingHomePage;
