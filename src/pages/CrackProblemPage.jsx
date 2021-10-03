/** @format */

import React from "react";
import styled from "styled-components";
import { FirstComp } from "../components/CrackingProblem/FirstComp";
import { CauroselDiv } from "../components/CrackingProblem/Carousel";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { SchoolSyllabus } from "../components/SchoolSyllabus/SchoolSyllabus";

export const CrackPage = () => {
  const { cat, id } = useParams();

  return (
    <>
      <SchoolSyllabus />
      <Outer>
        <FirstComp cat={cat} id={id} />
        <CauroselDiv title='Similar Classes' />
        <CauroselDiv title='More From Suresh Aggarwal' />
        <CauroselDiv title='Similar Plus Cources' />
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
