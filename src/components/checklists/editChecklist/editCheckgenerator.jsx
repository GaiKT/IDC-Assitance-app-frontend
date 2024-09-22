import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Gencheck from '../../utils/gencheck';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../../contexts/authentication';
import axios from 'axios';
import { useLocation } from "react-router-dom";

export default function EditCheckgenerator() {
    const location = useLocation();
    const [genCheck , setGenCheck] = useState(location.state)
    const [inputStatus , setInputStatus] = useState(true)
    const { apiUrl } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues:{...genCheck}});

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            await axios.put(`${apiUrl}/checklists/generator/` + data.id, {...data});
            navigate('/checklists');
            Toast.fire({
                icon: 'success',
                title: 'Checklists updated successfully!',
            });
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'Failed to update checklist. Please try again later.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditClick = () => {
        setInputStatus(!inputStatus)
    };  

    return (
        <div className="bg-white p-10">
            <div className='flex w-full justify-between'>
                <h1 className='text-4xl font-bold mb-5'>Checklist Generator</h1>
                <div className='flex gap-2 '>
                    <button className='btn w-24 text-black' onClick={()=>{handleEditClick()}}>Edit</button>
                </div>
            </div>
            
            {!inputStatus && <h1 className='mb-2'>Editing...</h1>}
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 my-5 text-center">
                <Gencheck genName={genCheck.generator_name} register={register} errors={errors} inputStatus={inputStatus}/>
                <hr />
                <div className="w-full flex gap-2 justify-between">
                    <label className="flex items-center gap-2 text-red-700">
                        <input type="checkbox" className="checkbox checkbox-sm" required />
                        **โปรดตรวจสอบความถูกต้องก่อนกดยืนยัน
                    </label>
                    <div className="flex gap-2">
                        {
                            !inputStatus &&
                            <button type="submit" className="btn btn-success w-20 text-white" disabled={isLoading}>
                                {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
                            </button>                            
                        }

                        <Link to="/checklists/dasborad" className="btn w-20 text-black">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
