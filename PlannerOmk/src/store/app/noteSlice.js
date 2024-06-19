import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { 
    value: false,
    states: false ,
    value2:false ,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    toogle2: (state) => {
      state.value2 = !state.value2;
    }
  }
});

export const { toggle , toogle2 } = toggleSlice.actions;
export default toggleSlice.reducer;
