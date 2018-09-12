import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <Link to="/Home">Home</Link>
    <Link to="/">Landing</Link>
  </nav>
);
export default Header;
