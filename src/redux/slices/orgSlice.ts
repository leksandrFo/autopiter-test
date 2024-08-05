import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Suggestion, OrgState  } from '../../types/types';

const loadSavedOrgs = (): Suggestion[] => {
  const savedOrgs = localStorage.getItem('savedOrgs');
  return savedOrgs ? JSON.parse(savedOrgs) : [];
};

const initialState: OrgState = {
  savedOrgs: loadSavedOrgs(),
};

const orgSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {
    addOrg(state, action: PayloadAction<Suggestion>) {
      state.savedOrgs.push(action.payload);
      localStorage.setItem('savedOrgs', JSON.stringify(state.savedOrgs))
    },
    removeOrg(state, action: PayloadAction<string>) {
      state.savedOrgs = state.savedOrgs.filter(
        (org) => org.data.inn !== action.payload
      );
      localStorage.setItem('savedOrgs', JSON.stringify(state.savedOrgs));
    },
  },
});

export const { addOrg, removeOrg } = orgSlice.actions;
export default orgSlice.reducer;
