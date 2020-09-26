import React from 'react';
import { BasicLayout } from '../components/layouts/basic';
import { Summary } from '../components/sections/resume/summary';
import { ProfessionalExperience } from '../components/sections/resume/professional-experience';
import { Accomplishments } from '../components/sections/resume/accomplishments';
import { ResumePageType } from '../pages/resume';

export const ResumePage: React.FC<ResumePageType> = ({ profExpList = [] }) => {
  return (
    <BasicLayout title="Resume">
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
            <p className="d-none">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Summary />
              <Accomplishments />
            </div>
            <div className="col-lg-6">
              <ProfessionalExperience list={profExpList} />
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  );
};
