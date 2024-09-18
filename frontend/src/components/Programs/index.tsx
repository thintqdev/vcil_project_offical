"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminDefaultLayout from "@/components/Layouts/AdminDefaultLayout";
import HeaderSection from "@/components/HeaderSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Program {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  slug: string;
  registrationLink: string;
  createdAt: string;
  updatedAt: string;
}

const ListProgramPage = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [programToDelete, setProgramToDelete] = useState<Program | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch("http://localhost:3333/api/admin/programs");
      const result = await response.json();
      const data: Program[] = result.data.data;
      setPrograms(data);
    };

    fetchPrograms();
  }, []);

  const handleCreateProgram = () => {
    router.push("/admin/programs/create");
  };

  const handleEditProgram = (id: number) => {
    router.push(`/admin/programs/edit/${id}`);
  };

  const handleDeleteProgram = (program: Program) => {
    setProgramToDelete(program);
    setShowModal(true);
  };

  const confirmDeleteProgram = async () => {
    if (programToDelete) {
      try {
        const response = await fetch(
          `http://localhost:3333/api/admin/programs/${programToDelete.id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setPrograms(
            programs.filter((program) => program.id !== programToDelete.id)
          );
          toast.success("Program deleted successfully!");
        } else {
          toast.error("Failed to delete the program.");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the program.");
      } finally {
        setShowModal(false);
        setProgramToDelete(null);
      }
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <ToastContainer />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Programs</h1>
        <button
          onClick={handleCreateProgram}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Program
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Short Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {programs.map((program) => (
            <tr key={program.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {program.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={program.image}
                  alt={program.name}
                  className="h-10 w-10 object-cover"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {program.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {program.shortDescription.length > 50
                  ? `${program.shortDescription.substring(0, 50)}...`
                  : program.shortDescription}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => handleEditProgram(program.id)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProgram(program)}
                  className="text-red-600 hover:text-red-900 ml-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Delete Program
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete the program "
                      {programToDelete?.name}"? This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={confirmDeleteProgram}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProgramPage;
