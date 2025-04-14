
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { theme } from "../../../theme/color";
import { useTranslation } from "react-i18next";

interface ChartData {
  name: string;
  value: number;
  color: keyof typeof theme; 
  duration:string;
}

const outerData: ChartData[] = [
  { name: "Sub A1", value: 600, color: "primary" ,duration:"10-15 Weeks"},
  { name: "Sub A2", value: 100, color: "secondary", duration:"3-8 Weeks"},
  { name: "Sub A3", value: 100, color: "black",duration:'2 weeks' },
  { name: "Sub A4", value: 100, color: "projectDurationGray",duration:"1 week" },
];

const getPercentage = (data: ChartData[], index: number) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return ((data[index].value / total) * 100).toFixed(1);
};

const Projects_Durations_chart: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full gap-6 p-4">
      {/* Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <span className="rounded-sm text-black text-sm font-bold">
          {t("home.charts.projectDurations")}
          </span>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          {outerData.map((entry, index) => (
            <div key={index} className="flex flex-row gap-4 items-center ">
              <span
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: theme[entry.color] }}
              />
              <span className="text-sm font-bold" style={{ color: theme[entry.color] }}>
                {entry.duration} 
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full h-64 p-1 lg:p-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />
            <Pie
              data={outerData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              label={({ index, cx, cy, midAngle, outerRadius }) => {
                const RADIAN = Math.PI / 180;
                const radius = outerRadius - 55;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill={theme[outerData[index].color]}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={10}
                    fontWeight="bold"
                  >
                    {getPercentage(outerData, index)}%
                  </text>
                );
              }}
              labelLine={false}
              cornerRadius={10}
            >
              {outerData.map((entry, index) => (
                <Cell
                  key={`outer-${entry.name}-${index}`}
                  fill={theme[entry.color]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Projects_Durations_chart;
