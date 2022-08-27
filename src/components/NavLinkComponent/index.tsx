import React, { FunctionComponent } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import './styles/NavLinkStyle.css';

interface NavLinkComponentProps {
  children: React.ReactNode;
}

const NavLinkComponent: FunctionComponent<
  NavLinkProps & React.RefAttributes<HTMLAnchorElement> & NavLinkComponentProps
> = ({ children, ...props }) => {
  return (
    <NavLink className="nav-link" {...props}>
      {children}
    </NavLink>
  );
};

export { NavLinkComponent };
