import {  useState } from "react";
import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ApiStatus, UpdateData } from "../app/interface/UserInterface";
import { updateUserListAction } from "../app/slices/UserSlice";


const EditUser = () => {
    const navigate = useNavigate();
    const { updateStatus } = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch()
    const params = useParams();
    const editId =useRef(parseInt(params.id || ''))
    const {list}=useAppSelector((state:RootState)=>state.user)
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
 
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = {title,author}
        const UpdateData :UpdateData={id:editId.current,data}
        dispatch(updateUserListAction(UpdateData))
        
    }
    useState(()=>{
        const userList = list.filter((x)=>x.id === editId.current)
        if(userList.length){
          setTitle(userList[0].title)
          setAuthor(userList[0].author)
        }
    })


    useEffect(() => {
        if (updateStatus === ApiStatus.success) { 
            navigate("/");
        }
    }, [updateStatus,navigate])

    return <>
        <div className="container p-5 m-5">
            <div className="col-md-5">
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="enter title" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <input type='text' placeholder="enter author" value={author} className="form-control" onChange={(e) => setAuthor(e.target.value)} />
                    <br />

                    <button className="btn btn-primary" type="submit" >Update</button>

                </form>
            </div>
        </div>
    </>
}
export default EditUser;