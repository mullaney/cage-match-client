import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = props => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
