import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";
function App() {
  return (
    <>
      <div>
        <h1>Normal form</h1>
        <RegistrationForm />
        <hr />

        <h1>Formik Form</h1>
        <formikForm />
      </div>
    </>
  );
}

export default App;
