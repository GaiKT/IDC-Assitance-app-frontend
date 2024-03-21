import React from 'react'
import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function CheckRoomTemp() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const TempDetector = ["J12","I10","I3","J1","H2","G4","H10","G13","E13","F9","E3","F1","C4","A4","K2","K7","L7","M6","L3","M1","N1","O3","N8","O9"]
  
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.group(data)
    }

  return (
    <div className='bg-white p-10'>
        <h1 className='text-4xl font-bold mb-5'>Checklist Room Temp</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-5 text-center">
        <div className='p-4 border flex flex-wrap rounded gap-4 justify-center'>
            {
                TempDetector.map((temp , index)=>{
                    return(
                        <label key={index} className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                        Rack {temp}
                        <input {...register(`${temp}temp`, { required: true})} className='bg-gray-50 px-2' placeholder='Temp'/>
                        <input {...register(`${temp}hum`, { required: true})} className='bg-gray-50 px-2' placeholder='Hum'/>
                    </label>
                    );
                })
            }
        </div>
        <hr />
        <div className='flex flex-col w-full text-start border rounded py-2'>
            <h1 className='text-xl font-bold ml-2'>ความเรียบร้อยภายใน Datacenter</h1>
            <div className='flex flex-col p-4 gap-2'>
                <label className='flex items-center gap-2'>
                    <input type="checkbox" className='checkbox checkbox-sm' {...register("phase1", { required: true})}/>
                    Phase1
                </label>
                <label className='flex items-center gap-2'>
                    <input type="checkbox" className='checkbox checkbox-sm' {...register("phase2", { required: true})}/>
                    Phase2
                </label>
            </div>
            <div className='p-4'>
                <label className='flex flex-col'>
                    รายการแจ้งสิ่งผิดปกติ
                    <textarea {...register("Alart")} rows="4" className='border rounded p-2'></textarea>
                </label>
            </div>
        </div>
        <hr />
        <div className='flex w-full flex-col border rounded py-2 items-center'>
            <h1 className='text-xl font-bold ml-2 w-full text-start'>ความเรียบร้อยห้องหม้อแปลง</h1>
            <div className='flex p-4 gap-2 flex-wrap'>
                <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                    สภาพอากาศภายนอก
                    <input {...register("outside_temp", { required: true})} className='bg-gray-50 px-2' placeholder='Temp'/>
                    <input {...register("outside_hum", { required: true})} className='bg-gray-50 px-2' placeholder='Hum'/>
                </label>
                <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                    อุณหภูมิห้องหม้อแปลง
                    <input {...register("tr_room_temp", { required: true})} className='bg-gray-50 px-2' placeholder='Temp'/>
                    <input {...register("tr_room_hum", { required: true})} className='bg-gray-50 px-2' placeholder='Hum'/>
                </label>
                <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                    อุณหภูมิหม้อแปลงไฟฟ้า
                    <input {...register("tr_ch1", { required: true})} className='bg-gray-50 px-2' placeholder='Temp CH1'/>
                    <input {...register("tr_ch2", { required: true})} className='bg-gray-50 px-2' placeholder='Temp CH2'/>
                    <input {...register("tr_ch3", { required: true})} className='bg-gray-50 px-2' placeholder='Temp CH3'/>
                </label>
                <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                    การทำงานพัดลมระบายอากาศ
                    <div className='flex flex-col gap-2'>
                        <label className='flex items-center gap-2'>
                            <input type="checkbox" className='checkbox checkbox-sm' {...register("fan1", { required: true})}/>
                            Fan1
                        </label>
                        <label className='flex items-center gap-2'>
                            <input type="checkbox" className='checkbox checkbox-sm' {...register("fan2", { required: true})}/>
                            Fan2
                        </label>
                        <label className='flex items-center gap-2'>
                            <input type="checkbox" className='checkbox checkbox-sm' {...register("fan3", { required: true})}/>
                            Fan3
                        </label>
                        <label className='flex items-center gap-2'>
                            <input type="checkbox" className='checkbox checkbox-sm' {...register("fan4", { required: true})}/>
                            Fan4
                        </label>                        
                    </div>
                </label>
            </div>
        </div>
        <hr />
        <div className="w-full flex gap-2 justify-between">
            <label className='flex items-center gap-2 text-red-700'>
                <input type="checkbox" className='checkbox checkbox-sm' required/>
                **โปรดตรวจสอบความถูกต้องก่อนกดยืนยัน
            </label>
            <div className='flex gap-2'>
                <button type="submit" className="btn btn-success w-20 text-white" disabled={isLoading}>
                    {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
                </button>
                <a href="/" className="btn w-20 text-black">
                    Cancel
                </a>
            </div>
        </div>
    </form>        
    </div>
  )
}
