
import React from "react";
import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { theme } from "../../../theme/color";

interface ChartData {
  name: string;
  value: number;
}

const innerData: ChartData[] = [
  { name: "Group A", value: 50 },
  { name: "Group B", value: 300 },
];

const outerData: ChartData[] = [
  { name: "Sub A1", value: 600 },
  { name: "Sub A2", value: 100 },
];

const getPercentage = (data: ChartData[], index: number) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return ((data[index].value / total) * 100).toFixed(1);
};

const Overall_progress_chart: React.FC = () => {
  const innerPercentage = getPercentage(innerData, 0);
  const outerPercentage = getPercentage(outerData, 0);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full gap-6 p-4">
      {/* Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <span className="rounded-sm text-black text-sm font-bold">
          {t("home.charts.overallProgress")}
          </span>
          <span className="ml-4 text-black text-sm font-bold">
            {`gap: ${Math.abs(parseFloat(outerPercentage) - parseFloat(innerPercentage))}%`}
          </span>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-row gap-4 items-center">
            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: theme.primary }} />
            <span className="text-[#023047] text-sm">{t("home.charts.actual")}</span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: theme.secondary }} />
            <span className="text-[#023047] text-sm">{t("home.charts.planned")}</span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full h-64 p-1 lg:p-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />

            {/* Inner Pie */}
            <Pie
              data={innerData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              label={({ index, cx, cy, midAngle, innerRadius }) => {
                if (index !== 0) return null;
                const RADIAN = Math.PI / 180;
                const radius = innerRadius - 32;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill={theme.primary}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={14}
                    fontWeight="bold"
                  >
                    {innerPercentage}%
                  </text>
                );
              }}
              labelLine={false}
              cornerRadius={10}
            >
              {innerData.map((entry, index) => (
                <Cell
                  key={`inner-${entry.name}`}
                  fill={index === 0 ? theme.primary : theme.background}
                />
              ))}
            </Pie>

            {/* Outer Pie */}
            <Pie
              data={outerData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              label={({ index, cx, cy, midAngle, outerRadius }) => {
                if (index !== 0) return null;
                const RADIAN = Math.PI / 540;
                const radius = outerRadius + 25;
                const x = cx + radius * Math.cos(midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill={theme.secondary}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={14}
                    fontWeight="bold"
                  >
                    {outerPercentage}%
                  </text>
                );
              }}
              labelLine={false}
              cornerRadius={10}
            >
              {outerData.map((entry, index) => (
                <Cell
                  key={`outer-${entry.name}`}
                  fill={index === 0 ? theme.secondary : theme.background}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overall_progress_chart;
