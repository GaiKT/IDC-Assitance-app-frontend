import React from 'react'
import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import Db from '../utils/Db'
import Ups from '../utils/Ups'

export default function CheckPhase1() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const PacAir = [1,2,3,4,5,6,7,8]
    const [disabledInputs, setDisabledInputs] = useState(Array(PacAir.length).fill(true));
    const [barLevel , setBarLevel] = useState(0)

    const handleCheckboxChange = (index) => {
        const updatedDisabledInputs = [...disabledInputs];
        updatedDisabledInputs[index] = !updatedDisabledInputs[index];
        setDisabledInputs(updatedDisabledInputs);
    };

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.group(data)
    }

    return (
        <div className='bg-white p-10'>
            <h1 className='text-4xl font-bold mb-5'>Checklist Phase1</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 my-5 text-center">
                <div className='flex w-full flex-col items-center'>
                    <h1 className='text-xl w-full text-center py-4'>Floor 5B</h1>
                    <div className='flex py-4 gap-5 flex-wrap'>
                    <div className='flex flex-col gap-5 border py-5 w-full rounded'>
                        <div className='flex flex-col items-center gap-2'>
                            <label className='flex flex-col items-center gap-2'>
                                Main meter
                                <input {...register("main_meter", { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Kwh'/>
                            </label>
                        </div>
                        </div>
                        {/* ats1 */}
                        <Db nameDb='atsphase1' register={register}/>
                    </div>
                </div>
                <hr />
                <div className='flex w-full flex-col items-center'>
                    <h1 className='text-xl w-full text-center py-4'>Floor 10</h1>
                    <div className='flex py-4 gap-5 flex-wrap'>
                        {/* Emdb */}
                        <Db nameDb='emdb' register={register}/>
                        {/* Ups */}
                        <div className='flex flex-col gap-5 border py-5 w-full rounded'>
                            <div className='flex flex-col items-center gap-5 px-5'>
                                UPSDB
                                <div className='flex gap-5 border py-5 w-full rounded items-center justify-around flex-wrap'>
                                    <label className='flex items-center gap-2'>
                                        <input type='checkbox' className='checkbox checkbox-success checkbox-sm' {...register("ups_db1", { required: true})}/>
                                        Status R S T OUT1(ON)
                                    </label>
                                    <label className='flex items-center gap-2'>
                                        <input type='checkbox' className='checkbox checkbox-success checkbox-sm' {...register("ups_db2", { required: true})}/>
                                        Status R S T OUT2(ON)
                                    </label>
                                    <label className='flex items-center gap-2'>
                                        <input type='checkbox' className='checkbox checkbox-success checkbox-sm' {...register("ups_db3", { required: true})}/>
                                        Status R S T OUT3(ON)
                                    </label>
                                </div>
                                {/* ups1 */}
                                <Ups nameUps='ups1' register={register} />
                                {/* ups2 */}
                                <Ups nameUps='ups2' register={register} />
                                {/* ups3 */}
                                <Ups nameUps='ups3' register={register} />
                            </div>
                        </div>
                        {/* Airdb */}
                        <Db nameDb='airdb' register={register}/>
                        {/* Pac Air */}
                        <div className='flex flex-col gap-5 border py-5 w-full rounded'>
                            <div className='flex flex-col items-center gap-2'>
                                Precision Air
                            </div>
                            <div className='w-full flex gap-5 px-5 flex-wrap'>
                                {PacAir.map((airpac,index)=>{
                                    return (
                                        <div key={index} className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                                            PAC{airpac}
                                            <label className='flex items-center'>
                                                <input type="checkbox" onChange={() => handleCheckboxChange(index)}  className='checkbox mr-2 checkbox-success checkbox-sm'/>
                                                Status
                                            </label>
                                            <label className='flex flex-col gap-2'>
                                                Setpoint
                                                <input {...register(`setpoint_pac${airpac}_temp`,)} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Temp' disabled={disabledInputs[index]} />
                                                <input {...register(`setpoint_pac${airpac}_hum`,)} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Hum' disabled={disabledInputs[index]} />
                                            </label>
                                            <label className='flex flex-col gap-2'>
                                                Return
                                                <input {...register(`return_pac${airpac}_temp`,)} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Temp' disabled={disabledInputs[index]} />
                                                <input {...register(`return_pac${airpac}_temp`,)} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Hum' disabled={disabledInputs[index]} />
                                            </label>
                                        </div>
                                    );
                                    
                                })}
                            </div>
                        </div>
                        <div className='flex gap-5 border p-5 w-full rounded'>
                            {/* Water leak */}
                            <div className='flex flex-col items-center gap-5 border w-1/2 rounded p-5'>
                                Water Leak
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Display Status Normal</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("waterleak_normal")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Cable Fualt</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("cablefualt")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Leak</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("leak")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                            </div>
                            {/* Vesda */}
                            <div className='flex flex-col items-center gap-5 border w-1/2 rounded p-5'>
                                Vesda
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Status</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("vesda")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Bar Level</span> 
                                    <div className='w-1/2 flex flex-col justify-between items-center gap-2 p-2'>
                                        <div className='w-10 rounded bg-gray-100 text-center'> {barLevel} </div>
                                        <input type="range" {...register("vesda_barlevel")} min={0} max="10" onChange={(e)=>{setBarLevel(e.target.value)}} value={barLevel} className="range range-xs"/> 
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-5 border p-5 w-full rounded'>
                            {/* Fire System */}
                            <div className='flex flex-col items-center gap-5 border w-1/2 rounded p-5'>
                                Fire System
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Ac Source</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("firesystem_ac_source")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Alarm Zone</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("firesystem_alarmzone")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                            </div>
                            {/* Novac 1230 */}
                            <div className='flex flex-col items-start pl-20 gap-5 border w-1/2 rounded p-5'>
                                Novac 1230
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("novac_u1")} className="checkbox checkbox-success" />
                                    <span>Unit1 (Green)</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("novac_u2")} className="checkbox checkbox-success" />
                                    <span>Unit2 (Green)</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("novac_u3")} className="checkbox checkbox-success" />
                                    <span>Unit3 (Green)</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("novac_u4")} className="checkbox checkbox-success" />
                                    <span>Unit4 (Green)</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("novac_u5")} className="checkbox checkbox-success" />
                                    <span>Unit5 (Green)</span> 
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-5 border p-5 w-full rounded'>
                            {/* TVSS */}
                            <div className='flex flex-col items-center gap-5 border w-1/2 rounded p-5'>
                                TVSS
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Phase 1</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("tvss_p1")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Phase 2</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("tvss_p2")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                                <label className='flex w-full justify-between'>
                                    <span className='w-1/2'>Phase 3</span> 
                                    <div className='w-1/2 flex justify-between'>
                                        OFF
                                        <input type="checkbox" {...register("tvss_p3")} className="toggle toggle-success" />
                                        ON 
                                    </div>
                                </label>
                            </div>
                            {/* CCTV */}
                            <div className='flex flex-col items-start pl-20 gap-5 border w-1/2 rounded p-5'>
                                CCTV
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("cctv_playback30day")} className="checkbox checkbox-success" />
                                    <span>สามารถดูย้อนหลังได้ 90 วัน</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("cctv_camera")} className="checkbox checkbox-success" />
                                    <span>บันทึกภาพทั้ง 30 กล้อง</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("cctv_status")} className="checkbox checkbox-success" />
                                    <span>สถานะไฟ</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("cctv_remote")} className="checkbox checkbox-success" />
                                    <span>remote playback ทุกวัน</span> 
                                </label>
                                <label className='flex justify-center gap-4'>
                                    <input type="checkbox" {...register("cctv_check")} className="checkbox checkbox-success" />
                                    <span>กล้องทุกตัวทำงานปกติ</span> 
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 border p-5 w-full rounded'>
                            {/* Server check */}
                            <div className='flex flex-col items-center gap-2'>
                                SERVER
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex flex-col items-center gap-5 border w-1/2 rounded p-5 text-start'>
                                    EMS (103)
                                    <div className='flex flex-col gap-2'>
                                        <label className='flex gap-5 w-full justify-between'>
                                            CPU Usage
                                            <input type="text" {...register("ems_cpu_usage")} step="0.01" min="0.00" placeholder='%' className='text-center'/>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between'>
                                            Memory Usage
                                            <input type="text" {...register("ems_memory_usage")} step="0.01" min="0.00" placeholder='%' className='text-center'/>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between border rounded p-2'>
                                            Storage : C
                                            <div className='flex flex-col gap-2'>
                                                <input type="number" {...register("ems_c_total")} step="0.01" min="0.00" className='text-center border' placeholder='total (GB)' />
                                                <input type="number" {...register("ems_c_free")} step="0.01" min="0.00" className='text-center border' placeholder='Free (GB)'/>
                                                <input type="number" {...register("ems_c_percent")} step="0.01" min="0.00" className='text-center border' placeholder='Usage %'/>
                                            </div>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between border rounded p-2'>
                                            Storage : D
                                            <div className='flex flex-col gap-2'>
                                                <input type="number" {...register("ems_d_total")} className='text-center border' placeholder='total (GB)' />
                                                <input type="number" {...register("ems_d_free")} className='text-center border' placeholder='Free (GB)'/>
                                                <input type="number" {...register("ems_d_percent")} className='text-center border' placeholder='Usage %'/>
                                            </div>
                                        </label>
                                        <label className='flex gap-5 w-full justify-center items-center mt-2'>
                                            <input type="checkbox" {...register("ems_synctime")} className='checkbox checkbox-sm checkbox-success'/>
                                            Sync time
                                        </label>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-5 border w-1/2 rounded p-5 text-start'>
                                    Backup VM (106)
                                    <div className='flex flex-col gap-2'>
                                        <label className='flex gap-5 w-full justify-between'>
                                            CPU Usage
                                            <input type="text" placeholder='%' className='text-center'/>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between'>
                                            Memory Usage
                                            <input type="text" placeholder='%' className='text-center'/>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between border rounded p-2'>
                                            Storage : C
                                            <div className='flex flex-col gap-2'>
                                                <input type="number" {...register("backupvm_c_total")} step="0.01" min="0.00" className='text-center border' placeholder='total (GB)' />
                                                <input type="number" {...register("backupvm_c_free")} step="0.01" min="0.00" className='text-center border' placeholder='Free (GB)'/>
                                                <input type="number" {...register("backupvm_c_percent")} step="0.01" min="0.00" className='text-center border' placeholder='Usage %'/>
                                            </div>
                                        </label>
                                        <label className='flex gap-5 w-full justify-between border rounded p-2'>
                                            Storage : D
                                            <div className='flex flex-col gap-2'>
                                                <input type="number" {...register("backupvm_d_total")} step="0.01" min="0.00" className='text-center border' placeholder='total (GB)' />
                                                <input type="number" {...register("backupvm_d_free")} step="0.01" min="0.00" className='text-center border' placeholder='Free (GB)'/>
                                                <input type="number" {...register("backupvm_d_percent")} step="0.01" min="0.00" className='text-center border' placeholder='Usage %'/>
                                            </div>
                                        </label>
                                        <label className='flex gap-5 w-full justify-center items-center mt-2'>
                                            <input type="checkbox" {...register("backupvm_synctime")} className='checkbox checkbox-sm checkbox-success'/>
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
