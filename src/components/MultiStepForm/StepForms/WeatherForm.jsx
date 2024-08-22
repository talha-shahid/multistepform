
import NavButtons from "../../FormInputs/NavButtons";
import {
  setCurrentStep,
  updateFormData,
} from "../../../redux/slices/assessmentSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

// Define the weather emojis
const weatherEmojis = [
  { text: "Sunny", emoji: "🌞" },
  { text: "Cloudy", emoji: "☁️" },
  { text: "Rainy", emoji: "🌧️" },
];

export default function WeatherForm() {
  const currentStep = useSelector((store) => store.assessment.currentStep);
  const formData = useSelector((store) => store.assessment.formData);
  const [selectedWeather, setSelectedWeather] = useState(formData.weather || '');
  const [hoveredWeather, setHoveredWeather] = useState(null);
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
    dispatch(updateFormData({ ...data, weather: selectedWeather }));
    dispatch(setCurrentStep(currentStep + 1));
  }

  function handleWeatherClick(weatherText) {
    setSelectedWeather(weatherText);
    setHoveredWeather(null); // Clear hovered emoji when one is selected
    dispatch(updateFormData({ ...formData, weather: weatherText }));
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
        <div className="relative flex justify-center space-x-4 mb-4">
          {weatherEmojis.map(({ text, emoji }) => (
            <div
              key={emoji}
              className={`relative flex flex-col items-center p-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedWeather === text ? "bg-blue-500" : "bg-transparent"
              }`}
              onMouseEnter={() => setHoveredWeather(text)}
              onMouseLeave={() => setHoveredWeather(null)}
              onClick={() => handleWeatherClick(text)}
            >
              <span
                role="img"
                aria-label={text}
                className={`text-4xl transition-colors duration-300 ${
                  selectedWeather === text ? "text-white" : "text-gray-500"
                }`}
              >
                {emoji}
              </span>
              {hoveredWeather === text && !selectedWeather && (
                <div className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1">
                  {text}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4">
          {selectedWeather && (
            <div className="text-lg font-semibold">
              Selected: {selectedWeather}
            </div>
          )}
        </div>
        <NavButtons />
      </form>
    </div>
  );
}
