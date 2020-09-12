import React from "react";

export const Summary: React.FC = () => {
  return (
    <>
      <h3 className="resume-title">Summary</h3>
      <div className="resume-item pb-0">
        <h4>Denis Polusmyak</h4>
        <p>
          <em>
            My current stack is: ReactJS, Redux (saga), GraphQL (Apollo),
            Typescript, NodeJS, NestJS, PostgreSQL, Linux
          </em>
        </p>
        <ul>
          <li>Kyiv, Ukraine</li>
          <li>
            <a target="_blank" href="https://github.com/themse">
              github
            </a>
          </li>
          <li className="d-none">(000) 00-0000</li>
          <li>
            <a href="mailto:den.polus.47@gmail.com">den.polus.47@gmail.com</a>
          </li>
        </ul>
      </div>
    </>
  );
};
