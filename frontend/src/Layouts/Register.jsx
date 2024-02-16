import { useForm } from "react-hook-form";
import "./Register.scss";
import formimage from "../assets/84961f471d0ea8686537adbe755f7a3c.jpg";
import email from "../assets/email-contact-ui-web-svgrepo-com.svg";
import password from "../assets/password-safe-manager-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { setItem } from "./FakeLocalStorage";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm();

  // Watch the "password" and "confirmPassword" fields
  const passwordValue = watch("password", "");
  const confirmPasswordValue = watch("confirmPassword", "");

  const onSubmit = (data) => {
    // Add logic for handling registration, e.g., sending a request to a server
    if (data) {
      setItem("user", data);
      navigate("/login");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="form-holder">
        <div className="f-imager">
          <img src={formimage} alt="" />
          <p>Register To Create Your Account</p>
          <p className="register-message">Create an account and grow with us</p>
          <NavLink to="/login">
            <button>or login</button>
          </NavLink>
        </div>
        <div className="f-f-f-f">
          <div className="input">
            <div className="email-input">
              <label>Email:</label>
              <img src={email} alt="" />
            </div>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="input">
            <div className="email-input">
              <label>Password:</label>
              <img src={password} alt="" />
            </div>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            <p>{errors.password?.message}</p>
          </div>
          {/* Additional Input Fields */}
          <div className="input">
            <label>Full Name:</label>
            <input type="text" {...register("fullName")} />
          </div>
          <div className="input">
            <label>Confirm Password:</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
            />
            <p>{errors.confirmPassword?.message}</p>
          </div>
          {/* Login Button */}
          <div className="input">
            <input type="submit" value="REGISTER" disabled={!isDirty} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
