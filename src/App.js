import Steps from "./components/MultiStepForm/Steps";
import StepForm from "./components/MultiStepForm/StepForm";



function App() {

  const steps = [
    {
      number: 1,
      title: "How was your week overall?",
    },
    {
      number: 2,
      title: "How is the weather today?",
    },
    {
      number: 3,
      title: "Programming Experience",
    },
    {
      number: 4,
      title: "Preferred Programming Languages",
    },
    {
      number: 5,
      title: "Technical Skills Assessment",
    },
    {
      number: 6,
      title: "Submit and Confirmation",
    },
  ];

  return (
<div className="bg-blue-50 min-h-screen p-4">
      <div className="mx-auto w-full max-w-5xl  bg-white border border-gray-200 rounded-lg shadow  grid grid-cols-12 gap-4 min-h-screen">
        {/* Steps */}
        <Steps steps={steps} />
        {/* Form */}
        <div className="rounded-lg col-span-full md:col-span-6">
          <StepForm />
        </div>
      </div>
    </div>
  );
}

export default App;


