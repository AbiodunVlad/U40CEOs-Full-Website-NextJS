import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {}

const initialState: ProfileState = {};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
    clearProfile: () => initialState,
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
