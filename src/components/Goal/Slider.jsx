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
  margin-top: 50px;
  display: flex;
  margin: auto;
`;

const Slides = {
  width: "410px",
  height: "180px",
  display: "flex",
  border: "2px solid green",
};

const Image = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
`;

const ImageDiv = styled.div`
  height: 180px;
  border: 1px solid green;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
  width: 132px;
  padding: 24px 24px 24px 124px;
  z-index: 1;
`;

const SecondDiv = styled.div`
  height: 180px;
  width: 300px;
  border: 5px solid voilet;
`;

export const Slider = () => {
  return (
    <MainDiv>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectFade]}
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={2}
        navigation
        pagination={{ clickable: true }}>
        <SwiperSlide style={Slides}>
          <Image>
            <ImageDiv>
              <img
                src="src='https://edge.uacdn.net/static/thumbnail/user/079eb0dbaef746a28336f50d84942df8.jpg?q=75&w=1920&fm=webp'"
                alt=''
              />
            </ImageDiv>
            <SecondDiv></SecondDiv>
          </Image>
        </SwiperSlide>
        <SwiperSlide style={Slides}>
          <Image>
            <ImageDiv></ImageDiv>
            <SecondDiv></SecondDiv>
          </Image>
        </SwiperSlide>
        <SwiperSlide style={Slides}>
          <Image>
            <ImageDiv></ImageDiv>
            <SecondDiv></SecondDiv>
          </Image>
        </SwiperSlide>
        <SwiperSlide style={Slides}>
          <Image>
            <ImageDiv></ImageDiv>
            <SecondDiv></SecondDiv>
          </Image>
        </SwiperSlide>
      </Swiper>
    </MainDiv>
  );
};

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
