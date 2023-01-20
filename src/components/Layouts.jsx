import React from "react";
import logo from "../images/LOgO.svg";
import roboIcon from "../images/adminRoboIcon.png"
import arrow_dwon from "../images/arrow-down_white.svg"
function Sidebar() {
  return (
    <>
      <div>
        <img src={logo} alt="" />
        <p className="sidebar_text">Alert List</p>
      </div>
      <div className="admin_drop">
        <img src={roboIcon} alt="" />
        <div className="d-flex justify-content-between w-100 mx-2">
            <p>Admin</p>
            <img src={arrow_dwon} className="c_pointer" alt="" />
        </div>
      </div>
    </>
  );
}

function Layouts({children}) {
  return (
    <div className="dashboard_main">
      <div className="child">
        <Sidebar />
      </div>
      <div className="child">{children}</div>
    </div>
  );
}

export default Layouts;
