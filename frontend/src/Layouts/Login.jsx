import { useForm } from "react-hook-form";
import "../Layouts/Login.scss";
import formimage from "../assets/lxrcbsv-200Ts_TL1MM-unsplash.jpg";
import email from "../assets/email-contact-ui-web-svgrepo-com.svg";
import password from "../assets/password-safe-manager-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { getItem } from "./FakeLocalStorage";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const storedUser = getItem("user");

  const onSubmit = (data) => {
    // Add logic for handling login, e.g., sending a request to a server
    if (
      storedUser &&
      data.email === storedUser.email &&
      data.password === storedUser.password
    ) {
      navigate("/main");
    } else {
      // Handle login failure or redirect to register page
      navigate("/");
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
          <p>Login To Your Account To Get the Full Experience</p>
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
          <div className="input">
            <input type="submit" value="Login" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
