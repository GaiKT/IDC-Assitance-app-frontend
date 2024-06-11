import React from 'react'

export default function Db({ nameDb, register, errors , inputStatus}) {
  return (
    <div className='flex flex-col gap-5 border py-5 w-full rounded'>
        <div className='flex flex-col items-center gap-2'>
            {nameDb.toUpperCase()}
            <label className='flex items-center gap-2'>
                <input type='checkbox' 
                className='checkbox checkbox-success checkbox-sm' 
                {...register(`${nameDb}`, { required: true})} 
                disabled={inputStatus ? inputStatus : false}
                />
                Status R S T(ON)
            </label>
        </div>
        <div className='grid grid-cols-3 max-md:grid-cols-1 px-2 gap-2'>
            <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                Voltage
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001'{...register(`${nameDb}_l1`, { required: {value: true , message : "L1 is required"} , max : {value: 400, message : "The voltage should not exceed 400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                {errors[`${nameDb}_l1`] && <span className="text-red-500">{errors[`${nameDb}_l1`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameDb}_l2`, { required: {value: true , message : "L2 is required"} , max : {value: 400, message : "The voltage should not exceed 400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                {errors[`${nameDb}_l2`] && <span className="text-red-500">{errors[`${nameDb}_l2`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameDb}_l3`, { required: {value: true , message : "L3 is required"} , max : {value: 400, message : "The voltage should not exceed 400."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                {errors[`${nameDb}_l3`] && <span className="text-red-500">{errors[`${nameDb}_l3`]?.message}</span>}
            </label>
            <label className='flex flex-col items-center gap-5 border py-5 rounded'>
                Ampere
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameDb}_i1`, { required: {value: true , message : "I1 is required"} , max : {value: 1000, message : "The currant should not exceed 1000."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                {errors[`${nameDb}_i1`] && <span className="text-red-500">{errors[`${nameDb}_i1`]?.message}</span>}
                <input 
                type='number'
                disabled={inputStatus ? inputStatus : false} 
                step='0.001' {...register(`${nameDb}_i2`, { required: {value: true , message : "I2 is required"} , max : {value: 1000, message : "The currant should not exceed 1000."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                {errors[`${nameDb}_i2`] && <span className="text-red-500">{errors[`${nameDb}_i2`]?.message}</span>}
                <input 
                type='number' 
                disabled={inputStatus ? inputStatus : false}
                step='0.001' {...register(`${nameDb}_i3`, { required: {value: true , message : "I3 is required"} , max : {value: 1000, message : "The currant should not exceed 1000."},min: {value: 0 , message : "The value should not be less than 0."}})} className='bg-gray-50 px-2' placeholder='L1-2'/>
                {errors[`${nameDb}_i3`] && <span className="text-red-500">{errors[`${nameDb}_i3`]?.message}</span>}
            </label>
            <div className='flex flex-col gap-5 border py-5 rounded'>
                <label className='flex flex-col items-center '>
                    Power
                    <input 
                    type='number' 
                    disabled={inputStatus ? inputStatus : false}
                    step='0.001' {...register(`${nameDb}_power`, { required: {value: true , message : "Power is requred"}})} className='bg-gray-50 px-2' placeholder='Kw'/>
                    {errors[`${nameDb}_power`] && <span className="text-red-500">{errors[`${nameDb}_power`]?.message}</span>}
                </label>
                <div className='flex flex-col items-center gap-2'>
                    Meter
                    <input 
                    type='number' 
                    disabled={inputStatus ? inputStatus : false}
                    step='0.001' {...register(`${nameDb}_meter`, { required: {value: true , message : "Meter is requred"}})} className='bg-gray-50 px-2' placeholder='Kwh'/>
                    {errors[`${nameDb}_meter`] && <span className="text-red-500">{errors[`${nameDb}_meter`]?.message}</span>}
                </div>
                <div className='flex flex-col items-center gap-2'>
                    In
                    <input 
                    disabled={inputStatus ? inputStatus : false}
                    type='number' 
                    step='0.001' {...register(`${nameDb}_in`, { required: {value: true , message : "In is requred"}})} className='bg-gray-50 px-2' placeholder='A'/>
                    {errors[`${nameDb}_in`] && <span className="text-red-500">{errors[`${nameDb}_in`]?.message}</span>}
                </div>
            </div>
        </div>
    </div>
  )
}
