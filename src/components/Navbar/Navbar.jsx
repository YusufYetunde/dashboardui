import { iconsImgs } from "../../utils/images";
import "./Navbar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { FaSearch, FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <FiMenu className="menu"/>
            </button>
            <h3 className="content-top-title">Home</h3>
        </div>
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
                <FaSearch className="icon"/>
            </button>
            <button className="notification-btn content-top-btn">
                <FaBell className="icon"/>
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default Navbar
