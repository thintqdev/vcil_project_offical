import { Metadata } from "next";
import AdminDefaultLayout from "@/components/Layouts/AdminDefaultLayout";
import Programs from "@/components/Programs";

// export const metadata: Metadata = {
//   title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
// };

const DocumentPage = () => {
  return (
    <AdminDefaultLayout>
      <Programs />
    </AdminDefaultLayout>
  );
};

export default DocumentPage;
