import React from "react";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CreateProjectModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#1e0e30] hover:bg-purple-800 p-1">
          <Plus className="h-4 w-4 " /> Create New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>Enter Project Name:</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Input
            id="projectName"
            placeholder="Type here"
            className="col-span-6"
          />
        </div>
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="ghost" className="text-red-500">
            Cancel
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="bg-purple-700 text-white hover:text-black cursor-pointer"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectModal;
