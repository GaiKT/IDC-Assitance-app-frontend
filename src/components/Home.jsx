import { useEffect, useState } from "react";
import axios from "axios"
import { format} from 'date-fns';
import { th } from 'date-fns/locale';
import { useAuth } from "../contexts/authentication";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureArrowUp ,faBoltLightning , faPaste ,faNetworkWired ,faTemperature0 } from '@fortawesome/free-solid-svg-icons'
import UtilsChart from "./utils/UtilsChart";

function Home() {
    const [weeklyMembers,setWeeklyMember] = useState([])

    const { apiUrl } = useAuth();

    const getWeeklyMembers = async () => {
        let result = await axios.get(`${apiUrl}/aup/new-members-weekly`)
        setWeeklyMember(result.data)
    }

    const formatDate = (date) => {
        return format(new Date(date), 'dd MMMM yyyy', { locale: th });
    };

    useEffect(()=>{
        getWeeklyMembers()
    },[])

    console.log(weeklyMembers)

    if(weeklyMembers.data){
        return (
            <> 
                <header className="text-4xl">Main Dashboard</header>
                <div className="mt-5 flex flex-col gap-2">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 gap-2">
                        <div className="min-h-32 shadow-sm border-t-4 rounded-lg border-green-500 bg-white flex justify-center items-center relative">
                            <p className="absolute top-3 left-3 text-blue-900">FDC STATUS</p>
                            <div className="flex gap-4 items-center text-2xl">
                                <FontAwesomeIcon icon={faTemperatureArrowUp}/>
                                <span>{weeklyMembers.data.avgTranformer[0]?.outside_temp} ํC</span>
                                <span>{weeklyMembers.data.avgTranformer[0]?.outside_hum}%</span>
                            </div>
                        </div>
                        <div className="min-h-32 shadow-sm border-t-4 rounded-lg border-red-500 bg-white flex justify-center items-center relative">
                            <p className="absolute top-3 left-3 text-blue-900">FDC STATUS</p>
                            <div className="flex gap-4 items-center text-2xl">
                                <FontAwesomeIcon icon={faBoltLightning}/>
                                <span>{weeklyMembers.data?.newfdc[0]?.fdc_phase1},</span>
                                <span>{weeklyMembers.data?.newfdc[0]?.fdc_phase2}</span>
                            </div>
                        </div>
                        <div className="min-h-32 shadow-sm border-t-4 rounded-lg border-yellow-500 bg-white flex justify-center items-center relative">
                            <p className="absolute top-3 left-3 text-blue-900">CHECKLISTS</p>
                            <div className="flex gap-4 items-center text-2xl">
                                <FontAwesomeIcon icon={faPaste}/>
                                <span>+40</span>
                            </div>
                        </div>
                        <div className="min-h-32 shadow-sm border-t-4 rounded-lg border-green-500 bg-white flex justify-center items-center relative">
                            <p className="absolute top-3 left-3 text-blue-900">LAN WIRING</p>
                            <div className="flex gap-4 items-center text-2xl">
                                <FontAwesomeIcon icon={faNetworkWired}/>
                                <span>+25</span>
                            </div>
                        </div>                                                                        
                    </div>
                    <div className="flex gap-2 max-lg:flex-col">
                        <div className="lg:w-4/6 shadow-sm bg-white rounded-md">
                            <UtilsChart 
                            topic={'USED UNIT'} 
                            typeChart={'line'}
                            xAxis={['01/09' , '02/09' , '03/09' , '04/09' , '05/09' , '06/09' , '07/09']}
                            yAxis={[{
                                name : 'meter',
                                data : [2431.5, 2631.5, 2531.5, 2731.5 ,2831.5 ,2931.5 ,3031.5 ]
                            }]}
                            />
                        </div>
                        <div className="lg:w-2/6 flex flex-col gap-2">
                            <div className="bg-white shadow-sm rounded-md">
                                <UtilsChart 
                                topic={'IT LOAD'} 
                                typeChart={'area'}
                                xAxis={['01/09' , '02/09' , '03/09' , '04/09']}
                                yAxis={[{
                                    name : 'meter',
                                    data : [2431.5, 2631.5, 2531.5, 2731.5]
                                }]}
                                />
                            </div>
                            <div className="bg-white shadow-sm rounded-md h-full">
                                <UtilsChart 
                                    topic={'TRANSFORMER'} 
                                    typeChart={'bar'} 
                                    xAxis={['CH1' , 'CH2' , 'CH3']} 
                                    yAxis={[{
                                        name : 'temp',
                                        data : [weeklyMembers.data?.avgTranformer[0]?.tr_ch1 , weeklyMembers.data?.avgTranformer[0]?.tr_ch2 , weeklyMembers.data?.avgTranformer[0]?.tr_ch3]}]
                                }/>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 max-lg:flex-col">
                        <div className="border w-full bg-white rounded-md shadow-sm p-5">
                            <div className="flex justify-between mb-2">
                                <p>New Members Thisweek <span className="text-green-500"> + {weeklyMembers.data?.newMembers.length} </span></p>
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
                        <div className="border w-full bg-white rounded-md shadow-sm p-5">
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