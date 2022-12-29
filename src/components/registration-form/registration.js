import { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router";

function Registration() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitter] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setFormValues({ ...formValues, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setFormValues({ ...formValues, lastName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setFormValues({ ...formValues, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.firstName && formValues.lastName && formValues.email) {
      setValid(true);
    }
    setSubmitter(true);
  };

  const navigate = useNavigate();

  return (
    <div className="register-whole-container">
      <div className="backButton"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="submitted-register-form">
            Success! Thank you for registering
          </div>
        ) : null}
        <div className="input-container">
          <input
            className="register-input"
            type="text"
            placeholder="First Name"
            value={formValues.firstName}
            onChange={handleFirstNameInputChange}
          />
        </div>
        {submitted && !formValues.firstName ? (
          <div className="alert-text">Please Enter First Name</div>
        ) : null}
        <div className="input-container">
          <input
            className="register-input"
            type="text"
            placeholder="Last Name"
            value={formValues.lastName}
            onChange={handleLastNameInputChange}
          />
        </div>
        {submitted && !formValues.lastName ? (
          <div className="alert-text">Please Enter Last Name</div>
        ) : null}
        <div className="input-container">
          <input
            className="register-input"
            type="text"
            placeholder="Email"
            value={formValues.email}
            onChange={handleEmailInputChange}
          />
        </div>
        {submitted && !formValues.firstName ? (
          <div className="alert-text">Please enter Email</div>
        ) : null}
        <button className="register-button">Register</button>
      </form>
    </div>
  );
}

export default Registration;
