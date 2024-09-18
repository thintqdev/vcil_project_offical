"use client";
import React, { ReactNode } from "react";
import Breadcrumb from "../Front/Breadcrumb"; // Adjust the import path as necessary
import Navbar from "../Front/Navbar";
import Footer from "../Front/Footer";

interface FrontDefaultLayoutProps {
  children: React.ReactNode;
  breadcrumbProps?: {
    title: string;
    paths: { name: string; href?: string }[];
  };
}

export default function FrontDefaultLayout({
  children,
  breadcrumbProps,
}: FrontDefaultLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      {breadcrumbProps && <Breadcrumb {...breadcrumbProps} />}

      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-36">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
