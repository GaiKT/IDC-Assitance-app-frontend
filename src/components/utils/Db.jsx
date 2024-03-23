import React from 'react'

export default function Db(props) {
  return (
    <div className='flex flex-col gap-5 border py-5 w-full rounded'>
    <div className='flex flex-col items-center gap-2'>
        {props.nameDb.toUpperCase()}
        <label className='flex items-center gap-2'>
            <input type='checkbox' className='checkbox checkbox-success checkbox-sm' {...props.register(`${props.nameDb}`, { required: true})}/>
            Status R S T(ON)
        </label>
    </div>
    <div className='w-full flex gap-5 px-5'>
        <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
            Voltage
            <input {...props.register(`${props.nameDb}_l1`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L1-2'/>
            <input {...props.register(`${props.nameDb}_l2`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L2-3'/>
            <input {...props.register(`${props.nameDb}_l3`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L3-1'/>
        </label>
        <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
            Ampere
            <input {...props.register(`${props.nameDb}_i1`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I1'/>
            <input {...props.register(`${props.nameDb}_i2`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I2'/>
            <input {...props.register(`${props.nameDb}_i3`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I3'/>
        </label>
        <div className='flex flex-col gap-5 border py-5 w-80 rounded'>
            <label className='flex flex-col items-center '>
                Power
                <input {...props.register(`${props.nameDb}_power`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Kw'/>
            </label>
            <div className='flex flex-col items-center gap-2'>
                Meter
                <input {...props.register(`${props.nameDb}_meter`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Kwh'/>
            </div>
            <div className='flex flex-col items-center gap-2'>
                In
                <input {...props.register(`${props.nameDb}_in`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='A'/>
            </div>
        </div>
    </div>
    </div>
  )
}
