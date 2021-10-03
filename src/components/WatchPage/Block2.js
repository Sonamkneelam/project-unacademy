/** @format */

import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Block2({ title1, title2, data, cat }) {
  const history = useHistory();
  return (
    <Block2Styled>
      <div className='one'>
        <div className='text1'>{title1}</div>
        <div
          onClick={() => history.push(`/crack/${cat}/9tttr3`)}
          className='text2'>
          {title2}
        </div>
      </div>
      <div className='two'>
        {data.map((el) => {
          return (
            <div className='main'>
              <img
                onClick={() => history.push(`/crack/${cat}/${el.id}`)}
                src={el.img}
                alt='people'
                className='img'
              />
              <div className='main1'>
                <div>{el.language}</div>
                <div style={{ color: "#2D81F7" }}>{el.desc}</div>
              </div>
              <div className='main2'>{el.subject}</div>
              <div className='main3'>{el.starts}</div>
              <div className='main4'>{el.name}</div>
            </div>
          );
        })}
      </div>
    </Block2Styled>
  );
}

const Block2Styled = styled.div`
  /* border: 1px solid black; */
  margin-top: 64px;
  height: 390px;
  .one {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    height: 30px;
    .text1 {
      font-size: 24px;
      font-weight: bold;
      color: #3c4852;
      cursor: pointer;
    }
    .text2 {
      font-size: 24px;
      font-weight: bold;
      color: #08bd80;
      cursor: pointer;
    }
  }
  .two {
    /* border: 1px solid red; */
    margin-top: 72px;
    height: 288px;
    display: grid;
    grid-template-columns: 31% 31% 31%;
    grid-column-gap: 3.5%;
    .main {
      box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      .img {
        /* border: 1px solid pink; */
        height: 148px;
        width: 100%;
        border-radius: 6px 6px 0px 0px;
        cursor: pointer;
      }
      .main1 {
        display: flex;
        justify-content: space-around;
        margin-left: 17px;
        font-size: 12px;
        font-weight: bold;
      }
      .main2 {
        margin-left: 17px;
        font-size: 14px;
        font-weight: bold;
        margin-top: 20px;
        color: #3c4852;
      }
      .main3 {
        margin-left: 17px;
        font-size: 14px;
        margin-top: 8px;
        color: #7a8b94;
      }
      .main4 {
        margin-left: 17px;
        font-size: 14px;
        margin-top: 24px;
        color: #3c4852;
      }
    }
  }
`;
export default Block2;
