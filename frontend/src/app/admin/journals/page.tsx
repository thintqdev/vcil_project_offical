"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminDefaultLayout from "@/components/Layouts/AdminDefaultLayout";
import HeaderSection from "@/components/HeaderSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Journal {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  adminId: number;
  categoryId: number;
  status: number;
  isFeatured: number;
  views: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const ListJournalPage = () => {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [journalToDelete, setJournalToDelete] = useState<Journal | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchJournals = async () => {
      const response = await fetch(
        `http://localhost:3333/api/admin/blogs?page=${currentPage}`
      );
      const result = await response.json();
      const data: Journal[] = result.data.data;
      setJournals(data);
      setTotalPages(result.data.meta.lastPage);
    };

    fetchJournals();
  }, [currentPage]);

  const handleCreateJournal = () => {
    router.push("/admin/journals/create");
  };

  const handleEditJournal = (id: number) => {
    router.push(`/admin/journals/edit/${id}`);
  };

  const handleDeleteJournal = (journal: Journal) => {
    setJournalToDelete(journal);
    setShowModal(true);
  };

  const confirmDeleteJournal = async () => {
    if (journalToDelete) {
      try {
        const response = await fetch(
          `http://localhost:3333/api/admin/blogs/${journalToDelete.id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setJournals(
            journals.filter((journal) => journal.id !== journalToDelete.id)
          );
          toast.success("Journal deleted successfully!");
        } else {
          toast.error("Failed to delete the journal.");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the journal.");
      } finally {
        setShowModal(false);
        setJournalToDelete(null);
      }
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <AdminDefaultLayout>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <ToastContainer />
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Journals</h1>
          <button
            onClick={handleCreateJournal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create Journal
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
                Title
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
            {journals.map((journal) => (
              <tr key={journal.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {journal.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={journal.image}
                    alt={journal.title}
                    className="h-10 w-10 object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {journal.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {journal.shortDescription.length > 50
                    ? `${journal.shortDescription.substring(0, 50)}...`
                    : journal.shortDescription}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleEditJournal(journal.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteJournal(journal)}
                    className="text-red-600 hover:text-red-900 ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>

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
                      Delete Journal
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete the journal "
                        {journalToDelete?.title}"? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={confirmDeleteJournal}
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
    </AdminDefaultLayout>
  );
};

export default ListJournalPage;
