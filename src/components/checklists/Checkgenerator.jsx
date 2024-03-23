import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Gencheck from '../utils/gencheck';
import { useNavigate } from 'react-router-dom';

export default function Checkgenerator() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [step, setStep] = useState(1);

    const onSubmit = async (data) => {
        console.log(data);
        // Perform form submission logic here
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    return (
        <div className="bg-white p-10">
            <h1 className="text-4xl font-bold mb-5">Checklist Generator</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 my-5 text-center">
                <div>
                    <ul className="steps w-full">
                        <li className="step step-primary">Generator 1</li>
                        <li className={step === 2 || step === 3 ? "step step-primary" : "step"}>Generator 2</li>
                        <li className={step === 3 ? "step step-primary" : "step"}>Generator 3</li>
                    </ul>
                </div>
                {step === 1 && <Gencheck name="generator1" register={register} />}
                {step === 2 && <Gencheck name="generator2" register={register} />}
                {step === 3 && <Gencheck name="generator3" register={register} />}
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
                        {step !== 3 ? (
                            <button type="button" className="btn btn-success w-20 text-white" onClick={handleNext} disabled={isLoading}>
                                {isLoading ? <span className="loading loading-spinner"></span> : 'Next'}
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-success w-20 text-white" disabled={isLoading}>
                                {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
