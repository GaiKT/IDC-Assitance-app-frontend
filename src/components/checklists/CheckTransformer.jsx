import React from 'react'
import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function CheckTransformer() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
  
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.group(data)
    }

  return (
    <div className='bg-white p-10'>
        <h1 className='text-4xl font-bold mb-5'>Checklist Transformer</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 my-5 text-center">
            <h1 className='text-xl'>RMU</h1>
            <div className='p-4 border flex rounded gap-4'>
                <div className='flex flex-col items-center gap-5 border py-5 w-1/2 rounded'>
                    Main Incomming 1
                    <div className='flex flex-col gap-4 w-5/6'>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_in1")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch Ground</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_ground_in1")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Lamp</span>   
                            <div className='w-1/2 flex justify-between'>
                                Abnormal
                                <input type="checkbox" {...register("lamp_rmu_in1")} className="toggle toggle-success" />
                                Normal
                            </div>
                        </label>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-5 border py-5 w-1/2 rounded'>
                    Main Incomming 2
                    <div className='flex flex-col gap-4 w-5/6'>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_in2")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch Ground</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_ground_in2")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Lamp</span>   
                            <div className='w-1/2 flex justify-between'>
                                Abnormal
                                <input type="checkbox" {...register("lamp_rmu_in2")} className="toggle toggle-success" />
                                Normal
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className='p-4 border flex rounded gap-4'>
                <div className='flex flex-col items-center gap-5 border py-5 w-1/2 rounded'>
                    Main Outgoing 1
                    <div className='flex flex-col gap-4 w-5/6'>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU1</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw1_out1")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU2</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw2_out1")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch Ground</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_ground_out1")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Lamp</span>   
                            <div className='w-1/2 flex justify-between'>
                                Abnormal
                                <input type="checkbox" {...register("lamp_rmu_out1")} className="toggle toggle-success" />
                                Normal
                            </div>
                        </label>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-5 border py-5 w-1/2 rounded'>
                    Main Outgoing 2
                    <div className='flex flex-col gap-4 w-5/6'>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU1</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw1_out2")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch RMU2</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw2_out2")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>                        
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Switch Ground</span> 
                            <div className='w-1/2 flex justify-between'>
                                OFF
                                <input type="checkbox" {...register("sw_ground_out2")} className="toggle toggle-success" />
                                ON 
                            </div>
                        </label>
                        <label className='flex w-full justify-between'>
                            <span className='font-semibold w-1/2'>Lamp</span>   
                            <div className='w-1/2 flex justify-between'>
                                Abnormal
                                <input type="checkbox" {...register("lamp_rmu_out2")} className="toggle toggle-success" />
                                Normal
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <label className='flex w-1/3 justify-between border p-4 rounded'>
                    <span className='font-semibold w-1/2'>Pressure Gauge</span>   
                    <div className='w-1/2 flex justify-between'>
                        <span className='text-red-700'>Red</span>
                        <input type="checkbox" {...register("pressure")} className="toggle toggle-success" />
                        <span className='text-green-700'>Green</span>
                    </div>
                </label>
            </div>
            <hr />
            <div className='flex w-full flex-col border rounded py-2 items-center'>
                <h1 className='text-xl ml-2 w-full text-center py-4'>ความเรียบร้อยห้องหม้อแปลง</h1>
                <div className='flex py-4 px-11 gap-5 flex-wrap'>
                    <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                        อุณหภูมิหม้อแปลงไฟฟ้า
                        <input {...register("tr_ch1", { required: true})} className='bg-gray-50 px-2' placeholder='Temp CH1'/>
                        <input {...register("tr_ch2", { required: true})} className='bg-gray-50 px-2' placeholder='Temp CH2'/>
                        <input {...register("tr_ch3", { required: true})} className='bg-gray-50 px-2' placeholder='Temp CH3'/>
                    </label>
                    <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                        อุณหภูมิห้องหม้อแปลง
                        <input {...register("tr_room_temp", { required: true})} className='bg-gray-50 px-2' placeholder='Temp'/>
                        <input {...register("tr_room_hum", { required: true})} className='bg-gray-50 px-2' placeholder='Hum'/>
                    </label>
                    <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
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
                <div className='flex py-4 px-11 gap-5 flex-wrap'>
                    <label className='flex flex-col items-center gap-5 border p-5 w-80 rounded'>
                        <div className='flex justify-between w-full'>
                            Meter
                            <input {...register("meter", { required: true})} className='bg-gray-50 px-2' placeholder='kwh'/>
                        </div>
                        <div className='flex gap-2 w-full justify-between'>
                            Voltage
                            <div className='flex flex-col gap-2'>
                                <input {...register("l1-2", { required: true})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                                <input {...register("l2-3", { required: true})} className='bg-gray-50 px-2' placeholder='L2-3'/>
                                <input {...register("l3-1", { required: true})} className='bg-gray-50 px-2' placeholder='L3-1'/>
                            </div>
                        </div>
                    </label>
                    <label className='flex flex-col items-center gap-5 border p-5 w-80 rounded'>
                        <div className='flex gap-2 w-full justify-between'>
                            Ampere
                            <div className='flex flex-col gap-2'>
                                <input {...register("i1", { required: true})} className='bg-gray-50 px-2' placeholder='I1'/>
                                <input {...register("i2", { required: true})} className='bg-gray-50 px-2' placeholder='I2'/>
                                <input {...register("i3", { required: true})} className='bg-gray-50 px-2' placeholder='I3'/>
                            </div>
                        </div>                        
                        <div className='flex gap-2 w-full justify-between'>
                            Power Factor
                            <input {...register("pf", { required: true})} className='bg-gray-50 px-2' placeholder='P.F.'/>
                        </div>

                    </label>
                    <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                        Circuit Breaker
                        <div className='flex flex-col w-4/6 gap-2'>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("main_mcb", { required: true})}/>
                                Main MCB
                            </label>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("db1", { required: true})}/>
                                DB1
                            </label>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("db2", { required: true})}/>
                                DB2
                            </label>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("mcb1", { required: true})}/>
                                MCB1
                            </label>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("mcb2", { required: true})}/>
                                MCB2
                            </label>
                            <label className='flex w-full rounded justify-between gap-2 items-center'>
                                <input type="checkbox" className='checkbox checkbox-sm' {...register("capbank", { required: true})}/>
                                Capbank
                            </label>
                        </div>
                    </label>
                    <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
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
