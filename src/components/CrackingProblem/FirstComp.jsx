/** @format */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export const FirstComp = ({ data, cat, id }) => {
  const [pageData, setPageData] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      axios.get(`http://localhost:3001/CBSE/9/`).then((res) => {
        if (cat === "treding") {
          const { treding } = res.data;
          let aD = treding.filter((el) => id === el.id);
          setPageData(aD[0]);
        } else {
          const { upcomming } = res.data;
          let aD2 = upcomming.filter((el) => id === el.id);
          setPageData(aD2[0]);
        }
      });
    }, 200);
  }, []);

  return (
    <>
      <InnerDiv>
        <First>
          <FirstInnerDiv>
            <Link to='/watch' style={LinkStyle}>
              <Button>
                <Span>
                  <img src='./images/arrow.svg' alt='' />
                </Span>
              </Button>
            </Link>
            <FirstInner>
              <DivOne>Creative Corner</DivOne>
            </FirstInner>
            <FirstInner>
              <DivOne>Free classes & tests</DivOne>
            </FirstInner>
          </FirstInnerDiv>
        </First>
        <Second>
          <SecondSpan>Hindi</SecondSpan>
          <SecondSpan1>Beyond School Syllabus</SecondSpan1>
        </Second>
        <Third>
          <ThirdFirst>
            <H1Elem>{pageData.subject}</H1Elem>
            <PTag>
              <p id=''>Sep 14, 2021 • 1h 2m </p>
            </PTag>
            <FollowTag>
              <img id='one' src={pageData.img} alt='' />
              <FOllowLink>
                <div
                  style={{
                    marginBottom: "4px",
                    display: "flex",
                    webkitBoxAlign: "center",
                    alignItems: "center",
                    color: "#3C4852",
                  }}>
                  <h4 style={{ marginRight: "5px" }}>{pageData.name}</h4>
                  <img src='./images/Check.svg' alt='' />
                </div>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "12px",
                    lineHeight: "150%",
                    margin: "0px",
                    color: "#3C4852",
                  }}>
                  819K watch mins
                </p>
              </FOllowLink>
            </FollowTag>
            <Ptag>
              In this session, Dr. Suresh Aggarwal will take up some short
              tricks to solve some of the very important problems related to
              clocks. Students will be greatly benefitted by this session as the
              topic is important for all competitive exams as well.
            </Ptag>
          </ThirdFirst>
          <ThirdSecond>
            <ThirdSImage>
              <img src={pageData.img} alt='' />
            </ThirdSImage>
          </ThirdSecond>
        </Third>
        <Fourth>
          <FourthButton>
            <div style={{ marginRight: "8px", display: "flex" }}>
              <img src='./images/play.svg' alt='' />
            </div>
            Watch Now
          </FourthButton>
          <FourthButton2>
            <div style={{ marginRight: "8px", display: "flex" }}>
              <img src='./images/viewpdf.svg' alt='' />
            </div>
            View Pdf
          </FourthButton2>
          <FourthButton2>
            <div style={{ marginRight: "8px", display: "flex" }}>
              <img src='./images/share.svg' alt='' />
            </div>
            Share
          </FourthButton2>
        </Fourth>
      </InnerDiv>
    </>
  );
};

const InnerDiv = styled.div`
  max-width: 1366px;
  width: 100%;
  padding: 0px 0px 40px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  /* max-width: 1040px !important; */
  margin-bottom: 32px;
  margin: auto;
`;

const First = styled.div`
  grid-column: 2 / 24;
  display: flex;
  margin-top: 32px;
`;

const FirstInnerDiv = styled.div`
  display: flex;
`;

const FirstInner = styled.div`
  padding: 8px 20px;
  transform: skew(-20deg);
  height: 32px;
  color: #3c4852;
  margin: auto 6px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid gray;
`;
const LinkStyle = {
  color: "#3c4852",
  lineHeight: "150%",
  fontSize: "12px",
  fontWeight: "normal",
};
const Button = styled.button`
  color: #3c4852;
  margin-right: 12px;
  box-shadow: none;
  border: 1px solid #3c4852;
  border-radius: 8px;
  height: 32px;
  width: 32px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
  & img {
    background-color: transparent !important;
  }
`;
const DivOne = styled.p`
  color: #3c4852;
  line-height: 150%;
  font-size: 12px;
  font-weight: normal;
  transform: skew(20deg);
  color: var(--color-text-primary);
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 280px;
  overflow: hidden;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin: 0px;
`;
export const Second = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 40px;
`;
export const SecondSpan = styled.div`
  margin-right: 8px;
  color: #3c4852;
  font-size: 10px;
  font-weight: bold;
  padding: 6px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  line-height: 1;
  line-height: 15px;
`;
export const SecondSpan1 = styled.div`
  color: #2d81f7;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 0px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  line-height: 1;
`;

const H1Elem = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #3c4852;
  display: flex;
  margin-top: 10px;
`;
const Third = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const ThirdFirst = styled.div`
  width: 100%;
  max-width: 588px;
`;
const PTag = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 24px;
  -webkit-box-align: center;
  align-items: center;
  & #p {
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    margin: 0px;
  }
`;
const FollowTag = styled.div`
  color: #3c4852;
  line-height: 150%;
  font-size: 12px;
  font-weight: normal;
  height: 48px;
  grid-column: span 6 / auto;
  padding: 0px;
  display: flex;
  box-shadow: none;
  border-radius: 0px;
  & #one {
    max-height: 64px;
    max-width: 64px;
    border-radius: 6px;
    object-fit: cover;
  }
`;
const FOllowLink = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 12px;
`;
const ThirdSecond = styled.div`
  height: 237px;
  width: 341px;
  border-radius: 6px;
`;
const ThirdSImage = styled.div`
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
  & img {
    margin-top: 22px;
    max-height: 100%;
    max-width: 100%;
  }
`;
const Ptag = styled.p`
  margin-top: 32px;
  color: #3c4852;
  font-size: 14px;
  line-height: 150%;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
  display: -webkit-box;
  text-align: left;
`;
const Fourth = styled.div`
  display: flex;
  margin-top: 32px;
`;
const FourthButton = styled.button`
  margin-right: 12px;
  position: relative;
  border: none;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  width: 178px;
  height: 52px;
  min-height: 48px;
  color: #ffffff;
  user-select: none;
  background-color: #08bd80;
  & img {
    height: 16px;
    width: 16px;
  }
`;
const FourthButton2 = styled.div`
  margin-right: 12px;
  border-width: 1px;
  border-style: solid;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  width: 128px;
  height: 48px;
  min-height: 48px;
  color: #3c4852;
  user-select: none;
  border-color: rgb(233, 238, 242);
`;
