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
    <li
      className={`border-2 hover:bg-color-2 m-6 text-center ${
        selected && 'bg-color-1-alternative font-bold'
      }`}
    >
      <Anchor className="py-6 px-12" to={to}>
        {children}
      </Anchor>
    </li>
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
          className=" bg-gradient-to-r from-color-2 to-color-1 fixed top-0 left-0 bottom-0 right-0"
          onClick={() => toggleMenu(false)}
        >
          <div className="overflow-scroll max-h-screen pb-6">
            <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <MenuItem to="/">Home</MenuItem>
              <MenuItem to="/blog">Blog</MenuItem>
              <MenuItem to="/tags">Tags</MenuItem>
              <MenuItem to="/about">About me</MenuItem>
              <MenuItem to="/cv">Resume</MenuItem>
            </ul>
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
