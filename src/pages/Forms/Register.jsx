import { useState } from "react";
import "./Forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const OnSubmi_Hander = (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      return toast.error("Email is required");
    }
    if (username.trim() === "") {
      return toast.error("Username is required");
    }
    if (password.trim() === "") {
      return toast.error("Password is required");
    }
    if (password !== confirmpassword) {
      return toast.warning("Password and confirmation do not match");
    }
    toast.success("Register successful!");
    console.log(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="form_event_wrapper">
      <h1 className="form-title">Create new account</h1>
      <ToastContainer theme="colored" />
      <form onSubmit={OnSubmi_Hander} className="form">
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setusername(e.target.value)}
          value={username}
          type="text"
          placeholder="Username"
        />

        {/* Password field with toggle */}
        <div className="password-field">
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <i
            onClick={togglePasswordVisibility}
            className={`bi ${
              showPassword ? "bi-eye-fill" : "bi-eye-slash-fill"
            } show-password-icon`}
          ></i>
        </div>

        {/* Confirm Password field with toggle */}
        <div className="password-field">
          <input
            onChange={(e) => setconfirmpassword(e.target.value)}
            value={confirmpassword}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <i
            onClick={toggleConfirmPasswordVisibility}
            className={`bi ${
              showConfirmPassword ? "bi-eye-fill" : "bi-eye-slash-fill"
            } show-password-icon`}
          ></i>
        </div>

        <button className="btn_form">Register</button>
      </form>
    </div>
  );
}

export default Register;
