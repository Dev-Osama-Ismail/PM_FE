import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage/homepage";
import ProjectsPage from "../pages/Projects/projects";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProjectDetails from "../pages/Project details/Project Details";
import ReportsPage from "../pages/reports/Reports";
import Map from "../pages/MapPage/Map";
import GeneralProjectsReport from "../pages/reports/Report Details/GeneralProjectsReport";
import StatisticPage from "../pages/statistic/statisticPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Reports" element={<ReportsPage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/Reports/general-projects" element={<GeneralProjectsReport />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/statistics" element={<StatisticPage />} />
      <Route path="/projects/:projectName" element={<ProjectDetails />} />
    </Routes>
  );
};

export default Routers;
