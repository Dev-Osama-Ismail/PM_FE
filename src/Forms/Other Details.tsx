import React, { useState, useEffect } from 'react';
import CustomSelect from '../pages/Projects/componants/Add Project Drawer/componant/CustomselectList';
import { Option } from '../Types';
import { ChevronDown } from "lucide-react";
import ReferenceDateUsingValue from '../pages/Projects/componants/Add Project Drawer/componant/customcalender';

type Props = {
  mode: "create" | "view" | "edit";
  projectData?: any;
};

const Other_Details: React.FC<Props> = ({ mode, projectData }) => {
  const [, setSelected] = useState<string | number>(projectData?.entity || "");

  const [formData, setFormData] = useState({
    entity: projectData?.entity || '',
    directorate: projectData?.directorate || '',
    startDate: projectData?.startDate || '',
    dueDate: projectData?.dueDate || '',
    location: projectData?.location || '',
  });

  useEffect(() => {
    if (mode === "view") {
      setSelected(projectData?.entity || "");
      setFormData({
        entity: projectData?.entity || '',
        directorate: projectData?.directorate || '',
        startDate: projectData?.startDate || '',
        dueDate: projectData?.dueDate || '',
        location: projectData?.location || '',
      });
    }
  }, [mode, projectData]);

  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];

  const handleChange = (field: string, value: string | number) => {
    if (mode === "edit" || mode === "create") {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 bg-white p-2">
      {/* Budget Section */}
      <div className='flex flex-row mb-2 mt-2'>
        <span className='text-[#707070] text-sm'>Budget</span>
        <div className='border-b-2 w-full mb-2 ml-2'></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Entity</label>
          <CustomSelect
            options={options}
            value={formData.entity}
            onChange={(value) => handleChange("entity", value)}
            defaultText={"Select Entity"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Directorate</label>
          <CustomSelect
            options={options}
            value={formData.directorate}
            onChange={(value) => handleChange("directorate", value)}
            defaultText={"Select Directorate"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className='flex flex-row mb-2 mt-2'>
        <span className='text-[#707070] text-sm'>Timeline</span>
        <div className='border-b-2 w-full mb-2 ml-2'></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Start Date</label>
          <ReferenceDateUsingValue
  value={formData.startDate}
  onChange={(date) => handleChange("startDate", date ? date.toISOString() : '')}
  disabled={mode === "view"}
  mode={mode}
/>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Due Date</label>
          <ReferenceDateUsingValue
  value={formData.startDate}
  onChange={(date) => handleChange("startDate", date ? date.toISOString() : '')}
  disabled={mode === "view"}
  mode={mode}
/>
        </div>
      </div>

      {/* Location Section */}
      <div className='flex flex-row mb-2 mt-2'>
        <span className='text-[#707070] text-sm'>Location</span>
        <div className='border-b-2 w-full mb-2 ml-2'></div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Location</label>
          <CustomSelect
            options={options}
            value={formData.location}
            onChange={(value) => handleChange("location", value)}
            defaultText={"Select Project Location"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
      </div>

      {/* Submit Button */}
    
    </form>
  );
};

export default Other_Details;
