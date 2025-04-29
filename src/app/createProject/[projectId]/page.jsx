"use client";

import { FilesTable } from "@/components/FilesTable";
import FileUploadArea from "@/components/FileUpdate";
import PodcastCards from "@/components/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getFilesOfProject } from "@/lib/allApi";
import { useAuth } from "@/lib/authContext";
import { Bell } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddPodcast() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, loading } = useAuth();
  const params = useParams();
  const projectId = params.projectId;
  // console.log(projectId);

  //here i have to get all the file of a poticular project.

  const fetchFiles = async () => {
    try {
      setIsLoading(true);
      const fileData = await getFilesOfProject(projectId);
      // console.log(fileData?.data);
      setFiles(fileData?.data)
    } catch (err) {
      toast.error("Failed to fetch Files.");
    } finally {
      setIsLoading(false);
    }
  };
  //fetch the project of a single user and make it in useEffect.

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/");
    } else if (!loading && isAuthenticated) {
      fetchFiles();
    }
  }, [loading, isAuthenticated]);
  return (
    <div className="flex flex-col w-full">
      <header className="flex items-center justify-between p-4">
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
              <BreadcrumbPage>Add your podcast</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <span className="text-lg">+</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Add Podcast</h1>
        <PodcastCards projectId={projectId} onSuccess={fetchFiles}/>
        <div className="mt-6">
          {files.length > 0 ? (
            <FilesTable files={files} projectId={projectId}/>
          ) : (
            <FileUploadArea projectId={projectId} onSuccess={fetchFiles}/>
          )}
        </div>
      </main>
    </div>
  );
}
