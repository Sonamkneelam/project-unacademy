/** @format */
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Top } from "../components/ExplorePage/Top";
import { DataComp } from "../components/ExplorePage/Data";
import { TeacherData } from "../Utils/fetchData";
import Footer from "../components/Footer";
import "./exp.css";
import LoadingBar from "react-top-loading-bar";
import { useHistory } from "react-router-dom";
import { SchoolSyllabus } from "../components/SchoolSyllabus/SchoolSyllabus";

export const ExplorePage = () => {
  const [cbse, setCbse] = React.useState([]);
  const [msb, setMsb] = React.useState([]);
  const [usb, setUsb] = React.useState([]);
  const [jee, setJee] = React.useState([]);
  const [iit, setIit] = React.useState([]);
  const ref = React.useRef(null);
  const history = useHistory();

  React.useEffect(() => {
    document.title = "Goals | Unacademy";
    ref.current.continuousStart();
    TeacherData("CBSE").then((res) => {
      setCbse(res.data);
    });

    TeacherData("MSB").then((res) => {
      setMsb(res.data);
    });
    TeacherData("USB").then((res) => {
      setUsb(res.data);
    });
    TeacherData("IIT").then((res) => {
      setJee(res.data);
    });
    TeacherData("JEE").then((res) => {
      setIit(res.data);
      ref.current.complete();
    });
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <>
      <LoadingBar color='#08BD80' height='4px' ref={ref} />
      <SchoolSyllabus />
      <Top />
      <MainDiv>
        <SideBar>
          {mockData.map(({ el, to, id }) => {
            return (
              <LI key={id}>
                <Link
                  spy={true}
                  smooth={true}
                  to={to}
                  activeClass='active'
                  hashSpy={true}>
                  <H4 id='P'>
                    <h4>{el}</h4>
                  </H4>
                </Link>
              </LI>
            );
          })}
        </SideBar>
        <Data>
          {cbse.length !== 0 ? (
            <DataComp cat='CBSE' items={cbse} page='1a' name='CBSE' />
          ) : (
            false
          )}
          {msb.length !== 0 ? (
            <DataComp
              cat='MSB'
              items={msb}
              page='1b'
              name='Maharashtra State Board'
            />
          ) : (
            false
          )}
          {usb.length !== 0 ? (
            <DataComp cat='USB' items={usb} page='1c' name='UP State Board' />
          ) : (
            false
          )}
          {jee.length !== 0 ? (
            <DataComp
              cat='JEE'
              items={jee}
              name='JEE and NEET Preparation'
              page='1d'
            />
          ) : (
            false
          )}
          {iit.length !== 0 ? (
            <DataComp
              cat='IIT'
              items={iit}
              name='IITJEE/NEET Foundation & NTSE'
              page='1e'
            />
          ) : (
            false
          )}
        </Data>
      </MainDiv>
      <Footer />
    </>
  );
};

const MainDiv = styled.div`
  /* border: 2px solid red; */
  width: 1136px;
  margin: 83px auto 0px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 16px;
`;
const SideBar = styled.div`
  grid-column: span 6 / auto;
  position: sticky;
  top: 100px;
  height: calc(100vh - 100px);
  padding-inline-start: 0px;
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
  font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif !important;
  overscroll-behavior: none;
`;
const Data = styled.div`
  grid-column: span 18 / auto;
  /* border: 2px solid green; */
  padding-bottom: 425px;
`;
const mockData = [
  { el: "CBSE", to: "CBSE", id: 1 },
  { el: "Maharashtra State Board", to: "MSB", id: 2 },
  { el: "Uttar Pradesh State Board", to: "USB", id: 3 },
  { el: "JEE and NEET Preparation", to: "JEE", id: 4 },
  { el: "IITJEE/NEET Foundation & NTSE", to: "IIT", id: 5 },
];

const LI = styled.div`
  padding-bottom: 12px;
  list-style-type: none;
  cursor: pointer;
`;

const H4 = styled.div`
  & h4 {
    line-height: 24px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #7a8b94;
    padding-bottom: 12px;
    list-style-type: none;
    cursor: pointer;
    display: list-item;
  }
  /* & h4:active {
  } */
  & .active {
    color: black !important;
    font-weight: normal;
  }
`;
