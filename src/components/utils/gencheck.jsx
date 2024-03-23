import React from 'react'

export default function Gencheck(props) {

  return (
    <div className='p-4 border flex flex-col rounded gap-4'>
            <p>{props.name.toUpperCase()}</p>
            <label className='flex flex-col items-center gap-4 w-full'>
                Service Meter Unit (ATS)
                <input type="number" {...props.register("ats_" + props.name)} step="0.01" min="0.00" className='text-center border' placeholder='ใส่เลขจากมิเตอร์' />
            </label>
            <hr />
            <p>ตรววจเช็คเครื่องก่อนสตาร์ท</p>
            <hr />
            <label className='flex flex-col items-center gap-2 py-2'>
                เดินตรวจสอบรอบๆ ตัวเครื่องหาสิ่งผิดปกติ
                <div className='flex gap-2'>
                    ABNormal
                    <input type="checkbox" {...props.register("around_check_" + props.name)} className='toggle toggle-success toggle-sm'/>
                    Normal
                </div>
            </label>
            <div className='flex flex-wrap gap-5 justify-center'>
                {/* checkbatterry */}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบแบตเตอรี่ (ปริมาณน้ำกลั่น)
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("batt_check_" + props.name)} className='checkbox checkbox-success checkbox-sm' />
                        ระดับน้ำกลั่นแต่ละช่อง
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("batt_connection_check_" + props.name)} className='checkbox checkbox-success checkbox-sm' />
                        ขั้วแบตเตอรี่และสายแบตเตอรี่
                    </label>
                    <label className='flex flex-col gap-2 w-full justify-center items-start'>
                        Batterry VDC
                        <input type="number" {...props.register("volt_batt_check_" + props.name)} className='w-full border rounded text-center' placeholder='ค่าแรงดันของแบตเตอรี่' />
                    </label>
                </div>
                {/*fuel*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบเชื้อเพลิง
                    <hr />
                    <label className='flex flex-col gap-2 w-full justify-center items-start'>
                        ระดับน้ำมันในถัง (ไม่น้อยกว่า 300 ลิตร)
                        <input type="number" {...props.register("fuel_value_check_" + props.name)} className='w-full border rounded text-center' placeholder='ระดับน้ำมันในถัง' />
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("fuel_leak_check_" + props.name)} className='checkbox checkbox-success checkbox-sm' />
                        รอยรั่วไหลของระบบน้ำมันเชื้อเพลิง
                    </label>
                </div>
                {/*Lubrication*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบหล่อลื่น
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("oil_value_check_" + props.name )} className='checkbox checkbox-success checkbox-sm' />
                        ระดับน้ำมันหล่อลื่น
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("oil_leak_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        รอยรั่วไหลน้ำมันหล่อลื่น
                    </label>
                </div>
                {/*Airflow*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบหล่อเย็นระบบอากาศ
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("cooler_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        น้ำหล่อเย็นในหม้อ (มีรอยรั่วไหลหรือไม่)
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("filter_cooler_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        ความสะอาดบริเวณรังผึงหม้อน้ำ
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("fan_cooler_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        สายพานพัดลมหม้อน้ำ
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("cooler_leak_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        รอยรั่วไหลตามจุดต่อระบบหล่อเย็น
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("airduct_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        Ari Duct
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("airfilter_condition_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        สภาพไส้กรองอากาศ
                    </label>
                </div>
                {/*Lubrication*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบไฟฟ้า
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("electic_junction_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        จุดต่อต่างๆ ของระบบไฟฟ้า
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("electic_insulation_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        สภาพฉนวนสายไฟ
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("gruond_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        ระบบกราวด์ของเครื่อง
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("electic_panel_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
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
                        <input type="datetime-local" {...props.register("time_start_"+ props.name)} className='border rounded'/>
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("engine_check_" + props.name)} className='checkbox checkbox-success checkbox-sm' />
                        เสียงผิดปกติรอบๆ เครื่องยนต์
                    </label>
                </div>
                {/*electic*/}
                <div className='w-80 border rounded flex flex-col gap-2 p-4'>
                    ระบบไฟฟ้า
                    <hr />
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("afterstart_junction_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
                        จุดต่อต่างๆ ของระบบไฟฟ้า
                    </label>
                    <label className='flex gap-2 w-full justify-start items-center'>
                        <input type="checkbox" {...props.register("afterstart_insulation_check_"+ props.name)} className='checkbox checkbox-success checkbox-sm' />
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
                    <input {...props.register(`${props.name}_l1`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L1-2'/>
                    <input {...props.register(`${props.name}_l2`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L2-3'/>
                    <input {...props.register(`${props.name}_l3`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L3-1'/>
                </label>
                <label className='flex flex-col items-start gap-2 border p-4 w-80 rounded'>
                    Load ที่ใช้งาน Ampere 
                    <input {...props.register(`${props.name}_i1`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I1'/>
                    <input {...props.register(`${props.name}_i2`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I2'/>
                    <input {...props.register(`${props.name}_i3`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I3'/>
                </label>
                <div className='flex flex-col items-start gap-5 border p-4 w-80 rounded'>
                    <label className='flex flex-col gap-2'>
                        ความถี่ (50Hz)
                        <input {...props.register(`${props.name}_frequency`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='50Hz +- 1.5'/>
                    </label>
                    <label className='flex flex-col gap-2'>
                        ความเร็วรอบ (RPM.)
                        <input {...props.register(`${props.name}_frequency`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='50Hz +- 1.5'/>
                    </label>                        
                </div>
                <div className='flex flex-col items-start gap-2 border p-4 w-80 rounded'>
                    <label className='flex flex-col gap-2'>
                        Batterry Voltage (V)
                        <input {...props.register(`${props.name}_voltbatt`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='50Hz +- 1.5'/>
                    </label>
                    <label className='flex flex-col gap-2'>
                        Engine temp (°C)
                        <input {...props.register(`${props.name}_enginetemp`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='50Hz +- 1.5'/>
                    </label>
                    <label className='flex flex-col gap-2'>
                        Cooldown (min)
                        <input {...props.register(`${props.name}_cooldown`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='50Hz +- 1.5'/>
                    </label>                        
                </div>
                <div className='flex flex-col items-start gap-2 border p-4 w-80 rounded'>
                    สรุปผลการตรวจสอบ
                    <hr />
                    <label className='flex flex-col items-start gap-2 w-full'>
                        Comment
                        <textarea {...props.register(`${props.name}_comment`,)} rows={4} className='bg-gray-50 w-full' placeholder='ถ้ามีสิ่งผิดปกติเขียนลงที่นี่'/>
                    </label>                        
                </div>
                <div className='w-80'></div>                                                            
            </div>
    </div>
    )
}
