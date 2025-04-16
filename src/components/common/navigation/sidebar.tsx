import React from 'react';
import { ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SidebarProps } from '../../../Types';
import useActivePath from '../../../hook/ActivePathLogic';
import logo from '../../../assets/logo.png';

import { useTranslation } from "react-i18next";

const Sidebar: React.FC<SidebarProps> = ({ menu, onItemClick, isOpen, toggleSidebar }) => {
  const { activePath, setActivePath } = useActivePath(); // استخدام الهوك
  const { t } = useTranslation();

  const handleItemClick = (path: string) => {
    setActivePath(path);
    onItemClick(path);
    toggleSidebar(); 
  };

  return (
    <>
      {/* زر الهامبرغر - يظهر فقط على الشاشات الصغيرة */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="text-gray-800">
          {isOpen ? (
            <XIcon className="w-7 h-7" />
          ) : (
            <MenuIcon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* خلفية تعتيم عند فتح القائمة على الشاشات الصغيرة */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        />
      )}

      {/* الـ Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 flex flex-col justify-between h-screen w-64 bg-white p-2 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* الشعار */}
        <div>
          <div className="mb-1 text-center">
          
            <img
              src={logo}
              alt="Logo"
              className="mx-auto h-30 w-full p-6"
            />
          </div>

          {/* القائمة */}
          <nav className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive =  activePath.startsWith(item.path);
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.path)}
                  className={`flex items-center justify-between w-full text-left px-3 py-2 rounded 
                    ${isActive ? 'bg-[#023047] text-white' : 'text-gray-800'}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                    <span>{item.title}</span>
                  </div>
                  {isActive && <ChevronRightIcon className="w-5 h-5 text-white" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* تسجيل الخروج */}
        <div className="flex flex-col space-y-3 mb-6">
          <div className="flex flex-row items-center text-red-600 cursor-pointer hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 m-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
            <span className="text-sm font-medium"> {t("home.logout")}</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
