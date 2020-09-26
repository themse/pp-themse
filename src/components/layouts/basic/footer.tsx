import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>Themse</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">2020</div>
      </div>
    </footer>
  );
};
