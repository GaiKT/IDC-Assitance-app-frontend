import React from 'react'
import { useNavigate } from "react-router-dom"
import { th } from 'date-fns/locale'
import { format } from 'date-fns';
import RoomTempUI from './RoomtempUI';
import UtilsChart from './UtilsChart'

export default function TapChecklist({nameCheckList,data,setEndDate,setStrDate}) {
    const navigate = useNavigate()

    const editChecklistHandle = (checklistData) => {
        navigate(`/checklists/${nameCheckList}/edit`, { state : checklistData } )
    }

    const formatDate = (date) => {
        return format(new Date(date), 'dd MMMM yyyy HH:mm น.', { locale: th });
    };

  return (
    <>
        <div className="flex justify-between text-xl">
            <span className='max-md:hidden'>{nameCheckList.slice(0,1).toUpperCase() + nameCheckList.slice(1)} Checklists Updated</span>
            <label className='text-sm flex gap-2 items-center mb-5 text-center max-md:w-full max-md:justify-center'>
                <span>Between</span>
                <input 
                type="date" 
                className="text-center border rounded ml-2 text-sm p-1" 
                onChange={(e)=>setStrDate(e.target.value)}
                />
                <span>To</span>
                <input 
                type="date" 
                className="text-center border rounded ml-2 text-sm p-1" 
                onChange={(e)=>setEndDate(e.target.value)}
                />
            </label>
        </div>
        <div>
        {
            nameCheckList === 'roomtemp' && 
            <RoomTempUI data={data[0]}/>
        }
        {
            nameCheckList === 'fdc' && 
            <UtilsChart 
                topic="FDC Data"
                typeChart="bar"
                xAxis={['Jan', 'Feb', 'Mar', 'Apr']}
                yAxis={[
                    {
                    name: 'Fdc1',
                    data: [30, 40, 45, 50,30, 40, 45, 50]
                    },
                    {
                    name: 'Fdc2',
                    data: [35, 50, 55, 60,35, 50, 55, 60]
                    }
                ]}
                />
        }
        </div>
        <div className="overflow-x-auto my-4 md:min-h-72">
            <table className="table rounded bg-white text-center border max-sm:table-xs">
            <thead>
                <tr>   
                    <th>Name Checklist</th> 
                    <th>Sand by</th>
                    <th>Date</th> 
                </tr>
            </thead> 
            <tbody>
                {
                    data?.map((checklist , index) =>{
                        return (        
                            <tr key={index} className='hover cursor-pointer' onClick={()=>{editChecklistHandle(checklist)}}>
                                <td>Checklist { checklist.generator_name ? checklist.generator_name : nameCheckList}</td>
                                <td>{checklist.user_id ? checklist.user.first_name.slice(0,1).toUpperCase() + checklist.user.first_name.slice(1) : "Unknown"}</td>
                                <td>{formatDate(checklist?.created_at)}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
            </table>
        </div>
    </>
  )
}
