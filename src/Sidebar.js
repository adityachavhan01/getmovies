// Sidebar.js

import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Sidebar content goes here */}
      <h3>Navbar</h3>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
