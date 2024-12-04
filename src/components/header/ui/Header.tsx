import React from "react";
import { HomeIcon } from "lucide-react";

interface HeaderProps {
  currentStep: number;
}
export const Header = ({ currentStep }: HeaderProps) => {
  return (
    <header className="h-14 border-b bg-white px-4 flex items-center justify-between min-h-[56px] sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <button className="p-1 hover:bg-gray-100 rounded-md">
          <HomeIcon className="w-5 h-5 text-gray-600" />
        </button>
        <span className="font-medium text-gray-900">New course</span>
      </div>
      <div className="w-[196px] flex flex-col items-center">
        <div className="w-full flex justify-between mb-1" id="stepper1">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="w-9 h-1 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full" />
              <div
                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-in-out ${
                  step < currentStep
                    ? "bg-blue-600 w-full"
                    : step === currentStep
                    ? currentStep === 5
                      ? "bg-blue-600 w-full"
                      : "bg-blue-600 w-[30%]"
                    : step === 4 && currentStep === 5
                    ? "bg-blue-600 w-full"
                    : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100px]" /> {/* Spacer to balance the layout */}
    </header>
  );
};
