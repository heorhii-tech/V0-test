import { Check } from "lucide-react"; // Импортируйте иконку

import { useState } from "react";

export const TariffCard = ({ index }: { index: number }) => {
  const [isSelected, setIsSelected] = useState<number | null>(null);
  return (
    <div
      onClick={() => setIsSelected(isSelected === index ? null : index)}
      className={`tariff-card ${isSelected === index ? "selected" : ""}`}
    >
      <div>
        <h4>Small</h4>
        <h3>3 Tokens</h3>
      </div>

      <ul>
        {[
          "6 lessons",
          "3 - 6 topics per lesson",
          "Quiz for each topic",
          "Analytics",
        ].map((item, index) => (
          <li key={index}>
            <Check className="w-4 h-4 text-[#2563EB]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button>Select</button>
    </div>
  );
};
