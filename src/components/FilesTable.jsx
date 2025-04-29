"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation";

// Sample data for the files table


export function FilesTable({files,projectId}) {
  // console.log(files)
  const router = useRouter();
  //funcyion for navigate  to single files.

  const handleClick = (fileId) => {
    router.push(`/createProject/${projectId}/${fileId}`);
  };
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>Your Files</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-16">No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Upload Date & Time</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {files?.map((file,index) => (
              <TableRow key={file._id}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.updatedAt.split("T")[0]}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={()=>handleClick(file._id)}>
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
