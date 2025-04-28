import React, { useState } from "react";
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
import toast from "react-hot-toast";
import { createProject } from "@/lib/allApi";
import { useRouter } from "next/navigation";

const CreateProjectModal = ({onSuccess}) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Please fill out the project name");
      return;
    }
    try {
      setLoading(true);
      const response = await createProject(name);
      console.log(response);
      toast.success("Project created successfully!");
      setOpen(false);   
      if (onSuccess) onSuccess(); // refetch parent
    } catch (err) {
      toast.error(err.message || "Failed to Create Project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
            disabled={loading}
            onClick={handelSubmit}
          >
            {loading ? "Loading" : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectModal;
