/** @format */

import React from "react";
import styled from "styled-components";

export const Top = () => {
  const [showCat, setShowCat] = React.useState(false);

  return (
    <div style={{ backgroundColor: "rgb(244,249,253)" }}>
      <OuterDiv>
        <MainDiv>
          <h1 style={styleForH1}>Choose your goal</h1>
          <div style={secondDiv}>
            <div style={thirdDiv}>
              <div style={{ display: "flex" }}>
                <Button1
                  onClick={() => {
                    setShowCat(true);
                  }}
                >
                  <Span style={{ color: "#7A8B94" }}>Competitive Exams</Span>
                  {showCat ? <LineThrough></LineThrough> : true}
                </Button1>
                <Button1 onClick={() => setShowCat(false)}>
                  <Span style={{ color: "#3C4852" }}>Class 6 to 12</Span>
                  {!showCat ? <LineThrough></LineThrough> : true}
                </Button1>
              </div>
            </div>
          </div>
        </MainDiv>
      </OuterDiv>
    </div>
  );
};



const OuterDiv = styled.div`
  background-image: url(https://static.uacdn.net/production/_next/static/images/goal/managegoal-k12-light.svg);
  background-position: right bottom;
  background-repeat: no-repeat;
  text-align: center;
  transition: background 1s ease-in-out 0s;
  height: 266px;
  max-width: 1136px;
  margin: auto;
  text-align: center;
`;
const MainDiv = styled.div`
  max-width: 1136px;
  margin: auto;
  text-align: left;
  position: relative;
  z-index: 1;
`;
const styleForH1 = {
  fontWeight: "bold",
  fontSize: "48px",
  lineHeight: "150%",
  color: "#3C4852",
  margin: "0px",
  paddingTop: "64px",
};
const secondDiv = {
  width: "1136px",
  margin: "0px auto",
  position: "relative",
  paddingTop: "64px",
  borderBottom: "0px",
  height: "fit-content",
  display: "flex",
  overflow: "hidden",
  minHeight: "48px",
};
const thirdDiv = {
  width: "100%",
  flex: "1 1 auto",
  display: "inline-block",
  position: "relative",
  whiteSpace: "nowrap",
  overflow: "hidden",
};
const Button1 = styled.button`
  margin: 0px;
  padding: 10px 12px;
  overflow: hidden;
  position: relative;
  max-width: 264px;
  min-width: 204px !important;
  box-sizing: border-box;
  min-height: 48px;
  text-align: center;
  flex-shrink: 0;
  font-family: "Roboto Helvetica Arial sans-serif";
  white-space: normal;
  letter-spacing: 0.02857rem;
  font-size: 20px;
  font-weight: bold;
  opacity: 1;
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  outline: 0px;
  align-items: center;
  user-select: none;
  border-radius: 0px;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 76px;
`;
const Span = styled.span`
  height: 20px;
  left: 192px;
  top: 265px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
  letter-spacing: 1.5px;
`;

const LineThrough = styled.span`
  position: relative;
  width: 180px;
  background-color: #3c4852;
  height: 4px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 5px 5px 0px 0px;
`;
