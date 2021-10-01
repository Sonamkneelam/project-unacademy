/** @format */

import React from "react";
import styled from "styled-components";

export const SevenTH = ({ name }) => {
  return (
    <MainDiv>
      <Helem>{name} Subscription</Helem>
      <InnerDivElem>
        <InnerCard>
          <DivInner>
            <h4>1 month</h4>
            <h2>₹3,000</h2>
            <p>Total (Incl. of all taxes)</p>
          </DivInner>
          <ButtonTag>Get subscription</ButtonTag>
        </InnerCard>
        <InnerCard></InnerCard>
        <InnerCard></InnerCard>
        <InnerCard></InnerCard>
      </InnerDivElem>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  border-radius: 6px;
  margin: auto;
  width: 100%;
  max-width: 1136px;
  margin: 76px auto;
  display: grid;
`;
const Helem = styled.div`
  color: #3c4852;
  font-size: 40px;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  margin: auto;
`;

const InnerDivElem = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  margin-top: 64px;
`;

const InnerCard = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 211px;
  height: 286px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 2px;
  padding: 25px 50px;
`;

const DivInner = styled.div`
  text-align: center;
  & h4 {
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    color: #3c4852;
  }
  & h2 {
    font-weight: bold;
    font-size: 32px;
    margin-top: 8px;
    color: #3c4852;
  }
  & p {
    margin-top: 12px;
    font-weight: normal;
    font-size: 14px;
    color: #3c4852;
    line-height: 150%;
  }
`;

const ButtonTag = styled.div`
  margin-top: 24px;
  border-width: 1px;
  border-style: solid;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  width: 176px;
  height: 48px;
  color: green;
`;
