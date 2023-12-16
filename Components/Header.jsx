import React from "react";
import {BiMenu} from "react-icons/bi";

const Header = () => {

  const menuList = [
   {
    menu: "Home",
    Link: "#"
   },
   {
    menu: "Services",
    Link: "#services"
   },
   {
    menu: "About",
    Link: "#about"
   },
   {
    menu: "Token",
    Link: "#token"
   },
   {
    menu: "Team",
    Link: "#team"
   },
   {
    menu: "Faq",
    Link: "#faq"
   },
   {
    menu: "Contact",
    Link: "#contact"
   },
  ];
  return <div className="header_wrap fixed-top">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <a 
          href="#home_section"
          data-animation="fadeInDown"
          data-animation-delay="1s"
          className="navbar-brand page-scroll">

            <img src="assets/images/logo.png" alt="logo" className="logo-light" />
            <img src="assets/images/logo_dark.png" alt="logo" className="logo-dark" />
          </a>

          <button className="navbar-toggle animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation"
          data-animation="fadeInDown"
          data-animation-dalay="1.1s"
          >
            <BiMenu/>
          </button>
      </nav>
    </div>
  </div>
};

export default Header;