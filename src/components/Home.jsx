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
                        <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                            <p className="text-2xl">New Members</p>
                            <p className="text-4xl font-extrabold">{weeklyMembers.data.newMembers.length}</p>
                        </div>
                        <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                            <p className="text-2xl">New Companies</p>
                            <p className="text-4xl font-extrabold">{weeklyMembers.data.newCompany.length}</p>
                        </div>
                        <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                            <p className="text-2xl">Used Racks</p>
                            <p className="text-4xl font-extrabold">15/40</p>
                        </div>
                        <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                            <p className="text-2xl">New Lans</p>
                            <p className="text-4xl font-extrabold">3</p>
                        </div>
                    </div>
                    <div className="border w-full bg-white rounded-md shadow-sm p-4">
                        <div>
                            <p className="text-2xl text-center bg-gray-300 rounded py-2">Weekly new members</p>
                            <div className="flex flex-col gap-3 p-3">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th> 
                                            <th>team</th> 
                                            <th>company</th> 
                                            <th>Date of sign</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        weeklyMembers.data.newMembers.map((member , index)=>{
                                            let bg = null;
                                            if(member.team_id === 1){
                                                bg = "bg-blue-100"
                                            }else if(member.team_id === 2){
                                                bg = "bg-green-100"
                                            }else if(member.team_id === 3){
                                                bg = "bg-purple-100"
                                            }else if(member.team_id === 4){
                                                bg = "bg-red-100"
                                            }else if(member.team_id === 5){
                                                bg = "bg-yellow-100"
                                            }else{
                                                bg = "bg-gray-100"
                                            }
                                            return(
                                                <tr key={index} className={"hover " + bg}>
                                                    <td>{member.first_name} {member.last_name}</td>
                                                    <td>{member.teamname}</td>
                                                    <td>บริษัท {member.comp_name_thai} จำกัด</td>
                                                    <td>{new Date(member.date_of_sign).toLocaleDateString('en-GB')}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
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