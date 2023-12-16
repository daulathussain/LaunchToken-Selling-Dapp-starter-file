import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, laudantium enim fugit mollitia laborum saepe laboriosam tenetur ratione alias excepturi."
    }, 
    {
      title: "Mobile App",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, laudantium enim fugit mollitia laborum saepe laboriosam tenetur ratione alias excepturi."
    },
    {
      title: "Exchange Services",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, laudantium enim fugit mollitia laborum saepe laboriosam tenetur ratione alias excepturi."
    },
    {
      title: "Investment Project",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, laudantium enim fugit mollitia laborum saepe laboriosam tenetur ratione alias excepturi."
    },
    {
      title: "Credit card use",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, laudantium enim fugit mollitia laborum saepe laboriosam tenetur ratione alias excepturi."
    },
    {
      title: "Planning",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, laudantium enim fugit mollitia laborum saepe laboriosam tenetur ratione alias excepturi."
    }
  ];
  return (
    <section id="services" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Meet our solution for you
              </h4>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, minima aliquam, non sed corrupti doloremque quo odio illo temporibus veritatis dolorem nam numquam voluptate necessitatibus sunt amet blanditiis animi nulla.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {
            services.map((service, i)=>(
              <div key={i+1} className="col-lg-4 col-md-6 col-sm-12">
                <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay={`0.${i+1}s`}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Service;
