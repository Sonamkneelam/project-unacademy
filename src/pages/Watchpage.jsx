/** @format */

import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import Single from "../components/WatchPage/Single";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Block1 from "../components/WatchPage/Block1";
import Footer from "../components/Footer";
import Block2 from "../components/WatchPage/Block2";

function WatchPage() {
  return (
    <>
      <WatchPageStyled>
        <div className='one'>
          <div className='box'>
            <Single icon={<HomeIcon />} text={"Home"} />
            <div className='heading'>SELF STUDY</div>
            <Single icon={<HomeIcon />} text={"Browse"} />
            <Single icon={<CheckCircleOutlineIcon />} text={"Tests"} />
            <Single icon={<CheckCircleOutlineIcon />} text={"Syllabus"} />
            <Single icon={<YouTubeIcon />} text={"Free live classes"} />
            <Single icon={<YouTubeIcon />} text={"Other courses"} />
          </div>
        </div>
        <div className='two'>
          <Block1 />
          <Block2 title1={"Trending"} title2={"See All"} />
          <Block2 title1={"Upcoming"} title2={"See All"} />
        </div>
      </WatchPageStyled>
      <Footer />
    </>
  );
}

const WatchPageStyled = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  div {
    /* border: 1px solid black; */
  }
  .one {
    .box {
      /* border: 1px solid red; */
      width: 60%;
      margin-left: 30%;
      margin-top: 38px;
      .heading {
        margin-top: 48px;
        font-weight: bold;
        font-size: 14px;
        color: #7a8b94;
        margin-bottom: 16px;
      }
    }
  }
`;
export default WatchPage;
