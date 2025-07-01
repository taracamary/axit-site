import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.scss';
import Nav from '../nav/Nav';

const Sidebar = () => {
  return (
    <Menu right>
      <Nav className="sidebar__nav" />
    </Menu>
  );
};

export default Sidebar;

