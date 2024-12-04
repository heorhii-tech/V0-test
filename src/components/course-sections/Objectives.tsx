interface CourseSectionProps {
  number: number;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Objectives = ({
  number,
  title,
  description,
  children,
}: CourseSectionProps) => {
  return (
    <div className="my-8">
      <div className="flex items-start gap-3 mb-2">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-medium">
          {number}
        </div>
        <div>
          <h2 className="text-base font-medium text-gray-900 mb-1">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};
