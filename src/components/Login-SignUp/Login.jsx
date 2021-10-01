import { LoginCard } from "./LoginCard";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonCloseLogin } from "./ButtonCloseLogin";
import { useState } from "react";
import { firebase, auth } from "../../Configs/firebase";
//import { Redirect } from "react-router-dom";
import styles from "./LoginSign.module.css";
import axios from "axios";

export const Login = ({ handleLogin, handleUser }) => {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
//  const [direct, setDirect] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [login, setLogin] = useState(false);

  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    const payload = {
      name: name,
      email: email,
      state: state,
      number: mynumber,
    };
    final
      .confirm(otp)
      .then((result) => {
        console.log("result:", result);
        // success
        if (login) {
          handleUser(mynumber);
        } else {
          axios.post("http://localhost:4000/users", payload);

          handleUser(mynumber);
        }
        //setDirect(true);
        handleLogin();
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <LoginCard>
      <ButtonCloseLogin
        className="close-login-button"
        onClick={() => {
          handleLogin();
        }}
      >
        <CloseIcon></CloseIcon>
      </ButtonCloseLogin>

      {show ? (
        <>
          <div>
            <div className="login">Enter OTP</div>
            <div className="signup">
              or <span>login to your account</span>
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter Mobile Number"
                value={mynumber}
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
              />
            </div>
            <input
              type="text"
              className={styles.otp}
              placeholder="One Time Password"
              onChange={(e) => {
                setotp(e.target.value);
              }}
            ></input>
            <div className={styles.formContainer}>
              <input
                value={name}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
              ></input>
              <input
                value={email}
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              ></input>
              <input
                value={state}
                type="text"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                placeholder="State"
              ></input>

              <button
                className={styles.verify}
                style={{
                  backgroundColor: otp.length >= 6 ? "#08bd80" : "#e9eef2",
                  color: otp.length >= 6 ? "white" : "#6e7d85",
                }}
                onClick={ValidateOtp}
              >
                Verify
              </button>
            </div>
            {/* {direct ? <Redirect to="/success"></Redirect> : ""} */}
          </div>
        </>
      ) : (
        <>
          {login ? (
            <>
              <div className="login">Login</div>
              <div className="signup">
                or{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setLogin(!login);
                    console.log(login);
                  }}
                >
                  create your account
                </span>
              </div>
              <div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter Mobile Number"
                  value={mynumber}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                />
              </div>
              <div className={styles.buttonContainer}>
                <div
                  className={styles.recaptcha}
                  id="recaptcha-container"
                ></div>
                <button
                  className={styles.button}
                  style={{
                    backgroundColor:
                      mynumber.length >= 10 ? "#08bd80" : "#e9eef2",
                    color: mynumber.length >= 10 ? "white" : "#6e7d85",
                  }}
                  onClick={signin}
                >
                  Login
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="login">Join Unacademy</div>
              <div className="signup">
                or{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setLogin(!login);
                    console.log(login);
                  }}
                >
                  login to your account
                </span>
              </div>
              <div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter Mobile Number"
                  value={mynumber}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                />
              </div>
              <div className={styles.buttonContainer}>
                <div
                  className={styles.recaptcha}
                  id="recaptcha-container"
                ></div>
                <button
                  className={styles.button}
                  style={{
                    backgroundColor:
                      mynumber.length >= 10 ? "#08bd80" : "#e9eef2",
                    color: mynumber.length >= 10 ? "white" : "#6e7d85",
                  }}
                  onClick={signin}
                >
                  Login
                </button>
              </div>
            </>
          )}
        </>
      )}
    </LoginCard>
  );
};
