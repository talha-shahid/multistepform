// import NavButtons from "../../FormInputs/NavButtons";
// import React from "react";
// import { useSelector } from "react-redux";

// export default function FormConfirmation() {
//   const formData = useSelector((store) => store.assessment.formData);
//   async function processData(data) {
//     console.log(formData);
//   }
//   return (
//     <div>
//       <form className="px-12 py-4" onSubmit={processData}>
//         <div className="mb-8">
//           <h5 className="text-xl md:text-3xl font-bold text-gray-900">
//             Confirm and Submit Data
//           </h5>
//           <p>Confirm if this the Data that you filled</p>
//         </div>
//         <div className="grid gap-2 sm:grid-cols-2">
//           <code>
//             <pre>{JSON.stringify(formData, null, 2)}</pre>
//           </code>
//         </div>

//         <NavButtons />
//       </form>
//     </div>
//   );
// }




import NavButtons from "../../FormInputs/NavButtons";
import React from "react";
import { useSelector } from "react-redux";

// Replace this URL with your API endpoint
const API_URL = "http://localhost:5000/api/submit";

export default function FormConfirmation() {
  const formData = useSelector((store) => store.assessment.formData);

  // Function to make API call
  async function submitFormData(data) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function processData(event) {
    event.preventDefault();
    await submitFormData(formData);
  }

  return (
    <div>
      <form className="px-12 py-4" onSubmit={processData}>
        <div className="mb-8">
          <h5 className="text-xl md:text-3xl font-bold text-gray-900">
            Confirm and Submit Data
          </h5>
          <p>Confirm if this is the data that you filled</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <code>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </code>
        </div>

        <NavButtons />
      </form>
    </div>
  );
}
