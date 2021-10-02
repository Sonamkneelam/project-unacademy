import { School } from "../SchoolSyllabus/School";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export const Navbar = () => {
  return (
    <School>
      <div className="header">
        <div className="navbar">
          <div>
            <img
              src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
              alt="logo"
            />
            <div style={{ color: " #3C4852" }}>Creative Corner</div>
          </div>

          <div className="account">
            <NotificationsNoneOutlinedIcon
              style={{ width: "20px", height: "20px" }}
            ></NotificationsNoneOutlinedIcon>
            <AccountCircleOutlinedIcon
              style={{ width: "28.60px", height: "28.60px" }}
            ></AccountCircleOutlinedIcon>
          </div>
        </div>
      </div>
    </School>
  );
};
