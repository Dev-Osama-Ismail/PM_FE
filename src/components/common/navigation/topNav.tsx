import React from 'react';
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from '@heroicons/react/outline';
import DropdownMenu from './dropDown';
import { TopNavbarProps } from '../../../Types';
import { useTopNavbar } from '../../../hook/TopNavlogic';
import user from '../../../assets/user.jpg';
import { useTranslation } from "react-i18next";

const TopNavbar: React.FC<TopNavbarProps> = ({
  userName,
  userPosition,
  language,
  onLanguageToggle,
}) => {
  const { menuOpen, toggleMenu, showInstall, handleInstallClick } = useTopNavbar([], () => {}, language, onLanguageToggle);
  const { t } = useTranslation();

  return (
    <header className="w-full h-auto bg-white px-4 md:px-6 py-4 flex flex-wrap items-center justify-between gap-4 relative z-10">
      <div className="text-lg font-bold hidden sm:block"> {t("home.hello")}</div>

      <div className="flex items-center gap-4 sm:gap-6 ml-auto flex-wrap">
        {/* اللغة */}
        <div className="flex items-center gap-2">
          <span className="font-semibold hidden sm:block"> {t("general.language")}</span>
          <span className="bg-[#F1F1F1] flex items-center gap-2 rounded-md text-sm px-2 sm:px-3 py-1">
            {language}
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1 text-gray-700 hover:text-[#023047]"
            >
              <ArrowCircleDownIcon className="h-5 w-5" />
            </button>
          </span>
        </div>

        {/* المستخدم */}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 text-gray-700 focus:outline-none hover:bg-gray-200 hover:text-[#023047] transition-all duration-200 px-2 py-1 rounded-md"
        >
          <img
            src={user}
            alt="User"
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full"
          />
          {/* إظهار المعلومات فقط على الشاشات المتوسطة وفوق */}
          <div className="flex-col text-left hidden sm:flex">
            <span className="font-medium">{userName}</span>
            <span className="text-sm text-gray-500">{userPosition}</span>
          </div>
          {menuOpen ? (
            <ArrowCircleUpIcon className="h-5 w-5" />
          ) : (
            <ArrowCircleDownIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* القائمة المنسدلة */}
      {menuOpen && (
        <DropdownMenu
          showInstall={showInstall}
          handleInstallClick={handleInstallClick}
        />
      )}
    </header>
  );
};

export default TopNavbar;
