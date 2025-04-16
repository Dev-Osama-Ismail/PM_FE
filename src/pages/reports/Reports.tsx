import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaClipboardList,
  FaChartPie,
} from "react-icons/fa";
import {
  MdGroups,
  MdBusinessCenter,
} from "react-icons/md";
import ReportCard from "./ReportCard";

const ReportsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation(); // 🔍 معرفة المسار الحالي

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  // 🔁 وظيفة تتحقق إذا كان المسار الحالي يبدأ بهذا الجزء
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <section className="flex flex-col max-h-full px-8 py-6 space-y-6">
      <h2 className="text-2xl font-bold">{t("reports.title")}</h2>

      {/* Project Reports Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
          {t("reports.projectReports")}
          <span className="text-gray-500 text-lg">⌄</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ReportCard
            icon={<FaGlobeAmericas />}
            label={t("reports.generalProjects")}
            active={isActive("/Reports/general-projects")}
            onClick={() => handleCardClick("/Reports/general-projects")}
          />
          <ReportCard
            icon={<FaClipboardList />}
            label={t("reports.detailedProjects")}
            active={isActive("/reports/detailed-projects")}
            onClick={() => handleCardClick("/reports/detailed-projects")}
          />
          <ReportCard
            icon={<MdGroups />}
            label={t("reports.committeeReport")}
            active={isActive("/reports/committee")}
            onClick={() => handleCardClick("/reports/committee")}
          />
        </div>
      </div>

      {/* Entity Reports Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
          {t("reports.entityReports")}
          <span className="text-gray-500 text-lg">⌄</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReportCard
            icon={<FaChartPie />}
            label={t("reports.generalEntity")}
            active={isActive("/reports/general-entity")}
            onClick={() => handleCardClick("/reports/general-entity")}
          />
          <ReportCard
            icon={<MdBusinessCenter />}
            label={t("reports.detailedEntity")}
            active={isActive("/reports/detailed-entity")}
            onClick={() => handleCardClick("/reports/detailed-entity")}
          />
        </div>
      </div>
    </section>
  );
};

export default ReportsPage;
