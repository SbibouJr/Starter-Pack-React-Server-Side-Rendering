import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
      exact
      to={'/'}

    >
      Home
    </NavLink>
    <NavLink
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
      to={'/info'}
    >
      Info
    </NavLink>
  </header>
);

export default Header;
