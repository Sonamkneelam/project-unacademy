/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Slider } from "./Slider";

export const MainDiv = styled.div`
  height: 375px;
  border-radius: 6px;
  margin: auto;
  width: 100%;
  max-width: 1136px;
  margin: 76px auto;
  display: flexbox;
  /* box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px; */
`;
export const InnerDiv = styled.div`
  width: 1136px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05); */
  & #slider {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const HeadingDiv = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
  grid-column: span 18 / auto;
`;
export const H3Elem = styled.div`
  display: flex;
  flex-direction: column;
  & h3 {
    font-size: 32px;
    color: #3c4852;
    padding: 5px 0px;
  }
  & p {
    font-size: 16px;
    margin-top: 12px;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #3c4852;
    margin: 0px;
  }
`;
export const SeeAll = styled.div`
  margin-top: 20px;
  line-height: 150%;
  border-color: #08bd80;
  padding-bottom: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: normal;
  display: inline-block;
  border-width: 0px 0px 1px;
  border-style: dashed;
  width: 78px;
  height: 30px;
  margin-top: 0;
`;
export const FourthDiv = ({ items }) => {
  return (
    <>
      <MainDiv>
        <InnerDiv>
          <HeadingDiv>
            <H3Elem>
              <h3>Prepare with Top Educators</h3>
              <p>
                Access to India's best Creative Corner educators is just a
                subscription away
              </p>
            </H3Elem>
            <SeeAll>
              <Link to='/watch' style={{ textDecoration: "none" }}>
                <h4 style={{ color: "#08bd80", fontSize: "24px" }}>See all</h4>
              </Link>
            </SeeAll>
          </HeadingDiv>
          <div id='slider' style={{}}>
            <Slider items={items} />
          </div>
        </InnerDiv>
      </MainDiv>
    </>
  );
};
