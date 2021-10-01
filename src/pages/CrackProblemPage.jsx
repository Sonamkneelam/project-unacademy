/** @format */

import React from "react";
import styled from "styled-components";
import { FirstComp } from "../components/CrackingProblem/FirstComp";
import { CauroselDiv } from "../components/CrackingProblem/Carousel";

const Outer = styled.div`
  max-width: 1136px;
  margin: auto;
  height: auto;
  text-align: center;
  margin: auto;
  margin-top: 25px;
`;

export const CrackPage = () => {
  return (
    <Outer>
      <FirstComp />
      <CauroselDiv title='Similar Classes' />
      <CauroselDiv title='More From Suresh Aggarwal' />
      <CauroselDiv title='Similar Plus Cources' />
    </Outer>
  );
};
