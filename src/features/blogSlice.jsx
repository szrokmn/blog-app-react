import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    blogs: [],
    categories: [],
    likes: [],
    comments: [],
    details: [],    
    myBlog: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getBlogSuccess: (state, { payload: { data, url } }) => {
      state.loading = false; 
      state[url] = data    
    },  
    getMyBlogSuccess: (state, { payload: { data } }) => {
      state.loading = true;
      state.myBlog = data 
    },
    getDetailSuccess: (state, { payload:{ data } }) => {
      state.loading = true;
      state.details = data 
    },
    getCommentsSuccess: (state, { payload: { data } }) => {
      state.loading = true;
      state.comments = data 
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getBlogSuccess,
  getMyBlogSuccess,
  getDetailSuccess,
  getCommentsSuccess,
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;
