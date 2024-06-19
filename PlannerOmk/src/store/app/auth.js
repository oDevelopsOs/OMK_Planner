import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'toggle',
  initialState: { 
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = true;
    }
  }
});

export const { toggle } = auth.actions;
export default auth.reducer;
