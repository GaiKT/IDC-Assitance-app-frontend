import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Gencheck from '../utils/gencheck';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../contexts/authentication';
import axios from 'axios';

export default function Checkgenerator() {
    const { state , apiUrl } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const formRef = useRef();

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
            data.generator_name = `generator${step}`
            console.log(data)
            setIsLoading(true);
            let result = await axios.post(`${apiUrl}/checklists/generator`, { ...data, user_id: state.user.id });
            console.log(result)
            if (step === 3) {
                navigate('/');
                Toast.fire({
                    icon: 'success',
                    title: 'Checklists sent successfully!',
                });
            } else {
                setStep(step + 1);
                formRef.current.reset();
            }
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'Failed to send checklist. Please try again later.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    return (
        <div className="bg-white p-10">
            <h1 className="text-4xl font-bold mb-5">Checklist Generator</h1>
            <hr />
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 my-5 text-center">
                <div>
                    <ul className="steps w-full">
                        {[1, 2, 3].map((index) => (
                            <li key={index} className={step >= index ? 'step step-primary' : 'step'}>
                                Generator {index}
                            </li>
                        ))}
                    </ul>
                </div>
                <Gencheck genName={`Generator${step}`} register={register} errors={errors} />
                <hr />
                <div className="w-full flex gap-2 justify-between">
                    <label className="flex items-center gap-2 text-red-700">
                        <input type="checkbox" className="checkbox checkbox-sm" required />
                        **โปรดตรวจสอบความถูกต้องก่อนกดยืนยัน
                    </label>
                    <div className="flex gap-2">
                        {step !== 1 && (
                            <button type="button" className="btn w-20 text-black" onClick={handleBack}>
                                Back
                            </button>
                        )}
                        <button type="submit" className="btn btn-success w-20 text-white" disabled={isLoading}>
                            {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
