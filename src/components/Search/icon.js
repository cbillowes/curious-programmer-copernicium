import React from 'react';
import PropTypes from 'prop-types';
import { FiSearch as Search } from '@react-icons/all-files/fi/FiSearch';
import { IoCloseCircle as Close } from '@react-icons/all-files/io5/IoCloseCircle';

const CloseIcon = () => {
  return (
    <span className="cursor-pointer hover:text-color-2 hover:animate-wiggle animate">
      <Close />
    </span>
  );
};

export const SearchIcon = ({ show, toggle }) => {
  return (
    <button
      title="Search"
      aria-label="Search"
      onClick={toggle}
      className="cursor-pointer hover:text-color-2 hover:animate-wiggle animate"
    >
      {!show && <Search />}
      {show && <CloseIcon />}
    </button>
  );
};

SearchIcon.propTypes = {
  toggle: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
