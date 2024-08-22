// "use client";
// import NavButtons from "../../FormInputs/NavButtons";
// import SelectInput from "../../FormInputs/SelectInput";
// import TextInput from "../../FormInputs/TextInput";
// import {
//   setCurrentStep,
//   updateFormData,
// } from "../../../redux/slices/assessmentSlice";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

// export default function PreferredLanguageForm() {
//   const currentStep = useSelector((store) => store.assessment.currentStep);
//   const formData = useSelector((store) => store.assessment.formData);
//   console.log(formData, currentStep);
//   const [loading, setLoading] = useState(false);
//   const languages = [
//     {
//       id: "javascript",
//       title: "JavaScript",
//     },
//     {
//       id: "python",
//       title: "Python",
//     },
//     {
//       id: "php",
//       title: "PHP",
//     },
//     {
//       id: "c++",
//       title: "C++",
//     },
//     {
//       id: "java",
//       title: "Java",
//     },
//   ];
//   const {
//     register,
//     reset,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...formData,
//     },
//   });
//   const dispatch = useDispatch();
//   async function processData(data) {
//     // All Data is Valid
//     //Collect all the data
//     //Update Data in the Global state
//     dispatch(updateFormData(data));
//     //Make API Request to Save the Data also in the DB

//     //Update the Current Step
//     dispatch(setCurrentStep(currentStep + 1));
//     // console.log(data);
//   }
//   return (
//     <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
//       <div className="mb-8">
//         <h5 className="text-xl md:text-3xl font-bold text-gray-900">
//           Programming Experience
//         </h5>
//         <p>Please provide your info here.</p>
//       </div>
//       <div className="grid gap-2 sm:grid-cols-2">
//         <SelectInput
//           label="Your preferred Languages"
//           name="preferredLanguages"
//           register={register}
//           options={languages}
//         />
//       </div>

//       <NavButtons />
//     </form>
//   );
// }


import NavButtons from "../../FormInputs/NavButtons";
import {
  setCurrentStep,
  updateFormData,
} from "../../../redux/slices/assessmentSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

// Define the hobbies emojis
const hobbiesEmojis = [
  { text: "Reading", emoji: "📚" },
  { text: "Singing", emoji: "🎤" },
  { text: "Dancing", emoji: "💃" },
];

export default function HobbiesForm() {
  const currentStep = useSelector((store) => store.assessment.currentStep);
  const formData = useSelector((store) => store.assessment.formData);
  const [selectedHobby, setSelectedHobby] = useState(formData.hobby || '');
  const [hoveredHobby, setHoveredHobby] = useState(null);
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
    dispatch(updateFormData({ ...data, hobby: selectedHobby }));
    dispatch(setCurrentStep(currentStep + 1));
  }

  function handleHobbyClick(hobbyText) {
    setSelectedHobby(hobbyText);
    setHoveredHobby(null); // Clear hovered emoji when one is selected
    dispatch(updateFormData({ ...formData, hobby: hobbyText }));
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
        <div className="relative flex justify-center space-x-4 mb-4">
          {hobbiesEmojis.map(({ text, emoji }) => (
            <div
              key={emoji}
              className={`relative flex flex-col items-center p-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedHobby === text ? "bg-blue-500" : "bg-transparent"
              }`}
              onMouseEnter={() => setHoveredHobby(text)}
              onMouseLeave={() => setHoveredHobby(null)}
              onClick={() => handleHobbyClick(text)}
            >
              <span
                role="img"
                aria-label={text}
                className={`text-4xl transition-colors duration-300 ${
                  selectedHobby === text ? "text-white" : "text-gray-500"
                }`}
              >
                {emoji}
              </span>
              {hoveredHobby === text && !selectedHobby && (
                <div className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1">
                  {text}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4">
          {selectedHobby && (
            <div className="text-lg font-semibold">
              Selected: {selectedHobby}
            </div>
          )}
        </div>
        <NavButtons />
      </form>
    </div>
  );
}
