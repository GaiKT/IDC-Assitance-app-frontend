import React from 'react'
import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function CheckFDC() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const TempDetector = ["J12","I10","I3","J1","H2","G4","H10","G13","E13","F9","E3","F1","C4","A4","K2","K7","L7","M6","L3","M1","N1","O3","N8","O9"]
  
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.group(data)
    }

  return (
    <div className='bg-white p-10'>
        <h1 className='text-4xl font-bold mb-5'>Checklist FDC status</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 my-5 text-center">
            <div className='p-4 border flex rounded gap-4'>
                <label className='flex flex-col items-center gap-5 border py-5 w-1/3 rounded'>
                    FDC status : OFF
                    <input {...register("phase1", { required: true})} className='bg-gray-50 px-2' placeholder='Phase1'/>
                    <input {...register("phase2", { required: true})} className='bg-gray-50 px-2' placeholder='Phase2'/>
                </label>
                <label className='flex gap-5 w-2/3 p-2'>
                    Commemt
                    <textarea {...register("fdc_commemt")} rows="4" className='border rounded w-full'></textarea>
                </label>
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
