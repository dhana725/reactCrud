
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


import Layout from './module/Layout';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import UserList from './user/UserList';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<UserList />}></Route>
        <Route path='/add' element={<AddUser />}></Route>
        <Route path='/edit/:id' element={<EditUser />}></Route>


        </Route>
      </Routes>
      <ToastContainer/>
    </>
  )

}

export default App;
