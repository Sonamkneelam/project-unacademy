import { LoginCard } from "./LoginCard";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonCloseLogin } from "./ButtonCloseLogin";
import { useState } from "react";
import { firebase, auth } from "../../Configs/firebase";
import { Redirect } from "react-router-dom";
export const Login = ({ handleLogin }) => {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const [direct, setDirect] = useState(false);

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
    final
      .confirm(otp)
      .then((result) => {
        console.log("result:", result);
        // success
        setDirect(true);
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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="login">Login</div>
      <div className="signup">
        or <span>create your account</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mynumber}
          onChange={(e) => {
            setnumber(e.target.value);
          }}
        />
      </div>
      <div id="recaptcha-container"></div>
      <button onClick={signin}>Send OTP</button>
      <div style={{ display: show ? "block" : "none" }}>
        <input
          type="text"
          placeholder={"Enter your OTP"}
          onChange={(e) => {
            setotp(e.target.value);
          }}
        ></input>

        <button onClick={ValidateOtp}>Verify</button>
      </div>
      {direct ? <Redirect to="/success"></Redirect> : <>Not logged in</>}
    </LoginCard>
  );
};
