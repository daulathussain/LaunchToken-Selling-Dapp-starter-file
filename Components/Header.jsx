import React from "react";
import {BiMenu} from "react-icons/bi";

const Header = ({address, setAddress, connectWallet}) => {

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
  return <header className="header_wrap fixed-top">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <a 
          href="#home_section"
          data-animation="fadeInDown"
          data-animation-delay="1s"
          className="navbar-brand page-scroll">

            <img src="assets/images/logo.png" alt="logo" className="logo-light" />
            <img src="assets/images/logo_dark.png" alt="logo" className="logo_dark" />
          

          <button className="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation"
          data-animation="fadeInDown"
          data-animation-dalay="1.1s"
          >
            <BiMenu/>
          </button>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              {
                menuList.map((menu, i)=>(
                  <li key={i+1}
                  className="animation"
                  data-animation="fadeinDown" data-animation-delay={`1.${i+1}s`}
                  >
                    <a href={menu.Link} className="nav-link">
                      {menu.menu}
                    </a>
                  </li>
                ))
              }
            </ul>

            <ul className="navbar-nav nav-btn align-items-center">
              <li className="animation" data-animation="fadeInDown" data-animation-delay="2s">
                {
                  address ? (
                    <a className="btn btn-default btn-radius nav-item">
                      <small className="new-color">
                      {""}
                      {address.slice(0,15)}...
                      </small>
                    </a>
                  ) : (
                    <a onClick={()=>connectWallet()} className="btn btn-default btn-radius nav-item">
                      <small className="new-color">
                      {""}
                      Connect
                      </small>
                    </a>
                  )
                }
              </li>
            </ul>
          </div>
      </nav>
    </div>
  </header>
};

export default Header;