import { Login } from "../Login-SignUp/Login";
import { useState } from "react";
import { School } from "./School";
export const SchoolSyllabus = () => {
  const [show, setShow] = useState(false);
  const handleLogin = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div>
      <School>
        <div className="header">
          <div className="navbar">
            <img
              src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
              alt="logo"
            />

            {show ? (
              <>
                <Login handleLogin={handleLogin}></Login>
              </>
            ) : (
              <button onClick={handleLogin} className="button">
                Login
              </button>
            )}
          </div>
        </div>
      </School>
    </div>
  );
};
