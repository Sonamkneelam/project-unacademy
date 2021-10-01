/** @format */

import React from "react";
import { useHistory } from "react-router-dom";
import {
  MainDiv2,
  InnerDiv2,
  FirstInnerDiv2,
  Picture,
  H2Ele,
  ElemPic,
  H5Elem,
  ButtonFE,
} from "./Goal-css";

export const Second = () => {
  const history = useHistory();
  return (
    <MainDiv2>
      <InnerDiv2>
        <FirstInnerDiv2>
          <H2Ele>Watch free live classes</H2Ele>
          <ElemPic>
            <img
              src='https://static.uacdn.net/web-cms/Red_Play_603bbcd010.svg'
              alt=''
            />
            <H5Elem>Immersive in-class experience</H5Elem>
          </ElemPic>
          <ElemPic>
            <img
              src='https://static.uacdn.net/web-cms/Correct_Wrong_1fca126a85.svg'
              alt=''
            />
            <H5Elem>Answer interactive polls</H5Elem>
          </ElemPic>
          <ElemPic>
            <img
              src='https://static.uacdn.net/web-cms/Chat_851ab4319d.svg'
              alt=''
            />
            <H5Elem>Chat with learners & the educator</H5Elem>
          </ElemPic>
          <Picture>
            <img
              src='https://static.uacdn.net/web-cms/K12_Live_classes_149adf9fac.svg'
              alt=''
            />
          </Picture>
          <ButtonFE onClick={() => history.push("/watch")}>Watch now</ButtonFE>
        </FirstInnerDiv2>
        <FirstInnerDiv2>
          <H2Ele>Get your doubts solved</H2Ele>
          <ElemPic>
            <img
              src='https://static.uacdn.net/web-cms/Red_Play_603bbcd010.svg'
              alt=''
            />
            <H5Elem>Click a picture of your doubt</H5Elem>
          </ElemPic>
          <ElemPic>
            <img
              src='https://static.uacdn.net/web-cms/Correct_Wrong_1fca126a85.svg'
              alt=''
            />
            <H5Elem>Get instant solutions on the phone</H5Elem>
          </ElemPic>
          <ElemPic>
            <img
              src='https://static.uacdn.net/web-cms/Chat_851ab4319d.svg'
              alt=''
            />
            <H5Elem>Video solutions by top educators</H5Elem>
          </ElemPic>
          <Picture>
            <img
              src='https://static.uacdn.net/web-cms/K12_Doubts_solved_3dcc50f619.svg'
              alt=''
            />
          </Picture>
          <ButtonFE onClick={() => history.push("/watch")}>
            Get the app
          </ButtonFE>
        </FirstInnerDiv2>
      </InnerDiv2>
    </MainDiv2>
  );
};
