import { useEffect, useState } from "react";
import axios from "axios"
import { useAuth } from "../contexts/authentication";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureArrowUp ,faBoltLightning , faPaste ,faNetworkWired ,faTemperature0 } from '@fortawesome/free-solid-svg-icons'
import RoomTempUI from "./utils/RoomtempUI"

function Home() {
    const [weeklyMembers,setWeeklyMember] = useState([])
    const [temp , setTemp] = useState([])

    const { apiUrl } = useAuth();

    const getWeeklyMembers = async () => {
        let result = await axios.get(`${apiUrl}/aup/new-members-weekly`)
        setWeeklyMember(result.data)
    }

    const getTemp = async () => {
        let result = await axios.get(`${apiUrl}/checklists/roomtemp?str=&end&page=1`)
        setTemp(result.data)
    }

    useEffect(()=>{
        getWeeklyMembers()
        getTemp()
    },[])

    if(weeklyMembers.data){
        return (
            <> 
                <div className="mt-5 flex flex-col gap-2">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 gap-2">
                        <div className="min-h-32 shadow-sm border-t-4 rounded-md border-blue-300 bg-white flex justify-center items-center relative">
                            <p className="absolute top-3 left-3 text-blue-900">OUTSIDE TEMP</p>
                            <div className="flex gap-4 items-center text-xl">
                                <FontAwesomeIcon icon={faTemperatureArrowUp}/>
                                <span>{weeklyMembers.data.avgTranformer[0]?.outside_temp} ํC</span>
                                <span>{weeklyMembers.data.avgTranformer[0]?.outside_hum}%</span>
                            </div>
                        </div>
                        <div className="min-h-32 shadow-sm border-t-4 rounded-md border-blue-300 bg-white flex justify-center items-center relative">
                            <p className="absolute top-3 left-3 text-blue-900">FDC STATUS</p>
                            <div className="flex gap-4 items-center text-xl">
                                <FontAwesomeIcon icon={faBoltLightning}/>
                                <span>{weeklyMembers.data?.newfdc[0]?.fdc_phase1}</span>
                                <span>{weeklyMembers.data?.newfdc[0]?.fdc_phase2}</span>
                            </div>
                        </div>
                        <div className="min-h-32 shadow-sm border-t-4 rounded-md border-blue-300 bg-white flex justify-center items-center relative">
                            <p className="absolute top-3 left-3 text-blue-900">TR TEMP</p>
                            <div className="flex gap-4 items-center text-xl">
                                <FontAwesomeIcon icon={faPaste}/>
                                <span>{weeklyMembers.data?.avgTranformer[0]?.tr_ch1}</span>
                                <span>{weeklyMembers.data?.avgTranformer[0]?.tr_ch2}</span>
                                <span>{weeklyMembers.data?.avgTranformer[0]?.tr_ch3}</span>
                            </div>
                        </div>
                        <div className="min-h-32 shadow-sm border-t-4 rounded-md border-blue-300 bg-white flex justify-center items-center relative">
                            <p className="absolute top-3 left-3 text-blue-900">LAN WIRING</p>
                            <div className="flex gap-4 items-center text-xl">
                                <FontAwesomeIcon icon={faNetworkWired}/>
                                <span>+1</span>
                            </div>
                        </div>                                                                        
                    </div>
                    <div className="flex gap-2 max-lg:flex-col">
                        <div className="w-full shadow-sm bg-white rounded-md p-5">
                            <RoomTempUI data={temp[0]}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Home;