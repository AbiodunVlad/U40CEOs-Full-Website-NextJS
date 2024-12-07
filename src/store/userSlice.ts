import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  name: string;
  email: string;
  password?: string;
  address?: string;
  contactNumber?: string;
  city?: string;
  state?: string;
}

const initialState: UserState = {
  id: null,
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      if (action.payload.password) state.password = action.payload.password;
      if (action.payload.address) state.address = action.payload.address;
      if (action.payload.contactNumber)
        state.contactNumber = action.payload.contactNumber;
      if (action.payload.city) state.city = action.payload.city;
      if (action.payload.state) state.state = action.payload.state;
    },
    clearUser: () => initialState,
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      const updates = action.payload;
      if (updates.name !== undefined) state.name = updates.name;
      if (updates.email !== undefined) state.email = updates.email;
      if (updates.password !== undefined) state.password = updates.password;
      if (updates.address !== undefined) state.address = updates.address;
      if (updates.contactNumber !== undefined)
        state.contactNumber = updates.contactNumber;
      if (updates.city !== undefined) state.city = updates.city;
      if (updates.state !== undefined) state.state = updates.state;
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
