"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const GlobalError = () => {
  return (
    <div className="min-h-[calc(100vh-320px)] flex flex-col justify-center items-center gap-5">
      <MdOutlineReportGmailerrorred size={56} />
      <h2 className="text-4xl font-medium">Something When Wrong</h2>
      <Link href={"/"} className="btn btn-primary btn-outline">
        Go Back
      </Link>
    </div>
  );
};

export default GlobalError;
