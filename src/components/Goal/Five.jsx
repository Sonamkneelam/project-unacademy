/** @format */
import React from "react";
import { SliderType2 } from "./Slider";
import { Link } from "react-router-dom";
import { MainDiv, InnerDiv, HeadingDiv, H3Elem, SeeAll } from "./FourDiv";

export const FivthDiv = ({ title, desc }) => {
  return (
    <>
      <MainDiv>
        <InnerDiv>
          <HeadingDiv>
            <H3Elem>
              <h3>{title}</h3>
              <p>{desc}</p>
            </H3Elem>
            <SeeAll>
              <Link to='/watch' style={{ textDecoration: "none" }}>
                <h4 style={{ color: "#08bd80", fontSize: "24px" }}>See all</h4>
              </Link>
            </SeeAll>
          </HeadingDiv>
          <SliderType2 />
        </InnerDiv>
      </MainDiv>
    </>
  );
};
