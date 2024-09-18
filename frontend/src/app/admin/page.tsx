import AdminDefaultLayout from "@/components/Layouts/AdminDefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VCIL Community Admin Dashboard",
  description: "This is the VCIL Community Admin Dashboard",
};

export default function Home() {
  return (
    <>
      <AdminDefaultLayout>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Welcome to VCIL Community Admin Dashboard
          </h2>
        </div>
      </AdminDefaultLayout>
      ;
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminDefaultLayout>{page}</AdminDefaultLayout>;
};
