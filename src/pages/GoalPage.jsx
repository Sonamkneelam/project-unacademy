/** @format */

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { First } from "../components/Goal/FirstDiv";
import { Second } from "../components/Goal/Second";
import { ThirdDiv } from "../components/Goal/ThirdDiv";
import { FourthDiv } from "../components/Goal/FourDiv";
import { FivthDiv } from "../components/Goal/Five";
import { SixthDiv } from "../components/Goal/SixThDiv";
import { SevenTH } from "../components/Goal/SeventhDiv";
import { Reviews } from "../components/Goal/Reviews";
import { TeacherData } from "../Utils/fetchData";
import Footer from "../components/Footer.js";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import { SchoolSyllabus } from "../components/SchoolSyllabus/SchoolSyllabus";

const Outer = styled.div`
  /* border: 2px solid red; */
`;

export const Goal = () => {
  const { cat, id } = useParams();
  const [data, setData] = React.useState([]);
  const [course, setCourse] = React.useState([]);
  const [recent, setRecent] = React.useState([]);
  const [best, setBest] = React.useState([]);
  const [comp, setComp] = React.useState([]);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.continuousStart();
    axios.get("https://my-cool-projectdb.herokuapp.com/CBSE/9").then((res) => {
      setCourse(res.data.courseSoon);
      setRecent(res.data.recentCourse);
      setBest(res.data.bestAll);
      setComp(res.data.compSyllabus);
      ref.current.complete();
    });
    TeacherData(cat, id).then((res) => {
      document.title = `${res.data[0].name} | Unacademy`;
      setData(res.data[0]);
    });
  }, []);

  return (
    <>
      <LoadingBar color='#08BD80' height='4px' ref={ref} />
      <Outer>
        <SchoolSyllabus />
        <First name={data.name} />
        <Second />
        <ThirdDiv items={data.tutor} cat={cat} />
        <FourthDiv items={data.topTut} />
        <FivthDiv
          items={course}
          title='Courses starting soon'
          desc='Enroll in upcoming courses that best suit your schedule and Creative Corner exam syllabus'
        />
        <FivthDiv
          items={recent}
          title='Recently started courses'
          desc='Start learning live from the best of our ongoing courses'
        />
        <FivthDiv
          items={best}
          title='Best of all time'
          desc='Get unlimited access to popular past Creative Corner courses from our top educators'
        />
        <SixthDiv comp={comp} />
        <SevenTH name={data.name} />
        <OfferLine>
          <p>
            <img src='/images/UpArrow.svg' alt='' /> Special offer price valid
            only till 27th September 2021
          </p>
        </OfferLine>
        <Ques>
          <h4>
            Have questions? <SPan>Read our FAQs</SPan>
          </h4>
        </Ques>
        <Reviews />
        <Footer />
      </Outer>
    </>
  );
};
const OfferLine = styled.div`
  max-width: 100%;
  height: 70px;
  background-color: #ffdae1;
  width: 100%;
  max-width: 1136px;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
  & p {
    margin: auto;
    color: #c53d3d;
    display: flex;
    align-items: center;
  }
  & img {
    margin-right: 5px;
  }
`;

const Ques = styled.div`
  max-width: 100%;
  height: 70px;
  width: 100%;
  max-width: 1136px;
  margin: auto;
  margin-bottom: 50px;
  display: flex;

  & h4 {
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    color: #3c4852;
    margin: auto;
  }
`;

const SPan = styled.span`
  border-color: #08bd80;
  border-width: 0px 0px 1px;
  border-style: dashed;
  color: #08bd80;
  cursor: pointer;
`;
