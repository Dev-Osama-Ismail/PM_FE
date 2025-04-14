import React from "react";
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas, FaClipboardList, FaUsers, FaBuilding, FaChartPie } from "react-icons/fa";
import { MdGroups, MdOutlineFactory, MdBusinessCenter, MdAttachMoney } from "react-icons/md";

const ReportsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col max-h-full px-8 py-6 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold">{t("reports.title")}</h2>

      {/* Project Reports Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
          {t("reports.projectReports")}
          <span className="text-gray-500 text-lg">⌄</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ReportCard icon={<FaGlobeAmericas />} label={t("reports.generalProjects")} active />
          <ReportCard icon={<FaClipboardList />} label={t("reports.detailedProjects")} />
          <ReportCard icon={<MdGroups />} label={t("reports.committeeReport")} />
        </div>
      </div>

      {/* Entity Reports Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
          {t("reports.entityReports")}
          <span className="text-gray-500 text-lg">⌄</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReportCard icon={<FaChartPie />} label={t("reports.generalEntity")} />
          <ReportCard icon={<MdBusinessCenter />} label={t("reports.detailedEntity")} />
        </div>
      </div>

      {/* Other Reports Section */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <SimpleReport label={t("reports.usersReports")} />
        <SimpleReport label={t("reports.contractorsReports")} />
        <SimpleReport label={t("reports.governorateReports")} />
        <SimpleReport label={t("reports.financialReports")} />
        <SimpleReport label={t("reports.icvReports")} />
      </div>
    </section>
  );
};

// Main Report Card
const ReportCard = ({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`flex items-center gap-4 px-6 py-4 rounded-lg border ${
        active ? "bg-[#023047] text-white" : "bg-[#f5f5f5] text-black"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold">{label}</span>
    </div>
  );
};

// Simple horizontal Report name only
const SimpleReport = ({ label }: { label: string }) => (
  <div className="text-md font-medium px-4 py-3 bg-[#f9f9f9] rounded">{label}</div>
);

export default ReportsPage;
