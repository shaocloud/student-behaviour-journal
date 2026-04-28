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
import NavLogin from '@/components/nav_login'

function Navbar()
{
    const [loggedIn, setLoggedIn] = useState(false)

    return(
        <>
            <div
                className=" 
                    flex justify-between items-center
                    p-8 w-full h-32 bg-indigo-500">
                {/*Mobile*/}
                <div
                    id="mobile-nav"
                    className="md:hidden">
                    <NavigationMenu >
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>=</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink asChild>  
                                        <Link className="text-gray-700 text-lg hover:text-gray-700" to="/">Home</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link className="text-gray-700 text-lg hover:text-gray-700" to="/students">Students</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {/*Desktop*/}
                <div
                    id="desktop-nav"
                    className="hidden md:flex">
                    <NavigationMenu >    
                        <NavigationMenuLink asChild>  
                            <Link className="text-white text-lg hover:text-gray-700" to="/">Home</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link className="text-white text-lg hover:text-gray-700" to="/students">Students</Link>
                        </NavigationMenuLink>
                    </NavigationMenu>
                </div>
                <NavLogin loginState={loggedIn}/>
            </div>
        </>
    )
}

export default Navbar