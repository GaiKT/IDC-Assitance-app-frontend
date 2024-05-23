import { useEffect, useState } from "react";
import axios from "axios"
import ChartExample from "./chart";

function Home() {
    const [weeklyMembers,setWeeklyMember] = useState([])

    const getWeeklyMembers = async () => {
        let result = await axios.get('http://localhost:4000/aup/new-members-weekly')
        setWeeklyMember(result.data)
    }

    useEffect(()=>{
        getWeeklyMembers()
    },[])

    if(weeklyMembers.data){
        return (
            <> 
                <header className="text-4xl mb-5">Main Dashboard </header>
                <div className="mt-5 min-h-screen p-10">
                    <div className="h-40 flex gap-3 mb-3">
                        <a className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center cursor-pointer"
                        href="/members"
                        >
                            <p className="text-2xl">Members Updated</p>
                            <p className="text-4xl font-extrabold">{weeklyMembers.data.newMembers.length}</p>
                        </a>
                        <a className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center"
                        href="/company"
                        >
                            <p className="text-2xl">New Companies</p>
                            <p className="text-4xl font-extrabold">{weeklyMembers.data.newCompany.length}</p>
                        </a>
                        <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                            <p className="text-2xl">Used Racks</p>
                            <p className="text-4xl font-extrabold">15/40</p>
                        </div>
                        <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                            <p className="text-2xl">New Lans</p>
                            <p className="text-4xl font-extrabold">3</p>
                        </div>
                    </div>
                    <div className="border w-full bg-white rounded-md shadow-sm p-4 mt-3">
                        <ChartExample/>
                    </div>
                </div>
            </>
        );
    }

}

export default Home;