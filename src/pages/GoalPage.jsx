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
import { TeacherData } from "../Utils/fetchData";

const Outer = styled.div`
  /* border: 2px solid red; */
`;

export const Goal = () => {
  const { page, cat } = useParams();
  console.log(cat);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    TeacherData(page).then((res) => {
      setData(res.data[0]);
    });
  }, []);

  console.log(data.tutor);
  return (
    <>
      <Outer>
        <First />
        <Second />
        <ThirdDiv items={data} cat={cat} />
        <FourthDiv />
        <FivthDiv
          title='Courses starting soon'
          desc='Enroll in upcoming courses that best suit your schedule and Creative Corner exam syllabus'
        />
        <FivthDiv
          title='Recently started courses'
          desc='Start learning live from the best of our ongoing courses'
        />
        <FivthDiv
          title='Best of all time'
          desc='Get unlimited access to popular past Creative Corner courses from our top educators'
        />
        <SixthDiv />
      </Outer>
    </>
  );
};
