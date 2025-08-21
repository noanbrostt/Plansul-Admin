import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { PermissionsMap } from "@/acl/normalizePermissions";

interface User {
  nome: string;
  matricula: string;
  permissoes?: Array<string>;      // legado (opcional)
  permissionsMap?: PermissionsMap; // novo
}

interface UserState {
  data: User | null;
}

const userFromStorage = localStorage.getItem("user");
const initialState: UserState = {
  data: userFromStorage ? JSON.parse(userFromStorage) : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.data = null;
      localStorage.removeItem("user");
    },
    setPermissionsMap: (state, action: PayloadAction<PermissionsMap>) => {
      if (!state.data) return;
      state.data.permissionsMap = action.payload;
      localStorage.setItem("user", JSON.stringify(state.data));
    },
  },
});

export const { setUser, clearUser, setPermissionsMap } = userSlice.actions;
export default userSlice.reducer;
