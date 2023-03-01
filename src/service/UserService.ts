
import ApiConfig from "./ApiConfig"
import { Iuser, UserForm } from "../app/interface/UserInterface"
import axiosExport from "./HttpService";
export const getUserList = async()=>{

    return await axiosExport.get<Iuser[]>(ApiConfig.user);
   
}


export const postUserData = async(data:UserForm)=>{

    return await axiosExport.post<Iuser>(ApiConfig.user,data);
   
}
export const deleteUserData = async(id:number)=>{
const url=`${ApiConfig.user}/${id}`
    return await axiosExport.delete(url);
   
}
export const updateUserData = async(id:number,data:UserForm)=>{
    const url=`${ApiConfig.user}/${id}`
        return await axiosExport.put(url,data);
       
    }