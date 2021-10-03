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
            <NoOffer></NoOffer>
            <h4>1 month</h4>
            <h2>₹ 3,000</h2>
            <p>Total (Incl. of all taxes)</p>
          </DivInner>
          <ButtonTag>Get subscription</ButtonTag>
        </InnerCard>
        <InnerCard>
          <DivInner>
            <Offer>44% OFF</Offer>
            <h4>3 month</h4>
            <h2>₹ 6,000</h2>
            <p>Total (Incl. of all taxes)</p>
          </DivInner>
          <ButtonTag>Get subscription</ButtonTag>
        </InnerCard>
        <InnerCard>
          <DivInner>
            <Offer>64% OFF</Offer>
            <h4>6 month</h4>
            <h2>₹ 7,999</h2>
            <p>Total (Incl. of all taxes)</p>
          </DivInner>
          <ButtonTag>Get subscription</ButtonTag>
        </InnerCard>
        <InnerCard>
          <DivInner>
            <Offer>65% OFF</Offer>
            <h4>9 month</h4>
            <h2>₹ 9,999</h2>
            <p>Total (Incl. of all taxes)</p>
          </DivInner>
          <ButtonTag>Get subscription</ButtonTag>
        </InnerCard>
      </InnerDivElem>
    </MainDiv>
  );
};

export const MainDiv = styled.div`
  border-radius: 6px;
  margin: auto;
  width: 100%;
  max-width: 1136px;
  margin: 70px auto;
  display: grid;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
`;
export const Helem = styled.div`
  color: #3c4852;
  font-size: 40px;
  font-weight: bold;
  line-height: 120%;
  margin: auto;
  margin-bottom: 25px;
`;

const InnerDivElem = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 64px;
`;

const InnerCard = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 271px;
  height: 280px;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
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
  color: #08bd80;
`;

const Offer = styled.span`
  background-color: rgb(255, 239, 216);
  color: #ffad3b;
  height: 22px;
  width: 71px;
  margin: auto;
  margin-bottom: 10px;
  font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif !important;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 8px;
  border-radius: 4px;
  display: inline-block;
`;

const NoOffer = styled.div`
  height: 22px;
  width: 71px;
  display: inline-block;
  padding: 6px 8px;
  margin-bottom: 10px;
`;
