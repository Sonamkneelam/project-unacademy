/** @format */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export const ThirdDiv = ({ items }) => {
  const history = useHistory();
  return (
    <>
      <Third>
        <Third1>
          <Span>Free</Span>
          <H1Elem>Live Classes</H1Elem>
          <PElem>
            Experience Plus for free and start learning from the best
          </PElem>
          <SeeLink>
            <Link to='/watch' style={{ textDecoration: "none" }}>
              <h4 style={{ color: "#08bd80", fontSize: "24px" }}>See all</h4>
            </Link>
          </SeeLink>
        </Third1>
        <Third1
          style={{
            margin: 0,
            height: "100%",
            display: "flex",
          }}>
          {items?.map((el) => {
            return (
              <TEachSlide key={el.id} onClick={() => history.push("/watch")}>
                <TeachSlide1>
                  <img src={el.img} alt='' />
                </TeachSlide1>
                <TeachSlide2>
                  <Belem>{el.title}</Belem>
                  <TimeVideo>{el.end}</TimeVideo>
                  <H3Temp>{el.name}</H3Temp>
                </TeachSlide2>
              </TEachSlide>
            );
          })}
        </Third1>
      </Third>
    </>
  );
};

const Third = styled.div`
  height: 476px;
  left: 184px;
  top: 1255px;
  border-radius: 6px;
  margin: auto;
  width: 100%;
  max-width: 1136px;
  margin: 76px auto;
  display: flexbox;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
`;
const Third1 = styled.div`
  margin: auto;
  height: 378px;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 96px;
  padding-right: 96px;
  -webkit-box-pack: center;
  justify-content: center;
`;
const Span = styled.span`
  width: max-content;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
  background-color: #ffad3b;
  padding: 6px 8px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  line-height: 1;
`;
const H1Elem = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 150%;
  color: #3c4852;
  margin: 0px;
`;
const PElem = styled.p`
  font-size: 20px;
  margin-top: 12px;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #3c4852;
  margin: 0px;
`;
const SeeLink = styled.div`
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
`;
const TEachSlide = styled.div`
  display: flex;
  margin: auto;
  cursor: pointer;
`;
const TeachSlide1 = styled.div`
  height: 107px;
  width: 132.7px;
  left: 0px;
  top: 0px;
  border-radius: 2px;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);

  & img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
  }
`;
const TeachSlide2 = styled.div`
  height: 107px;
  width: 343px;
  padding: 0px 15px;
`;
const Belem = styled.p`
  height: 30px;
  margin: 5px 0px;
  font-weight: 650;
  color: #3c4852;
  word-wrap: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 15px;
`;
const TimeVideo = styled.p`
  left: calc(50% - 146px / 2 - 30.65px);
  top: 96.15%;
  bottom: -61.54%;
  padding: 5px 0px;
  color: #7a8b94;
  font-size: 14px;
`;
const H3Temp = styled.p`
  position: static;
  left: calc(50% - 87px / 2);
  top: 48.48%;
  bottom: 0%;
  padding: 10px 0px;
  color: #3c4852;
  font-size: 14px;
`;
