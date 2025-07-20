import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full text-sm font-medium border transition-colors duration-200
        ${isActive ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300"}
        hover:bg-blue-100`}
    >
      {label}
    </button>
  );
};

export default Pill;
