import { LoginCard } from "./LoginCard";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonCloseLogin } from "./ButtonCloseLogin";
export const Login = ({ handleLogin }) => {
  return (
    <LoginCard>
      <ButtonCloseLogin
        className="close-login-button"
        onClick={() => {
          handleLogin();
        }}
      >
        <CloseIcon></CloseIcon>
      </ButtonCloseLogin>

      <div className="login">Login</div>
      <div className='signup'>or <span >create your account</span></div>
    </LoginCard>
  );
};
