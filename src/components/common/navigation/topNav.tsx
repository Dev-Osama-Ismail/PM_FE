import React, { useState, useEffect } from 'react';
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  BellIcon,
} from '@heroicons/react/outline';
import DropdownMenu from './dropDown';
import NotificationMenu from './notification';
import { TopNavbarProps } from '../../../Types';
import { useTopNavbar } from '../../../hook/TopNavlogic';
import { useTranslation } from 'react-i18next';
import user from '../../../assets/user.jpg';

const TopNavbar: React.FC<TopNavbarProps> = ({
  userName,
  userPosition,
  language,
  onLanguageToggle,
}) => {
  const { t } = useTranslation();
  const {
    showInstall,
    handleInstallClick,
  } = useTopNavbar([], () => {}, language, onLanguageToggle);

  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleNotificationMenu = () => {
    setNotificationOpen((prev) => !prev);
    setUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen((prev) => !prev);
    setNotificationOpen(false);
  };

  // إغلاق القوائم عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = () => {
      setNotificationOpen(false);
      setUserMenuOpen(false);
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="w-full h-auto bg-white px-4 md:px-6 py-4 flex flex-wrap items-center justify-between gap-4 relative z-10">
      <div className="text-lg font-bold hidden sm:block">
        {t('home.hello')}
      </div>

      <div className="flex items-center gap-4 sm:gap-6 ml-auto flex-wrap relative">
        {/* اللغة */}
        <div className="flex items-center gap-2">
          <span className="font-semibold hidden sm:block">
            {t('general.language')}
          </span>
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

        {/* الإشعارات */}
      {/* الإشعارات */}
      <div className="relative">
  <button
    onClick={(e) => {
      e.stopPropagation();
      toggleNotificationMenu();
    }}
    className="relative flex items-center gap-2 text-gray-700 focus:outline-none hover:bg-gray-200 hover:text-[#023047] transition-all duration-200 px-2 py-1 rounded-md"
  >
    <BellIcon className="h-6 w-6 text-gray-500" />
  </button>

  {isNotificationOpen && (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute right-0 mt-2 px-2  max-w-xs sm:max-w-sm z-20"
    >
      <NotificationMenu />
    </div>
  )}
</div>
 


        {/* المستخدم */}
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleUserMenu();
            }}
            className="flex items-center gap-2 text-gray-700 focus:outline-none hover:bg-gray-200 hover:text-[#023047] transition-all duration-200 px-2 py-1 rounded-md"
          >
            <img
              src={user}
              alt="User"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full"
            />
            <div className="flex-col text-left hidden sm:flex">
              <span className="font-medium">{userName}</span>
              <span className="text-sm text-gray-500">{userPosition}</span>
            </div>
            {isUserMenuOpen ? (
              <ArrowCircleUpIcon className="h-5 w-5" />
            ) : (
              <ArrowCircleDownIcon className="h-5 w-5" />
            )}
          </button>

          {isUserMenuOpen && (
            <div
              onClick={(e) => e.stopPropagation()}
           
            >
              <DropdownMenu
                showInstall={showInstall}
                handleInstallClick={handleInstallClick}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
