/** @format */

import styled from "styled-components";
import Footercomp from "./Footercomp";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const data = [
  {
    title: "COMPANY",
    text1: "About us",
    text2: "Careers",
    text3: "Blogs",
    text4: "Privacy Policy",
    text5: "Terms and Conditions",
  },
  {
    title: "POPULAR GOALS",
    text1: "IIT JEE",
    text2: "UPSC CSE GS",
    text3: "SSC Exams",
    text4: "CBSE Class 12",
    text5: "NEET UG",
  },
  {
    title: "OTHER LINKS",
    text1: "User Guidelines",
    text2: "Site Map",
    text3: "Refund Policy",
    text4: "Legal Notices",
    text5: "Plus subscriptions T&C",
  },
];

function Footer() {
  return (
    <FooterStyled>
      <div className='outer'>
        <div className='one'>
          <img
            src='https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256'
            alt='logo'
          />
          <div className='one1'>
            <div>
              <a href='https://www.facebook.com/unacademy/'>
                <FacebookIcon />
              </a>
            </div>
            <div>
              <a href='https://www.youtube.com/channel/UCABe2FgVNv2hgBeMu2mySVg'>
                <YouTubeIcon />
              </a>
            </div>
            <div>
              <a href='https://twitter.com/unacademy'>
                <TwitterIcon />
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/unacademy/'>
                <InstagramIcon />
              </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/company/unacademy/'>
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className='text1'>© 2021 Sorting Hat Technologies Pvt Ltd</div>
        </div>
        <div>
          <Footercomp {...data[0]} />
        </div>
        <div>
          <Footercomp {...data[1]} />
        </div>
        <div>
          <Footercomp {...data[1]} />
        </div>
        <div className='last'>
          <div className='title'>LEARNER APP</div>
          <div className='grid'>
            <div>
              <a href='https://play.google.com/store/apps/details?id=com.unacademyapp&referrer=utm_source%3DFooter%26utm_medium%3DWebApp%26utm_campaign%3DFooter%26'>
                <img
                  src='https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128'
                  alt='app'
                />
              </a>
            </div>
            <div>
              <a href='https://apps.apple.com/in/app/unacademy-learning-app/id1342565069?referrer%3Dutm_source%253DFooter%2526utm_medium%253DWebApp%2526utm_campaign%253DFooter%2526'>
                <img
                  src='https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128'
                  alt='app'
                />
              </a>
            </div>
          </div>
          <div className='title1'>EDUCATOR APP</div>
          <div className='grid'>
            <div>
              <a href='https://play.google.com/store/apps/details?id=com.unacademy&referrer=utm_source%3DFooter%26utm_medium%3DWebApp%26utm_campaign%3DFooter%26'>
                <img
                  src='https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128'
                  alt='app'
                />
              </a>
            </div>
            <div>
              <a href='https://apps.apple.com/in/app/unacademy-educator-app/id1156375099?referrer%3Dutm_source%253DFooter%2526utm_medium%253DWebApp%2526utm_campaign%253DFooter%2526'>
                <img
                  src='https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128'
                  alt='app'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  /* border: 1px solid blue; */
  max-width: 1366px;
  width: 100%;
  margin: auto;
  margin-top: 105px;
  height: 212px;
  .outer {
    width: 80%;
    margin: auto;
    /* border: 1px solid violet; */
    display: grid;
    height: 212px;
    grid-template-columns: 20% 20% 20% 20% 20%;
    div {
      /* border: 1px solid pink; */
    }
    .one {
      margin-top: 32px;
      img {
        width: 50%;
      }
      .text1 {
        font-size: 8px;
        margin-top: 26.81px;
      }
      .one1 {
        width: 60%;
        margin-top: 33.79px;
        display: flex;
        justify-content: space-between;
        div {
          width: 10.5px;
          height: 10.5px;
          a {
            width: 100%;
          }
        }
      }
    }
    .last {
      margin-top: 32px;
      .title,
      .title1 {
        font-size: 14px;
        font-weight: bold;
        color: #3c4852;
      }
      .grid {
        display: grid;
        grid-template-columns: 45% 45%;
        grid-column-gap: 10%;
        margin-top: 8px;
        div {
          a {
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export default Footer;
