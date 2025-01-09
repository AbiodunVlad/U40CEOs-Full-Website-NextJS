import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  address?: string;
  contactNumber?: string;
  city?: string;
  state?: string;
  profileImage?: string;
}

const initialState: UserState = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
};

const savedUser =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;
const persitedState = savedUser ? JSON.parse(savedUser) : initialState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
      localStorage.setItem("user", JSON.stringify(state));
      // state.id = action.payload.id;
      // state.firstName = action.payload.firstName;
      // state.lastName = action.payload.lastName;
      // state.email = action.payload.email;
      // if (action.payload.password) state.password = action.payload.password;
      // if (action.payload.address) state.address = action.payload.address;
      // if (action.payload.contactNumber)
      //   state.contactNumber = action.payload.contactNumber;
      // if (action.payload.city) state.city = action.payload.city;
      // if (action.payload.state) state.state = action.payload.state;
      // if (action.payload.profileImage)
      //   state.profileImage = action.payload.profileImage;
    },
    clearUser: () => {
      localStorage.removeItem("user");
      return initialState;
    },

    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.assign(state, action.payload);
      localStorage.setItem("user", JSON.stringify(state));
      // const updates = action.payload;
      // if (updates.firstName !== undefined) state.firstName = updates.firstName;
      // if (updates.lastName !== undefined) state.lastName = updates.lastName;
      // if (updates.email !== undefined) state.email = updates.email;
      // if (updates.password !== undefined) state.password = updates.password;
      // if (updates.address !== undefined) state.address = updates.address;
      // if (updates.contactNumber !== undefined)
      //   state.contactNumber = updates.contactNumber;
      // if (updates.city !== undefined) state.city = updates.city;
      // if (updates.state !== undefined) state.state = updates.state;
      // if (updates.profileImage !== undefined)
      //   state.profileImage = updates.profileImage;
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
