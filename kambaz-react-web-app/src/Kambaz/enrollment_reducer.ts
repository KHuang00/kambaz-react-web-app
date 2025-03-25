import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //@ts-ignore
  enrolledCourses: JSON.parse(localStorage.getItem('enrolledCourses')) || [],
  showAllCourses: false,
};

const enrollmentReducer = createSlice({
  name: 'enrollment',
  initialState,
  reducers: {
    toggleEnroll: (state, action) => {
      const courseId = action.payload;
      if (state.enrolledCourses.includes(courseId)) {//@ts-ignore
        state.enrolledCourses = state.enrolledCourses.filter(id => id !== courseId);
      } else {
        state.enrolledCourses.push(courseId);
      }
      localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
    },
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
  },
});

export const { toggleEnroll, toggleShowAllCourses } = enrollmentReducer.actions;
export default enrollmentReducer.reducer;
