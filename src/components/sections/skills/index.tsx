import React from "react";
import { SkillItem } from "./item";
import { skillsList } from "./list";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eum
            totam animi, quas, veniam pariatur blanditiis, dignissimos velit
            quibusdam saepe distinctio? Autem possimus deserunt doloremque modi
            quasi cumque facere quibusdam?
          </p>
        </div>

        <div className="row d-flex justify-content-center">
          {skillsList.map(({ href, title, img }) => (
            <div key={title} className="col-lg-2 mb-3">
              <a href={href} target="_blank">
                <SkillItem img={img} title={title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
