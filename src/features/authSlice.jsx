import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,   
    token: null,
    image:"",
    id:"",
    bio:"",
    email:""
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.token = payload?.key;
      state.image = payload?.user?.image;
      state.id = payload?.user?.id;
      state.bio = payload?.user?.bio;      
      state.email = payload?.user?.email;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
      state.image = "";
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.image = payload?.user?.image;
      state.id = payload?.user?.id;
      state.bio = payload?.user?.bio;  
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
