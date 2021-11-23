import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "../styles/nav.css";

function Nav() {
  return (
    <div className="crypto__nav">
      <h1 className="title">Crypto Dashboard</h1>
      <div>
        <ul className="crypto__nav_links">
          <li>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1637616829/julian-wan-WNoLnJo7tS8-unsplash_voqovx.jpg"
              alt="Avatar"
              className="avatar"
            />
          </li>
          <li>
            <NotificationsIcon className="icon" />
          </li>
          <li>
            <AccountBalanceIcon className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
