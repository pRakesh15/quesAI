"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { createFile } from "@/lib/allApi";
import toast from "react-hot-toast";

const AddProdcastModal = ({ isOpen, onClose, projectId,onSuccess }) => {
  const [name, setName] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);


  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!name || !transcript) {
      toast.error("Please fill out All the field");
      return;
    }
    try {
      setLoading(true);
      const response = await createFile(name, transcript, projectId);
      console.log(response);
      toast.success("file created successfully!");
       onClose();
       onSuccess(); // refetch parent
    } catch (err) {
      toast.error(err.message || "Failed to Create File. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border rounded-md shadow-lg">
        <div className="p-6">
          <DialogHeader className="flex flex-row items-center justify-between p-0 space-y-0 mb-5">
            <DialogTitle className="flex items-center gap-2 text-lg font-medium">
              <div className="bg-red-100 p-3 rounded-md">
                <svg
                  className="h-6 w-6 text-red-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <span>Upload from Youtube</span>
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handelSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder=" Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />{" "}
              </div>

              <div className="space-y-2">
                <label htmlFor="transcript" className="text-sm font-medium">
                  Transcript
                </label>
                <Textarea
                  id="transcript"
                  name="transcript"
                  rows={4}
                  className="w-full border rounded resize-none"
                  onChange={(e) => setTranscript(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#1a1a2e] text-white hover:bg-[#2a2a3e]"
                  disabled={loading}
                >
                  {loading ? "Loading" : "Upload"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProdcastModal;
