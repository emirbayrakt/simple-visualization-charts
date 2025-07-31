import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Overview', end: true },
  { to: '/campaigns', label: 'Campaigns' },
  { to: '/create', label: 'Create' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-ajpurple900 sticky top-0 z-20 shadow-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="text-xl font-bold text-white">App Installs</div>

          {/* Mobile menu button, react icons could look better here but I'm short on time*/}
          <button
            className="sm:hidden flex items-center px-2 py-1 text-ajpurple300 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? 'X' : 'Menu'}
          </button>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-white text-ajpurple900 shadow'
                      : 'text-ajpurple300 hover:text-white hover:bg-ajpurple700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        {/* Mobile nav links */}
        {open && (
          <div className="sm:hidden flex flex-col gap-1 pb-2 animate-fade-in">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-white text-ajpurple900 shadow'
                      : 'text-ajpurple300 hover:text-white hover:bg-ajpurple700'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
