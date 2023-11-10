import { commonAPI } from "./commonAPI"
import {serverURL} from "./serverURL"


//upload videos

export const uploadAllVideos = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
 }

 //get all video from json server

 export const getAllVideos = async()=>{
  return  await commonAPI('GET',`${serverURL}/videos`,'')
 }
 
 // to delete videos 
 
 export const deleteVideo = async(id)=>{
  return  await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
 }

 // to add data to watch history
 export const addToHistory = async(videoDetails)=>{
  return  await commonAPI('POST',`${serverURL}/History`,videoDetails)
 }
 
 // to get all history form json-server
 export const getAllHistory = async(videoDetails)=>{
  return  await commonAPI('GET',`${serverURL}/History`,"")
 }
 // to delete watch history

 export const deleteHistory = async(id)=>{
  return  await commonAPI('DELETE',`${serverURL}/History/${id}`,{})
 }

 // to add categories

 export const addToCategory = async(body)=>{
  return  await commonAPI('POST',`${serverURL}/Categories`,body)
 }
 
 // to get category

 export const getAllCategory = async()=>{
  return  await commonAPI('GET',`${serverURL}/Categories`,"")
 }

 // to delete category

 export const deleteCategory = async(id)=>{
  return  await commonAPI('DELETE',`${serverURL}/Categories/${id}`,{})
 }

 // to get video based on id 

 export const getVideoId = async(id)=>{
  return  await commonAPI('GET',`${serverURL}/videos/${id}`,'')
 }

 // to update videos to backend

 export const updateCategory = async(id,body)=>{
  return  await commonAPI('PUT',`${serverURL}/Categories/${id}`,body)
 }

 