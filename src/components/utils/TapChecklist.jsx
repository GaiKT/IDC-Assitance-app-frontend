import React from 'react'
import { useNavigate } from "react-router-dom"

export default function TapChecklist({nameCheckList,data,setEndDate,setStrDate}) {
    const navigate = useNavigate()

    const editChecklistHandle = (checklistData) => {
        navigate(`/checklists/${nameCheckList}/edit`, { state : checklistData } )
    }

  return (
    <>
        <div className="flex justify-between text-xl">
        <span>{nameCheckList.slice(0,1).toUpperCase() + nameCheckList.slice(1)} Checklists Updated</span>
        <label className='text-sm flex gap-2 items-center mb-5 text-center'>
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
        <table className="table rounded bg-white text-center border">
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
                            <td>{checklist.user_id ? checklist.firstname : "Unknown"}</td>
                            <td>{checklist.created_at.toString().split('T')[0]}</td>
                            <td>{checklist.updated_at ? checklist.updated_at.toString().split('T')[0] : ''}</td>
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
