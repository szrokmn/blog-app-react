import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  getBlogSuccess,
  getMyBlogSuccess,
  getDetailSuccess,
  getCommentsSuccess,
  fetchStart,  
} from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCall = () => {
  
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken } = useAxios();


  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getBlogSuccess({ data, url }));     
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
   
  const getMyBlogData = async (url, id) => {    
    dispatch(fetchStart());
    try {     
      const { data } =  await axiosWithToken.get(`api/${url}/${id}/`);
      dispatch( getMyBlogSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const getDetailData = async (url, id) => {    
    dispatch(fetchStart());
    try {     
      const { data } = await axiosWithToken.get(`api/${url}/${id}/`);
      dispatch(getDetailSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const getCommentData = async (url, id) => {    
    dispatch(fetchStart());
    try {     
      const { data } = await axiosWithToken.get(`api/${url}/${id}/`);
      dispatch(getCommentsSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteBlogData = async (url, id) => {    
    dispatch(fetchStart());
    try {     
      await axiosWithToken.delete(`api/${url}/${id}/`);
      getBlogData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  
  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, info);
      toastSuccessNotify(`${url} successfuly posted`);
      getBlogData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
    }
  };
  
  const putBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(`api/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly updated`);
      getBlogData({data});
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be updated`);
    }
  };


  return {
    getBlogData,
    getMyBlogData,
    getDetailData,
    getCommentData,
    deleteBlogData,
    postBlogData,
    putBlogData,   
  };
};

export default useBlogCall;
