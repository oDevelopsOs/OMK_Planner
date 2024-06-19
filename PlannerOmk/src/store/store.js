import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './app/noteSlice';
import auth from './app/auth';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    auth : auth
  }
});

export default store;
