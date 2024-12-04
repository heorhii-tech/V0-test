import React from "react";
import { CheckIcon } from "lucide-react";

interface StepProps {
  step: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  isLast: boolean;
}

const Step: React.FC<StepProps> = ({
  step,
  label,
  isActive,
  isCompleted,
  isLast,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center w-full">
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full ${
            isActive
              ? "bg-[#BFDBFE] text-primary"
              : isCompleted
              ? "bg-[#2563EB] text-white"
              : "bg-[#BFDBFE] text-muted-foreground"
          }`}
        >
          {isCompleted ? (
            <CheckIcon className="w-5 h-5" />
          ) : (
            <span className="text-sm font-medium text-white">{step}</span>
          )}
        </div>
        {!isLast && (
          <div className="flex-1 h-0.5 mx-2 bg-[#e5e7eb]">
            <div
              className="h-full transition-all duration-500 ease-in-out"
              style={{
                width: isCompleted ? "100%" : "0%",
                backgroundColor: "#2563EB",
              }}
            ></div>
          </div>
        )}
      </div>
      <span
        className={`mt-2 text-[10px] font-medium text-center ${
          isActive || isCompleted ? "text-[#2563EB]" : "text-muted-foreground"
        }`}
        style={{ width: "40px", marginLeft: "-7px", marginRight: "auto" }}
      >
        {label}
      </span>
    </div>
  );
};

export default Step;
