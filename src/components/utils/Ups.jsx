import React from 'react'

export default function Ups(props) {
  return (
    <div className='flex flex-col'>
        {/* ups */}
        <div className='flex flex-col items-center gap-2'>
            {props.nameUps.toUpperCase()}
            <label className='flex items-center gap-2 mb-5'>
                Alarm
                <input type="checkbox" {...props.register(`${props.nameUps}`)} className="toggle toggle-success" />
            </label>
        </div>
        <div className='flex flex-wrap gap-4'>
            <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                OutPut Voltage (V)
                <input {...props.register(`${props.nameUps}_l1`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L1-2'/>
                <input {...props.register(`${props.nameUps}_l2`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L2-3'/>
                <input {...props.register(`${props.nameUps}_l3`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='L3-1'/>
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                Output Ampere (A)
                <input {...props.register(`${props.nameUps}_i1`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I1'/>
                <input {...props.register(`${props.nameUps}_i2`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I2'/>
                <input {...props.register(`${props.nameUps}_i3`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='I3'/>
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                Power (Kw)
                <input {...props.register(`${props.nameUps}_p1`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='P1'/>
                <input {...props.register(`${props.nameUps}_p2`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='P2'/>
                <input {...props.register(`${props.nameUps}_p3`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='P3'/>
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                Load Level (%)
                <input {...props.register(`${props.nameUps}_load1`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Load1'/>
                <input {...props.register(`${props.nameUps}_load2`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Load2'/>
                <input {...props.register(`${props.nameUps}_load3`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Load3'/>
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 w-80 rounded'>
                Battery
                <input {...props.register(`${props.nameUps}_vbatt`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Vbatt'/>
                <input {...props.register(`${props.nameUps}_ibatt`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Ibatt'/>
                <input {...props.register(`${props.nameUps}_remaining`, { required: true})} step="0.01" min="0.00" className='bg-gray-50 px-2' placeholder='Remaining time'/>
            </label>
        </div>
    </div>
  )
}
