/** @format */
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const DataComp = ({ items, cat, name, page }) => {
  const history = useHistory();
  return (
    <>
      <DataDiv id={cat}>
        <ClassP>{name}</ClassP>
        <First>
          {items.map(({ id, name, img }) => {
            return (
              <Second
                key={id}
                onClick={() => history.push(`/goal/${page}/${cat}/${id}`)}>
                <Image>
                  <img src={img} alt='' />
                </Image>
                <Name>{name}</Name>
              </Second>
            );
          })}
        </First>
      </DataDiv>
    </>
  );
};

const DataDiv = styled.div`
  padding-bottom: 35px;
  /* border: 2px solid green; */
`;
const First = styled.div`
  padding: 0px 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Second = styled.div`
  height: 126px;
  width: 250px;
  padding: 15px 24px;
  margin-top: 16px;
  border-radius: 8px;
  -webkit-box-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out 0s;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  box-shadow: 0px 16px 32px 0px rgb(245, 247, 249);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ClassP = styled.div`
  font-size: 16px;
  line-height: 150%;
  color: #3c4852;
  margin: 0px;
  margin-left: 5%;
`;
const Image = styled.div`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0px;
  height: 40px;
  width: 40px;
  left: 10px;
  top: 0px;
  border-radius: 0px;
  color: #3c4852;
  & img {
    height: 40px;
    width: 40px;
    left: 10px;
    top: 10px;
    border-radius: 0px;
    color: #3c4852;
  }
`;
const Name = styled.p`
  color: #3c4852 !important;
  font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif !important;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  word-break: break-word;
  outline: none;
  white-space: nowrap;
  font-weight: 600;
`;
