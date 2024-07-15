import React from 'react'
import { useNavigate } from "react-router-dom"
import { th } from 'date-fns/locale'
import { format } from 'date-fns';

export default function TapChecklist({nameCheckList,data,setEndDate,setStrDate}) {
    const navigate = useNavigate()

    const editChecklistHandle = (checklistData) => {
        navigate(`/checklists/${nameCheckList}/edit`, { state : checklistData } )
    }

    const formatDate = (date) => {
        return format(new Date(date), 'dd MMMM yyyy', { locale: th });
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
        <div className="overflow-x-auto mb-32">
            <table className="table rounded bg-white text-center border max-sm:table-xs">
            <thead>
                <tr>   
                    <th>Name Checklist</th> 
                    <th>Sand by</th>
                    <th>Date</th> 
                    <th>Edit</th>
                </tr>
            </thead> 
            <tbody>
                {
                    data?.map((checklist , index) =>{
                        return (        
                            <tr key={index} className='hover cursor-pointer' onClick={()=>{editChecklistHandle(checklist)}}>
                                <td>Checklist { checklist.generator_name ? checklist.generator_name : nameCheckList}</td>
                                <td>{checklist.user_id ? checklist.user.first_name : "Unknown"}</td>
                                <td>{formatDate(checklist?.created_at)}</td>
                                <td>{formatDate(checklist?.updated_at)}</td>
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
