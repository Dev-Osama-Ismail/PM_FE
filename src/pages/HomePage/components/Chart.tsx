import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

const data = [
  { name: "Page A", read1: 1200, read2: 1500, read3: 2000, read4: 2500 },
  { name: "Page B", read1: 1000, read2: 1200, read3: 1500, read4: 2000 },
  { name: "Page C", read1: 500, read2: 700, read3: 900, read4: 1100 },
  { name: "Page D", read1: 1500, read2: 1700, read3: 1900, read4: 2100 },
  { name: "Page E", read1: 700, read2: 800, read3: 900, read4: 1000 },
  { name: "Page F", read1: 1300, read2: 1400, read3: 1500, read4: 1600 },
  { name: "Page G", read1: 800, read2: 1000, read3: 1200, read4: 1400 },
  { name: "Page H", read1: 900, read2: 1100, read3: 1300, read4: 1500 },
];

const Chart = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-start mt-9 px-4 overflow-x-auto">
      {/* البادجات التعريفية */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="text-lg font-bold text-[#4D4D4D]">{t("home.charts.taskByEntity")}</span>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#023047" }}></span>
          <span className="text-sm text-[#023047]">{t("home.charts.notDue")}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#C89E4F" }}></span>
          <span className="text-sm text-[#C89E4F]">{t("home.charts.overDue")}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#4D4D4D" }}></span>
          <span className="text-sm text-[#4D4D4D]">{t("home.charts.started")}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#707070" }}></span>
          <span className="text-sm text-[#707070]">{t("home.charts.running")}</span>
        </div>
      </div>

      {/* المخطط */}
      <div className="w-full" style={{ minWidth: "600px" }}>
        <ResponsiveContainer width="100%" height={420}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid vertical={false} stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="read1" fill="#023047" radius={[12, 12, 0, 0]} />
            <Bar dataKey="read2" fill="#C89E4F" radius={[12, 12, 0, 0]} />
            <Bar dataKey="read3" fill="#4D4D4D" radius={[12, 12, 0, 0]} />
            <Bar dataKey="read4" fill="#707070" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
