// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faGooglePlusG,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";

// function SignUpForm() {
//   const [state, setState] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobileNumber: "",
//     password: "",
//     acceptTerms: false,
//   });

//   const handleChange = (evt) => {
//     const value =
//       evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;

//     setState({
//       ...state,
//       [evt.target.name]: value,
//     });
//   };

//   const isFormValid = () => {
//     const { firstName, lastName, email, mobileNumber, password, acceptTerms } =
//       state;

//     // Add your specific validation conditions here
//     return (
//       firstName.trim() !== "" &&
//       lastName.trim() !== "" &&
//       email.trim() !== "" &&
//       mobileNumber.trim() !== "" &&
//       password.trim() !== "" &&
//       acceptTerms
//     );
//   };

//   const handleOnSubmit = (evt) => {
//     evt.preventDefault();

//     if (!isFormValid()) {
//       alert("Please fill in all the required fields and accept the terms.");
//       return;
//     }

//     const { firstName, lastName, email, mobileNumber, password } = state;

//     alert(
//       `You are sign up with first name: ${firstName}, last name: ${lastName}, email: ${email}, mobile number: ${mobileNumber}, and password: ${password}`
//     );

//     for (const key in state) {
//       setState({
//         ...state,
//         [key]: "",
//       });
//     }
//   };

//   return (
//     <div className="form-container sign-up-container">
//       <form onSubmit={handleOnSubmit}>
//         <h2 style={{ color: "black", fontSize: "50px" }}>Create Account</h2>
//         <div className="social-container">
//           <a href="#" className="social">
//             <FontAwesomeIcon icon={faFacebookF} />
//           </a>
//           <a href="#" className="social">
//             <FontAwesomeIcon icon={faGooglePlusG} />
//           </a>
//           <a href="#" className="social">
//             <FontAwesomeIcon icon={faLinkedinIn} />
//           </a>
//         </div>
//         <span>or use your email for registration</span>
//         <input
//           type="text"
//           name="firstName"
//           value={state.firstName}
//           onChange={handleChange}
//           placeholder="First Name"
//         />
//         <input
//           type="text"
//           name="lastName"
//           value={state.lastName}
//           onChange={handleChange}
//           placeholder="Last Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={state.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         <input
//           type="tel"
//           name="mobileNumber"
//           value={state.mobileNumber}
//           onChange={handleChange}
//           placeholder="Mobile Number"
//         />
//         <input
//           type="password"
//           name="password"
//           value={state.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <div style={{ color: "gray" }}>
//           <input
//             type="checkbox"
//             name="acceptTerms"
//             checked={state.acceptTerms}
//             onChange={handleChange}
//           />
//           <label style={{ marginLeft: "8px" }}>
//             I accept the terms and conditions.
//           </label>
//         </div>
//         <button>Sign Up</button>
//       </form>
//       <p>
//         By creating an account, you agree to our{" "}
//         <a href="/policy">Terms & Privacy</a>.
//       </p>
//     </div>
//   );
// }

// export default SignUpForm;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function SignUpForm() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    acceptTerms: false,
  });

  const handleChange = (evt) => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;

    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const isFormValid = () => {
    const { firstName, lastName, email, mobileNumber, password, acceptTerms } =
      state;

    // Add your specific validation conditions here
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      mobileNumber.trim() !== "" &&
      password.trim() !== "" &&
      acceptTerms
    );
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (!isFormValid()) {
      alert("Please fill in all the required fields and accept the terms.");
      return;
    }

    const { firstName, lastName, email, mobileNumber, password } = state;

    alert(
      `You are sign up with first name: ${firstName}, last name: ${lastName}, email: ${email}, mobile number: ${mobileNumber}, and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 style={{ color: "black", fontSize: "37px" }}>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="#" className="social">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <span style={{ color: "black" }}>or use your email for registration</span>
        <div className="input-container">
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            placeholder="First Name *"
            style={{ color: "black" }}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="lastName *"
            value={state.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            style={{ color: "black" }}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email *"
            style={{ color: "black" }}
          />
        </div>
        <div className="input-container">
          <input
            type="tel"
            name="mobileNumber"
            value={state.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number *"
            style={{ color: "black" }}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password *"
            style={{ color: "black" }}
          />
        </div>
        <div style={{ color: "gray" }}>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={state.acceptTerms}
            onChange={handleChange}
            
          />
          <label style={{ marginLeft: "8px" }}>
            I accept the terms and conditions.
          </label>
        </div>
        <button style={{ fontSize: "18px" }}>Sign Up</button>
      </form>
      <p>
        By creating an account, you agree to our{" "}
        <a href="/policy">Terms & Privacy</a>.
      </p>
    </div>
  );
}

export default SignUpForm;
