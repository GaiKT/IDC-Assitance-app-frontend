import { useEffect, useState } from "react";
import axios from "axios"
import { format} from 'date-fns';
import { th } from 'date-fns/locale';

function Home() {
    const [weeklyMembers,setWeeklyMember] = useState([])

    const getWeeklyMembers = async () => {
        let result = await axios.get('http://localhost:4000/aup/new-members-weekly')
        setWeeklyMember(result.data)
    }

    const formatDate = (date) => {
        return format(new Date(date), 'dd MMMM yyyy', { locale: th });
    };

    useEffect(()=>{
        getWeeklyMembers()
    },[])

    if(weeklyMembers.data){
        return (
            <> 
                <header className="text-4xl">Main Dashboard</header>
                <div className="mt-5">
                    <div className="flex gap-3 h-full max-md:flex-col">
                        <div className="border md:w-2/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center p-2">
                            <p className="text-lg">Tranformer Room</p>
                            <div className="grid md:grid-cols-3 grid-cols-1 mt-2 gap-2 mb-2 w-full">
                                <div className="p-4 border rounded-md text-center">
                                    Temp TR CH1
                                    <p className="font-bold text-red-500">
                                        {weeklyMembers.data?.avgTranformer[0].tr_ch1}
                                    </p>
                                </div>
                                <div className="p-4 border rounded-md text-center">
                                    Temp TR CH2
                                    <p  className="font-bold text-blue-500">
                                        {weeklyMembers.data?.avgTranformer[0].tr_ch2}
                                    </p>
                                </div>
                                <div className="p-4 border rounded-md text-center">
                                    Temp TR CH3
                                    <p  className="font-bold text-green-500">
                                        {weeklyMembers.data?.avgTranformer[0].tr_ch3}
                                    </p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full">
                                <div className="p-4 border rounded-sm text-center">
                                    <p className="text-lg">Temp Outside</p>
                                        <div className="grid grid-cols-2 mt-2 gap-2 mb-2">
                                            <div className="p-4 border rounded-md text-center">
                                                Temp
                                                <p className="font-bold text-green-500">
                                                    {weeklyMembers.data?.avgTranformer[0].outside_temp}
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-md text-center">
                                                Hum
                                                <p  className="font-bold text-blue-500">
                                                    {weeklyMembers.data?.avgTranformer[0].outside_hum}
                                                </p>
                                            </div>
                                        </div>
                                </div>
                                <div className="p-4 border rounded-sm text-center">
                                    <p className="text-lg">FDC Status</p>
                                        <div className="grid grid-cols-2 mt-2 gap-2 mb-2">
                                            <div className="p-4 border rounded-md text-center">
                                                FDC P1
                                                <p className="font-bold text-red-500">
                                                    {weeklyMembers.data?.newfdc[0].fdc_phase1}
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-md text-center">
                                                FDC P2
                                                <p  className="font-bold text-yellow-500">
                                                    {weeklyMembers.data?.newfdc[0].fdc_phase2}
                                                </p>
                                            </div>
                                        </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="h-full md:w-2/4  flex flex-col justify-center items-center gap-5">
                            <div className="bg-white rounded-md shadow-sm p-4 w-full text-center">
                                <p className="text-lg">Phase 1</p>
                                <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
                                    <div className="p-3 border rounded-md">
                                        Meter Floor5
                                        <p className="font-bold text-blue-500">{weeklyMembers.data?.avgPhase1[0]?.main_meter}</p>
                                    </div>
                                    <div className="p-3 border rounded-md">
                                        ATS Phase1
                                        <p className="font-bold text-red-500">{weeklyMembers.data?.avgPhase1[0]?.atsphase1_meter}</p>
                                    </div>
                                    <div className="p-3 border rounded-md">
                                        EMDB
                                        <p className="font-bold text-yellow-500">{weeklyMembers.data?.avgPhase1[0]?.emdb_meter}</p>
                                    </div>
                                    <div className="p-3 border rounded-md">
                                        AirDB
                                        <p className="font-bold text-green-500">{weeklyMembers.data?.avgPhase1[0]?.airdb_meter}</p>
                                    </div>                                                                                                
                                </div>
                            </div>
                            <div className="bg-white rounded-md shadow-sm p-4 w-full text-center">
                                <p className="text-lg">Phase 2</p>
                                <div className="grid md:grid-cols-4 gap-2">
                                    <div className="p-3 border rounded-md">
                                        Meter Floor5
                                        <p className="font-bold text-blue-500">{weeklyMembers.data?.avgPhase2[0]?.main_meter}</p>
                                    </div>
                                    <div className="p-3 border rounded-md">
                                        ATS Phase2
                                        <p className="font-bold text-red-500">{weeklyMembers.data?.avgPhase2[0]?.atsphase2_meter}</p>
                                    </div>
                                    <div className="p-3 border rounded-md">
                                        EMDB
                                        <p className="font-bold text-yellow-500">{weeklyMembers.data?.avgPhase2[0]?.emdb_meter}</p>
                                    </div>
                                    <div className="p-3 border rounded-md">
                                        AirDB
                                        <p className="font-bold text-green-500">{weeklyMembers.data?.avgPhase2[0]?.airdb_meter}</p>
                                    </div>                                                                                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 max-lg:flex-col">
                        <div className="border w-full bg-white rounded-md shadow-sm p-5 mt-3">
                            <div className="flex justify-between mb-2">
                                <p>New Members Thisweek <span className="text-green-500"> +{weeklyMembers.data.newMembers.length} </span></p>
                                <a href="/members" className="text-blue-600 underline text-xs"> See All Members </a>
                            </div>
                            <div className="pl-2">
                                <table className="table max-md:table-xs">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Companies</th>
                                            <th>team</th>
                                            <th>Date to sign</th>
                                        </tr>
                                    </thead>    
                                    <tbody>
                                        {
                                            weeklyMembers.data?.newMembers.map((member , index) => {
                                                return(
                                                    <tr key={index} className="hover cursor-pointer">
                                                        <td>{member.first_name} {member.last_name}</td>
                                                        <td>{member.company.comp_name_thai}</td>
                                                        <td>{member.company.team.team_name}</td>
                                                        <td>{formatDate(member?.date_of_Sign)}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>                            
                        </div>
                        <div className="border w-full bg-white rounded-md shadow-sm p-5 mt-3">
                            <div className="flex justify-between mb-2">
                                <p>New Companies Thisweek <span className="text-green-500"> +{weeklyMembers.data.newCompany.length} </span></p>
                                <a href="/company" className="text-blue-600 underline text-xs"> See All Companies </a>
                            </div>
                            <div className="pl-2">
                                <table className="table max-md:table-xs">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Name Company Thai</th>
                                            <th>Name Company Eng</th>
                                            <th>Team</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            weeklyMembers.data?.newCompany.map((comp , index) => {
                                                return(
                                                    <tr key={index} className="hover cursor-pointer">
                                                        <td>บริษัท {comp.comp_name_thai} จำกัด</td>
                                                        <td>{comp.comp_name_eng}</td>
                                                        <td>{comp.team.team_name}</td>
                                                    </tr>
                                                );
                                            })                                            
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Home;