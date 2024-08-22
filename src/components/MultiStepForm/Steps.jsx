import React from "react";
import { useSelector } from "react-redux";

export default function Steps({ steps }) {
  const currentStep = useSelector((store) => store.assessment.currentStep);
  const currentStepDetails = steps[currentStep - 1];

  return (
    <>
      <div className="rounded-tl-lg rounded-bl-lg col-span-full md:col-span-6 bg-blue-600 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Container for the dots */}
        <div className="flex md:flex-col flex-wrap gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`w-4 h-4 text-slate-50 border border-slate-50 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                step.number === currentStep ? "bg-blue-300 border-0" : ""
              }`}
            >
              {/* Dot Content */}
            </div>

          ))}
        </div>

        {/* Container for the text */}
        <div className="flex-1 flex items-center justify-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {currentStepDetails.title}
          </h1>
        </div>
      </div>
    </>
  );
}
