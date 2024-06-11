import React from 'react'

export default function Ups({nameUps, register, errors , inputStatus}) {
  return (
    <div className='flex flex-col px-2'>
        {/* ups */}
        <div className='flex flex-col gap-2 items-center'>
            {nameUps.toUpperCase()}
            <label className='flex items-center gap-2 mb-5'>
                Alarm
                <input 
                disabled={inputStatus ? inputStatus : false}
                type="checkbox" {...register(`${nameUps}`)} className="toggle toggle-success" />
            </label>
        </div>
        <div className='grid grid-cols-3 gap-2 max-md:grid-cols-1'>
            <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                OutPut Voltage (V)
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_l1`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                {errors[`${nameUps}_l1`] && <span className="text-red-500">{errors[`${nameUps}_l1`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_l2`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='L2-3'/>
                {errors[`${nameUps}_l2`] && <span className="text-red-500">{errors[`${nameUps}_l2`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_l3`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='L3-1'/>
                {errors[`${nameUps}_l3`] && <span className="text-red-500">{errors[`${nameUps}_l3`]?.message}</span>}
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                Output Ampere (A)
                <input  
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_i1`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='I1'/>
                {errors[`${nameUps}_i1`] && <span className="text-red-500">{errors[`${nameUps}_i1`]?.message}</span>}
                <input  
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_i2`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='I2'/>
                {errors[`${nameUps}_i2`] && <span className="text-red-500">{errors[`${nameUps}_i2`]?.message}</span>}
                <input  
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_i3`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='I3'/>
                {errors[`${nameUps}_i3`] && <span className="text-red-500">{errors[`${nameUps}_i3`]?.message}</span>}
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                Power (Kw)
                <input 
                type='number'
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_p1`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='P1'/>
                {errors[`${nameUps}_p1`] && <span className="text-red-500">{errors[`${nameUps}_p1`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_p2`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='P2'/>
                {errors[`${nameUps}_p2`] && <span className="text-red-500">{errors[`${nameUps}_p2`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_p3`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='P3'/>
                {errors[`${nameUps}_p3`] && <span className="text-red-500">{errors[`${nameUps}_p3`]?.message}</span>}
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                Load Level (%)
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_load1`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='Load1'/>
                {errors[`${nameUps}_load1`] && <span className="text-red-500">{errors[`${nameUps}_load1`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_load2`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='Load2'/>
                {errors[`${nameUps}_load2`] && <span className="text-red-500">{errors[`${nameUps}_load2`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_load3`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='Load3'/>
                {errors[`${nameUps}_load3`] && <span className="text-red-500">{errors[`${nameUps}_load3`]?.message}</span>}
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                Battery
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_vbatt`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='Vbatt'/>
                {errors[`${nameUps}_vbatt`] && <span className="text-red-500">{errors[`${nameUps}_vbatt`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_ibatt`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='Ibatt'/>
                {errors[`${nameUps}_ibatt`] && <span className="text-red-500">{errors[`${nameUps}_ibatt`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameUps}_remaining`, { required: {value : true , message : "This field is required."}})} className='bg-gray-50 px-2' placeholder='Remaining time'/>
                {errors[`${nameUps}_remaining`] && <span className="text-red-500">{errors[`${nameUps}_remaining`]?.message}</span>}
            </label>
        </div>
    </div>
  )
}
