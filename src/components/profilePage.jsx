import Footer from "./footer";
import { useAuth } from "../contexts/authentication";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Profile () {
    const { state } = useAuth();
    const [user , setUser] = useState(state.user)

    return(
        <>
            <header className="text-4xl mb-5"> My Profile </header>
            <hr />
            <div className="w-full p-10">
                <div className="flex flex-col gap-4 p-4 lg:w-1/2">
                    Username
                    <label className="input input-bordered flex items-center gap-4">
                    <FontAwesomeIcon icon={faUser}/>
                    <input 
                        value={user?.UserName}
                        type="text" 
                        className="grow px-2"
                        placeholder="Username*"
                        disabled
                        />
                    </label>
                    
                    Firstname
                    <label className="input input-bordered flex items-center gap-2">
                    <input 
                        value={user?.firstName}
                        type="text"
                        className="grow ml-2 px-2" 
                        placeholder="Firstname*"
                        disabled
                        />
                    </label>
                    
                    Lastname
                    <label className="input input-bordered flex items-center gap-2">
                    <input 
                        value={user?.lastName}
                        type="text"
                        className="grow ml-2 px-2" 
                        placeholder="Lastname*"
                        disabled
                        />
                    </label>
                    
                    Role
                    <label className="flex items-center gap-2 p-2">
                    <select className="select w-full" value={user?.level} disabled>
                        <option disabled value="">Select your role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    </label>

                </div>
                <div className="w-full flex justify-end">
                    <button className="py-2 px-4 bg-green-700 rounded-md text-white font-bold hover:bg-green-600">Save</button>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Profile