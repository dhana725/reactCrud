export interface Iuser{
id:number;
title:string;
author:string;
}
export enum ApiStatus{
    "loading",
    "ideal",
    "success",
    "error"
}
export interface IuserState{
   list:Iuser[];
   listStatus:ApiStatus;
   createStatus:ApiStatus;
   updateStatus:ApiStatus;

}

// user form
export  interface UserForm{
    title:string;
    author:string
}
export interface UpdateData{
    id:number,
    data:UserForm
}