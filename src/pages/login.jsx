import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputHandler from "../hooks/inputhandler";
import { userToken } from "../redux/features/path/userslice";
import "../styles/login.css";
import callApi from "../utils/callapi";
export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const email = InputHandler();
  const password = InputHandler();
  useEffect(() => {
    if (user.token !== undefined) {
      navigate("/");
    }
  }, [user]);
  // console.log(user)
  console.log(password.value);
  return (
    <div className="login__container">
      <div className="input__container">
        <div className="text__container">
          <h3>Welcome Back</h3>
          <div className="data__container">
            <div className="data__box">
              {/* </div> */}
              <label>Email</label>
              <input
                {...email}
                className="input"
                type={"email"}
                placeholder="Enter your email"
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
              onClick={async () => {
                //backend design conflict
                //signup and login with diffrent data response
                //create a profile image updater and cover image updater
                //then look forward on changing api methods
                //resize issue on login is the same problem
                const options = {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                  }),
                };
                const data = await callApi("api/auth/login", options);
                if (data.token) {
                  console.log(data);
                  const user = {
                    _id: data._id,
                    username: data.username,
                    email: data.email,
                  };
                  await dispatch(
                    userToken({
                      token: data.token,
                      user: user,
                    })
                  );
                  localStorage.setItem(
                    "user",
                    JSON.stringify({ token: data.token, user })
                  );
                  navigate("/");
                }
              }}
              className="login__btn"
            >
              Login
            </button>
            <label className="info__label">
              Don't have an account?{" "}
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="directed"
              >
                Sign Up
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
