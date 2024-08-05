import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SwitchState } from '../../types/types.ts';

const initialState: SwitchState = {
  activeSwitch: 'new',
};

const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    toggleSwitch(state, action: PayloadAction<'new' | 'saved'>) {
      state.activeSwitch = action.payload;
    },
  },
});

export const { toggleSwitch } = switchSlice.actions;
export default switchSlice.reducer;
