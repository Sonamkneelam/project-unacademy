/** @format */

import styled from "styled-components";

function Footercomp({ title, text1, text2, text3, text4, text5 }) {
  //console.log(title);
  return (
    <FootercompStyled>
      <div className='title'>{title}</div>
      <div className='text'>{text1}</div>
      <div className='text'>{text2}</div>
      <div className='text'>{text3}</div>
      <div className='text'>{text4}</div>
      <div className='text'>{text5}</div>
    </FootercompStyled>
  );
}

const FootercompStyled = styled.div`
  margin: 32px 0px;
  .title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #3c4852;
  }
  .text {
    font-size: 12px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: #08bd80;
    }
  }
`;

export default Footercomp;
