import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
const Sidebar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Your Tasks', path: '/todos' },
    { name: 'Projects', path: '/projects' },
    { name: 'Teams', path: '/teams' },
    { name: 'Settings', path: '/settings' }
  ];
<<<<<<< HEAD
  // dummy
=======
>>>>>>> 49efc16 (initial commit)

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;