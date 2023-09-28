import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    ismenuOpen: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.ismenuOpen = !state.ismenuOpen;
    },
    closeMenu:(state,action)=>{
      state.ismenuOpen=false
    }
  },
});

export const { toggleMenu ,closeMenu} = appSlice.actions;
export default appSlice.reducer;
