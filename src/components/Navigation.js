import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Hamburger from './Hamburger';
import Anchor from './Anchor';

const Logo = () => {
  return (
    <Anchor to="/" title="Home page">
      <div className="text-2xl -mt-1 font-alt-sans">
        <span className="mr-2">{`{`}</span>
        <span className="mr-2 font-light">curious</span>
        <span className="font-bold">programmer</span>
        <span className="ml-2">{`}`}</span>
      </div>
    </Anchor>
  );
};

const MenuItem = ({ children, to }) => {
  const selected =
    typeof window !== 'undefined' && window.location.pathname === to;
  return (
    <div
      className={`text-color-3-script border-color-3-script border-2 hover:bg-color-1 hover:text-color-1-script m-3 text-center ${
        selected && 'bg-color-1-alternative text-color-1-script font-bold'
      }`}
    >
      <Anchor className="py-3 px-12" to={to}>
        {children}
      </Anchor>
    </div>
  );
};

const Navigation = ({ layout }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <div className="bg-color-2 text-color-2-script py-2 px-4 print:hidden">
      <div
        className={`flex justify-between items-center ${
          layout === 'fluid' ? '' : 'max-w-screen-md mx-auto w-full'
        }`}
      >
        <Logo />
        <Hamburger isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div
          className="bg-color-3 text-color-3-script fixed top-0 left-0 bottom-0 right-0"
          onClick={() => toggleMenu(false)}
        >
          <div className="overflow-scroll max-h-screen pb-6">
            <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <MenuItem to="/">Home</MenuItem>
              <MenuItem to="/blog">Blog</MenuItem>
              <MenuItem to="/scribbles">Scribbles</MenuItem>
              <MenuItem to="/tags">Tags</MenuItem>
              <MenuItem to="/about">About me</MenuItem>
              <MenuItem to="/resume">Resume</MenuItem>
              <MenuItem to="https://cal.com/clarice-bouwer">
                Appointment
              </MenuItem>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Navigation.propTypes = {
  layout: PropTypes.string,
};

export default Navigation;
