import React, { useState } from "react";
import { theme } from "../../theme/color";
import { FaPlus } from "react-icons/fa";
import SimpleFileTable from "./componant/documentTable";
import DocumentDrawer from "./Drawer/DocumentDrawer";

const DocumentTab: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="space-y-6 mt-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold" style={{ color: theme.black }}>
          Documents List
        </span>

        <button
          onClick={handleOpenDrawer}
          className="text-white px-8 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap"
          style={{
            backgroundColor: theme.text,
            border: `1px solid ${theme.text}`,
            color: theme.white,
          }}
        >
          <FaPlus className="text-base" />
          <span className="text-sm font-medium">Add new Document</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="grid grid-cols-1 gap-2">
        <div className="flex flex-col">
          <SimpleFileTable />
        </div>
      </div>

      {/* Drawer Component */}
      <DocumentDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
    </div>
  );
};

export default DocumentTab;
