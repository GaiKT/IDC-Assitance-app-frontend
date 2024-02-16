import { useAuth } from "../contexts/authentication";

function NavBar() {

    const { logout } = useAuth();
    
    return(
        <nav className="flex h-20 bg-white justify-end pr-20 items-center shadow-lg z-0">
            <div className="dropdown flex gap-2">
                <div className=" h-10 w-10 rounded-full bg-gray-200 p-1">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="rounded-full" />
                </div>
                <div tabIndex={0} role="button" className="flex justify-center items-center">Username</div>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow-lg bg-white rounded w-52 absolute top-10 right-0 ">
                        <li><a href="/users/:userId/profile">Profile</a></li> 
                        <li><a className="text-red-400" onClick={()=>{logout();}} >Log Out</a></li>
                    </ul>
            </div>
        </nav>
    );
}
export default NavBar;