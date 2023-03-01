import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastError, toastSuccesss } from "../../module/ToastMessage";
import { deleteUserData, getUserList, postUserData, updateUserData } from "../../service/UserService";
import {IuserState,ApiStatus, UserForm, UpdateData} from "../interface/UserInterface";
const initialState:IuserState = {
    list:[],
    listStatus:ApiStatus.ideal,
    createStatus:ApiStatus.ideal,
    updateStatus:ApiStatus.ideal,


}
export const getUserListAction = createAsyncThunk("user/getUserListAction",
async()=>{
    const response = await getUserList();
    console.log(response)
    return response.data;

});
export const postUserListAction = createAsyncThunk("user/postUserListAction",
async(data:UserForm)=>{
    const response = await postUserData(data);
    return response.data;

});
export const deleteUserListAction = createAsyncThunk("user/deleteUserListAction",
async(id:number)=>{
await deleteUserData(id);
    return id;

});
export const updateUserListAction = createAsyncThunk("user/updateUserListAction",
async({id,data}:UpdateData)=>{
    const response = await updateUserData(id,data);
    return response;

});
const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        resetcreatestatus :(state)=>{
      state.createStatus =ApiStatus.ideal
        }
    },
    extraReducers: (builder) => {
    builder.addCase(getUserListAction.pending, (state) => {
      state.listStatus = ApiStatus.loading;
    });
    builder.addCase(getUserListAction.fulfilled, (state, action) => {
      state.listStatus = ApiStatus.ideal;
      state.list = action.payload;
    });
    builder.addCase(getUserListAction.rejected, (state) => {
      state.listStatus = ApiStatus.error;
      toastError("Something went wrong")

    });
    builder.addCase(postUserListAction.pending, (state) => {
        state.createStatus = ApiStatus.loading;
      });
      builder.addCase(postUserListAction.fulfilled, (state) => {
        state.createStatus = ApiStatus.success;
      toastSuccesss("Record created successfully")

      
      });
      builder.addCase(postUserListAction.rejected, (state) => {
        state.createStatus = ApiStatus.error;
        toastError("Something went wrong")

      });
      builder.addCase(deleteUserListAction.fulfilled, (state,action) => {
    
      const newList = state.list.filter((x)=>x.id !== action.payload);
      state.list = newList
      toastSuccesss("Record deleted successfully")

      
      });
      builder.addCase(updateUserListAction.pending, (state) => {
        state.updateStatus = ApiStatus.loading;
      });
      builder.addCase(updateUserListAction.rejected, (state) => {
        state.updateStatus = ApiStatus.error;
        toastError("Something went wrong")
      });
       builder.addCase(updateUserListAction.fulfilled, (state) => {
        state.updateStatus = ApiStatus.success;
        toastSuccesss("Record Updated successfully")
      });
}

});
export default UserSlice.reducer;
export const {resetcreatestatus} = UserSlice.actions