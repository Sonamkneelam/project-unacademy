/** @format */

import React from "react";
import styled from "styled-components";
import { CauroselDiv } from "../components/CrackingProblem/Carousel";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import LiveClass from "../components/Live/LiveClass";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export const LivePage = () => {
  const { cat, id } = useParams();
  const [data, setData] = React.useState([]);
  //console.log(SchoolSyllabus);
  const { user } = useContext(UserContext);
  // console.log("user:", user);

  React.useEffect(() => {
    axios.get(`https://my-cool-projectdb.herokuapp.com/CBSE/9/`).then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Outer>
        <LiveClass cat={cat} id={id} />
        <CauroselDiv title="Similar Classes" />
        <CauroselDiv title="More From Suresh Aggarwal" />
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
