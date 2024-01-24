

// import React from "react";

// function SignInForm() {
//   const [state, setState] = React.useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (evt) => {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value
//     });
//   };

//   const handleOnSubmit = (evt) => {
//     evt.preventDefault();

//     const { email, password } = state;
//     alert(`You are login with email: ${email} and password: ${password}`);

//     for (const key in state) {
//       setState({
//         ...state,
//         [key]: ""
//       });
//     }
//   };

//   return (
//     <div className="form-container sign-in-container">
//       <form onSubmit={handleOnSubmit}>
//         <h2 style={{ color: "black" }}>Sign in</h2>
//         <div className="social-container">
//           <a href="#" className="social" style={{ color: "black" }}>
//             <i className="fab fa-facebook-f" />
//           </a>
//           <a href="#" className="social" style={{ color: "black" }}>
//             <i className="fab fa-google-plus-g" />
//           </a>
//           <a href="#" className="social" style={{ color: "black" }}>
//             <i className="fab fa-linkedin-in" />
//           </a>
//         </div>
//         <span style={{ color: "black" }}>or use your account</span>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={state.email}
//           onChange={handleChange}
//           style={{ color: "black" }}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={state.password}
//           onChange={handleChange}
//           style={{ color: "black", placeholderColor: "gray" }}
//         />
//         <a href="#" style={{ color: "black" }}>
//           Forgot your password?
//         </a>
//         <button style={{ fontSize: "18px" }}>Sign In</button>
//       </form>
//     </div>
//   );
// }

// export default SignInForm;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faGooglePlusG,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";


// function SignInForm() {
//   const [state, setState] = React.useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (evt) => {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value,
//     });
//   };

//   const handleOnSubmit = (evt) => {
//     evt.preventDefault();

//     const { email, password } = state;
//     alert(`You are login with email: ${email} and password: ${password}`);

//     for (const key in state) {
//       setState({
//         ...state,
//         [key]: "",
//       });
//     }
//   };

//   return (
//     <div className="form-container sign-in-container">
//       <form onSubmit={handleOnSubmit}>
//         <h2 style={{ color: "black" ,fontSize:"37px" }}>Sign in</h2>
     
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
//         <span style={{ color: "black" }}>or use your account</span>
//         <div className="input-container">
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={state.email}
//             onChange={handleChange}
//             style={{ color: "black" }}
//           />
//         </div>
//         <div className="input-container">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={state.password}
//             onChange={handleChange}
//             style={{ color: "black" }}
//           />
//         </div>
//         <a href="#" style={{ color: "black" }}>
//           Forgot your password?
//         </a>
//         <button style={{ fontSize: "18px" }}>Sign In</button>
//       </form>
//     </div>
//   );
// }

// export default SignInForm;


import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function SignInForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: "", // Clear error when the user types
      },
    }));
  };

  const validateForm = () => {
    const { email, password } = state;
    let isValid = true;

    const errors = {
      email: "",
      password: "",
    };

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    // Validate password not empty
    if (!password) {
      errors.password = "Password cannot be empty";
      isValid = false;
    }

    setState((prevState) => ({
      ...prevState,
      errors,
    }));

    return isValid;
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (validateForm()) {
      // Form is valid, perform other actions if needed
      const { email, password } = state;
      alert(`You are login with email: ${email} and password: ${password}`);

      // Reset the form
      setState({
        email: "",
        password: "",
        errors: {
          email: "",
          password: "",
        },
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h2 style={{ color: "black", fontSize: "37px" }}>Sign in</h2>

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
        <span style={{ color: "black" }}>or use your account</span>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
            style={{ color: "black" }}
          />
          {state.errors.email && <p style={{ color: "red" }}>{state.errors.email}</p>}
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            style={{ color: "black" }}
          />
          {state.errors.password && <p style={{ color: "red" }}>{state.errors.password}</p>}
        </div>
        <a href="#" style={{ color: "black" }}>
          Forgot your password?
        </a>
        <button style={{ fontSize: "18px" }}>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
