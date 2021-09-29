/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Top } from "../components/ExplorePage/Top";
import axios from "axios";
import { DataComp } from "../components/ExplorePage/Data";

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
  /* border: 2px solid red; */
`;
const Data = styled.div`
  grid-column: span 18 / auto;
  /* border: 2px solid green; */
  padding-bottom: 350px;
`;
const mockData = [
  { el: "CBSE", to: "CBSE", id: 1 },
  { el: "Maharashtra State Board", to: "MSB", id: 2 },
  { el: "Uttar Pradesh State Board", to: "USB", id: 3 },
  { el: "JEE and NEET Preparation", to: "JEE", id: 4 },
  { el: "IITJEE/NEET Foundation & NTSE", to: "IIT", id: 4 },
];

const MockData = {
  cbse: [
    {
      id: "1",
      name: "CBSC Class 6",
      img: "https://static.uacdn.net/topology/k12_default.png?q=75&w=96",
    },
    {
      id: "2",
      name: "CBSC Class 7",
      img: "https://static.uacdn.net/topology/k12_default.png?q=75&w=96",
    },
    {
      id: "3",
      name: "CBSC Class 8",
      img: "https://static.uacdn.net/topology/k12_default.png?q=75&w=96",
    },
    {
      id: "4",
      name: "CBSC Class 9",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "5",
      name: "CBSC Class 10",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "6",
      name: "CBSC Class 11",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "7",
      name: "CBSC Class 12",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "8",
      name: "Young Coders",
      img: "https://static.uacdn.net/topology/k12_default.png?q=75&w=96",
    },
    {
      id: "9",
      name: "Creative Corner",
      img: "https://static.uacdn.net/topology/k12_default.png?q=75&w=96",
    },
  ],
  MSB: [
    {
      id: "10",
      name: "SSC Class 9",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "11",
      name: "SSC Class 10",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "12",
      name: "HSC Class 11",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "13",
      name: "HSC Class 12",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
  ],
  USB: [
    {
      id: "14",
      name: "UP Board Class 9",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "15",
      name: "UP Board Class 10",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "16",
      name: "UP Board Class 11",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
    {
      id: "17",
      name: "UP Board Class 12",
      img: "https://static.uacdn.net/topology/SUVLV/icon/origin.png?q=75&w=96",
    },
  ],
  JEE: [
    {
      id: "18",
      name: "IIT JEE",
      img: "https://static.uacdn.net/topology/TMUVD/icon/origin.png?q=75&w=96",
    },
    {
      id: "19",
      name: "NEET UG",
      img: "https://static.uacdn.net/topology/YOTUH/icon/origin.png?q=75&w=96",
    },
  ],
  IIT: [
    {
      id: "20",
      name: "IITJEE, NEET Foundation & NTSE",
      img: "https://static.uacdn.net/topology/TPSBK/icon/origin.png?q=75&w=96",
    },
  ],
};
const LI = styled.div`
  padding-bottom: 1.2rem;
  list-style-type: none;
  cursor: pointer;
`;
const H4 = styled.h4`
  line-height: 24px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  font-family: AvertaStd-Bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #3c4852;
`;
export const ExplorePage = () => {
  const [cbse, setCBSE] = React.useState([]);
  const [msb, setMSB] = React.useState([]);
  const [usb, setUSB] = React.useState([]);
  const [jee, setJEE] = React.useState([]);
  const [iit, setIIT] = React.useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3001/class").then((res) => {
      setCBSE(res.data[0]);
      setMSB(res.data[1]);
      setUSB(res.data[2]);
      setJEE(res.data[3]);
      setIIT(res.data[4]);
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  console.log(cbse.CBS);
  return (
    <>
      <Top />
      <MainDiv>
        <SideBar>
          {mockData.map(({ el, to, id }) => {
            return (
              <LI id={id}>
                <Link spy={true} smooth={true} to={to}>
                  <H4 id='P'>{el}</H4>
                </Link>
              </LI>
            );
          })}
        </SideBar>
        <Data>
          <DataComp id='CBSE' items={MockData.cbse} name='CBSE' />
          <DataComp
            id='MSB'
            items={MockData.MSB}
            name='Maharashtra State Board'
          />
          <DataComp id='USB' items={MockData.USB} name='UP State Board' />
          <DataComp
            id='JEE'
            items={MockData.JEE}
            name='JEE and NEET Preparation'
          />
          <DataComp
            id='IIT'
            items={MockData.IIT}
            name='IITJEE/NEET Foundation & NTSE'
          />
        </Data>
      </MainDiv>
    </>
  );
};
