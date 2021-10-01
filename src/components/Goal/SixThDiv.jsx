/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { MainDiv, InnerDiv, HeadingDiv, H3Elem, SeeAll } from "./FourDiv";
import styled from "styled-components";

export const SixthDiv = () => {
  return (
    <>
      <MainDiv>
        <InnerDiv>
          <HeadingDiv>
            <H3Elem>
              <h3>Comprehensive syllabus</h3>
              <p>
                Our courses provide complete coverage of the topics you need to
                be prepared for
              </p>
            </H3Elem>
            <SeeAll>
              <Link to='/watch' style={{ textDecoration: "none" }}>
                <h4 style={{ color: "#08bd80", fontSize: "24px" }}>See all</h4>
              </Link>
            </SeeAll>
          </HeadingDiv>
          <InnerDiv2></InnerDiv2>
        </InnerDiv>
      </MainDiv>
    </>
  );
};
const InnerDiv2 = styled.div`
  padding-bottom: 32px;
  padding-left: 16px;
  display: flex;
`;
