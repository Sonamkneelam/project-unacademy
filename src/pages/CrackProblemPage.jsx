/** @format */

import React from "react";
import styled from "styled-components";
import { FirstComp } from "../components/CrackingProblem/FirstComp";
import { CauroselDiv } from "../components/CrackingProblem/Carousel";
import Footer from "../components/Footer";
import { useParams, useHistory } from "react-router-dom";
import { SchoolSyllabus } from "../components/SchoolSyllabus/SchoolSyllabus";
// import { useContext } from "react";
// import { UserContext } from "../Contexts/UserContext";
// import { useState } from "react";

export const CrackPage = () => {
  const [detail, setDetail] = React.useState([]);
  const { cat, id } = useParams();
  const history = useHistory();

  // console.log(user)

  React.useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <>
      <SchoolSyllabus cat={cat} courseId={id} />
      <Outer>
        <FirstComp cat={cat} id={id} setDetail={setDetail} />
        <CauroselDiv title="Similar Classes" />
        <CauroselDiv
          detail={detail.img}
          title={`More From ${detail.name}`}
          change={true}
        />
        <CauroselDiv title="Similar Plus Cources" />
      </Outer>
      <Footer />
    </>
  );
};

const Outer = styled.div`
  max-width: 1136px;
  margin: auto;
  text-align: center;
  margin: auto;
  margin-top: 25px;
`;
