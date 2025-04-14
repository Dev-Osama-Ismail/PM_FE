import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage/homepage";
import ProjectsPage from "../pages/Projects/projects";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProjectDetails from "../pages/Project details/Project Details";
import ReportsPage from "../pages/reports/Reports";
import Map from "../pages/MapPage/Map";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Reports" element={<ReportsPage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/Map" element={<Map />} />

      <Route path="/" element={<Homepage />} />
      <Route path="/projects/:projectName" element={<ProjectDetails />} />
    </Routes>
  );
};

export default Routers;
