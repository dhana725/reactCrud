import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ApiStatus, Iuser } from "../app/interface/UserInterface";
import { deleteUserListAction, getUserListAction } from "../app/slices/UserSlice";
import { RootState } from "../app/store";

const UserList = () => {
    const navigate = useNavigate();
    const { list, listStatus } = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUserListAction());
        console.log("hiiii")
    }, [dispatch]);
    return (


        <div className="container mt-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">sr no</th>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {listStatus === ApiStatus.loading && <tbody><tr>list is loading</tr></tbody>}
                {listStatus === ApiStatus.error && <tbody><tr>list is error</tr></tbody>}
                <tbody>
                    {listStatus === ApiStatus.ideal && list.map((user: Iuser, index: number) => {
                        return (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.title}</td>
                                <td>{user.author}</td>
                                <td><button className="btn btn-primary m-1" onClick={()=>{navigate(`edit/${user.id}`)}}>Edit</button><button className="btn btn-danger m-1" onClick={()=>{
                                    dispatch(deleteUserListAction(user.id))
                                }}>Delete</button></td>


                            </tr>

                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}
export default UserList;