
import NavButtons from "../../FormInputs/NavButtons";
import {
  setCurrentStep,
  updateFormData,
} from "../../../redux/slices/assessmentSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

// Define the educational background emojis
const educationEmojis = [
  { text: "Primary Education", emoji: "🎒" },
  { text: "Secondary Education", emoji: "🎓" },
  { text: "Higher Education", emoji: "🎓+" },
];

export default function EducationalBackgroundForm() {
  const currentStep = useSelector((store) => store.assessment.currentStep);
  const formData = useSelector((store) => store.assessment.formData);
  const [selectedEducation, setSelectedEducation] = useState(formData.education || '');
  const [hoveredEducation, setHoveredEducation] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  async function processData(data) {
    dispatch(updateFormData({ ...data, education: selectedEducation }));
    dispatch(setCurrentStep(currentStep + 1));
  }

  function handleEducationClick(educationText) {
    setSelectedEducation(educationText);
    setHoveredEducation(null); // Clear hovered emoji when one is selected
    dispatch(updateFormData({ ...formData, education: educationText }));
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
        <div className="relative flex justify-center space-x-4 mb-4">
          {educationEmojis.map(({ text, emoji }) => (
            <div
              key={emoji}
              className={`relative flex flex-col items-center p-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedEducation === text ? "bg-blue-500" : "bg-transparent"
              }`}
              onMouseEnter={() => setHoveredEducation(text)}
              onMouseLeave={() => setHoveredEducation(null)}
              onClick={() => handleEducationClick(text)}
            >
              <span
                role="img"
                aria-label={text}
                className={`text-4xl transition-colors duration-300 ${
                  selectedEducation === text ? "text-white" : "text-gray-500"
                }`}
              >
                {emoji}
              </span>
              {hoveredEducation === text && !selectedEducation && (
                <div className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1">
                  {text}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4">
          {selectedEducation && (
            <div className="text-lg font-semibold">
              Selected: {selectedEducation}
            </div>
          )}
        </div>
        <NavButtons />
      </form>
    </div>
  );
}

