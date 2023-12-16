import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerList = ["Cryptocash", "How its work", "Token", "FAQ", "Contact"];
  return (
    <footer>
    <div className="top_footer bg_light_dark" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/footer-bg.png"
    >
      
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="footer_logo mb-3 animation" data-animation="fadeInUp" data-animation-delay="0.2s"
            >
              <a href="#home-section" className="page-scroll">
                <img src="assets/images/footer_logo.png" alt="logo" />
              </a>
            </div>

            <div className="footer_desc">
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti amet veniam optio a eaque iusto rerum dolor adipisci ducimus sapiente assumenda iure facere dicta, ratione magni veritatis, ipsum placeat.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
            <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s"
            >
              Quick Links
            </h4>

            <ul className="footer_link">
              {
                footerList.map((list, i)=>(
                  <li className="animation" data-animation="fadeInUp" data-animation-delay={`0.${i+2}s`}
                  >
                    <a href="#">{list}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
             <div className="newsletter_form">
              <h4 className="footer_title border_title animation">
                Newsletter
              </h4>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis maxime dolore.
              </p>

              <form action="#" className="subscribe_form_animation" data-animation="fadeInUp" data-animation-delay="0.4s"
              >
                <input type="text" required placeholder="Enter Email Address" className="input-rounded" />

                <button className="btn-info" type="submit" title="subscribe" name="submit" value="submit"
                >
                  Subscribe
                </button>
              </form>
             </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="copyright">
              Copyright &copy; 2023 All Right reserved by @AbriCoin
            </p>
          </div>

          <div className="col-md-6">
            <ul className="list_none footer_menu">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  ); 
};

export default Footer;
