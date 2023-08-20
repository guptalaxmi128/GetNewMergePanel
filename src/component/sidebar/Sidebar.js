import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { Home, Award,User,CreditCard,Users,Power,BookOpen, X } from 'react-feather';
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/images/logo.png";


const Sidebar = ({ toggle }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Student logout successfully!");
  };

  return (
    <div className="sidebar-wrapper group w-0  xl:w-[248px] xl:block">
      <div
        id="bodyOverlay"
        className="w-screen h-screen fixed top-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm z-10 hidden"
      ></div>
      <div className="logo-segment">
        <NavLink className="flex items-center" to="/">
          <img
            src={logo}
            className="white_logo"
            alt="logo"
            width={50}
            height={50}
          />
          <span className="ltr:ml-3 rtl:mr-3 text-xl font-Inter font-bold text-slate-900 dark:text-white">
            GET
          </span>
        </NavLink>
        {/* <!-- Sidebar Type Button --> */}
        {/* <div
          id="sidebar_type"
          className="cursor-pointer text-slate-900 dark:text-white text-lg"
        >
          <iconify-icon
            className="sidebarDotIcon extend-icon text-slate-900 dark:text-slate-200"
            icon="fa-regular:dot-circle"
          ></iconify-icon>
          <iconify-icon
            className="sidebarDotIcon collapsed-icon text-slate-900 dark:text-slate-200"
            icon="material-symbols:circle-outline"
          ></iconify-icon>
        </div> */}
        <button
          className="sidebarCloseIcon text-2xl inline-block xl:hidden"
          onClick={toggle}
        >
          <X size={22} />
        </button>
      </div>
      <div
        id="nav_shadow"
        className="nav_shadow h-[60px] absolute top-[0px] nav-shadow z-[1] w-full  pointer-events-none
  opacity-0"
      ></div>
      <div
        className="sidebar-menus bg-white dark:bg-slate-800 py-2 px-4 h-[calc(100%-80px)] z-50 "
        id="sidebar_menus"
      >
        <ul className="sidebar-menu">
          <li
            className={activeItem === 0 ? "active" : ""}
            onClick={() => handleItemClick(0)}
          >
            <NavLink to="/student/home" className="navItem">
              <span className="flex items-center">
               <Home size={22} />
                &nbsp; &nbsp;
                <span style={{ fontSize: "15px" }}>Dashboard</span>
              </span>
            </NavLink>
          </li>

          <li
            className={activeItem === 1 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            <NavLink to="/student/course" className="navItem">
              <span className="flex items-center">
                <Award size={22} />
                &nbsp; &nbsp;
                <span style={{ fontSize: "15px" }}>Qualification</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 2 ? "active" : ""}
            onClick={() => handleItemClick(2)}
          >
            <NavLink to="/student/account" className="navItem">
              <span className="flex items-center">
                <Users size={22} /> &nbsp; &nbsp;
                <span style={{ fontSize: "15px" }}>Account Details</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 3 ? "active" : ""}
            onClick={() => handleItemClick(3)}
          >
            <NavLink to="/student/wallet" className="navItem">
              <span className="flex items-center">
                <CreditCard size={22} />
                &nbsp; &nbsp;
                <span style={{ fontSize: "15px" }}>Wallet</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 4 ? "active" : ""}
            onClick={() => handleItemClick(4)}
          >
            <NavLink to="/student/profile" className="navItem">
              <span className="flex items-center">
                <User szie={22} />{" "}
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "15px" }}>Profile</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 5 ? "active" : ""}
            onClick={() => handleItemClick(5)}
          >
            <NavLink to="/student/courses" className="navItem">
              <span className="flex items-center">
                <BookOpen size={22} />
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "15px" }}>Course Offered</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 6 ? "active" : ""}
            onClick={() => handleItemClick(6)}
          >
            <NavLink to="/login" className="navItem" onClick={handleLogout}>
              <span className="flex items-center">
                <Power size={22} style={{color:'red'}} />
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "15px",color:'red' }}>Logout</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    // {/* <!-- End: Sidebar --> */}
  );
};

export default Sidebar;
