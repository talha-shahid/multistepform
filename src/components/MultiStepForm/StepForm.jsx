
import { useSelector } from "react-redux";
import EducationBackgroundForm from "./StepForms/EducationBackgroundForm";
import FormConfirmation from "./StepForms/FormConfirmation";
import WellBeingForm from "./StepForms/WellBeingForm";
import WeatherForm from "./StepForms/WeatherForm";
import HobbiesForm from "./StepForms/HobbiesForm";

export default function StepForm() {
  const currentStep = useSelector((store) => store.assessment.currentStep);
  function renderFormByStep(step) {
    if (step === 1) {
      return <WellBeingForm />;
    }
     else if (step === 2) {
      return <EducationBackgroundForm />;
    } 
    else if (step === 3) {
      return <WeatherForm />;
    } 
    else if (step === 4) {
      return <HobbiesForm />;
    } else if (step === 5) {
      return <FormConfirmation />;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
}
