import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="small_pt">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text-md-center">
              <img
                src="assets/images/about_img2.png"
                alt=""
                data-animation="zoomin"
                data-animation-delay="0.2s"
                className="animation"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 res-md-mt-30 res-sm-mt-20">
            <div className="title_default_light title_border">
              <h4
                className="animation"
                data-animation-delay="0.2s"
                data-animation="fadeInUp"
              >
                About The Cryptocash
              </h4>
              <p
                className="animation"
                data-animation-delay="0.4s"
                data-animation="fadeInUp"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                veritatis cupiditate quibusdam nobis laudantium ab hic,
                inventore doloremque iusto eaque sint minima sapiente laboriosam
                facere dignissimos provident mollitia totam harum?
              </p>
              <p
                className="animation"
                data-animation-delay="0.8s"
                data-animation="fadeInUp"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                veritatis cupiditate quibusdam nobis laudantium ab hic,
                inventore doloremque.
              </p>
            </div>

            <a
              href=""
              className="btn btn-default btn-radius video animation"
              data-animation-delay="1s"
              data-animation="fadeInUp"
            >
              Let's Start <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
