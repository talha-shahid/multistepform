
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  formData: {},
};
const assessmentSlice = createSlice({
  name: "assessment",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});
export const { setCurrentStep, updateFormData } =
assessmentSlice.actions;
export default assessmentSlice.reducer;
