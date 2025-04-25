"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CreateProjectModal from "./CreateProjectModal";

const CreateProject = () => {
  return (
   

    <main className="flex flex-1 flex-col items-center justify-center p-6">
      <div className="mx-auto max-w-3xl w-full  p-6">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
          Create a New Project
        </h1>

        <div className="flex justify-center mb-6">
          <Image
            src="/image2.png"
            alt="Create Project Illustration"
            width={300}
            height={200}
            priority
          />
        </div>

        <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>

        <div className="flex justify-center">
         <CreateProjectModal/>
        </div>
      </div>
    </main>
  
  )
}

export default CreateProject
