import { Brain } from "lucide-react";
interface LearningObjectiveCardProps {
  title: string;
  description: string;
  recommended: string;
  selected?: boolean;
  onClick?: () => void;
}

export function LearningObjectiveCard({
  title,
  description,
  recommended,
  selected,
  onClick,
}: LearningObjectiveCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative p-6 rounded-[16px] cursor-pointer
        bg-[linear-gradient(0deg,_#FFF7ED,_#FFF7ED),_linear-gradient(180deg,_rgba(255,_237,_213,_0)_0%,_rgba(255,_237,_213,_0.4)_100%)]
        border-gradient
        transition-all duration-200
        hover:shadow-lg
        ${selected ? "ring-2 ring-orange-200" : ""}
      `}
    >
      <div className="absolute top-4 right-4">
        <div className="w-6 h-6 bg-white border border-orange-200 rounded-md cursor-pointer">
          {selected && (
            <svg
              className="w-full h-full text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </div>
      </div>

      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <Brain className="w-6 h-6 text-orange-500" />
      </div>

      <h3 className="text-lg font-medium text-orange-500 mb-2">{title}</h3>

      <p className="text-sm text-orange-500/80 mb-4">{description}</p>

      <button className="text-sm text-orange-500 hover:underline">
        Learn more
      </button>
    </div>
  );
}
