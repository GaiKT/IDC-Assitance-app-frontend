import React from 'react'
import { useForm } from "react-hook-form"
import { useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useAuth } from "../../../contexts/authentication";
import { useLocation } from "react-router-dom";

export default function EditCheckFDC() {
    const location = useLocation();
    const [fdc , setFdc] = useState(location.state)
    const [inputStatus , setInputStatus] = useState(true)
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const { apiUrl } = useAuth();
  
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { ...fdc } });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            await axios.put(`${apiUrl}/checklists/fdc/` + data.id , { ...data });
            navigate('/checklists');
            Toast.fire({
                icon: 'success',
                title: 'Checklist updated successfully!'
            });
        } catch (error) {
            console.log(error)
            Toast.fire({
                icon: 'error',
                title: 'Failed to update checklist. Please try again later.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditClick = () => {
        setInputStatus(!inputStatus)
    };

  return (
    <div className='bg-white p-10'>
        <div className='flex w-full justify-between'>
            <h1 className='text-4xl font-bold mb-5'>Checklist FDC status</h1>
            <div className='flex gap-2 '>
                <button className='btn w-24 text-black' onClick={()=>{handleEditClick()}}>Edit</button>
            </div>
        </div>
        
        {!inputStatus && <h1 className='mb-2'>Editing...</h1>}
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 my-5 text-center">
            <div className='p-4 border flex rounded gap-4'>
                <label className='flex flex-col items-center gap-5 border py-5 w-1/3 rounded'>
                    FDC status
                    <input disabled={inputStatus} type='number' {...register("fdc_phase1", { required: { value: true, message: "FDC_Phase1 is required" },})} className='bg-gray-50 px-2' placeholder='Phase1'/>
                    {errors["fdc_phase1"] && <span className="text-red-500">{errors["fdc_phase1"]?.message}</span>}
                    <input disabled={inputStatus} type='number' {...register("fdc_phase2", { required: { value: true, message: "FDC_Phase2 is required" } })} className='bg-gray-50 px-2' placeholder='Phase2'/>
                    {errors["fdc_phase2"] && <span className="text-red-500">{errors["fdc_phase2"]?.message}</span>}
                </label>
                <label className='flex gap-5 w-2/3 p-2'>
                    Comment
                    <textarea disabled={inputStatus} {...register("fdc_comment")} rows="4" className='border rounded w-full p-4' placeholder='ถ้ามีการเปลี่ยนแปลงโปรด Comment สาเหตุ'></textarea>
                </label>
            </div>
            <hr />
            <div className="w-full flex gap-2 justify-between">
                <label className='flex items-center gap-2 text-red-700'>
                    <input type="checkbox" className='checkbox checkbox-sm' required/>
                    **โปรดตรวจสอบความถูกต้องก่อนกดยืนยัน
                </label>
                <div className='flex gap-2'>
                    { !inputStatus &&
                        <button type="submit" className="btn btn-success w-20 text-white" disabled={isLoading}>
                        {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
                </button>
                    }
                    <Link to="/checklists/dasborad" className="btn w-20 text-black">
                        Cancel
                    </Link>
                </div>
            </div>
        </form>        
    </div>
  )
}
