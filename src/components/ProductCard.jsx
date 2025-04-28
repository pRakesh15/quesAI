"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { RssIcon, Upload } from "lucide-react";
import AddProdcastModal from "./AddProdcastModal";
import { useState } from "react";

export default function PodcastCards({projectId,onSuccess}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setIsModalOpen(true)}>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <h3 className="font-bold text-lg">RSS Feed</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit. Dolor lorem sit.
            </p>
          </div>
          <div className="bg-orange-100 p-3 rounded-md">
            <RssIcon className="h-6 w-6 text-orange-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setIsModalOpen(true)}>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <h3 className="font-bold text-lg">Youtube Video</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit. Dolor lorem sit.
            </p>
          </div>
          <div className="bg-red-100 p-3 rounded-md">
            <svg
              className="h-6 w-6 text-red-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </div>
        </CardContent>
      </Card>

      <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setIsModalOpen(true)}>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <h3 className="font-bold text-lg">Upload Files</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit. Dolor lorem sit.
            </p>
          </div>
          <div className="bg-purple-100 p-3 rounded-md">
            <Upload className="h-6 w-6 text-purple-600" />
          </div>
        </CardContent>
      </Card>
      <AddProdcastModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} projectId={projectId} onSuccess={onSuccess}
      />
    </div>
  );
}
