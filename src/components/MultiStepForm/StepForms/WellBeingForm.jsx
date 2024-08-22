

import NavButtons from "../../FormInputs/NavButtons";
import {
  setCurrentStep,
  updateFormData,
} from "../../../redux/slices/assessmentSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const emojis = [
  { text: "Thumbs Up", emoji: "👍" },
  { text: "Thinking Face", emoji: "🤔" },
  { text: "Thumbs Down", emoji: "👎" },
];

export default function WellBeingForm() {
  const currentStep = useSelector((store) => store.assessment.currentStep);
  const formData = useSelector((store) => store.assessment.formData);
  const [selectedEmoji, setSelectedEmoji] = useState(formData.wellBeing || '');
  const [hoveredEmoji, setHoveredEmoji] = useState(null);
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
    dispatch(updateFormData({ ...data, wellBeing: selectedEmoji }));
    dispatch(setCurrentStep(currentStep + 1));
  }

  function handleEmojiClick(emojiText) {
    setSelectedEmoji(emojiText);
    setHoveredEmoji(null); // Clear hovered emoji when one is selected
    dispatch(updateFormData({ ...formData, wellBeing: emojiText }));
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
        <div className="relative flex justify-center space-x-4 mb-4">
          {emojis.map(({ text, emoji }) => (
            <div
              key={emoji}
              className={`relative flex flex-col items-center p-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedEmoji === text ? "bg-blue-500" : "bg-transparent"
              }`}
              onMouseEnter={() => setHoveredEmoji(text)}
              onMouseLeave={() => setHoveredEmoji(null)}
              onClick={() => handleEmojiClick(text)}
            >
              <span
                role="img"
                aria-label={text}
                className={`text-4xl transition-colors duration-300 ${
                  selectedEmoji === text ? "text-white" : "text-gray-500"
                }`}
              >
                {emoji}
              </span>
              {/* Show hover text only when hovering over an emoji */}
              {hoveredEmoji === text && !selectedEmoji && (
                <div className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1">
                  {text}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4">
          {selectedEmoji && (
            <div className="text-lg font-semibold">
              Selected: {selectedEmoji}
            </div>
          )}
        </div>
        <NavButtons />
      </form>
    </div>
  );
}



