import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    phone: yup
        .string()
        .required('Phone number is a required field'),
    email: yup
        .string()
        .required('Email is a required field')
        .email('Email should have correct format'),
});

function Step2({ formData, setFormData, nextStep, prevStep, setFinishedSteps, finishedSteps }) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const currentStep = 1;

    const onSubmit = (data) => {
        console.log('submitting data ', data);
        setFormData({ ...formData, ...data });

        // Create a new array with the same length as finishedSteps
        const updatedFinishedSteps = Array.from({ length: finishedSteps.length }, (_, index) =>
            index === currentStep ? true : finishedSteps[index]
        );

        setFinishedSteps(updatedFinishedSteps);
        nextStep();
    };
    return (
        <div className="max-w-2xl mx-auto mt-8 p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8 relative">
                    <label htmlFor="phone" className="flex text-sm font-semibold mb-2">
                        Phone Number
                    </label>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue={formData.phone}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                data-testid="phone"
                                placeholder="123-456-7890"
                                className="w-full p-2 border rounded"
                            />
                        )}
                    />
                    {errors?.phone && (
                        <p className="absolute text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>

                <div className="mb-8 relative">
                    <label htmlFor="email" className="flex text-sm font-semibold mb-2">
                        Email
                    </label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={formData.email}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="email"
                                data-testid="email"
                                placeholder="example@example.com"
                                className="w-full p-2 border rounded"
                            />
                        )}
                    />
                    {errors?.email && (
                        <p className="absolute text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="flex justify-between">
                    <button
                        data-testid="back"
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Back
                    </button>

                    <button
                        type="submit"
                        data-testid="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Step2;
