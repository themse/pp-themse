import React from 'react';

export const Accomplishments: React.FC = () => {
  return (
    <>
      <h3 className="resume-title">Accomplishments</h3>
      <div className="resume-item">
        <h4>Education</h4>
        <p>
          Successfully graduated from Kyiv National Economic University named
          after Vadym Hetman with a master degree in Economics and Management
          Faculty in 2015.
        </p>
      </div>
      <div className="resume-item">
        <h4>Languages</h4>
        <ul>
          <li>English - Intermediate</li>
          <li>German - Pre-Intermediate</li>
        </ul>
      </div>
    </>
  );
};
