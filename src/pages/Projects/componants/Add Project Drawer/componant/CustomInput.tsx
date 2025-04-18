// components/common/formComponents/CustomInput.tsx
import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  disabled?: boolean; // إضافة خاصية disabled
};

const CustomInput: React.FC<Props> = ({ value, onChange, placeholder, disabled }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled} // استخدام خاصية disabled هنا
      className="w-full p-3 border border-gray-300 rounded-lg pr-10 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default CustomInput;
