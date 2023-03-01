
import { NavLink } from "react-router-dom"
import styles from "./StyleLayout.module.css";



const GlobalNav = () => {
    const navlinks = [
        { id: 1, to: "/", value: "Dashboard" },
        { id: 2, to: "/add", value: "User" }
    ];

    return (<div className="d-flex">
        {
            navlinks.map((link) => {
                return (
                    <NavLink className={`${styles.navlink} m-1 p-1`} key={link.id} to={link.to} >{link.value}</NavLink>

                );
            })
        }
    </div>
    )

}
export default GlobalNav;