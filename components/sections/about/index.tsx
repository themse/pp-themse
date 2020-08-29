import React from "react";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4">
            <img src="/img/avatar.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>NodeJS / JS Developer</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right" />{" "}
                    <strong>Name:</strong> Denis Polusmyak
                  </li>
                  <li>
                    <i className="icofont-rounded-right" />{" "}
                    <strong>Birthday:</strong> 4 May 1992
                  </li>

                  <li>
                    <i className="icofont-rounded-right" />{" "}
                    <strong>City:</strong> Kyiv, Ukraine
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right" />{" "}
                    <strong>Email:</strong> email@example.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right" />{" "}
                    <strong>Github:</strong>{" "}
                    <a target="_blank" href="https://github.com/themse">
                      themse
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              molestias reprehenderit, expedita provident quisquam pariatur
              distinctio ipsa libero dolores quae delectus iure perspiciatis
              rerum maiores commodi, illum laborum veniam? Id.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
