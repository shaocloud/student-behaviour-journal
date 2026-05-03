import { Outlet } from "react-router";
import { Navbar1 } from "./components/navbar1";

function Layout()
{
    return(
        <>
        <div className="p-8">
            <Navbar1 />         
            <Outlet />
        </div>
        </>
    )
}

export default Layout