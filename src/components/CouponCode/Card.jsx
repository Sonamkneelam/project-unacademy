import styled from "styled-components";

export const Card = styled.div`
  position: absolute;
  width: 40.7%;
  height: 100vh;
  right: 0px;
  top: 0px;
  padding: 0% 3%;
  box-sizing: border-box;
  background: #ffffff;
  z-index: 5;

  /* COLOUR BASE-1 */

  .close-login-button {
    position: absolute;
    left: 50px;
    right: 2%;
    top: 3%;
    bottom: 2%;
    width: 24px;
    height: 24px;
    max-width: 24px;
    cursor: pointer;
  }

  .login {
    position: absolute;
    width: 513px;
    height: 49px;
    max-width: 513px;
    left: 52px;
    top: 70px;
    font-family: AvertaStd-Bold;
    font-size: 32px;
    line-height: 49px;
    color: #3c4852;
  }

  .signup {
    position: absolute;
    width: 513px;
    height: 49px;
    left: 52px;
    top: 16%;
  }

  .signup > span {
    color: #08bd80;
    border-bottom: 1px dashed #08bd80;
  }

  .buttonContainer {
    display: flex;
    justify-content: space-between;
  }

  .buttonContainer > button:nth-child(1) {
    width: 17%;
    height: 40px;
    border-radius: 8px;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1.4% 0;
  }

  .buttonContainer > button:nth-child(2) {
    padding: 11px 21px;
    background: #e9eef2;
    border-radius: 8px;
    font-size: 1.1rem;
    border: none;
    font-weight: 600;
    height: 40px;
    margin: 1.4% 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7a8b94;
  }

  .succesContainer {
    width: 80%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    margin: 5% auto;
  }

  .succesContainer > div {
    font-family: AvertaStd-Bold;
    font-size: 32px;
    line-height: 49px;
    color: #3c4852;
  }
`;
