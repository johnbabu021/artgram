import { useNavigate } from "react-router-dom";
import callApi from "../utils/callapi";
import InputHandler from "../hooks/inputhandler";
import "../styles/login.css";
import { useDispatch, useSelector } from "react-redux";
import { userToken } from "../redux/features/path/userslice";
import { useEffect } from "react";
export default function SignUp() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userName = InputHandler();
  const email = InputHandler();
  const password = InputHandler();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.token !== undefined) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="login__container">
      <div className="input__container">
        <div className="text__container">
          <h3>Sign Up here</h3>
          <div className="data__container">
            <div className="data__box">
              {/* </div> */}
              <label>Email</label>
              <input
                {...email}
                className="input"
                autoComplete="off"
                type={"email"}
                placeholder="Enter your email"
              />
            </div>
            <div className="data__box">
              <label>Username</label>
              <input
                {...userName}
                type="text"
                autoComplete="off"
                placeholder="Enter your username"
                className="input"
              />
            </div>
            <div className="data__box">
              <label>Password</label>
              <input
                {...password}
                className="input"
                type={"password"}
                placeholder="Enter your password"
              />
            </div>
            <button
              className="login__btn"
              onClick={async () => {
                const options = {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    username: userName.value,
                    email: email.value,
                    password: password.value,
                  }),
                };
                const data = await callApi("api/auth/register", options);
                console.log(data);
                if (data.token) {
                  await dispatch(userToken(data));
                  navigate("/");
                  localStorage.setItem("user", JSON.stringify(data));
                }
              }}
            >
              Signup
            </button>
            <label className="info__label">
              Already have an account?{" "}
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="directed"
              >
                Log In
              </button>
            </label>
          </div>
        </div>
      </div>
      <div className="login__image__container">
        <img className="login__image" src="login1.svg" />
      </div>
    </div>
  );
}
