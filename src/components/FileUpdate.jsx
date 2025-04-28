'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { useState } from "react";
import AddProdcastModal from "./AddProdcastModal";

export default function FileUploadArea({projectId,onSuccess}) {
        const [isModalOpen, setIsModalOpen] = useState(false)
    
  return (
    <Card className="border-dashed hover:shadow-md transition-shadow">
      <CardContent className="flex flex-col items-center justify-center p-10 text-center">
        <div className="mb-4 rounded-full bg-purple-100 p-3">
          <Upload className="h-8 w-8 text-purple-600" />
        </div>
        <h3 className="text-lg font-medium mb-2">
          Select a file or drag and drop here (Podcast Media or Transcription Text)
        </h3>
        <p className="text-sm text-muted-foreground mb-6">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
        <Button
          variant="outline"
          className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 shadow-sm cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Select File
        </Button>
      </CardContent>
      <AddProdcastModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} projectId={projectId} onSuccess={onSuccess}/>

    </Card>
  )
}
