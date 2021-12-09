/** @format */

import styled from "styled-components";

export const LoginCard = styled.div`
  position: fixed;
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
    height: 50px;
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
    height: 50px;
    left: 52px;
    top: 120px;
  }

  .signup > span {
    color: #08bd80;
    border-bottom: 1px dashed #08bd80;
  }

  .input-field {
    position: absolute;
    top: 170px;
    left: 52px;
  }
`;
