import { useState } from 'react';
import './App.css';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import NavBar from './NavBar';
import StepsOverview from './StepsOverview';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [finishedSteps, setFinishedSteps] = useState([false, false, false, false]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',

    phone: '',
    email: '',

    seat: '',
    food: '',
    allergies: '',
  });

  const stepsToComponent = {
    0: Step1,
    1: Step2,
    2: Step3,
    3: Step4,
  };
  const StepComponent = stepsToComponent[currentStep];

  return (
    <div className="App flex flex-col  h-screen">
      <div className=' w-full'>
        <NavBar />
      </div>
      <div className='flex flex-grow '>
        <div className="w-1/4 bg-gray-200 p-4">
          <StepsOverview
            goToStep={(step) => setCurrentStep(step)}
            finishedSteps={finishedSteps}
            currentStep={currentStep}
          />
        </div>
        <div className="w-3/4 bg-gray-100 p-4 flex items-center justify-center">
          <div className=' w-full mb-32'>
            <StepComponent
              nextStep={() => setCurrentStep(currentStep + 1)}
              prevStep={() => setCurrentStep(currentStep - 1)}
              setFormData={setFormData}
              formData={formData}
              finishedSteps={finishedSteps}
              setFinishedSteps={setFinishedSteps}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
