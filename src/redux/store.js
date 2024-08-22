import assessmentSlice from "./slices/assessmentSlice";

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    assessment: assessmentSlice,
  },
});
