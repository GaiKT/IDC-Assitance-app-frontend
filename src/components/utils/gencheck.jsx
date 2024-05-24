import React from 'react';
import { useForm } from 'react-hook-form';

export default function Gencheck({genName, register, errors , inputStatus}) {
    const { reset } = useForm();
    React.useEffect(() => {
        reset();
    }, []);
  return (
    <div className='p-4 border flex flex-col rounded gap-4'>
            <label className='flex gap-4 w-full justify-center'>
                <p className='px-2 rounded text-center text-xl'>{genName}</p>
            </label>
            <label className='flex flex-col items-center gap-4 w-full'>
                Service Meter Unit (ATS)
                <input type='number' step='any'  disabled={inputStatus} {...register("ats_meter_unit", {required:{ value : true, message : "ATS Meter is required." }})} className='text-center border' placeholder='ใส่เลขจากมิเตอร์' />
                {errors["ats_meter_unit"] && <span className="text-red-500">{errors["ats_meter_unit"]?.message}</span>}
            </label>
            <hr />
            <p>ตรววจเช็คเครื่องก่อนสตาร์ท</p>
            <hr />
            <label className='flex flex-col items-center gap-2 py-2'>
                เดินตรวจสอบรอบๆ ตัวเครื่องหาสิ่งผิดปกติ
                <div className='flex gap-2'>
                    ABNormal
                    <input type="checkbox"  disabled={inputStatus} {...register("around_check")} className='toggle toggle-success toggle-sm'/>
                    Normal
                </div>
            </label>
            <div className='flex flex-wrap gap-5 justify-center'>
                {/* checkbatterry */}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบแบตเตอรี่ (ปริมาณน้ำกลั่น)
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("batt_check")} className='checkbox checkbox-success checkbox-sm' />
                        ระดับน้ำกลั่นแต่ละช่อง
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("batt_connection_check")} className='checkbox checkbox-success checkbox-sm' />
                        ขั้วแบตเตอรี่และสายแบตเตอรี่
                    </label>
                    <label className='flex flex-col gap-2 w-full justify-center items-start'>
                        Batterry VDC
                        <input  disabled={inputStatus} type='number' step='any' {...register("volt_batt_check", {required:{ value : true, message : "volt batt is required." }})} className='w-full border rounded text-center' placeholder='ค่าแรงดันของแบตเตอรี่' />
                        {errors["volt_batt_check"] && <span className="text-red-500">{errors["volt_batt_check"]?.message}</span>}
                    </label>
                </div>
                {/*fuel*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบเชื้อเพลิง
                    <hr />
                    <label className='flex flex-col gap-2 w-full justify-center items-start'>
                        ระดับน้ำมันในถัง (ไม่น้อยกว่า 300 ลิตร)
                        <input  disabled={inputStatus} {...register("fuel_value_check", {required:{ value : true, message : "Fuel value is required." }})} className='w-full border rounded text-center' placeholder='ระดับน้ำมันในถัง' />
                        {errors["fuel_value_check"] && <span className="text-red-500">{errors["fuel_value_check"]?.message}</span>}
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("fuel_leak_check")} className='checkbox checkbox-success checkbox-sm' />
                        รอยรั่วไหลของระบบน้ำมันเชื้อเพลิง
                    </label>
                </div>
                {/*Lubrication*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบหล่อลื่น
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("oil_value_check")} className='checkbox checkbox-success checkbox-sm' />
                        ระดับน้ำมันหล่อลื่น
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("oil_leak_check")} className='checkbox checkbox-success checkbox-sm' />
                        รอยรั่วไหลน้ำมันหล่อลื่น
                    </label>
                </div>
                {/*Airflow*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบหล่อเย็นระบบอากาศ
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("cooler_check")} className='checkbox checkbox-success checkbox-sm' />
                        น้ำหล่อเย็นในหม้อ (มีรอยรั่วไหลหรือไม่)
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("filter_cooler_check")} className='checkbox checkbox-success checkbox-sm' />
                        ความสะอาดบริเวณรังผึงหม้อน้ำ
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("fan_cooler_check")} className='checkbox checkbox-success checkbox-sm' />
                        สายพานพัดลมหม้อน้ำ
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("cooler_leak_check")} className='checkbox checkbox-success checkbox-sm' />
                        รอยรั่วไหลตามจุดต่อระบบหล่อเย็น
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("airduct_check")} className='checkbox checkbox-success checkbox-sm' />
                        Ari Duct
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("airfilter_condition_check")} className='checkbox checkbox-success checkbox-sm' />
                        สภาพไส้กรองอากาศ
                    </label>
                </div>
                {/*Lubrication*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบไฟฟ้า
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("electic_junction_check")} className='checkbox checkbox-success checkbox-sm' />
                        จุดต่อต่างๆ ของระบบไฟฟ้า
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("electic_insulation_check")} className='checkbox checkbox-success checkbox-sm' />
                        สภาพฉนวนสายไฟ
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("ground_check")} className='checkbox checkbox-success checkbox-sm' />
                        ระบบกราวด์ของเครื่อง
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("electic_panel_check")} className='checkbox checkbox-success checkbox-sm' />
                        ความสะอาดของแผงควบคุมไฟฟ้า
                    </label>
                </div>
                <div className='w-80 rounded flex flex-col gap-2 p-4'>
                </div>                                        
            </div>
            <hr />
            <p>ตรววจเช็คเครื่องเมื่อสตาร์ทแล้ว 5 นาที</p>
            <hr />
            <div className='flex flex-wrap gap-5 justify-center'>
                {/* start-time */}
                <div className='w-80 border rounded flex flex-col gap-4 p-4'>
                    <label className='flex flex-col gap-2 w-full'>
                        เครื่องยนต์สตาร์ทเวลา
                        <input  disabled={inputStatus} type="datetime-local" {...register("time_start", {required : {value : true , message : "Please specify the start date and time."}})} className='border rounded'/>
                        {errors["time_start"] && <span className="text-red-500">{errors["time_start"]?.message}</span>}
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("engine_check")} className='checkbox checkbox-success checkbox-sm' />
                        เสียงผิดปกติรอบๆ เครื่องยนต์
                    </label>
                </div>
                {/*electic*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบไฟฟ้า
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("afterstart_junction_check")} className='checkbox checkbox-success checkbox-sm' />
                        จุดต่อต่างๆ ของระบบไฟฟ้า
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input  disabled={inputStatus} type="checkbox" {...register("afterstart_insulation_check")} className='checkbox checkbox-success checkbox-sm' />
                        สภาพฉนวนสายไฟ
                    </label>
                </div>                                                            
            </div>
            <hr />
            <p>ผลทดสอบการทำงาน</p>
            <hr />
            <div className='flex flex-wrap gap-5 justify-center'>
                {/* result test generator */}
                <label className='flex flex-col items-start gap-2 border p-4 w-80 rounded'>
                    Voltage (400)
                    <input  disabled={inputStatus} {...register(`l1`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                    {errors[`l1`] && <span className="text-red-500">{errors[`l1`]?.message}</span>}
                    <input  disabled={inputStatus} {...register(`l2`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='L2-3'/>
                    {errors[`l2`] && <span className="text-red-500">{errors[`l2`]?.message}</span>}
                    <input  disabled={inputStatus} {...register(`l3`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='L3-1'/>
                    {errors[`l3`] && <span className="text-red-500">{errors[`l3`]?.message}</span>}
                </label>
                <label className='flex flex-col items-start gap-2 border p-4 w-80 rounded'>
                    Load ที่ใช้งาน Ampere 
                    <input  disabled={inputStatus} {...register(`i1`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='I1'/>
                    {errors[`i1`] && <span className="text-red-500">{errors[`i1`]?.message}</span>}
                    <input  disabled={inputStatus} {...register(`i2`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='I2'/>
                    {errors[`i2`] && <span className="text-red-500">{errors[`i2`]?.message}</span>}
                    <input  disabled={inputStatus} {...register(`i3`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='I3'/>
                    {errors[`i3`] && <span className="text-red-500">{errors[`i3`]?.message}</span>}
                </label>
                <div className='flex flex-col items-start gap-5 border p-4 w-80 rounded'>
                    <label className='flex flex-col gap-2'>
                        ความถี่ (50Hz)
                        <input  disabled={inputStatus} {...register(`frequency`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='50Hz +- 1.5'/>
                        {errors[`frequency`] && <span className="text-red-500">{errors[`frequency`]?.message}</span>}
                    </label>
                    <label className='flex flex-col gap-2'>
                        ความเร็วรอบ (RPM.)
                        <input  disabled={inputStatus} {...register(`rpm`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='1500 +-'/>
                        {errors[`rpm`] && <span className="text-red-500">{errors[`rpm`]?.message}</span>}
                    </label>                        
                </div>
                <div className='flex flex-col items-start gap-2 border p-4 w-80 rounded'>
                    <label className='flex flex-col gap-2'>
                        Batterry Voltage (V)
                        <input  disabled={inputStatus} {...register(`voltbatt`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='27VDC'/>
                        {errors[`voltbatt`] && <span className="text-red-500">{errors[`voltbatt`]?.message}</span>}
                    </label>
                    <label className='flex flex-col gap-2'>
                        Engine temp (°C)
                        <input  disabled={inputStatus} {...register(`enginetemp`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='70+-'/>
                        {errors[`enginetemp`] && <span className="text-red-500">{errors[`enginetemp`]?.message}</span>}
                    </label>
                    <label className='flex flex-col gap-2'>
                        Cooldown (min)
                        <input  disabled={inputStatus} {...register(`cooldown`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='5 min +-'/>
                        {errors[`cooldown`] && <span className="text-red-500">{errors[`cooldown`]?.message}</span>}
                    </label>                        
                </div>
                <div className='flex flex-col items-start gap-2 border p-4 w-80 rounded'>
                    สรุปผลการตรวจสอบ
                    <hr />
                    <label className='flex flex-col items-start gap-2 w-full'>
                        Comment
                        <textarea disabled={inputStatus} {...register(`comment`,)} rows={4} className='bg-gray-50 w-full' placeholder='ถ้ามีสิ่งผิดปกติเขียนลงที่นี่'/>
                    </label>                        
                </div>
                <div className='w-80'></div>                                                            
            </div>
    </div>
    )
}
