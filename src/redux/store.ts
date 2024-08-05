import { configureStore } from '@reduxjs/toolkit';
import switchReducer from './slices/switchSlice.ts';
import orgReducer from './slices/orgSlice.ts';

const store = configureStore({
  reducer: {
    switch: switchReducer,
    organizations: orgReducer,
  },
});

export default store;