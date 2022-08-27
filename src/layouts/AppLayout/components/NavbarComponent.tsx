import React, { FunctionComponent } from 'react';
import { NavLinkComponent } from '@/components/NavLinkComponent';
import '../styles/NavbarStyle.css';

const NavbarComponent: FunctionComponent = () => {
  return (
    <div className="navbar-container">
      <NavLinkComponent to="/" data-testid="nav-link">
        All
      </NavLinkComponent>
      <NavLinkComponent to="/favorites" data-testid="nav-link">
        My Faves
      </NavLinkComponent>
    </div>
  );
};

export { NavbarComponent };
