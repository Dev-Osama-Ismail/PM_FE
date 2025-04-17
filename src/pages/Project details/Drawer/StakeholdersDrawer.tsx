import React from "react";
import { FaTimes } from "react-icons/fa";
import { FilterDrawerProps } from "../../../Types";
import { theme } from "../../../theme/color";
import DocumentForm from "../../../Forms/DocumentForm";

const StakeholdersDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {

  return (
    <div
      className={`fixed top-0 right-0 h-full lg:w-1/3 w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Add New Stakeholders</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-xl">
          <FaTimes />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-4 overflow-y-auto pb-40 max-h-[calc(100vh-64px)]">
        <DocumentForm mode="create" />
      </div>

      {/* Footer Button - Fixed */}
      <div className="absolute bottom-10 w-full bg-white p-4 border-t">
        <button
          className="w-full text-white px-4 py-3 rounded-lg transition duration-200"
          style={{
            backgroundColor: theme.primary,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.opacity = "1")
          }
          onClick={() => {
            alert("Add New Stakeholders");
            onClose();
          }}
        >
Add New Stakeholders       </button>
      </div>
    </div>
  );
};

export default StakeholdersDrawer;
