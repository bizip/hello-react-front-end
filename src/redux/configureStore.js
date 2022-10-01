import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './MessageSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
