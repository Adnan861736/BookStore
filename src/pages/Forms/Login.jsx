import { useState } from "react";
import "./Forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // تأكد من وجود هذا

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    toast.success("Login successful!");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form_event_wrapper">
      <h1 className="form-title">Login to your account</h1>
      <ToastContainer theme="colored" />
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
    {showPassword ? (
  <i
    onClick={togglePasswordVisibility}
    className="bi bi-eye-fill show-password-icon"
  ></i>
) : (
  <i
    onClick={togglePasswordVisibility}
    className="bi bi-eye-slash-fill show-password-icon"
  ></i>
)}
        
        <button type="submit" className="btn_form">
          Login
        </button>
      </form>
      <div className="form-footer">
        Don't have an account?
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
