import { Link, useLocation, useParams } from 'react-router-dom';
import { getTitle } from '../../hook/PageHeader';
import { PROJECT } from '../../Types';
import { StageColors, theme } from '../../theme/color';
import Tabs from './componant/tabs';
import { useState } from 'react';
import { Plainingtabs } from '../../Data/PlainningTabs';

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state as PROJECT;
  const { projectName } = useParams();
  const stageClass = StageColors[project.stage] || "bg-gray-100 text-gray-700";
  const [selectedTab, setSelectedTab] = useState<number>(Plainingtabs[0].index);

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-5">
      
      {/* Breadcrumb */}
      <div className="flex flex-row sm:flex-row gap-2 sm:items-center">
        <h1 className="text-md font-bold text-gray-800">
          <Link to={`/projects`}>
            {getTitle()}
          </Link>
        </h1>
        <h1 className="text-md font-bold text-gray-800">/</h1>
        <h1 className="text-md font-bold text-gray-800 truncate overflow-hidden whitespace-nowrap max-w-[300px]">
  {decodeURIComponent(projectName || '')}
</h1>


      </div>

      {/* Project info */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:items-center">
  <div className="flex flex-row sm:flex-row gap-2 items-start sm:items-center">
    <span className="text-md font-bold text-gray-800">Project details</span>
    <span className={`px-2 py-1 rounded-md ${stageClass}`}>
      {project.stage}
    </span>
  </div>

  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
    <button
      type="button"
      className="w-full sm:w-20 py-2 rounded-lg text-sm font-medium"
      style={{
        backgroundColor: theme.buttonGraybg,
        border: `1px solid ${theme.buttonGrayborder}`,
        color: theme.buttonGraytext,
      }}
    >
      Edit
    </button>

    <button
      type="button"
      className="w-full sm:w-48 py-2 rounded-lg text-sm font-medium"
      style={{
        backgroundColor: theme.lightBackground,
        border: `1px solid ${theme.borderred}`,
        color: theme.borderred,
      }}
    >
      Cancel request
    </button>
  </div>
</div>


      <div>
        <Tabs
          tabs={Plainingtabs}
          selectedTab={selectedTab}
          onClick={setSelectedTab}
          orientation="horizontal"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
