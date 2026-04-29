import { useState } from 'react'
import { Link } from "react-router"
import { 
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Navbar1 } from '@/components/navbar1'
import NavLogin from '@/components/nav_login'

function Navbar()
{
    const [loggedIn, setLoggedIn] = useState(false)

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Students", path: "/students" },
    ]

    return(
        <>
            <Navbar1 />

        </>
    )
}

export default Navbar