"use client";

import React, { useState } from "react";

interface Lesson {
  title: string;
  duration: string;
}

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  lessonCount: number;
  outcomeCount: number;
  lessons: Lesson[];
}

export function Deversity({
  number,
  title,
  description,
  lessonCount,
  outcomeCount,
  lessons,
}: LessonCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-sm mt-8">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-sm font-medium text-gray-500">{number}</span>
          <div className="space-y-1">
            <h3 className="font-semibold leading-none">{title}</h3>
            <p className="text-sm text-gray-500">
              {lessonCount} lessons • {outcomeCount} learning outcomes
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <div>
          <button
            className="text-sm text-blue-600 flex items-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="mr-1">
              {isOpen ? "Hide lessons" : "View lessons"}
            </span>
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`mt-4 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <span className="text-sm">{lesson.title}</span>
                <span className="text-sm text-gray-500">{lesson.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
