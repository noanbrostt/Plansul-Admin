import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  nome: string;
  matricula: string;
  permissoes: Array<"menu" | "dev">;
}

interface UserState {
  data: User | null;
}

// 🚀 Recupera do localStorage se existir
const userFromStorage = localStorage.getItem("user");
const initialState: UserState = {
  data: userFromStorage ? JSON.parse(userFromStorage) : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // salva no storage
    },
    clearUser: (state) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
