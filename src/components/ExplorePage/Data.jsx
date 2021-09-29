/** @format */
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
  top: 10px;
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
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  margin: 0px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  font-family: AvertaStd-Bold;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;
export const DataComp = ({ items, id, name }) => {
  const history = useHistory();

  return (
    <>
      <DataDiv id={id}>
        <ClassP>{name}</ClassP>
        <First>
          {items.map(({ id, name, img }) => {
            return (
              <>
                <Second key={id} onClick={() => history.push(`/goal/${name}`)}>
                  <Image>
                    <img src={img} alt='' />
                  </Image>
                  <Name>{name}</Name>
                </Second>
              </>
            );
          })}
        </First>
      </DataDiv>
    </>
  );
};
