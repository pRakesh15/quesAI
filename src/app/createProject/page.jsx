"use client";
import { Bell, Plus, Settings } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CreateProject from "@/components/CreateProject";
import CreateProjectModal from "@/components/CreateProjectModal";
import { getMyProjects } from "@/lib/allApi";
import { useAuth } from '@/lib/authContext';


const Page = () => {
  const [projects, setProjects] = useState([ ]);
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthenticated, loading } = useAuth();


  const fetchProjects=async()=>{
    try {
      setIsLoading(true);
      const projectData = await getMyProjects();
      // console.log(seatData?.data);
      setProjects(projectData?.data);
    } catch (err) {
      toast.error("Failed to fetch seats.");
    } finally {
      setIsLoading(false);
    }
  }
  //fetch the project of a single user and make it in useEffect.
  
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/");
    } else if (!loading && isAuthenticated) {
      fetchProjects();
    }
  }, [loading, isAuthenticated]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <nav className="flex items-center justify-between  px-6 py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="mr-2 text-purple-600">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 22V14C20 12.8954 19.1046 12 18 12H14C12.8954 12 12 12.8954 12 14V22"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18H20"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-2xl font-semibold text-purple-600">
              Ques.AI
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
            <Settings className="h-6 w-6" />
          </button>
          <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
            <Bell className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Projects grid or empty state */}
      {projects.length > 0 ? (
        <main className="container mx-auto px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-purple-600">Projects</h1>
            <div className="flex gap-4">
              {/* add the project modal */}

            <CreateProjectModal onSuccess={fetchProjects}/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <Link
                href={`/createProject/${project._id}`}
                key={project._id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-md flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: "#F9A826" }}
                  >
                    {project?.initials || "SP"}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-purple-600 font-medium">
                      {project?.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {project.fileCount} Files
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Last edited {project?.updatedAt.split("T")[0]}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      ) : (
        <CreateProject />
      )}
    </div>
  );
};

export default Page;
