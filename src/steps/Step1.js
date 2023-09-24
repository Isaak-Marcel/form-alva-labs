import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is a required field')
    .matches(/^[A-Za-z]+$/, 'First name should not contain numbers'),
  lastName: yup
    .string()
    .required('Last name is a required field')
    .matches(/^[A-Za-z]+$/, 'Last name should not contain numbers'),
  age: yup
    .number()
    .typeError('Age must be a number') // Override the error message for non-numeric input
    .required('Age must be a number')
    .positive('Age should be positive'),
});

function Step1({ formData, setFormData, nextStep, prevStep, setFinishedSteps, finishedSteps }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const currentStep = 0;

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
      <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}  >
        <div className="mb-8">
          <label htmlFor="firstName" className="flex text-sm font-semibold mb-2">
            First Name
          </label>
          <Controller
            name="firstName"
            control={control}
            defaultValue={formData.firstName}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                data-testid="firstName"
                placeholder="Isaak"
                className="w-full p-2 border rounded"
              />
            )}
          />
          {errors?.firstName && (
            <p className=" absolute text-red-600 text-sm mt-1 ">{errors.firstName.message}</p>
          )}
        </div>

        <div className="mb-8 relative">
          <label htmlFor="lastName" className="flex text-sm font-semibold mb-2">
            Last Name
          </label>
          <Controller
            name="lastName"
            control={control}
            defaultValue={formData.lastName}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                data-testid="lastName"
                placeholder="Dinesen"
                className="w-full p-2 border rounded"
              />
            )}
          />
          {errors?.lastName && (
            <p className=" absolute text-red-600 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>

        <div className="mb-8  relative">
          <label htmlFor="age" className="flex text-sm font-semibold mb-2 ">
            Age
          </label>
          <Controller
            name="age"
            control={control}
            defaultValue={formData.age}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                data-testid="age"
                placeholder="30"
                className="w-full p-2 border rounded"
              />
            )}
          />
          {errors?.age && <p className=" absolute text-red-600 text-sm mt-1">{errors.age.message}</p>}
        </div>

        <button
          type="submit"
          data-testid="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Step1;
