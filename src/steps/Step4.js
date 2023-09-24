import React from 'react';

function Step4({ formData, prevStep, submitForm, }) {



    return (
        <div className="max-w-2xl mx-auto mt-8 p-4">
            <h1 className="text-2xl font-bold mb-4">Review Your Information</h1>
            <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-center gap-1 items-center mb-4 border-b border-gray-300">
                    <p className="text-sm font-semibold">First Name:</p>
                    <p data-testid="firstName" className="text-lg">{formData.firstName}</p>
                </div>
                <div className="flex justify-center gap-1 items-center mb-4 border-b border-gray-300">
                    <p className="text-sm font-semibold">Last Name:</p>
                    <p data-testid="lastName" className="text-lg">{formData.lastName}</p>
                </div>
                <div className="flex justify-center gap-1 items-center mb-4 border-b border-gray-300">
                    <p className="text-sm font-semibold">Age:</p>
                    <p data-testid="age" className="text-lg">{formData.age}</p>
                </div>
                <div className="flex justify-center gap-1 items-center mb-4 border-b border-gray-300">
                    <p className="text-sm font-semibold">Phone Number:</p>
                    <p data-testid="phone" className="text-lg">{formData.phone}</p>
                </div>
                <div className="flex justify-center gap-1 items-center mb-4 border-b border-gray-300">
                    <p className="text-sm font-semibold">Email:</p>
                    <p data-testid="email" className="text-lg">{formData.email}</p>
                </div>
                <div className="flex justify-center gap-1 items-center mb-4 border-b border-gray-300">
                    <p className="text-sm font-semibold">Seat:</p>
                    <p data-testid="seat" className="text-lg">{formData.seat}</p>
                </div>
                <div className="flex justify-center gap-1 items-center mb-4 border-b border-gray-300">
                    <p className="text-sm font-semibold">Food:</p>
                    <p data-testid="food" className="text-lg">{formData.food}</p>
                </div>
                <div className="flex justify-center gap-1 items-center mb-4">
                    <p className="text-sm font-semibold">Allergies:</p>
                    <p data-testid="allergies" className="text-lg">{formData.allergies}</p>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <button
                    data-testid="back"
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Back
                </button>

                <button
                    data-testid="submit"
                    type="button"
                    onClick={submitForm}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Step4;
