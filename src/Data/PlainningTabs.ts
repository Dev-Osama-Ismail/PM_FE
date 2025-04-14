import ProjectDetailsForm from "../pages/Project details/sammaryTab";

import PhaseTab from "../pages/Project details/PhaseTab";
import Timeline from "../pages/Project details/activitylog";
import DocumentTab from "../pages/Project details/document Tab";
import RiskTab from "../pages/Project details/RistTab";
import StakeholdersTab from "../pages/Project details/StakeholdersTab";

 export const Plainingtabs = [
    { label: "Summary", index: 1, Component: ProjectDetailsForm },
    { label: "Phases", index: 2, Component: PhaseTab },
    { label: "Supporting Documents", index: 3, Component: DocumentTab },
    { label: "Project Risks", index: 4, Component: RiskTab },
    { label: "Stakeholders", index: 5, Component: StakeholdersTab },
    { label: "Activity Log", index: 6, Component:  Timeline  },
  ];