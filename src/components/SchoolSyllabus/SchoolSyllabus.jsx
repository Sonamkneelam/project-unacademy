/** @format */
import React from "react";

import { Login } from "../Login-SignUp/Login";
import { useState } from "react";
import { School } from "./School";
import axios from "axios";

export const SchoolSyllabus = ({ cat, courseId }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  console.log("user:", user);
  const handleUser = (e) => {
    console.log("e:", e);
    setUser(e);
  };

  const handleUserDetails = async () => {
    const { data } = await axios.get("http://localhost:3001/users");
    const [userDetails] = data.filter((e) => e.number === user);
    console.log("userDetails:", userDetails);
    // console.log("data:", data);
    const courseDetails = {
      board: "CBSE",
      boardId: 9,
      category: cat,
      courdeId: courseId,
    };
    axios.patch(`http://localhost:3001/users/${userDetails.id}`, courseDetails);
  };

  const handleLogin = () => {
    setShow(!show);
    console.log(show);
  };
  if (user) {
    handleUserDetails();
  }
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
                <Login
                  handleLogin={handleLogin}
                  handleUser={handleUser}
                ></Login>
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
