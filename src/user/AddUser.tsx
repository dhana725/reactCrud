import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ApiStatus } from "../app/interface/UserInterface";
import { postUserListAction, resetcreatestatus } from "../app/slices/UserSlice";
import { RootState } from "../app/store";

const AddUser = () => {
    const navigate = useNavigate();
    const { createStatus } = useAppSelector((state: RootState) => state.user)
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useAppDispatch()
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = { title, author }
        dispatch(postUserListAction(data))
    }
    useEffect(() => {
        if (createStatus === ApiStatus.success) {
       
            setTitle("")
            setAuthor("")
            dispatch(resetcreatestatus())
            
            navigate("/");
        }
    }, [createStatus,dispatch,navigate])

    return <>
        <div className="container p-5 m-5">
            <div className="col-md-5">
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="enter title" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <input type='text' placeholder="enter author" value={author} className="form-control" onChange={(e) => setAuthor(e.target.value)} />
                    <br />

                    <button className="btn btn-primary" type="submit" >submit</button>

                </form>
            </div>
        </div>
    </>
}
export default AddUser;