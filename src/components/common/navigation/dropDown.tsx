import React from "react";
import { UserIcon, LockClosedIcon, DownloadIcon, XCircleIcon } from '@heroicons/react/outline';
import { DropdownMenuProps } from "../../../Types";



const DropdownMenu: React.FC<DropdownMenuProps> = ({ showInstall, handleInstallClick }) => {
  return (
    <div className="absolute  right-0 mt-2 p-4 bg-white shadow-lg rounded-lg w-48 z-20">
      <ul>
        <li className="py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
          <UserIcon className="h-5 w-5 text-gray-700" />
          Profile Information
        </li>
        <li className="py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
          <LockClosedIcon className="h-5 w-5 text-gray-700" />
          Change Password
        </li>
        {showInstall && (
          <li
            className="py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
            onClick={handleInstallClick} // Call handleInstallClick here
          >
            <DownloadIcon className="h-5 w-5 text-gray-700" />
            Install App
          </li>
        )}
        <li className="py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
          <XCircleIcon className="h-5 w-5 text-gray-700" />
          Help
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
