import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ children }) => {
  return (
    <div className="fixed top-10 left-0 right-0 bottom-0 overflow-y-scroll overflow-x-hidden bg-default text-default-script z-50">
      {children}
    </div>
  );
};

Search.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Search;
