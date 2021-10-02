import { Card } from "./Card";
import { Overlay } from "../Login-SignUp/Overlay";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../Login-SignUp/LoginSign.module.css";
import { ButtonCloseLogin } from "../Login-SignUp/ButtonCloseLogin";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
//

//Add in parent
//  const [show, setShow] = useState(false);
//  const handleLogin = () => {
//    setShow(!show);
//    console.log(show);
//  };

export const CouponCode = ({ handleLogin }) => {
  const [coupon, setCoupon] = useState("");
  const [code, setCode] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleCoupon = () => {
    if (coupon === "UNACADEMY") {
      setSuccess(!success);
    } else {
      setAlert(!alert);
    }
  };
  return (
    <div>
      <Overlay></Overlay>
      <Card>
        <ButtonCloseLogin
          className="close-login-button"
          onClick={() => {
            handleLogin();
          }}
        >
          <CloseIcon></CloseIcon>
        </ButtonCloseLogin>{" "}
        {success ? (
          <>
            <div className="succesContainer">
              <CheckCircleIcon
                style={{ width: "83px", height: "83px", margin: "50% 0 10% " }}
                color="success"
              ></CheckCircleIcon>

              <div>Awesome you have unlocked the free plan!</div>
            </div>
          </>
        ) : (
          <div>
            <div className="login">
              Enter an invite code to unlock your free plan
            </div>

            <div className={styles.formContainer} style={{ top: "25%" }}>
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value);
                }}
              />

              {!alert ? (
                ""
              ) : (
                <div
                  style={{ color: "red", fontSize: "13px", paddingLeft: "5px" }}
                >
                  Wrong Code!
                </div>
              )}
              <div className="buttonContainer">
                <button
                  style={{
                    backgroundColor: coupon.length >= 6 ? "#08bd80" : "#e9eef2",
                    color: coupon.length >= 6 ? "white" : "#6e7d85",
                  }}
                  onClick={handleCoupon}
                >
                  Unlock
                </button>

                <button
                  onClick={() => {
                    setCode(!code);
                  }}
                >
                  {code ? "Try the code UNACADEMY" : "Don't have one?"}
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
