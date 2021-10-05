/** @format */
import React from "react";

import { Login } from "../Login-SignUp/Login";
import { useState, useContext, useEffect } from "react";
import { School } from "./School";
import axios from "axios";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { UserContext } from "../../Contexts/UserContext";

export const SchoolSyllabus = ({ cat, courseId }) => {
  const { handleChange, dModel } = useContext(UserContext);
  const [show, setShow] = useState(dModel || false);
  const [user, setUser] = useState("");
  // console.log("user:", user);
  const handleUser = (e) => {
    // console.log("e:", e);
    setUser(e);
    handleChange(e);
  };
  // console.log(show)

  // const setShowData=(data) =>{
  //   console.log()
  // }
  useEffect(() => {
    setShow(dModel);
  }, [dModel]);

  const handleUserDetails = async () => {
    const { data } = await axios.get("https://my-cool-projectdb.herokuapp.com/users");
    const [userDetails] = data.filter((e) => e.number === user);
    console.log("userDetails:", userDetails);
    // console.log("data:", data);
    const courseDetails = {
      board: "CBSE",
      boardId: 9,
      category: cat,
      courdeId: courseId,
    };
    if (userDetails !== undefined) send(userDetails.id, courseDetails);
  };
  const send = (id, courseDetails) => {
    axios.patch(`http://localhost:3001/users/${id}`, courseDetails);
  };

  const handleLogin = () => {
    setShow(!show);
    // console.log(show);
  };
  if (user) {
    handleUserDetails();
  }
  return (
    <div>
      <School>
        <div className="header">
          <div className="navbar">
            <div>
              <img
                src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
                alt="logo"
              />
              <div style={{ color: " #3C4852" }}>Creative Corner</div>
            </div>
            {user ? (
              <>
                <div className="account">
                  <NotificationsNoneOutlinedIcon
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  ></NotificationsNoneOutlinedIcon>
                  <AccountCircleOutlinedIcon
                    style={{
                      width: "28.60px",
                      height: "28.60px",
                    }}
                  ></AccountCircleOutlinedIcon>
                </div>
              </>
            ) : (
              <>
                <button onClick={handleLogin} className="button">
                  Login
                </button>
              </>
            )}
          </div>
        </div>
        {show ? (
          <>
            <Login handleLogin={handleLogin} handleUser={handleUser}></Login>
          </>
        ) : (
          <></>
        )}
      </School>
    </div>
  );
};
