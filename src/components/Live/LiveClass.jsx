/** @format */

import React from "react";
import styled from "styled-components";
import banner from "../../images/banner.png";
import lock from "../../images/Group 206.png";
import vector1 from "../../images/Group 204.png";
import vector2 from "../../images/Group 205.png";
import styles from "./LiveClass.module.css";
import LoadingBar from "react-top-loading-bar";

function LiveClass() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => ref.current.complete(), 400);
  }, []);

  return (
    <>
      <LoadingBar color='#08BD80' height='4px' ref={ref} />
      <GridCont>
        <Firstdiv>
          <img src={banner} alt='banner' />
        </Firstdiv>
        <Seconddiv>
          <iframe
            title='Live'
            width='100%'
            height='80%'
            src='https://www.youtube.com/embed/3fjrpkb6hxg?autoplay=1&mute=1'></iframe>
          <Messages>Messages</Messages>
        </Seconddiv>
        <Thirddiv>
          <TabB>
            <div>
              <Button className={styles.tooltip}>
                <img src={vector1} alt='1' />
                <span className={styles.tooltiptext}>
                  <h4>Message(T)</h4>
                </span>
              </Button>
            </div>
            <div>
              <Button1 className={styles.tooltip}>
                <img src={vector2} alt='2' />
                <span className={styles.tooltiptext}>
                  <h4>
                    <div style={{ color: "white" }}>Doubts</div>
                    <p>View all the doubts solved in live</p>
                    <p>class here</p>
                  </h4>
                </span>
              </Button1>
            </div>
            <div>
              <Button2 className={styles.tooltip}>
                <img src={lock} alt='2' />
                <span className={styles.tooltiptext}>
                  <h4>Hide Panel</h4>
                </span>
              </Button2>
            </div>
          </TabB>
          <Item>
            <MliveDiv></MliveDiv>
            <Mlive>You can only message in live lecture</Mlive>
          </Item>
        </Thirddiv>
      </GridCont>
    </>
  );
}
const GridCont = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 550px;
  display: grid;
  overflow: hidden;
  grid-template-areas:
    "a a a b"
    "a a a c"
    "a a a c";
  // grid-gap: 20px;
  // border: 1px solid red;
`;
const Firstdiv = styled.div`
  width: 650px;
  height: 550px;
  grid-area: a;
  // border: 1px solid green;
  box-shadow: rgba(0, 0, 0, 0.15) 10.4px 2.4px 15.2px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Seconddiv = styled.div`
  width: 450px;
  height: 250px;
  grid-area: b;
  border: 0.5px solid #e9eef2;
`;
const Thirddiv = styled.div`
  width: 450px;
  height: 300px;
  grid-area: c;
  border: none;
  display: flex;
  flex-direction: row-reverse;
`;
const Messages = styled.h4`
  text-align: left;
  width: 90%;
  height: 40px;
  padding: 10px 0 10px 10px;
  border: none;
  // border-bottom: 1px solid gray;
`;
const TabB = styled.div`
  width: 10%;
  height: 100%;
  border: none;
  border: 0.5px solid #e9eef2;
  border-top: none;
  border-left: none;
  box-shadow: -10px 0px 12px -5px gray;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px gray;
  background: #3c4852;
  margin: 10px 0px 50px;
  margin-left: 14px;
  img {
    width: 100%;
  }
  & h4 {
    color: white;
  }
`;
const Button1 = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px gray;
  background: #3c4852;
  margin-bottom: 100px;
  margin-left: 14px;
  img {
    width: 100%;
  }

  & h4 {
    color: white;
  }

  & p {
    color: white;
  }
`;
const Button2 = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px gray;
  background: #3c4852;
  // margin-bottom: 100px;
  margin-left: 14px;
  img {
    width: 100%;
  }
  & h4 {
    color: white;
  }
`;
const Item = styled.div`
  width: 80%;
  height: 100%;
  // border:1px solid gray;
`;
const Mlive = styled.div`
  width: 100%;
  padding: 10px;
`;
const MliveDiv = styled.div`
  width: 100%;
  height: 250px;
  // border: 1px solid gray;
  // overflow: scroll;
  overflow-x: hidden;
  padding: 10px;
`;
export default LiveClass;
