import { useState, useEffect } from "react";

export const useStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    useEffect(() => {
        console.log("Current step:", currentStep);
    }, [currentStep]);
    const handleGenerate = () => {
        // Add your generation logic here
        console.log("Generating course outline...")
        // For demonstration, let's increment the current step
        setCurrentStep(prev => Math.min(prev + 1, 5))
      }
    
    return {
        currentStep,
        setCurrentStep,
        handleGenerate,
    }   
}