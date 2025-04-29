"use client";

import { Bell, ChevronLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/authContext";
import toast from "react-hot-toast";
import { getSingleFile } from "@/lib/allApi";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, loading } = useAuth();
  const params = useParams();
  const fileId = params.fileId;
  //have to fetech the prodcast data by params.

  const fetchFile = async () => {
    try {
      setIsLoading(true);
      const fileData = await getSingleFile(fileId);
      console.log(fileData?.data);
      setData(fileData?.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch Files");
    } finally {
      setIsLoading(false);
    }
  };
  //fetch the project of a single user and make it in useEffect.

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/");
    } else if (!loading && isAuthenticated) {
      fetchFile();
    }
  }, [loading, isAuthenticated]);

  return (
    <div className="flex-1 flex flex-col">
      {/* Top Navigation */}
      <div className=" p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
        <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home Page</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/createProject">
             Project's
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Edit your podcast</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
         
        </div>
        <div className="flex items-center gap-4">
          <Bell size={18} className="text-gray-500" />
          <div className="w-6 h-6 rounded-md border border-gray-300 flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#D946EF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                stroke="#D946EF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 17H12.01"
                stroke="#D946EF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChevronLeft size={20} className="text-gray-700" />
          <h1 className="text-xl font-semibold text-gray-800">
            Edit Transcript
          </h1>
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
          Edit
        </Button>
      </div>

      {/* Transcript Content */}
      <div className="flex-1 p-4">
        <div className="border rounded-lg p-6 max-w-3xl mx-auto">
          <div className="text-purple-600 font-medium mb-4">Speaker</div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {data?.transcript}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
