import React from 'react'
import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useAuth } from "../../contexts/authentication";

export default function CheckTransformer() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const { state } = useAuth();
    const [user , setUser] = useState(state.user)
  
    const { register, handleSubmit, formState: { errors } } = useForm();

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
            await axios.post('http://localhost:4000/checklists', { name: 'checklisttransformer', formData: { ...data, user_id: user.id } });
            navigate('/');
            Toast.fire({
                icon: 'success',
                title: 'Checklist sent successfully!'
            });
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'Failed to send checklist. Please try again later.'
            });
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className='bg-white md:p-10 max-md:p-5'>
        <h1 className='text-4xl font-bold mb-5'>Checklist Transformer</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-5 text-center">
            <h1 className='text-xl'>RMU</h1>
            <div className='p-2 border flex max-md:flex-col rounded gap-2'>
                <div className='flex flex-col items-center gap-5 border py-5 md:w-1/2 rounded'>
                    Main Incomming 1
                    <div className='flex flex-col gap-4 w-5/6'>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_in1")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch Ground</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_ground_in1")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Lamp</span>   
                            <div className='w-1/2 flex justify-between'>
                                Abnormal
                                <input type="checkbox" {...register("lamp_rmu_in1")} className="toggle toggle-success max-md:toggle-sm mx-2" />
                                Normal
                            </div>
                        </label>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-5 border py-5 md:w-1/2 rounded'>
                    Main Incomming 2
                    <div className='flex flex-col gap-4 w-5/6'>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_in2")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch Ground</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_ground_in2")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Lamp</span>   
                            <div className='w-1/2 flex justify-between'>
                                Abnormal
                                <input type="checkbox" {...register("lamp_rmu_in2")} className="toggle toggle-success max-md:toggle-sm mx-2" />
                                Normal
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className='p-2 border flex max-md:flex-col rounded gap-2'>
                <div className='flex flex-col items-center gap-5 border py-5 md:w-1/2 rounded'>
                    Main Outgoing 1
                    <div className='flex flex-col gap-4 w-5/6'>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU1</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw1_out1")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU2</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw2_out1")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch Ground</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_ground_out1")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Lamp</span>   
                            <div className='w-1/2 flex justify-between'>
                                Abnormal
                                <input type="checkbox" {...register("lamp_rmu_out1")} className="toggle toggle-success max-md:toggle-sm mx-2" />
                                Normal
                            </div>
                        </label>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-5 border py-5 md:w-1/2 rounded'>
                    Main Outgoing 2
                    <div className='flex flex-col gap-4 w-5/6'>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU1</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw1_out2")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU2</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw2_out2")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>                        
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch Ground</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_ground_out2")} className="toggle toggle-success max-md:toggle-sm" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Lamp</span>   
                            <div className='w-1/2 flex justify-between'>
                                Abnormal
                                <input type="checkbox" {...register("lamp_rmu_out2")} className="toggle toggle-success max-md:toggle-sm mx-2" />
                                Normal
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <label className='flex md:w-1/3 justify-between border p-4 rounded'>
                    <span className='font-semibold w-1/2'>Pressure Gauge</span>   
                    <div className='w-1/2 flex justify-between'>
                        <span className='text-red-700'>Red</span>
                        <input type="checkbox" {...register("pressure")} className="toggle toggle-success max-md:toggle-sm" />
                        <span className='text-green-700'>Green</span>
                    </div>
                </label>
            </div>
            <hr />
            <div className='flex w-full flex-col border rounded py-2 items-center'>
                <h1 className='text-xl ml-2 w-full text-center py-4'>ความเรียบร้อยห้องหม้อแปลง</h1>
                <div className='grid grid-cols-3 max-md:grid-cols-1 gap-2 px-2 w-full'>
                    <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                        อุณหภูมิหม้อแปลงไฟฟ้า
                        <input {...register("tr_ch1", { required: { value : true , message : "Temperatrue is require"} , max : {value: 100, message: "Vaule max 100"}, min : {value: 0, message: "Value min 0"} })} className='bg-gray-50 px-2' placeholder='Temp CH1'/>
                        {errors["tr_ch1"] && <span className="text-red-500">{errors["tr_ch1"]?.message}</span>}
                        <input {...register("tr_ch2", { required: { value : true , message : "Temperatrue is require"} , max : {value: 100, message: "Vaule max 100"}, min : {value: 0, message: "Value min 0"} })} className='bg-gray-50 px-2' placeholder='Temp CH2'/>
                        {errors["tr_ch2"] && <span className="text-red-500">{errors["tr_ch2"]?.message}</span>}
                        <input {...register("tr_ch3", { required: { value : true , message : "Temperatrue is require"} , max : {value: 100, message: "Vaule max 100"}, min : {value: 0, message: "Value min 0"} })} className='bg-gray-50 px-2' placeholder='Temp CH3'/>
                        {errors["tr_ch3"] && <span className="text-red-500">{errors["tr_ch3"]?.message}</span>}
                    </label>
                    <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                        อุณหภูมิห้องหม้อแปลง
                        <input {...register("tr_room_temp", { required: { value : true , message : "Temperatrue is require"} , max : {value: 100, message: "Vaule max 100"}, min : {value: 0, message: "Value min 0"} })} className='bg-gray-50 px-2' placeholder='Temp'/>
                        {errors["tr_room_temp"] && <span className="text-red-500">{errors["tr_room_temp"]?.message}</span>}
                        <input {...register("tr_room_hum", { required: { value : true , message : "Humidity is require"} , max : {value: 100, message: "Vaule max 100"}, min : {value: 0, message: "Value min 0"} })} className='bg-gray-50 px-2' placeholder='Hum'/>
                        {errors["tr_room_hum"] && <span className="text-red-500">{errors["tr_room_hum"]?.message}</span>}
                    </label>
                    <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                        พัดลมหม้อแปลง
                        <div className='flex flex-col w-4/6 gap-2'>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("Fan_status", { required: true})}/>
                                Fan TR Status
                            </label>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("tr_temp_alarm", { required: true})}/>
                                Temp Alarm (110c)
                            </label>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("tr_temp_trip", { required: true})}/>
                                Temp Trip (130c)
                            </label>
                        </div>
                    </label>
                </div>
            </div>
            <hr />
            <div className='flex w-full flex-col border rounded py-2 items-center'>
                <h1 className='text-xl ml-2 w-full text-center py-4'>MDB</h1>
                <div className='grid grid-cols-3 max-md:grid-cols-1 px-2 gap-2'>
                    <label className='flex flex-col items-center gap-5 border p-5 rounded'>
                        <div className='flex justify-between w-full'>
                            Meter
                            <input {...register("meter", { required: {value: true , message : "Meter is required"}})} className='bg-gray-50 px-2' placeholder='kwh'/>
                        </div>
                        {errors["meter"] && <span className="text-red-500">{errors["meter"]?.message}</span>}
                        <div className='flex gap-2 w-full justify-between'>
                            Voltage
                            <div className='flex flex-col gap-2'>
                                <input {...register("l1", { required: {value: true , message : "L1 is required"} , max : {value: 400, message : "The voltage should not exceed 400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                                {errors["l1"] && <span className="text-red-500">{errors["l1"]?.message}</span>}
                                <input {...register("l2", { required: {value: true , message : "L2 is required"}, max : {value: 400, message : "The voltage should not exceed 400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L2-3'/>
                                {errors["l2"] && <span className="text-red-500">{errors["l2"]?.message}</span>}
                                <input {...register("l3", { required: {value: true , message : "L3 is required"}, max : {value: 400, message : "The voltage should not exceed 400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L3-1'/>
                                {errors["l3"] && <span className="text-red-500">{errors["l3"]?.message}</span>}
                            </div>
                        </div>
                    </label>
                    <label className='flex flex-col items-center gap-5 border p-5 rounded'>
                        <div className='flex gap-2 w-full justify-between'>
                            Ampere
                            <div className='flex flex-col gap-2'>
                                <input {...register("i1", { required: {value : true , message : "I1 is requred"}, max : {value: 1400, message : "The currant should not exceed 1400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='I1'/>
                                {errors["i1"] && <span className="text-red-500">{errors["i1"]?.message}</span>}
                                <input {...register("i2", { required: {value : true , message : "I2 is requred"}, max : {value: 1400, message : "The currant should not exceed 1400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='I2'/>
                                {errors["i2"] && <span className="text-red-500">{errors["i2"]?.message}</span>}
                                <input {...register("i3", { required: {value : true , message : "I3 is requred"}, max : {value: 1400, message : "The currant should not exceed 1400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='I3'/>
                                {errors["i3"] && <span className="text-red-500">{errors["i3"]?.message}</span>}
                            </div>
                        </div>                        
                        <div className='flex gap-2 w-full justify-between'>
                            Power Factor
                            <input {...register("pf", { required: {value : true , message : "PF. is requred"}, max : {value: 0.98 , message: "Power factor should not exceed 0.98"} , min : {value: 0.92 , message: "Power factor should not be less than 0.92"}})} className='bg-gray-50 px-2' placeholder='P.F.'/>
                        </div>
                        {errors["pf"] && <span className="text-red-500">{errors["pf"]?.message}</span>}
                    </label>
                    <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                        Circuit Breaker
                        <div className='flex flex-col w-4/6 gap-2'>
                            <label className='flex w-full rounded gap-5 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("main_mcb", { required: true})}/>
                                Main MCB
                            </label>
                            <label className='flex w-full rounded gap-5 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("db1", { required: true})}/>
                                DB1
                            </label>
                            <label className='flex w-full rounded gap-5 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("db2", { required: true})}/>
                                DB2
                            </label>
                            <label className='flex w-full rounded gap-5 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("mcb1", { required: true})}/>
                                MCB1
                            </label>
                            <label className='flex w-full rounded gap-5 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("mcb2", { required: true})}/>
                                MCB2
                            </label>
                            <label className='flex w-full rounded gap-5 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("capbank", { required: true})}/>
                                Capbank
                            </label>
                        </div>
                    </label>
                    <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                        การทำงานพัดลมระบายอากาศ
                        <div className='flex flex-col gap-2'>
                            <label className='flex items-center gap-2'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("fan1")}/>
                                Fan1
                            </label>
                            <label className='flex items-center gap-2'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("fan2")}/>
                                Fan2
                            </label>
                            <label className='flex items-center gap-2'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("fan3")}/>
                                Fan3
                            </label>
                            <label className='flex items-center gap-2'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("fan4")}/>
                                Fan4
                            </label>                        
                        </div>
                    </label>
                </div>
            </div>
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
