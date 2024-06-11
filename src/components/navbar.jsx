import { useAuth } from "../contexts/authentication";
import { Link } from "react-router-dom";

function NavBar() {

    const { state ,logout } = useAuth();

    const UpperCaseName = (string) => {
        if(string){
            let firstLetter = string.slice(0, 1).toUpperCase();
            let otherLetters = string.slice(1);
            return firstLetter + otherLetters
        }
      };
    
    return(
        <nav className="flex h-20 bg-white justify-end pr-10 items-center shadow-lg">
            <div className="dropdown flex gap-2">
                <div className="flex justify-center items-center max-md:hidden">
                    {UpperCaseName(state.user?.firstName)} {UpperCaseName(state.user?.lastName)}
                </div>
                <div tabIndex={0} role="button" className="flex justify-center items-center">
                    <div className=" h-10 w-10 rounded-full bg-gray-200 p-1">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="rounded-full" />
                    </div>
                </div>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow-lg bg-white rounded w-52 absolute top-10 right-0 ">
                        <p className="p-4 md:hidden">{UpperCaseName(state.user?.firstName)} {UpperCaseName(state.user?.lastName)}</p>
                        <li><Link to={`/users/${state.user?.id}/profile`}>Profile</Link></li> 
                        <li><Link className="text-red-400" onClick={()=>{logout();}} >Log Out</Link></li>
                    </ul>
            </div>
        </nav>
    );
}
export default NavBar;