import { theme } from "../../theme/color";

// 🔄 Report Card قابل للنقر
const ReportCard: React.FC<{
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
  }> = ({ icon, label, active = false, onClick }) => {
    return (
<div
  onClick={onClick}
  style={{
    backgroundColor: active ? theme.primary : "#f5f5f5",
    color: active ? theme.white : "black",
  }}
  className="cursor-pointer flex items-center gap-4 px-6 py-4 rounded-lg border transition hover:shadow-md"
  onMouseEnter={(e) => {
    if (!active) {
      e.currentTarget.style.backgroundColor = theme.primary;
      e.currentTarget.style.color = theme.white;
    }
  }}
  onMouseLeave={(e) => {
    if (!active) {
      e.currentTarget.style.backgroundColor = "#f5f5f5";
      e.currentTarget.style.color = "black";
    }
  }}
>
  <span className="text-2xl">{icon}</span>
  <span className="font-semibold">{label}</span>
</div>

    );
  };export default ReportCard;
  