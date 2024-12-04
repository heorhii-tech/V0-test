import { GenerateButton } from "../../../buttons/ui/GenerateButton";

import { Objectives as CourseSection } from "../../../course-sections/index";
import { LearningObjectiveCard } from "../../../course-sections/course-cards/index";
import { useState } from "react";
import TariffPlan from "../../../course-sections/TariffPlan";
import { Stepper } from "../../../steppers/vo-stepper/index";
import Divider from "@mui/material/Divider";
import { Deversity } from "../../../deversety-element/index";
interface CreateCoursePageProps {
  handleGenerate: () => void;
}

export const CreateCoursePage = ({ handleGenerate }: CreateCoursePageProps) => {
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);
  const lessonData = {
    number: 1,
    title: "Diversity 101",
    description:
      "Gain a strong understanding of diversity, inclusion and bias in the workplace. Learn core concepts, practical strategies, and develop skills to promote equity and belonging.",
    lessonCount: 3,
    outcomeCount: 10,
    lessons: [
      {
        title: "Introduction to Workplace Diversity",
        duration: "15 mins",
      },
      {
        title: "Understanding Unconscious Bias",
        duration: "20 mins",
      },
      {
        title: "Building Inclusive Teams",
        duration: "25 mins",
      },
    ],
  };

  const toggleObjective = (objective: string) => {
    setSelectedObjectives((prev) =>
      prev.includes(objective)
        ? prev.filter((obj) => obj !== objective)
        : [...prev, objective]
    );
  };
  return (
    <div className="mx-auto  px-4 course-page">
      <p className="text-[#00000099] mb-8">
        On this page, components generated using V0 DEV and also manually, all
        components are interactive except the Sidebar.
      </p>
      <Divider />
      <div className="flex flex-col gap-4 mt-8">
        <p className="text-[#00000099] ">
          <b>Progress Bar in Header by V0 DEV Figma design</b> <br />
          When you click on the button "Generate course outlines" at the bottom
          of the screen, the progress in Header can be seen.
        </p>
        <ul className="text-[#00000099] text-sm list-disc mt-4 flex flex-col gap-2">
          <b>Advantages:</b>
          <li>Progress bar implementation time: 1 hour</li>
          <li>Figma design compliance</li>
          <b>Disadvantages:</b>
          <li>Need to correct the design manually</li>
          <li>
            Inability of V0 DEV to properly design HTML structure when copying
            from Figma exactly
          </li>
          <li>Non-correct visual filling of the progress line</li>
        </ul>
        <Divider />
      </div>
      <Stepper />
      <div className="flex flex-col gap-4 mt-8">
        <p className="text-[#00000099] ">
          <b>Progress Bar in Header by V0 DEV random design</b> <br />
          Buttons "Previous" and "Next" are clickable.
        </p>
        <ul className="text-[#00000099] text-sm list-disc mt-4 flex flex-col gap-2">
          <b>Advantages:</b>
          <li>Progress bar implementation time: 1 hour 10 minutes</li>
          <b>Disadvantages:</b>
          <li>Need to correct the design manually</li>
          <li>
            Does not bring the last step to the finish state without making
            edits
          </li>
          <li>Inconsistency with Figma design</li>
        </ul>
        <Divider />
      </div>
      <Deversity {...lessonData} />
      <div className="flex flex-col gap-4 mt-8">
        <p className="text-[#00000099] ">
          <b>Deversity element by V0 DEV Figma design</b> <br />
          Buttons "View lesson" is clickable.
        </p>
        <ul className="text-[#00000099] text-sm list-disc mt-4 flex flex-col gap-2">
          <b>Advantages:</b>
          <li>Time: 40 minutes</li>
          <li>Almost a similar design to Figma</li>

          <b>Disadvantages:</b>
          <li>Initially generated using a third-party bilibrary</li>
        </ul>
        <Divider />
      </div>
      <CourseSection
        number={5}
        title="Select learning objectives"
        description="Select the options you feel are most relevant for your learners"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              title: "Remember",
              description:
                "Best for learners who can break down complex information",
              recommended:
                "Learners who need to memorize terminology and basic concepts before moving to more advanced topics.",
            },
            {
              title: "Understand",
              description:
                "Best for learners who can break down complex information",
              recommended:
                "Learners who need to gain knowledge and learn to summarize, explain, or provide examples.",
            },
            {
              title: "Apply",
              description:
                "Best for learners who can break down complex information",
              recommended:
                "Learners ready to take acquired knowledge and apply it in practical contexts.",
            },
            {
              title: "Analyze",
              description:
                "Best for learners who can break down complex information",
              recommended:
                "Learners ready to break down information, identify patterns, and make deeper connections.",
            },
            {
              title: "Evaluate",
              description:
                "Best for learners who can break down complex information",
              recommended:
                "Learners who need to develop critical thinking and decision-making skills.",
            },
            {
              title: "Create",
              description:
                "Best for learners who can break down complex information",
              recommended:
                "Learners ready to generate new ideas or design solutions based on their acquired knowledge.",
            },
          ].map((objective) => (
            <LearningObjectiveCard
              key={objective.title.toLowerCase()}
              title={objective.title}
              description={objective.description}
              recommended={objective.recommended}
              selected={selectedObjectives.includes(
                objective.title.toLowerCase()
              )}
              onClick={() => toggleObjective(objective.title.toLowerCase())}
            />
          ))}
        </div>
      </CourseSection>
      <div className="flex flex-col gap-4 mt-8">
        <p className="text-[#00000099] ">
          <b>Learning objectives list by V0 DEV Figma design</b> <br />
          Cards are clickable.
        </p>
        <ul className="text-[#00000099] text-sm list-disc mt-4 flex flex-col gap-2">
          <b>Advantages:</b>
          <li>Time: 1 hours</li>
          <li>Almost a similar design to Figma</li>

          <b>Disadvantages:</b>
          <li>Initially generated using a third-party bilibrary</li>
          <li>A lot of design changes have to be made manually</li>
        </ul>
        <Divider />
      </div>
      <TariffPlan />
      <div className="flex flex-col gap-4 mt-8">
        <p className="text-[#00000099] ">
          <b>Tariff list by manual Figma design</b> <br />
          Cards are clickable.
        </p>
        <ul className="text-[#00000099] text-sm list-disc mt-4 flex flex-col gap-2">
          <b>Advantages:</b>

          <li>Similar design to Figma</li>
          <li>Easy to integrate and modify</li>

          <b>Disadvantages:</b>
          <li>Time: 1 hours</li>
        </ul>
        <Divider />
      </div>
      <GenerateButton onClick={handleGenerate} />
    </div>
  );
};
