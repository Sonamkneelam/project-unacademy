/** @format */

import React from "react";
import {
  MainDiv,
  InnerDiv,
  InnerDiv1,
  HeaderDiv,
  SecondInner,
  Htag,
  Htag3,
  ButtonDiv,
} from "./Goal-css";

export const First = ({ name }) => {
  return (
    <MainDiv>
      <InnerDiv>
        <InnerDiv1>
          <HeaderDiv>
            <Htag>Prepare for {name}</Htag>
          </HeaderDiv>
          <SecondInner>
            <Htag3>
              Learn with the best classroom experience on India’s largest
              learning platform
            </Htag3>
          </SecondInner>
          <ButtonDiv>Get subscription</ButtonDiv>
        </InnerDiv1>
      </InnerDiv>
    </MainDiv>
  );
};
