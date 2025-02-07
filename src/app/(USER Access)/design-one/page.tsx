"use client";
import React from 'react';
import {useState} from "react";
import {
    FaFilePdf,
    FaFileWord,
    FaFileExcel,
    FaFilePowerpoint,
    FaFileAlt,
    FaFileArchive,
    FaFileAudio,
    FaFileVideo,
    FaFileImage,
    FaMicrophone,
    FaDownload
} from "react-icons/fa";

function Page() {
    const getFileIcon = (fileType: string) => {
        if (fileType.startsWith("image")) return <FaFileImage className="text-blue-500"/>;
        if (fileType.startsWith("video")) return <FaFileVideo className="text-purple-500"/>;
        if (fileType.startsWith("audio")) return <FaFileAudio className="text-orange-500"/>;
        if (fileType.includes("pdf")) return <FaFilePdf className="text-red-500"/>;
        if (fileType.includes("msword")) return <FaFileWord className="text-blue-600"/>;
        if (fileType.includes("spreadsheet")) return <FaFileExcel className="text-green-500"/>;
        if (fileType.includes("presentation")) return <FaFilePowerpoint className="text-red-600"/>;
        if (fileType.includes("zip") || fileType.includes("rar")) return <FaFileArchive className="text-yellow-500"/>;
        if (fileType.includes("plain")) return <FaFileAlt className="text-gray-500"/>;
        if (fileType.includes("m4a")) return <FaMicrophone className="text-indigo-500"/>;
        return <FaFileAlt className="text-gray-400"/>;
    };

    interface FileItem {
        name: string;
        size: number;
        type: string;
    }

    const [files, setFiles] = useState<FileItem[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const uploadedFiles: FileItem[] = Array.from(event.target.files).map(file => ({
            name: file.name,
            size: file.size,
            type: file.type,
        }));
        setFiles(uploadedFiles);
    };
    return (
        <>
            <div className="p-4 max-w-lg mx-auto pt-20">
                <label
                    className="border-dashed border-2 border-gray-300 p-6 rounded-lg cursor-pointer flex flex-col items-center justify-center hover:bg-gray-50">
                    <input type="file" multiple className="hidden" onChange={handleFileChange}/>
                    <p className="text-gray-600">Click or drag files to upload</p>
                </label>
                <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center p-3 bg-red-100 rounded-lg">
                            <span className="text-2xl mr-3">{getFileIcon(file.type)}</span>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                                <p className="text-xs text-gray-600">{(file.size / 1024 / 1024).toFixed(2)}MB</p>
                            </div>
                            <FaDownload className="text-red-500 cursor-pointer"/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page;