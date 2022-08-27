import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderStyle.css';

const HeaderComponent: FunctionComponent = () => {
  return (
    <div className="header-container">
      <Link className="header-title" to="/" data-testid="link">
        HACKER NEWS
      </Link>
    </div>
  );
};

export { HeaderComponent };
