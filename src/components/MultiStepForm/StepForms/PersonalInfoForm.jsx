// // "use client";
// // import NavButtons from "../../FormInputs/NavButtons";
// // import SelectInput from "../../FormInputs/SelectInput";
// // import TextInput from "../../FormInputs/TextInput";
// // import {
// //   setCurrentStep,
// //   updateFormData,
// // } from "../../../redux/slices/onboardingStudentsSlice";
// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { useDispatch, useSelector } from "react-redux";

// // export default function PersonalInfoForm() {
// //   const currentStep = useSelector((store) => store.onboarding.currentStep);
// //   const formData = useSelector((store) => store.onboarding.formData);
// //   console.log(formData, currentStep);
// //   const [loading, setLoading] = useState(false);

// //   const {
// //     register,
// //     reset,
// //     watch,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm({
// //     defaultValues: {
// //       ...formData,
// //     },
// //   });
// //   const dispatch = useDispatch();
// //   async function processData(data) {
// //     // All Data is Valid
// //     //Collect all the data
// //     //Update Data in the Global state
// //     dispatch(updateFormData(data));
// //     //Make API Request to Save the Data also in the DB

// //     //Update the Current Step
// //     dispatch(setCurrentStep(currentStep + 1));
// //     // console.log(data);
// //   }
// //   return (
// //     <div className="flex justify-center items-center min-h-screen">
// //       <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
// //         <div className="flex justify-center space-x-4 mb-4">
// //           <span role="img" aria-label="thumbs up" className="text-4xl">
// //             👍
// //           </span>
// //           <span role="img" aria-label="thinking face" className="text-4xl">
// //             🤔
// //           </span>
// //           <span role="img" aria-label="thumbs down" className="text-4xl">
// //             👎
// //           </span>
// //         </div>
// //         <NavButtons />
// //       </form>
// //     </div>
// //   );
// // }




// // "use client";
// // import NavButtons from "../../FormInputs/NavButtons";
// // import {
// //   setCurrentStep,
// //   updateFormData,
// // } from "../../../redux/slices/onboardingStudentsSlice";
// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { useDispatch, useSelector } from "react-redux";

// // export default function PersonalInfoForm() {
// //   const currentStep = useSelector((store) => store.onboarding.currentStep);
// //   const formData = useSelector((store) => store.onboarding.formData);
// //   const [loading, setLoading] = useState(false);
// //   const dispatch = useDispatch();
// //   const [selectedEmoji, setSelectedEmoji] = useState(formData.selectedEmoji || '');

// //   const {
// //     register,
// //     reset,
// //     watch,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm({
// //     defaultValues: {
// //       ...formData,
// //     },
// //   });

// //   async function processData(data) {
// //     // All Data is Valid
// //     // Collect all the data
// //     // Update Data in the Global state
// //     dispatch(updateFormData({ ...data, selectedEmoji }));
// //     // Make API Request to Save the Data also in the DB

// //     // Update the Current Step
// //     dispatch(setCurrentStep(currentStep + 1));
// //     // console.log(data);
// //   }

// //   function handleEmojiClick(emojiText) {
// //     setSelectedEmoji(emojiText);
// //     dispatch(updateFormData({ ...formData, selectedEmoji: emojiText }));
// //   }

// //   return (
// //     <div className="flex justify-center items-center min-h-screen">
// //       <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
// //         <div className="flex justify-center space-x-4 mb-4">
// //           <span
// //             role="img"
// //             aria-label="thumbs up"
// //             className={`text-4xl cursor-pointer ${selectedEmoji === "👍" ? "text-blue-500" : ""}`}
// //             onClick={() => handleEmojiClick("👍")}
// //           >
// //             👍
// //           </span>
// //           <span
// //             role="img"
// //             aria-label="thinking face"
// //             className={`text-4xl cursor-pointer ${selectedEmoji === "🤔" ? "text-blue-500" : ""}`}
// //             onClick={() => handleEmojiClick("🤔")}
// //           >
// //             🤔
// //           </span>
// //           <span
// //             role="img"
// //             aria-label="thumbs down"
// //             className={`text-4xl cursor-pointer ${selectedEmoji === "👎" ? "text-blue-500" : ""}`}
// //             onClick={() => handleEmojiClick("👎")}
// //           >
// //             👎
// //           </span>
// //         </div>
// //         <NavButtons />
// //       </form>
// //     </div>
// //   );
// // }



// // import NavButtons from "../../FormInputs/NavButtons";
// // import {
// //   setCurrentStep,
// //   updateFormData,
// // } from "../../../redux/slices/onboardingStudentsSlice";
// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { useDispatch, useSelector } from "react-redux";

// // const emojis = [
// //   { text: "Thumbs Up", emoji: "👍" },
// //   { text: "Thinking Face", emoji: "🤔" },
// //   { text: "Thumbs Down", emoji: "👎" },
// // ];

// // export default function PersonalInfoForm() {
// //   const currentStep = useSelector((store) => store.onboarding.currentStep);
// //   const formData = useSelector((store) => store.onboarding.formData);
// //   const [selectedEmoji, setSelectedEmoji] = useState(formData.selectedEmoji || '');
// //   const [hoveredEmoji, setHoveredEmoji] = useState(null);
// //   const dispatch = useDispatch();
// //   const {
// //     register,
// //     reset,
// //     watch,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm({
// //     defaultValues: {
// //       ...formData,
// //     },
// //   });

// //   async function processData(data) {
// //     // All Data is Valid
// //     // Collect all the data
// //     // Update Data in the Global state
// //     dispatch(updateFormData({ ...data, selectedEmoji }));
// //     // Make API Request to Save the Data also in the DB

// //     // Update the Current Step
// //     dispatch(setCurrentStep(currentStep + 1));
// //   }

// //   function handleEmojiClick(emojiText) {
// //     setSelectedEmoji(emojiText);
// //     dispatch(updateFormData({ ...formData, selectedEmoji: emojiText }));
// //   }

// //   return (
// //     <div className="flex justify-center items-center min-h-screen">
// //       <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
// //         <div className="relative flex justify-center space-x-4 mb-4">
// //           {emojis.map(({ text, emoji }) => (
// //             <div
// //               key={emoji}
// //               className="relative flex flex-col items-center"
// //               onMouseEnter={() => setHoveredEmoji(text)}
// //               onMouseLeave={() => setHoveredEmoji(null)}
// //             >
// //               <span
// //                 role="img"
// //                 aria-label={text}
// //                 className={`text-4xl cursor-pointer ${selectedEmoji === emoji ? "text-blue-500" : ""}`}
// //                 onClick={() => handleEmojiClick(emoji)}
// //               >
// //                 {emoji}
// //               </span>
// //               {hoveredEmoji === text && (
// //                 <div className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1">
// //                   {text}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //         <NavButtons />
// //       </form>
// //     </div>
// //   );
// // }



// import NavButtons from "../../FormInputs/NavButtons";
// import {
//   setCurrentStep,
//   updateFormData,
// } from "../../../redux/slices/onboardingStudentsSlice";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

// const emojis = [
//   { text: "Thumbs Up", emoji: "👍" },
//   { text: "Thinking Face", emoji: "🤔" },
//   { text: "Thumbs Down", emoji: "👎" },
// ];

// export default function PersonalInfoForm() {
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const formData = useSelector((store) => store.onboarding.formData);
//   const [selectedEmoji, setSelectedEmoji] = useState(formData.selectedEmoji || '');
//   const dispatch = useDispatch();
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

//   async function processData(data) {
//     // All Data is Valid
//     // Collect all the data
//     // Update Data in the Global state
//     dispatch(updateFormData({ ...data, selectedEmoji }));
//     // Make API Request to Save the Data also in the DB

//     // Update the Current Step
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   function handleEmojiClick(emojiText) {
//     setSelectedEmoji(emojiText);
//     dispatch(updateFormData({ ...formData, selectedEmoji: emojiText }));
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
//         <div className="relative flex justify-center space-x-4 mb-4">
//           {emojis.map(({ text, emoji }) => (
//             <div
//               key={emoji}
//               className="relative flex flex-col items-center"
//               onMouseEnter={() => setHoveredEmoji(text)}
//               onMouseLeave={() => setHoveredEmoji(null)}
//               onClick={() => handleEmojiClick(emoji)}
//             >
//               <span
//                 role="img"
//                 aria-label={text}
//                 className={`text-4xl cursor-pointer transition-colors duration-300 ${selectedEmoji === emoji ? "text-blue-500" : "text-gray-500"}`}
//               >
//                 {emoji}
//               </span>
//               {selectedEmoji === emoji && (
//                 <div className="absolute bottom-10 bg-black text-white text-xs rounded px-2 py-1">
//                   {text}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="mt-4">
//           {selectedEmoji && (
//             <div className="text-lg font-semibold">
//               Selected: {emojis.find(e => e.emoji === selectedEmoji).text}
//             </div>
//           )}
//         </div>
//         <NavButtons />
//       </form>
//     </div>
//   );
// }




import NavButtons from "../../FormInputs/NavButtons";
import {
  setCurrentStep,
  updateFormData,
} from "../../../redux/slices/onboardingStudentsSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const emojis = [
  { text: "Thumbs Up", emoji: "👍" },
  { text: "Thinking Face", emoji: "🤔" },
  { text: "Thumbs Down", emoji: "👎" },
];

export default function PersonalInfoForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  const [selectedEmoji, setSelectedEmoji] = useState(formData.selectedEmoji || '');
  const [hoveredEmoji, setHoveredEmoji] = useState(null); // Add hover state
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
    // All Data is Valid
    // Collect all the data
    // Update Data in the Global state
    dispatch(updateFormData({ ...data, selectedEmoji }));
    // Make API Request to Save the Data also in the DB

    // Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
  }

  function handleEmojiClick(emojiText) {
    setSelectedEmoji(emojiText);
    dispatch(updateFormData({ ...formData, selectedEmoji: emojiText }));
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
        <div className="relative flex justify-center space-x-4 mb-4">
          {emojis.map(({ text, emoji }) => (
            <div
              key={emoji}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredEmoji(text)}
              onMouseLeave={() => setHoveredEmoji(null)}
              onClick={() => handleEmojiClick(emoji)}
            >
              <span
                role="img"
                aria-label={text}
                className={`text-4xl cursor-pointer transition-colors duration-300 ${selectedEmoji === emoji ? "text-blue-500" : "text-gray-500"}`}
              >
                {emoji}
              </span>
              {(hoveredEmoji === text || selectedEmoji === emoji) && (
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
              Selected: {emojis.find(e => e.emoji === selectedEmoji).text}
            </div>
          )}
        </div>
        <NavButtons />
      </form>
    </div>
  );
}
