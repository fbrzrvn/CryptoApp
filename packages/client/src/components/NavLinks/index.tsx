import React from 'react';
import { Links, LinkType } from './Links';
import { NavLinkIcon, NavLinkItem, NavLinksWrapper } from './styles';

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      {Links.map((link: LinkType) => (
        <NavLinkItem
          key={link.id}
          to={link.route}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <NavLinkIcon icon={link.icon} />
          {link.label}
        </NavLinkItem>
      ))}
    </NavLinksWrapper>
  );
};

export default NavLinks;
