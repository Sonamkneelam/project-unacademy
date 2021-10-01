/** @format */

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/swiper.scss";

import EffectCards, { EffectFade } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFade, EffectCards]);

const MainDiv = styled.div`
  width: 95%;
  display: flex;
  margin: auto;
`;

const Slides = {
  width: "450px",
  height: "220px",
  cursor: "pointer",
};

const Image = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
`;

const ImageDiv = styled.div`
  height: 200px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
  z-index: 1;
  margin-top: 8px;
  & img {
    max-width: 142px;
    height: 100%;
    object-fit: cover;
  }
`;

const SecondDiv = styled.div`
  height: 220px;
  width: 300px;
  padding: 5px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif !important;
`;

export const Slider = ({ items }) => {
  console.log(items);
  return (
    <MainDiv>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectFade]}
        spaceBetween={20}
        slidesPerView={2.2}
        slidesPerGroup={3}
        navigation
        pagination={{ clickable: true }}>
        {items?.map((el) => {
          return (
            <SwiperSlide key={el.id} style={Slides}>
              <Image>
                <ImageDiv>
                  <img src={el.img} alt='' />
                </ImageDiv>
                <SecondDiv>
                  <H4Elem>{el.name}</H4Elem>
                  <Ptag>{el.desc}</Ptag>
                  <Ptag2>Teaches Writing skills and 18 more</Ptag2>
                </SecondDiv>
              </Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </MainDiv>
  );
};
const Ptag = styled.div`
  flex-grow: 1;
  margin-top: 12px;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #3c4852;

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 25px;
`;
const Ptag2 = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #2d81f7;
`;
const H4Elem = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #3c4852;
  margin: 0px;
`;
export const SliderType2 = () => {
  return (
    <>
      <MainDiv>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={2}
          navigation
          pagination={{ clickable: true }}>
          <SwiperSlide style={slider2}>
            <Image>
              <ImageDiv2></ImageDiv2>
              <SecondDiv2></SecondDiv2>
            </Image>
          </SwiperSlide>
          <SwiperSlide style={slider2}>
            <Image>
              <ImageDiv2></ImageDiv2>
              <SecondDiv2></SecondDiv2>
            </Image>
          </SwiperSlide>
          <SwiperSlide style={slider2}>
            <Image>
              <ImageDiv2></ImageDiv2>
              <SecondDiv2></SecondDiv2>
            </Image>
          </SwiperSlide>
          <SwiperSlide style={slider2}>
            <Image>
              <ImageDiv2></ImageDiv2>
              <SecondDiv2></SecondDiv2>
            </Image>
          </SwiperSlide>
        </Swiper>
      </MainDiv>
    </>
  );
};

const slider2 = {
  width: "410px",
  height: "180px",
  display: "flex",
  border: "2px solid green",
};
const ImageDiv2 = styled.div`
  height: 180px;
  border: 1px solid green;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
  width: 243px;
  padding: 24px 24px 24px 124px;
`;

const SecondDiv2 = styled.div`
  height: 180px;
  width: 300px;
  border: 5px solid voilet;
`;
