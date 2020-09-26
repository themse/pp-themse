import React from 'react';

type SkillItemProps = {
  title: string;
  img: string;
};

export const SkillItem: React.FC<SkillItemProps> = ({ title, img }) => {
  return (
    <div>
      <div
        className="img-preview d-flex m-auto justify-content-center align-items-center"
        style={{ height: '130px', width: '130px' }}
      >
        <img
          src={img}
          style={{
            maxHeight: '130px',
            maxWidth: '130px',
            height: 'auto',
            width: 'auto',
          }}
          className="rounded p-4"
          alt={title}
        />
      </div>
      <p className="text-center">{title}</p>
    </div>
  );
};
