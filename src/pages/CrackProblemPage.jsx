/** @format */

import React from "react";
import styled from "styled-components";
import { FirstComp } from "../components/CrackingProblem/FirstComp";
import { CauroselDiv } from "../components/CrackingProblem/Carousel";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SchoolSyllabus } from "../components/SchoolSyllabus/SchoolSyllabus";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useState } from "react";

export const CrackPage = () => {
  const { cat, id } = useParams();

  const { handleChange, user } = useContext(UserContext);
  // console.log(user)
  const handleUserId = (e) => {
    handleChange(e);
  };
  // const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   axios.get(`http://localhost:3001/CBSE/9/`).then((res) => setData(res.data));
  // }, []);

  return (
    <>
      <SchoolSyllabus cat={cat} courseId={id} handleUserId={handleUserId} />
      <Outer>
        <FirstComp cat={cat} id={id} />
        <CauroselDiv title="Similar Classes" />
        <CauroselDiv title="More From Suresh Aggarwal" />
        <CauroselDiv title="Similar Plus Cources" />
      </Outer>
      <Footer />
    </>
  );
};

const Outer = styled.div`
  max-width: 1136px;
  margin: auto;
  text-align: center;
  margin: auto;
  margin-top: 25px;
`;
