import NavBar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import Footer from "../../components/footer";
import { useAuth } from "../../contexts/authentication";
import { useState } from "react";

function Profile () {
    const { state } = useAuth();
    const [user , setUser] = useState(state.user)

    return(
        <>
            <NavBar/>
            <SideBar/>
            <div className="ml-72 p-10 bg-gray-100"> 
            <header className="text-4xl mb-5"> My Profile </header>
            <hr />
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                <div className="text-xl min-h-52 w-1/2">
                    <label className="flex justify-between mt-5">
                    Fristname 
                        <input
                        id="fristname"
                        name="fristname"
                        className="px-2 bg-gray-100 p-2 rounded"
                        type="text"
                        value={user.firstName}
                    />
                    </label>

                    <label className="flex justify-between mt-5">
                    Lastname 
                        <input
                        id="lastname"
                        name="lastname"
                        className="px-2 bg-gray-100 p-2 rounded"
                        type="text"
                        value={user.lastName}
                        />
                    </label>
                    
                    <label className="flex justify-between mt-5">
                    Level 
                        <input
                        id="level"
                        name="level"
                        className="px-2 bg-gray-100 p-2 rounded"
                        type="text"
                        />
                    </label>
                </div>
                <div className="w-full flex justify-end">
                    <button className="py-2 px-4 bg-green-700 rounded-md text-white font-bold hover:bg-green-600">Save</button>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Profile