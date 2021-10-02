import styled from "styled-components";

export const School = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  margin: auto;
  height: 88px;
  background: #ffffff;
  box-shadow: 0px 4px 50px 5px rgba(0, 0, 0, 0.05);
  .header {
    width: 80%;
    margin: auto;
    /* border: 1px solid red; */
    padding: 1.5%;
    height: 88px;
    box-sizing: border-box;
    display: flex;

    align-items: center;
  }
  .navbar {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    /* background-color: azure; */
  }

  .navbar > div:nth-child(1) {
    display: flex;
    font-size: 20px;
    width: 35%;
  }

  .navbar > div:nth-child(1) > div {
    margin: 0 0 0 3%;
    padding: 0 3%;
    border-left: 1px solid #e9eef2;
  }
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

  .account {
    display: flex;
    width: 7%;
    justify-content: space-between;
    align-items: center;
  }
`;
