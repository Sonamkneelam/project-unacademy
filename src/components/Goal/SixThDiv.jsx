/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { MainDiv, InnerDiv, HeadingDiv, H3Elem, SeeAll } from "./FourDiv";
import styled from "styled-components";

export const SixthDiv = ({ comp }) => {
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
          <InnerDiv2>
            {comp?.map((el, index) => {
              return (
                <InnerDivs key={el.id} color={colors[index]}>
                  <InnerDivs2>
                    <InnerDiv21>
                      <InnerDiv22>
                        <H5Eleme>{el.name}</H5Eleme>
                        <PtagInnerTag>{el.upCources}</PtagInnerTag>
                      </InnerDiv22>
                    </InnerDiv21>

                    <PtagInner>{el.desc}</PtagInner>
                  </InnerDivs2>
                </InnerDivs>
              );
            })}
          </InnerDiv2>
        </InnerDiv>
      </MainDiv>
    </>
  );
};
const InnerDiv2 = styled.div`
  display: flex;
  grid-gap: 15px;
`;

const InnerDivs = styled.div`
  min-height: 188px;
  max-width: 270px;
  margin-right: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border-left: 8px solid ${(props) => props.color};
  padding: 24px 24px 24px 16px;
`;

const InnerDivs2 = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: inherit;
  flex: 1 1 0%;
  padding: 5px 10px 8px 5px;
`;
const InnerDiv21 = styled.div`
  display: flex;
  flex-direction: column;
`;
const InnerDiv22 = styled.div`
  display: flex;
  flex-direction: column;
`;

const PtagInner = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin: 0px;
`;

const H5Eleme = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #3c4852;
  margin: 0px;
`;

const PtagInnerTag = styled.p`
  margin-top: 8px;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin: 0px;
`;

const colors = ["#21c5c6", "#2D81F7", "#F08FB4", "#FFAD3B"];
