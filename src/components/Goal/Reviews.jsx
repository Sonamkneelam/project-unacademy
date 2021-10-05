/** @format */

import React from "react";
import styled from "styled-components";
import { MainDiv, Helem } from "./SeventhDiv";
import { SliderType3 } from "./Slider";
import axios from "axios";

export const Reviews = ({ name }) => {
  const [review, setReview] = React.useState([]);

  React.useState(() => {
    axios.get("https://my-cool-projectdb.herokuapp.com/reviews").then((res) => {
      setReview(res.data);
    });
  }, []);

  return (
    <MainDiv style={{ marginTop: "120px" }}>
      <Helem>What our learners say about Plus</Helem>
      <SlidesDiv>
        <SliderType3 review={review} />
      </SlidesDiv>
    </MainDiv>
  );
};

const SlidesDiv = styled.div`
  max-width: 1136px;
  margin-top: 60px;
`;
