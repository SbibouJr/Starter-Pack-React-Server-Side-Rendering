import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
      to={'/home'}

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
  </div>
);

export default Header;
