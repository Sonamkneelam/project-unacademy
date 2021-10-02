/** @format */

import styled from "styled-components";
import image142 from "../images/image 142.png";

function Block1() {
  return (
    <Block1Styled>
      <div className='img'>
        <img src={image142} alt='logo' />
      </div>
      <div className='text'>Creative Corner</div>
    </Block1Styled>
  );
}

const Block1Styled = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  width: 100%;
  height: 142px;
  margin-top: 24px;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
  .img {
    width: 44px;
    height: 44px;
    /* border: 1px solid red; */
    img {
      width: 30px;
      height: 30px;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
  .text {
    font-size: 36px;
    color: #3c4852;
    height: 44px;
    margin-left: 1%;
  }
`;

export default Block1;
