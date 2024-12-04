import React, { useState } from "react";
import Step from "./Step";

const steps = [
  { label: "Set up" },
  { label: "Generate outlines" },
  { label: "Pay" },
  { label: "Review" },
  { label: "Done" },
];

export const Stepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-[450px] mx-auto px-4 mt-8">
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <Step
              key={index}
              step={index + 1}
              label={step.label}
              isActive={currentStep === index + 1}
              isCompleted={currentStep > index + 1}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between max-w-[350px]">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="text-sm text-gray-500 hover:text-gray-900 border-[1px] border-gray-300 rounded-md px-2 py-1"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className="text-sm text-gray-500 hover:text-gray-900 border-[1px] border-gray-300 rounded-md px-2 py-1"
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};
