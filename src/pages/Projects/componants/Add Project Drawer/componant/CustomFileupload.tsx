import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";

const FileDropZone: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("Dropped files:", acceptedFiles);
    // ممكن تعمل setState للفايلات مثلاً أو ترسلها للسيرفر
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition 
        ${isDragActive ? "border-teal-600 bg-teal-50" : "border-gray-300 bg-gray-50"}
      `}
      style={{ minHeight: "200px" }}
    >
      <input {...getInputProps()} />
      <FaUpload className="text-3xl text-gray-400 mb-4" />
      <p className="text-sm text-gray-600">
        {isDragActive
          ? "Drop the files here ..."
          : "Drag and drop files here, or click to browse"}
      </p>
    </div>
  );
};

export default FileDropZone;
