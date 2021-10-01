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
  width: 100%;
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
    border-radius: 5px;
  }
`;

const SecondDiv = styled.div`
  height: 220px;
  width: 300px;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif !important;
`;
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
  color: #2d81f7;
`;
const H4Elem = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #3c4852;
  margin: 0px;
`;

export const Slider = ({ items }) => {
  return (
    <MainDiv>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectFade]}
        spaceBetween={20}
        slidesPerView={2.2}
        slidesPerGroup={3}
        navigation>
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

export const SliderType2 = ({ course }) => {
  return (
    <>
      <MainDiv style={{ marginTop: "25px" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          spaceBetween={20}
          slidesPerView={2.2}
          slidesPerGroup={3}
          navigation>
          {course?.map((el) => {
            return (
              <SwiperSlide style={slider2}>
                <Image>
                  <ImageDiv2>
                    <img src={el.img} alt='' />
                  </ImageDiv2>
                  <SecondDiv2>
                    <FirstSD>
                      <Span1>{el.language}</Span1>
                      <Span2>{el.desc}</Span2>
                    </FirstSD>
                    <FirstSh2>{el.subject}</FirstSh2>
                    <PDiv>{el.starts}</PDiv>
                    <PDiv2>{el.name}</PDiv2>
                  </SecondDiv2>
                </Image>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </MainDiv>
    </>
  );
};

const FirstSD = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
`;

const Span1 = styled.div`
  font-size: 10px;
  font-weight: bold;
  padding: 6px 2px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  line-height: 12px;
  color: #3c4852;
`;
const Span2 = styled.div`
  margin-left: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(45, 131, 247);
  font-size: 12px;
  font-weight: bold;
  padding: 6px 0px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  line-height: 1;
`;

const FirstSh2 = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #3c4852;
`;

const PDiv = styled.div`
  margin-top: 4px;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin: 0px;
  color: #3c4852;
`;
const PDiv2 = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: flex-end;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #3c4852;
`;
const slider2 = {
  width: "280px",
  height: "140px",
  display: "flex",
  boxShadow: "rgb(0 0 0 / 10%) 0px 4px 12px",
};
const ImageDiv2 = styled.div`
  max-width: 250px;
  max-height: 140px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
  z-index: 1;
  & img {
    max-width: 260px;
    max-height: 140px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const SecondDiv2 = styled.div`
  height: 145px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px 10px;
`;
