/** @format */
import React from "react";
import { SliderType2, SliderType4 } from "./Slider";
import { Link } from "react-router-dom";
import { MainDiv, InnerDiv, HeadingDiv, H3Elem, SeeAll } from "./FourDiv";

export const FivthDiv = ({ title, desc, items }) => {
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
          {items.length === 1 ? (
            <SliderType4 course={items[0]} />
          ) : (
            <SliderType2 course={items} />
          )}
        </InnerDiv>
      </MainDiv>
    </>
  );
};
