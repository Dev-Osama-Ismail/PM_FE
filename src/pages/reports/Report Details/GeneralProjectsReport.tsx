import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { theme } from "../../../theme/color";
import Table from "./Table";

const GeneralProjectsReport: React.FC = () => {
  const { t } = useTranslation();

  const data = [
    { id: 1, name: "Project A", status: "Completed", progress: "100%" },
    { id: 2, name: "Project B", status: "In Progress", progress: "60%" },
    { id: 3, name: "Project C", status: "Pending", progress: "0%" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 w-full max-w-screen-2xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm font-medium mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-gray-600">
          <li>
            <Link to="/reports" className="hover:underline" style={{ color: theme.primary }}>
              {t("reports.title")}
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-500">{t("reports.generalProjects")}</li>
        </ol>
      </nav>

      {/* Table container */}
      <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md">
        <Table />
      </div>
    </section>
  );
};

export default GeneralProjectsReport;
