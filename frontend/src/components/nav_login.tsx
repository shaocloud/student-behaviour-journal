
const NavLoginProps = {
    loginState: Boolean
}

function NavLogin(loginState: NavLoginProps)
{
    return(
        <>
            <div className="text-white text-lg">
            
            {loginState ?
            "Logged In!":
            "Logged Out!"
            }
            </div>
        </>
    )
}

export default NavLogin