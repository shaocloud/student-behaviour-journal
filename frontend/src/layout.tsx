import { Link, Outlet } from "react-router";
import Navbar from "./pages/navbar/navbar";

function Layout()
{
    return(
        <>
        <div className="p-8">
            <Navbar />

            I'm a layout!
            <Outlet />
        </div>
        </>
    )
}

export default Layout