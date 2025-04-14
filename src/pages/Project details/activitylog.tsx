import React, { useState } from "react";

// Sample data
const sampleData = [
  {
    label: "Today",
    items: [
      { time: "09 min ago", user: "Ahmad Ahmad", text: "Hello, I Just Approved your project" },
      { time: "12 min ago", user: "Ahmad Ahmad", text: "Approved by Entity" },
    ],
  },
  {
    label: "Yesterday",
    items: [
      { time: "10:30 pm", user: "Ahmad Ahmad", text: "Hello, I Just Approved your project" },
      { time: "10:30 am", user: "Ahmad Ahmad", text: "Approved by Entity" },
    ],
  },
];

// Types
interface TimelineItemType {
  time: string;
  user: string;
  text: string;
}

interface TimelineGroupType {
  label: string;
  items: TimelineItemType[];
}

const TimelineItem: React.FC<TimelineItemType & { isLast: boolean }> = ({ time, user, text, isLast }) => {
  const initials = user.split(" ").map((n) => n[0]).join("").toUpperCase();

  return (
    <div className="relative flex items-start mb-6">
      <div className="w-36 flex flex-col items-center relative">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-teal-500 rounded-full z-10" />
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        {!isLast && <div className="w-px bg-gray-300 flex-1 mt-1 mb-[-12px]" />}
      </div>

      <div className="flex border border-gray-200 rounded-xl shadow-sm w-fit max-w-md overflow-hidden">
        <div className="flex items-center bg-gray-200 px-3 py-2">
          <div className="w-7 h-7 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-2">
            {initials}
          </div>
          <span className="text-sm font-medium text-gray-800">{user}</span>
        </div>

        <div className="bg-white px-4 py-2 text-sm text-gray-800">
          {text}
        </div>
      </div>
    </div>
  );
};

const TimelineGroup: React.FC<TimelineGroupType> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(true);

  const parseTime = (timeStr: string): number => {
    if (timeStr.includes("min ago")) {
      return new Date().getTime() - parseInt(timeStr) * 60000;
    }
    const now = new Date();
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier.toLowerCase() === "pm" && hours !== 12) hours += 12;
    if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;
    const date = new Date(now);
    date.setHours(hours, minutes, 0, 0);
    return date.getTime();
  };

  const sortedItems = [...items].sort((a, b) => parseTime(a.time) - parseTime(b.time));

  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 transition text-sm font-semibold text-gray-700"
      >
        <div className="flex items-center gap-2">
          <span>🕘</span>
          <span>{label}</span>
        </div>
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="p-4">
          {sortedItems.map((item, index) => (
            <TimelineItem key={index} {...item} isLast={index === sortedItems.length - 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentInput: React.FC<{ onSend: (text: string) => void }> = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (value.trim()) {
      onSend(value);
      setValue("");
    }
  };

  return (
    <div className="mt-10 border-t pt-4 bg-white p-4 rounded-b-xl">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Write comment..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 pr-28 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={handleSend}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-900 text-white px-5 py-2 rounded-md hover:bg-teal-800 flex items-center gap-2 w-24 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 20l16-8L4 4v6l10 2-10 2v6z" />
          </svg>
          <span className="text-sm">Send</span>
        </button>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [data, setData] = useState<TimelineGroupType[]>(sampleData);

  const handleSend = (text: string) => {
    const newItem: TimelineItemType = {
      time: "0 min ago",
      user: "You",
      text,
    };

    setData((prev) => {
      const newData = [...prev];
      newData[0].items.push(newItem); // Add to Today
      return [...newData];
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {data.map((group, idx) => (
        <TimelineGroup key={idx} label={group.label} items={group.items} />
      ))}
      <CommentInput onSend={handleSend} />
    </div>
  );
};

export default Timeline;