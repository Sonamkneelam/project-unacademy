/** @format */

import React from "react";
import styled from "styled-components";

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
  border: "2px solid green";
`;
const MainDiv = styled.div`
  max-width: 1136px;
  margin: auto;
  text-align: left;
  position: relative;
  z-index: 1;
  border: "2px solid green";
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
const Button1 = {
  marginBottom: "18px",
  padding: "6px 12px",
  overflow: "hidden",
  position: "relative",
  maxWidth: "264px",
  minWidth: "72px",
  boxSizing: "border-box",
  minHeight: "48px",
  textAlign: "center",
  flexShrink: 0,
  fontFamily: "Roboto Helvetica Arial sans-serif",
  whiteSpace: "normal",
  letterSpacing: "0.02857rem",
  textTransform: "uppercase",
  fontSize: "20px",
  fontWeight: "bold",
  color: " var(--color-text-primary)",
  opacity: 1,
  background: "transparent",
  border: "none",
  cursor: "pointer",
  margin: 0,
  display: "inline-flex",
  outline: 0,
  alignItems: "center",
  userSelect: "none",
  borderRadius: 0,
  verticalAlign: "middle",
  mozAppearance: "none",
  justifyContent: "center",
  textDecoration: "none",
  backgroundColor: "transparent",
  webkitAppearance: "none",
  webkitTapHighlightColor: "transparent",
};

const Span = styled.span`
  font-family: AvertaStd-Bold;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  width: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: "#3c4852";
  width: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-transform: none;
`;
const lineStyle = {
  position: "relative",
  left: "175.953px",
  width: "160px",
  backgroundColor: "#3C4852",
  height: "4px",
  borderRadius: "5px 5px 0px 0px",
  bottom: 0,
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
};
const lineStyle2 = {
  position: "relative",
  left: "175.953px",
  Width: "160px",
  backgroundColor: "#3C4852",
  maxHeight: "4px",
  borderRadius: "5px 5px 0px 0px",
  border: "2px solid black",
  bottom: 0,
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
};

export const Top = () => {
  const [showCat, setShowCat] = React.useState("Comp");
  

  return (
    <div style={{ backgroundColor: "rgb(246, 250, 253)" }}>
      <OuterDiv>
        <MainDiv>
          <h1 style={styleForH1}>Choose your goal</h1>
          <div style={secondDiv}>
            <div style={thirdDiv}>
              <div style={{ display: "flex" }}>
                <button style={Button1}>
                  <Span>Competitive Exams</Span>
                </button>
                <button style={Button1}>
                  <Span>Class 6 to 12</Span>
                </button>
              </div>
              {showCat === "Comp" ? (
                <span
                  onClick={() => {
                    setShowCat("Comp");
                    console.log(showCat);
                  }}
                  style={lineStyle}></span>
              ) : (
                <>
                  <span
                    onClick={() => {
                      setShowCat("Comp");
                      console.log(showCat);
                    }}
                    style={lineStyle2}></span>
                </>
              )}
            </div>
          </div>
        </MainDiv>
      </OuterDiv>
    </div>
  );
};
