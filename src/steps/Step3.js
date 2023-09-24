import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  seat: yup
    .string()
    .required('Seat is a required field'),
  food: yup
    .string()
    .required('Food is a required field'),
  allergies: yup
    .string()
    .required('Allergies is a required field'),
});

function Step3({ formData, setFormData, nextStep, prevStep, setFinishedSteps,finishedSteps }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const currentStep = 2;

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
      <h1 className="text-2xl font-bold mb-4">Additional Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8 relative">
          <label htmlFor="seat" className="flex text-sm font-semibold mb-2">
            Seat
          </label>
          <Controller
            name="seat"
            control={control}
            defaultValue={formData.seat}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                data-testid="seat"
                placeholder="A12"
                className="w-full p-2 border rounded"
              />
            )}
          />
          {errors?.seat && (
            <p className="absolute text-red-600 text-sm mt-1">{errors.seat.message}</p>
          )}
        </div>

        <div className="mb-8 relative">
          <label htmlFor="food" className="flex text-sm font-semibold mb-2">
            Food
          </label>
          <Controller
            name="food"
            control={control}
            defaultValue={formData.food}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                data-testid="food"
                placeholder="Vegetarian"
                className="w-full p-2 border rounded"
              />
            )}
          />
          {errors?.food && (
            <p className="absolute text-red-600 text-sm mt-1">{errors.food.message}</p>
          )}
        </div>

        <div className="mb-8 relative">
          <label htmlFor="allergies" className="flex text-sm font-semibold mb-2">
            Allergies
          </label>
          <Controller
            name="allergies"
            control={control}
            defaultValue={formData.allergies}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                data-testid="allergies"
                placeholder="None"
                className="w-full p-2 border rounded"
              />
            )}
          />
          {errors?.allergies && (
            <p className="absolute text-red-600 text-sm mt-1">{errors.allergies.message}</p>
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

export default Step3;
