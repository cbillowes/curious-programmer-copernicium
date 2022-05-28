import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ribbon.scss';

const Ribbon = ({ children }) => {
  if (!children) return <></>;

  // TODO: Put the bg-color, text-color and border-color into ribbon.scss
  return (
    <div className="ribbon absolute right-0">
      <div className="backdrop absolute overflow-hidden inline-block">
        <div className="foreground bg-color-2 text-color-2-script w-52 h-10 absolute top-10 -right-12 overflow-hidden transform rotate-45 py-1 text-center font-bold">
          <div className="border-dashed border-b border-l border-r border-t border-color-2-inverse mb-1 pb-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Ribbon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Ribbon;
