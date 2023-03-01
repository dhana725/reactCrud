
import { Outlet } from "react-router-dom";
import GlobalNav from "./GlobalNav";



const Layout =()=>{
    return (
     <>  
<div className="bg-warning p-4"> <GlobalNav/></div>
    
    <main>
        <Outlet></Outlet>
    </main>
    </>

 
    )
}
export default Layout;
