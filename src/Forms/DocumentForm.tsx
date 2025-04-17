import React from "react";
import { ChevronDown } from "lucide-react";
import CustomInput from "../pages/Projects/componants/Add Project Drawer/componant/CustomInput";
import CustomSelect from "../pages/Projects/componants/Add Project Drawer/componant/CustomselectList";
import { Option } from "../Types";
import { ProjectIdentificationProps, useProjectIdentification } from "../hook/Project IdentificationLogic";
import FileDropZone from "../pages/Projects/componants/Add Project Drawer/componant/CustomFileupload";

const DocumentForm: React.FC<ProjectIdentificationProps> = (props) => {
  const {
  formData,
  handleChange,
  handleSubmit,
  mode,
  } = useProjectIdentification(props);
  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 bg-white">


<div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
        <div className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">Document Title</label>

          </div>
          <CustomInput
            value={formData.row2Field1}
            onChange={(value) => handleChange("row3Field1", value)}
            disabled={mode === "view"}
          />
        </div>

        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-6">
      

        <div className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">Document Type</label>
        
          </div>
          <CustomSelect
            options={options}
            onChange={(value) => handleChange("row3Field1", value)}
            defaultText={"Select Document Type"}
            disabled={mode === "view"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
          />
        </div>
      </div>

      

       <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-semibold mb-2"></label>
                <FileDropZone
        // value={formData.startDate}
      
      />
            
              </div>
            </div>

      

     

    
    </form>
  );
};

export default DocumentForm;
