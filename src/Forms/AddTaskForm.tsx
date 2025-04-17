import React from "react";
import { ChevronDown } from "lucide-react";
import CustomSelect from "../pages/Projects/componants/Add Project Drawer/componant/CustomselectList";
import { Option } from "../Types";
import { ProjectIdentificationProps, useProjectIdentification } from "../hook/Project IdentificationLogic";
import CustomTextarea from "../pages/Projects/componants/Add Project Drawer/componant/CustomTextArea";
import ReferenceDateUsingValue from "../pages/Projects/componants/Add Project Drawer/componant/customcalender";

const AddTaskForm: React.FC<ProjectIdentificationProps> = (props) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">phase</label>
          </div>
          <CustomSelect
            options={options}
            onChange={(value) => handleChange("row3Field1", value)}
            defaultText={"Select phase"}
            disabled={mode === "view"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">group id</label>
        
          </div>
          <CustomSelect
            options={options}
            onChange={(value) => handleChange("row3Field1", value)}
            defaultText={"Select group id"}
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
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">task description</label>

          </div>
          <CustomTextarea
            value={formData.row2Field1}
            onChange={(e) => handleChange("row3Field1", e.target.value)}
            disabled={mode === "view"}
          />
        </div>

        
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-semibold mb-2">Start Date</label>
                <ReferenceDateUsingValue
        // value={formData.startDate}
        onChange={(date) => handleChange("startDate", date ? date.toISOString() : '')}
        disabled={mode === "view"}
        mode={mode}
      />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-semibold mb-2">Due Date</label>
                <ReferenceDateUsingValue
        // value={formData.startDate}
        onChange={(date) => handleChange("startDate", date ? date.toISOString() : '')}
        disabled={mode === "view"}
        mode={mode}
      />
              </div>
            </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
        

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Task Type</label>
          <CustomSelect
            options={options}
            onChange={(value) => handleChange("row3Field2", value)}
            defaultText={"Select Task Type"}
            disabled={mode === "view"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
          />
        </div>
      </div>

     

    
    </form>
  );
};

export default AddTaskForm;
