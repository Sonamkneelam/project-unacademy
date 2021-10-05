/** @format */
import React from "react";
import styled from "styled-components";
import HomeBlock3 from "../components/HomeBlock3";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function BeforeHomePage() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => ref.current.complete(), 500);
  }, []);
  
  return (
    <BeforeHomePageStyled>
      <LoadingBar color='#08BD80' height='4px' ref={ref} />
      <div className='header'>
        <div className='navbar'>
          <img
            src='https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256'
            alt='logo'
          />

          <button className='button'>Login</button>
        </div>
        <div className='heading'>
          <div className='head'>
            India’s largest
            <br />
            learning platform
          </div>
          <div className='course'>
            <div className='course1'>
              <img
                src='https://static.uacdn.net/production/_next/static/images/home/test-prep-learning.svg?q=75&w=256'
                alt='doll'
              />
              <div className='line1'>Prepare for</div>
              <div className='line2'>Competitive exams</div>
              <div className='line3'>Popular goles</div>
              <div className='line4'>
                <div>UPSC CSE - GS</div>
                <div>IIT JEE</div>
                <div>NEET UG</div>
                <div>Bank Exams</div>
              </div>
              <div className='line5'>
                <div>{"GATE & ESE"}</div>
                <div>UPSC CSE - Optional</div>
              </div>
              <Link to='/explore'>
                <button>Start Learning</button>
              </Link>
            </div>
            <div className='course1'>
              <img
                src='https://static.uacdn.net/production/_next/static/images/home/test-prep-learning.svg?q=75&w=256'
                alt='doll'
              />
              <div className='line1'>Prepare for</div>
              <div className='line2'>Class 6 to 12</div>
              <div className='line3'>Popular boards</div>
              <div className='line4'>
                <div>CBSE</div>
                <div>Maharashtra Board</div>
                <div>Uttar Pradesh Board</div>
              </div>
              <div className='line5'>
                <div>Uttar Pradesh Board</div>
              </div>
              <Link to='/explore'>
                {" "}
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
          <div className='block3'>
            {block3adetails.map((el) => {
              return <HomeBlock3 {...el} />;
            })}
          </div>
          <div className='block4'>
            <div className='block41'>
              <div className='block411'>
                Get the learning
                <br /> app
              </div>
              <div className='block412'>
                Download lessons and learn anytime,
                <br /> anywhere with the Unacademy app
              </div>
              <div className='block413'>
                <a href='https://apps.apple.com/in/app/unacademy-learning-app/id1342565069?referrer%3Dutm_source%253DFooter%2526utm_medium%253DWebApp%2526utm_campaign%253DFooter%2526'>
                  <img
                    src='https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=1920'
                    alt='playstore'
                  />
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.unacademyapp&referrer=utm_source%3DFooter%26utm_medium%3DWebApp%26utm_campaign%3DFooter%26'>
                  <img
                    src='https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=1920'
                    alt='playstore'
                  />
                </a>
              </div>
            </div>
            <div className='block42'>
              <img
                src='https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=640'
                alt='mobile'
              />
            </div>
          </div>
          {/* <div className="block5">
                        
                    </div> */}
        </div>
      </div>
      <Footer />
    </BeforeHomePageStyled>
  );
}

const BeforeHomePageStyled = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  margin: auto;
  .header {
    width: 80%;
    margin: auto;
    /* border: 1px solid red; */
    padding: 1.5%;
    .navbar {
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-between;
      .button {
        width: 7%;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: #08bd80;
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
    .heading {
      /* border: 1px solid red; */
      margin-top: 148px;
      .head {
        color: #3c4852;
        font-size: 56px;
        font-weight: bold;
        /* border: 1px solid black; */
      }
      .course {
        margin-top: 112px;
        /* border: 1px solid black; */
        display: grid;
        grid-template-columns: 48% 48%;
        grid-column-gap: 4%;
        .course1 {
          /* border: 1px solid blue; */
          border-radius: 6px;
          height: 336px;
          position: relative;
          img {
            position: absolute;
            bottom: 0;
            right: 0;
          }
          .line1 {
            font-size: 32px;
            margin-left: 24px;
            margin-top: 40px;
            color: #3c4852;
          }
          .line2 {
            font-size: 32px;
            font-weight: bold;
            margin-left: 24px;
            color: #3c4852;
          }
          .line3 {
            font-size: 18px;
            margin-left: 24px;
            margin-top: 8px;
            color: #7a8b94;
          }
          .line4 {
            /* border: 1px solid black; */
            width: 70%;
            margin-left: 24px;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            div {
              font-size: 14px;
              color: #08bd80;
              font-weight: bold;
            }
          }
          .line5 {
            /* border: 1px solid black; */
            width: 46%;
            margin-left: 24px;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            div {
              font-size: 14px;
              color: #08bd80;
              font-weight: bold;
            }
          }
          button {
            margin-left: 24px;
            padding: 14px 36px;
            margin-top: 48px;
            border-radius: 6px;
            background-color: #08bd80;
            font-size: 16px;
            font-weight: bold;
            color: white;
            border: none;
            cursor: pointer;
          }
        }
      }
      .block3 {
        height: 383px;
        /* border: 1px solid black; */
        margin-top: 112px;
        display: grid;
        grid-template-columns: 32.7% 32.7% 32.7%;
        grid-column-gap: 1%;
      }
      .block4 {
        height: 403px;
        /* border: 1px solid black; */
        margin-top: 112px;
        display: grid;
        grid-template-columns: 50% 35%;
        .block41 {
          /* border: 1px solid red; */
          .block411 {
            color: #3c4852;
            font-size: 40px;
            margin-left: 24px;
            margin-top: 97px;
            font-weight: bold;
          }
          .block412 {
            color: #3c4852;
            font-size: 18px;
            margin-left: 24px;
            margin-top: 32px;
          }
          .block413 {
            margin-top: 32px;
            margin-left: 24px;
            width: 50%;
            display: grid;
            grid-template-columns: 47% 47%;
            grid-column-gap: 6%;
            img {
              width: 100%;
              height: 40px;
            }
          }
        }
        .block42 {
          /* border: 1px solid red; */
          img {
            width: 100%;
            height: 399px;
          }
        }
      }
    }
    .block5 {
      /* border: 1px solid black; */
      height: 604px;
      margin-top: 112px;
    }
  }
`;
const block3adetails = [
  {
    id: "b31",
    title: "Daily live classes",
    image:
      "https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=384",
    discription:
      "Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on",
  },
  {
    id: "b32",
    title: "Practice and revise",
    image:
      "https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&w=384",
    discription:
      "Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision",
  },
  {
    id: "b33",
    title: "Learn anytime, anywhere",
    image:
      "https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&w=384",
    discription:
      "One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices Get the learning",
  },
];
export default BeforeHomePage;
