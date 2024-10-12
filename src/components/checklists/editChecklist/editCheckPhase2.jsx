import React from 'react'
import { useForm } from "react-hook-form"
import { useState } from "react"
import axios from "axios"
import { useNavigate,useLocation } from "react-router-dom"
import Swal from "sweetalert2"
import Db from '../../utils/Db'
import Ups from '../../utils/Ups'
import { useAuth } from "../../../contexts/authentication";

export default function EditCheckPhase2() {
    const location = useLocation();
    const [phase2 , setPhase2] = useState(location.state)
    const [inputStatus , setInputStatus] = useState(true)

    const { apiUrl } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const PacAir = [1,2,3,4,5,6]
    const [disabledInputs, setDisabledInputs] = useState(Array(PacAir.length).fill(true));
    const [barLevel , setBarLevel] = useState(phase2.vesda_barlevel)

    const handleCheckboxChange = (index) => {
        const updatedDisabledInputs = [...disabledInputs];
        updatedDisabledInputs[index] = !updatedDisabledInputs[index];
        setDisabledInputs(updatedDisabledInputs);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues : {...phase2}});

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
            await axios.put(`${apiUrl}/checklists/phase2/` + data.id, { ...data });
            navigate('/checklists');
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
        <div className='bg-white p-10'>
            <div className='flex w-full justify-between'>
                <h1 className='text-4xl font-bold mb-5'>Checklist Phase2</h1>
                <div className='flex gap-2 '>
                    <button className='btn w-24 text-black' onClick={()=>{handleEditClick()}}>Edit</button>
                </div>
            </div>
            
            {!inputStatus && <h1 className='mb-2'>Editing...</h1>}
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 my-5 text-center">
                <div className='flex w-full flex-col'>
                    <h1 className='text-xl w-full text-center py-4'>Floor 5B</h1>
                    <div className='flex py-4 gap-5 flex-col w-full px-2'>
                        <div className='flex flex-col gap-5 border py-5 w-full rounded'>
                        <div className='flex flex-col items-center gap-2'>
                            <label className='flex flex-col items-center gap-2'>
                                Main meter
                                <input disabled={inputStatus} {...register("main_meter", { required: {value: true , message : "Main meter is required"}})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Kwh'/>
                                {errors["main_meter"] && <span className="text-red-500">{errors["main_meter"]?.message}</span>}
                            </label>
                        </div>
                        </div>
                        {/* ats2 */}
                        <Db nameDb='atsphase2' register={register} errors={errors} inputStatus={inputStatus}/>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl w-full text-center py-4'>Floor 10</h1>
                    <div className='flex py-4 gap-5 flex-wrap'>
                        {/* Emdb */}
                        <Db nameDb='emdb' register={register} errors={errors} inputStatus={inputStatus}/>
                        {/* udb1 */}
                        <Db nameDb='udb1' register={register} errors={errors} inputStatus={inputStatus}/>
                        {/* udb2 */}
                        <Db nameDb='udb2' register={register} errors={errors} inputStatus={inputStatus}/>                        
                        {/* facinet */}
                        <div className='flex flex-col gap-2 border py-2 w-full rounded'>
                            <div className='w-full flex flex-col items-center gap-2'>
                                FAC INET
                                <label className='flex items-center gap-2'>
                                    <input disabled={inputStatus} type='checkbox' className='checkbox checkbox-success checkbox-sm' {...register("fac_inet_rst", { required: true})}/>
                                    Status R S T(ON)
                                </label>
                            </div>
                            <div className='w-full flex gap-2 px-2 max-md:flex-col'>
                                <div className='flex flex-col gap-5 border py-5 md:w-1/2 rounded'>
                                    <label className='flex flex-col items-center'>
                                        Voltage
                                        <input disabled={inputStatus} {...register("fac_inet_vavg", { required: {value: true , message : "Voltage is required."}})} className='bg-gray-50 px-2' placeholder='Vavg'/>
                                        {errors["fac_inet_vavg"] && <span className="text-red-500">{errors["fac_inet_vavg"]?.message}</span>}
                                    </label>
                                    <label className='flex flex-col items-center'>
                                        Current
                                        <input disabled={inputStatus} {...register("fac_inet_iavg", { required: {value: true , message : "Currant is required."}})} className='bg-gray-50 px-2' placeholder='Iavg'/>
                                        {errors["fac_inet_iavg"] && <span className="text-red-500">{errors["fac_inet_iavg"]?.message}</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col gap-5 border py-5 md:w-1/2 rounded'>
                                    <label className='flex flex-col items-center '>
                                        Power
                                        <input disabled={inputStatus} {...register("fac_inet_plot", { required: {value: true , message : "Plot is required."}})} className='bg-gray-50 px-2' placeholder='Kw'/>
                                        {errors["fac_inet_plot"] && <span className="text-red-500">{errors["fac_inet_plot"]?.message}</span>}
                                    </label>
                                    <div className='flex flex-col items-center gap-2'>
                                        Meter
                                        <input disabled={inputStatus} {...register("fac_inet_edel", { required: {value: true , message : "Edel is required."}})} className='bg-gray-50 px-2' placeholder='Kwh'/>
                                        {errors["fac_inet_edel"] && <span className="text-red-500">{errors["fac_inet_edel"]?.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* facthaisarn */}
                        <div className='flex flex-col gap-2 border py-2 w-full rounded'>
                            <div className='flex flex-col items-center gap-2'>
                                FAC THAISARN
                                <label className='flex items-center gap-2'>
                                    <input disabled={inputStatus} type='checkbox' className='checkbox checkbox-success checkbox-sm' {...register("fac_thaisarn_rst", { required: true})}/>
                                    Status R S T(ON)
                                </label>
                            </div>
                            <div className='w-full flex gap-2 px-2 max-md:flex-col'>
                                <div className='flex flex-col gap-5 border py-5 md:w-1/2 rounded'>
                                    <label className='flex flex-col items-center '>
                                        Voltage
                                        <input disabled={inputStatus} {...register("fac_thaisarn_vavg", { required: {value: true , message : "Voltage is required."}})} className='bg-gray-50 px-2' placeholder='Vavg'/>
                                        {errors["fac_thaisarn_vavg"] && <span className="text-red-500">{errors["fac_thaisarn_vavg"]?.message}</span>}
                                    </label>
                                    <label className='flex flex-col items-center '>
                                        Current
                                        <input disabled={inputStatus} {...register("fac_thaisarn_iavg", { required: {value: true , message : "Currant is required."}})} className='bg-gray-50 px-2' placeholder='Iavg'/>
                                        {errors["fac_thaisarn_iavg"] && <span className="text-red-500">{errors["fac_thaisarn_iavg"]?.message}</span>}
                                    </label>
                                </div>
                                <div className='flex flex-col gap-5 border py-5 md:w-1/2 rounded'>
                                    <label className='flex flex-col items-center '>
                                        Power
                                        <input disabled={inputStatus} {...register("fac_thaisarn_plot", { required: {value: true , message : "Plot is required."}})} className='bg-gray-50 px-2' placeholder='Kw'/>
                                        {errors["fac_thaisarn_plot"] && <span className="text-red-500">{errors["fac_thaisarn_plot"]?.message}</span>}
                                    </label>
                                    <div className='flex flex-col items-center gap-2'>
                                        Meter
                                        <input disabled={inputStatus} {...register("fac_thaisarn_edel", { required: {value: true , message : "Edel is required."}})} className='bg-gray-50 px-2' placeholder='Kwh'/>
                                        {errors["fac_thaisarn_edel"] && <span className="text-red-500">{errors["fac_thaisarn_edel"]?.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div className='flex flex-col gap-5 border py-2 w-full rounded'>
                            {/* ups1 */}
                            <Ups nameUps='ups1' register={register} errors={errors} inputStatus={inputStatus}/>
                            {/* ups2 */}
                            <Ups nameUps='ups2' register={register} errors={errors} inputStatus={inputStatus}/>
                        </div>
                        <div className='w-full border rounded-md grid grid-cols-2 max-md:grid-cols-1'>
                            <div className='font-semibold flex flex-col items-center p-4 gap-2'>
                                <p>2-FDC 1</p>
                                <div className='font-light w-full flex flex-col items-center gap-2'>
                                    <p>Panel A</p>
                                        <div className='w-1/2 flex gap-4 justify-between'>
                                            <span>Status Power </span>
                                            <div className='flex gap-3'>
                                                No 
                                                <input disabled={inputStatus} type="checkbox" {...register("fdc1a_status")} className='toggle toggle-success'/>
                                                Yes
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex gap-4 justify-between'>
                                            <span>Alarm</span>
                                            <div className='flex gap-3'>
                                                No 
                                                <input disabled={inputStatus} type="checkbox" {...register("fdc1a_alarm")} className='toggle toggle-success'/>
                                                Yes
                                            </div>
                                        </div>
                                    <p>Panel B</p>
                                        <div className='w-1/2 flex gap-4 justify-between'>
                                            <span>Status Power </span>
                                            <div className='flex gap-3'>
                                                No 
                                                <input disabled={inputStatus} type="checkbox" {...register("fdc1b_status")} className='toggle toggle-success'/>
                                                Yes
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex gap-4 justify-between'>
                                            <span>Alarm</span>
                                            <div className='flex gap-3'>
                                                No 
                                                <input disabled={inputStatus} type="checkbox" {...register("fdc1b_alarm")} className='toggle toggle-success'/>
                                                Yes
                                            </div>
                                        </div>
                                    <textarea {...register("fdc1_comment")} className='border w-1/2 rounded-md p-2' placeholder='enter comment'>
                                    </textarea>
                                </div>
                            </div>
                            <div className='font-semibold flex flex-col items-center p-4 gap-2'>
                                <p>2-FDC 2</p>
                                <div className='font-light w-full flex flex-col items-center gap-2'>
                                    <p>Panel A</p>
                                        <div className='w-1/2 flex gap-4 justify-between'>
                                            <span>Status Power </span>
                                            <div className='flex gap-3'>
                                                No 
                                                <input disabled={inputStatus} type="checkbox" {...register("fdc2a_status")} className='toggle toggle-success'/>
                                                Yes
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex gap-4 justify-between'>
                                            <span>Alarm</span>
                                            <div className='flex gap-3'>
                                                No 
                                                <input disabled={inputStatus} type="checkbox" {...register("fdc2a_alarm")} className='toggle toggle-success'/>
                                                Yes
                                            </div>
                                        </div>
                                        <p>Panel B</p>
                                        <div className='w-1/2 flex gap-4 justify-between'>
                                            <span>Status Power </span>
                                            <div className='flex gap-3'>
                                                No 
                                                <input disabled={inputStatus} type="checkbox" {...register("fdc2b_status")} className='toggle toggle-success'/>
                                                Yes
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex gap-4 justify-between'>
                                            <span>Alarm</span>
                                            <div className='flex gap-3'>
                                                No 
                                                <input disabled={inputStatus} type="checkbox" {...register("fdc2b_alarm")} className='toggle toggle-success'/>
                                                Yes
                                            </div>
                                        </div>
                                        <textarea {...register("fdc2_comment")} className='border w-1/2 rounded-md p-2' placeholder='enter comment'>
                                        </textarea>
                                </div>
                            </div>
                        </div>
                        {/* Pac Air */}
                        <div className='flex flex-col gap-5 border py-2 w-full rounded'>
                            <div className='flex flex-col items-center gap-2'>
                                Precision Air
                            </div>
                            <div className='grid grid-cols-3 max-md:grid-cols-1 gap-2 px-2'>
                                {PacAir.map((airpac,index)=>{
                                    return (
                                        <div key={index} className='flex flex-col items-center gap-5 border py-5 rounded'>
                                            PAC{airpac}
                                            <label className='flex items-center'>
                                                <input disabled={inputStatus} type="checkbox" {...register(`pac${airpac}`,)} onChange={() => handleCheckboxChange(index)} className='checkbox mr-2 checkbox-success checkbox-sm'/>
                                                Status
                                            </label>
                                            <label className='flex flex-col gap-2'>
                                                Setpoint
                                                <input  {...register(`setpoint_pac${airpac}_temp`,)} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Temp' disabled={disabledInputs[index]} />
                                                <input  {...register(`setpoint_pac${airpac}_hum`,)} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Hum' disabled={disabledInputs[index]} />
                                            </label>
                                            <label className='flex flex-col gap-2'>
                                                Return
                                                <input  {...register(`return_pac${airpac}_temp`,)} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Temp' disabled={disabledInputs[index]} />
                                                <input  {...register(`return_pac${airpac}_temp`,)} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Hum' disabled={disabledInputs[index]} />
                                            </label>
                                        </div>
                                    );
                                    
                                })}
                            </div>
                        </div>
                        <div className='flex gap-2 border p-2 w-full rounded max-md:flex-col'>
                            {/* Water leak */}
                            <div className='flex flex-col items-center gap-2 border md:w-1/2 rounded p-5'>
                                Water Leak
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Display Status Normal</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input disabled={inputStatus} type="checkbox" {...register("waterleak_normal")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Cable Fualt</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input disabled={inputStatus} type="checkbox" {...register("cablefualt")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Leak</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input disabled={inputStatus} type="checkbox" {...register("leak")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                            </div>
                            {/* Vesda */}
                            <div className='flex flex-col items-center gap-2 border md:w-1/2 rounded p-5'>
                                Vesda
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Status</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input disabled={inputStatus} type="checkbox" {...register("vesda")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Bar Level</span> 
                                    <div className='w-1/2 flex flex-col justify-between items-center gap-2 p-2'>
                                        <div className='w-10 rounded bg-gray-100 text-center'> {barLevel} </div>
                                        <input disabled={inputStatus} type="range" {...register("vesda_barlevel")} min={0} max="10" onChange={(e)=>{setBarLevel(e.target.value)}} value={barLevel} className="range range-xs"/> 
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-2 border p-2 w-full rounded max-md:flex-col'>
                            {/* Fire System */}
                            <div className='flex flex-col items-center gap-2 border md:w-1/2 rounded p-5'>
                                Fire System
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Ac Source</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input disabled={inputStatus} type="checkbox" {...register("firesystem_ac_source")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Alarm Zone</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input disabled={inputStatus} type="checkbox" {...register("firesystem_alarmzone")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                            </div>
                            {/* Novac 1230 */}
                            <div className='flex flex-col items-start py-5 px-10 gap-2 border md:w-1/2 rounded p-5'>
                                Novac 1230
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("novac_u1")} className="checkbox checkbox-success" />
                                    <span>Unit1 (Green)</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("novac_u2")} className="checkbox checkbox-success" />
                                    <span>Unit2 (Green)</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("novac_u3")} className="checkbox checkbox-success" />
                                    <span>Unit3 (Green)</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("novac_u4")} className="checkbox checkbox-success" />
                                    <span>Unit4 (Green)</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("novac_u5")} className="checkbox checkbox-success" />
                                    <span>Unit5 (Green)</span> 
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-2 border p-2 w-full rounded'>
                            {/* TVSS */}
                            <div className='flex flex-col items-center gap-2 border w-1/2 rounded py-5 px-10 text-start'>
                                TVSS
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Phase A</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        Red
                                        <input disabled={inputStatus} type="checkbox" {...register("tvss_pa")} className="toggle toggle-success" />
                                        Green 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Phase B</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        Red
                                        <input disabled={inputStatus} type="checkbox" {...register("tvss_pb")} className="toggle toggle-success" />
                                        Green 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Phase C</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        Red
                                        <input disabled={inputStatus} type="checkbox" {...register("tvss_pc")} className="toggle toggle-success" />
                                        Green
                                    </div>
                                </label>
                                <textarea rows="2" {...register("tvss_comment")} placeholder='ถ้าเป็น Red โปรด Comment ปัญหา' className='p-4 m-2 border rounded w-full'>
                                </textarea>
                            </div>
                            {/* CCTV */}
                            <div className='flex flex-col items-start py-5 px-10 gap-2 border w-1/2 rounded'>
                                CCTV
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("cctv_playback30day")} className="checkbox checkbox-success" />
                                    <span>สามารถดูย้อนหลังได้ 90 วัน</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("cctv_camera")} className="checkbox checkbox-success" />
                                    <span>บันทึกภาพทั้ง 30 กล้อง</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("cctv_status")} className="checkbox checkbox-success" />
                                    <span>สถานะไฟ</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("cctv_remote")} className="checkbox checkbox-success" />
                                    <span>remote playback ทุกวัน</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input disabled={inputStatus} type="checkbox" {...register("cctv_check")} className="checkbox checkbox-success" />
                                    <span>กล้องทุกตัวทำงานปกติ</span> 
                                </label>
                            </div>
                        </div>
                        <div className='flex w-full gap-2'>
                            <div className='flex flex-col items-start py-5 px-10 gap-2 border w-1/2 rounded'>
                                Overall Check
                                <label className='flex gap-2 justify-center items-center'>
                                    <input disabled={inputStatus} type="checkbox" {...register("ems_check")} className='checkbox-success checkbox checkbox-sm' />
                                    Ems System
                                </label>
                                <label className='flex gap-2 justify-center items-center'>
                                    <input disabled={inputStatus} type="checkbox" {...register("access_control_check")} className='checkbox-success checkbox checkbox-sm' />
                                    Access Control
                                </label>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label className='flex gap-2 justify-start items-center'>
                                        <input disabled={inputStatus} type="checkbox" {...register("phase_check")} className='checkbox-success checkbox checkbox-sm' />
                                        ความเรียบร้อยของห้องIDC
                                    </label>                                   
                                    <textarea rows="2" placeholder='สิ่งผิดปกติและการแก้ไข'{...register("phase_comment")} className='p-4 m-2 border rounded'>
                                    </textarea>                                   
                                </div>
                            </div>
                            <div className='flex flex-col items-start py-5 px-10 gap-2 border w-1/2 rounded'>
                                Switch
                                <label className='flex gap-2 justify-center items-center'>
                                    <input disabled={inputStatus} type="checkbox" {...register("sw1_jd96634_check")} className='checkbox-success checkbox checkbox-sm' />
                                    1. HP V1410-24 Switch JD9663A
                                </label>
                                <label className='flex gap-2 justify-center items-center'>
                                    <input disabled={inputStatus} type="checkbox" {...register("sw2_jd96634_check")} className='checkbox-success checkbox checkbox-sm' />
                                    2. HP V1410-24 Switch JD9663A
                                </label>
                                <label className='flex gap-2 justify-center items-center'>
                                    <input disabled={inputStatus} type="checkbox" {...register("sw3_1616e_check")} className='checkbox-success checkbox checkbox-sm' />
                                    3. FINE FPS-1616E
                                </label>
                                <label className='flex gap-2 justify-center items-center'>
                                    <input disabled={inputStatus} type="checkbox" {...register("sw4_1616e_check")} className='checkbox-success checkbox checkbox-sm' />
                                    4. FINE FPS-1616E
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 border p-2 w-full rounded'>
                            {/* Server check */}
                            <div className='flex flex-col items-center gap-2'>
                                SERVER
                            </div>
                            <div className='flex gap-2'>
                                <div className='flex flex-col items-center gap-5 border w-1/2 rounded p-5 text-start'>
                                    VM CCTV (105)
                                    <div className='flex flex-col gap-2'>
                                        <label className='flex gap-5 w-full justify-between'>
                                            CPU Usage
                                            <input disabled={inputStatus} type="number" {...register("backupvm_cpu_usage")} step="0.01" min="0.00" placeholder='%' className='text-center'/>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between'>
                                            Memory Usage
                                            <input disabled={inputStatus} type="number" {...register("backupvm_memory_usage")} step="0.01" min="0.00" placeholder='%' className='text-center'/>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between border rounded p-2'>
                                            Storage : C
                                            <div className='flex flex-col gap-2'>
                                                <input disabled={inputStatus} {...register("backupvm_c_total")} step="0.01" min="0.00" className='text-center border' placeholder='total (GB)' />
                                                <input disabled={inputStatus} {...register("backupvm_c_free")} step="0.01" min="0.00" className='text-center border' placeholder='Free (GB)'/>
                                                <input disabled={inputStatus} {...register("backupvm_c_percent")} step="0.01" min="0.00" className='text-center border' placeholder='Usage %'/>
                                            </div>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between border rounded p-2'>
                                            Storage : D
                                            <div className='flex flex-col gap-2'>
                                                <input disabled={inputStatus} {...register("backupvm_d_total")} className='text-center border' placeholder='total (GB)' />
                                                <input disabled={inputStatus} {...register("backupvm_d_free")} className='text-center border' placeholder='Free (GB)'/>
                                                <input disabled={inputStatus} {...register("backupvm_d_percent")} className='text-center border' placeholder='Usage %'/>
                                            </div>
                                        </label>
                                        <label className='flex gap-5 w-full justify-center items-center mt-2'>
                                            <input disabled={inputStatus} type="checkbox" {...register("backupvm_synctime")} className='checkbox checkbox-sm checkbox-success'/>
                                            Sync time
                                        </label>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-5 border w-1/2 rounded p-5 text-start'>
                                    VM EMS (101)
                                    <div className='flex flex-col gap-2'>
                                        <label className='flex gap-5 w-full justify-between'>
                                            CPU Usage
                                            <input disabled={inputStatus} type="number" placeholder='%' className='text-center' {...register("ems_cpu_usage")}/>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between'>
                                            Memory Usage
                                            <input disabled={inputStatus} type="number" placeholder='%' className='text-center' {...register("ems_memory_usage")}/>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between border rounded p-2'>
                                            Storage : C
                                            <div className='flex flex-col gap-2'>
                                                <input disabled={inputStatus} {...register("ems_c_total")} step="0.01" min="0.00" className='text-center border' placeholder='total (GB)' />
                                                <input disabled={inputStatus} {...register("ems_c_free")} step="0.01" min="0.00" className='text-center border' placeholder='Free (GB)'/>
                                                <input disabled={inputStatus} {...register("ems_c_percent")} step="0.01" min="0.00" className='text-center border' placeholder='Usage %'/>
                                            </div>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between border rounded p-2'>
                                            Storage : D
                                            <div className='flex flex-col gap-2'>
                                                <input disabled={inputStatus} {...register("ems_d_total")} step="0.01" min="0.00" className='text-center border' placeholder='total (GB)' />
                                                <input disabled={inputStatus} {...register("ems_d_free")} step="0.01" min="0.00" className='text-center border' placeholder='Free (GB)'/>
                                                <input disabled={inputStatus} {...register("ems_d_percent")} step="0.01" min="0.00" className='text-center border' placeholder='Usage %'/>
                                            </div>
                                        </label>
                                        <label className='flex gap-5 w-full justify-center items-center mt-2'>
                                            <input disabled={inputStatus} type="checkbox" {...register("ems_synctime")} className='checkbox checkbox-sm checkbox-success'/>
                                            Sync time
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <a href="/checklists" className="btn w-20 text-black">
                            Cancel
                        </a>
                    </div>
                </div>
            </form>        
        </div>
      )
}
