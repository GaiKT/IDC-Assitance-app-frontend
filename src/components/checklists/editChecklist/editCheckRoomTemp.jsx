import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate , useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from "../../../contexts/authentication";
import { Link } from 'react-router-dom';

const rackNames = ['J12', 'I10', 'I3', 'J1', 'H2', 'G4', 'H10', 'G13', 'E13', 'F9', 'E3', 'F1', 'C4', 'A4', 'K2', 'K7', 'L7', 'M6', 'L3', 'M1', 'N1', 'O3', 'N8', 'O9'];

export default function EditCheckRoomTemp() {
    const location = useLocation();
    const [roomtemp , setRoomtemp] = useState(location.state)
    const { state } = useAuth();
    const [user , setUser] = useState(state.user)
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();    
    const [inputStatus , setInputStatus] = useState(true)

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { ...roomtemp } });

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
            await axios.put('http://localhost:4000/checklists', { name: 'checklistroomtemp', formData: { ...data, user_id: user.id } });
            navigate('/');
            Toast.fire({
                icon: 'success',
                title: 'Checklist updated successfully!'
            });
        } catch (error) {
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
        <div className="bg-white p-10">
            <div className='flex w-full justify-between'>
                <h1 className='text-4xl font-bold mb-5'>Checklist Room Temp</h1>
                <div className='flex gap-2 '>
                    <button className='btn btn-info text-white' onClick={()=>{handleEditClick()}}>Edit</button>
                        <button className='btn btn-success text-white'>Download File</button>            
                </div>
            </div>
            {!inputStatus && <h1 className='mb-2'>Editting...</h1>}
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-5 text-center">
                <div className="p-4 border flex flex-wrap rounded gap-4 justify-center">
                    {rackNames.map((rack, index) => (
                        <label key={index} className="flex flex-col items-center gap-5 border py-5 w-80 rounded">
                            Rack {rack}
                            <input disabled={inputStatus} {...register(`tempdetector_${index + 1}_temp`, { required: { value: true, message: "Temperature is required" }, max:{value:50 , message:"Vaule max 30"} , min:{value:5 , message:"Vaule min 5"}})} className="bg-gray-50 px-2" placeholder="Temp" />
                            {errors[`tempdetector_${index + 1}_temp`] && <span className="text-red-500">{errors[`tempdetector_${index + 1}_temp`]?.message}</span>}
                            <input disabled={inputStatus} {...register(`tempdetector_${index + 1}_hum`, { required: { value: true, message: "humidity is required" }, max:{value:100 , message:"Vaule max 100"} , min:{value:10 , message:"Vaule min 10"}})} className="bg-gray-50 px-2" placeholder="Hum" />
                            {errors[`tempdetector_${index + 1}_hum`] && <span className="text-red-500">{errors[`tempdetector_${index + 1}_hum`]?.message}</span>}
                        </label>
                    ))}
                </div>
                <hr />
                <div className='flex flex-col w-full text-start border rounded py-2'>
                    <h1 className='text-xl font-bold ml-2'>ความเรียบร้อยภายใน Datacenter</h1>
                    <div className='flex flex-col p-4 gap-2'>
                        <label className='flex items-center gap-2'>
                            <input disabled={inputStatus} type="checkbox" className='checkbox checkbox-sm' {...register("phase1", { required: { value: true, message: "phase1 check is required" }})}/>
                            Phase1
                        </label>
                        {errors["phase1"] && <span className="text-red-500">{errors["phase1"]?.message}</span>}
                        <label className='flex items-center gap-2'>
                            <input disabled={inputStatus} type="checkbox" className='checkbox checkbox-sm' {...register("phase2", {required: { value: true, message: "phase2 check is required" }})}/>
                            Phase2
                        </label>
                        {errors["phase2"] && <span className="text-red-500">{errors["phase2"]?.message}</span>}
                    </div>
                    <div className='p-4'>
                        <label className='flex flex-col'>
                            รายการแจ้งสิ่งผิดปกติ
                            <textarea disabled={inputStatus} {...register("alart")} rows="4" className='border rounded p-2'></textarea>
                        </label>
                    </div>
                </div>
                <hr />
                <div className='flex w-full flex-col border rounded py-2 items-center'>
                    <h1 className='text-xl font-bold ml-2 w-full text-start'>ความเรียบร้อยห้องหม้อแปลง</h1>
                    <div className='flex p-4 gap-5 flex-wrap px-11'>
                        <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                            สภาพอากาศภายนอก
                            <input disabled={inputStatus} {...register("outside_temp", { required: { value: true, message: "outside temp check is required" }, max:{value:100 , message:"Vaule max 100"} , min:{value:5 , message:"Vaule min 5"} })} className='bg-gray-50 px-2' placeholder='Temp'/>
                            {errors["outside_temp"] && <span className="text-red-500">{errors["outside_temp"]?.message}</span>}
                            <input disabled={inputStatus} {...register("outside_hum", { required: { value: true, message: "outside temp check is required"}, max:{value:100 , message:"Vaule max 100"} , min:{value:5 , message:"Vaule min 5"}})} className='bg-gray-50 px-2' placeholder='Hum'/>
                            {errors["outside_hum"] && <span className="text-red-500">{errors["outside_hum"]?.message}</span>}
                        </label>
                        <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                            อุณหภูมิห้องหม้อแปลง
                            <input disabled={inputStatus} {...register("tr_room_temp", { required: { value : true , message:"Temperatrue check is required"}})} className='bg-gray-50 px-2' placeholder='Temp'/>
                            {errors["tr_room_temp"] && <span className="text-red-500">{errors["tr_room_temp"]?.message}</span>}
                            <input disabled={inputStatus} {...register("tr_room_hum", { required: { value : true , message:"humidity check is required"}})} className='bg-gray-50 px-2' placeholder='Hum'/>
                            {errors["tr_room_hum"] && <span className="text-red-500">{errors["tr_room_hum"]?.message}</span>}
                        </label>
                        <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                            อุณหภูมิหม้อแปลงไฟฟ้า
                            <input disabled={inputStatus} {...register("tr_ch1", { required: { value : true , message : "Temperatrue is require"} , max : {value: 100, message: "Vaule max 100"}, min : {value: 0, message: "Value min 0"} })} className='bg-gray-50 px-2' placeholder='Temp CH1'/>
                            {errors["tr_ch1"] && <span className="text-red-500">{errors["tr_ch1"]?.message}</span>}
                            <input disabled={inputStatus} {...register("tr_ch2", { required: { value : true , message : "Temperatrue is require"} , max : {value: 100, message: "Vaule max 100"}, min : {value: 0, message: "Value min 0"} })} className='bg-gray-50 px-2' placeholder='Temp CH2'/>
                            {errors["tr_ch2"] && <span className="text-red-500">{errors["tr_ch2"]?.message}</span>}
                            <input disabled={inputStatus} {...register("tr_ch3", { required: { value : true , message : "Temperatrue is require"} , max : {value: 100, message: "Vaule max 100"}, min : {value: 0, message: "Value min 0"} })} className='bg-gray-50 px-2' placeholder='Temp CH3'/>
                            {errors["tr_ch3"] && <span className="text-red-500">{errors["tr_ch3"]?.message}</span>}
                        </label>
                        <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                            การทำงานพัดลมระบายอากาศ
                            <div className='flex flex-col gap-2'>
                                <label className='flex items-center gap-2'>
                                    <input disabled={inputStatus} type="checkbox" className='checkbox checkbox-sm' {...register("fan1")}/>
                                    Fan1
                                </label>
                                <label className='flex items-center gap-2'>
                                    <input disabled={inputStatus} type="checkbox" className='checkbox checkbox-sm' {...register("fan2")}/>
                                    Fan2
                                </label>
                                <label className='flex items-center gap-2'>
                                    <input disabled={inputStatus} type="checkbox" className='checkbox checkbox-sm' {...register("fan3")}/>
                                    Fan3
                                </label>
                                <label className='flex items-center gap-2'>
                                    <input disabled={inputStatus} type="checkbox" className='checkbox checkbox-sm' {...register("fan4")}/>
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
                        {
                            !inputStatus &&
                            <button type="submit" className="btn btn-success w-20 text-white" disabled={isLoading}>
                                {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
                            </button>
                        }
                        <a href="/checklists/dasborad" className="btn w-20 text-black">
                            Cancel
                        </a>
                    </div>
                </div>
            </form>        
        </div>
    )
}
