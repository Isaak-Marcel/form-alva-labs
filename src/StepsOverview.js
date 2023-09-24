import React from 'react';

function StepsOverview({ goToStep, finishedSteps, currentStep }) {
  const stepIndexToTitle = {
    0: 'Personal Information',
    1: 'Contact Information',
    2: 'Additional Information',
    3: 'Review Your Information',
  };

  return (
    <div className="flex flex-col w-full ">
      {finishedSteps.map((step, index) => (

        <div key={index} className={`bg-slate-400 hover:bg-gray-500 ${index === 0 ? 'rounded-t-xl ' : index === finishedSteps.length - 1 ? 'rounded-b-xl' : ''} `}>
          <button
         
            className={`w-full py-2 px-4 text-white font-semibold border-b
          ${currentStep === index ? 'bg-gray-500' : ''}
          ${step ? 'bg-green-500' : ''}
          ${index === 0 ? 'rounded-t-xl ' : index === finishedSteps.length - 1 ? 'rounded-b-xl' : ''}
          flex items-center
          h-16
            `}
            onClick={() => goToStep(index)}
          >
            <span className="mr-2">Step {index}:</span>
            <span>{stepIndexToTitle[index]}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default StepsOverview;
