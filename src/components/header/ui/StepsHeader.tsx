import React, { useState } from 'react';
import { HomeIcon } from 'lucide-react';

interface StepsHeaderProps {
  currentStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function StepsHeader({ currentStep, isFirstStep, isLastStep }: StepsHeaderProps) {
  return (
    <div>
      <div>Step {currentStep}</div>
    </div>
  );
}

