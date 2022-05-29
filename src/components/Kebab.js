import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from './Typewriter';

const Kebab = ({ prefix, onClick, className, children, phrases, expanded }) => {
  return (
    <>
      <div
        className={`max-w-2xl justify-center mx-auto mt-10 flex flex-wrap relative ${
          className || ''
        }`}
        onClick={onClick}
      >
        <div className="block bg-default z-10 p-2 text-neutral">
          {phrases && phrases.length > 0 && <Typewriter phrases={phrases} />}
          {children}
          {expanded && (
            <div
              className="expansion-button-expanded absolute -top-3 left-1/2 transform -translate-x-1/2"
              style={{
                width: '0',
                height: '0',
                borderTop: 'none',
                borderRight: '18px solid transparent',
                borderLeft: '18px solid transparent',
                borderBottom: '18px solid var(--color-2)',
              }}
            >
              &nbsp;
            </div>
          )}
          {!expanded && (
            <div
              className="expansion-button-hidden absolute -bottom-5 left-1/2 transform -translate-x-1/2"
              style={{
                width: '0',
                height: '0',
                borderBottom: 'none',
                borderRight: '18px solid transparent',
                borderLeft: '18px solid transparent',
                borderTop: '18px solid var(--color-2)',
              }}
            >
              &nbsp;
            </div>
          )}
        </div>
        <div className="border-t w-full absolute top-1/2 border-neutral">
          &nbsp;
        </div>
      </div>
    </>
  );
};

Kebab.propTypes = {
  prefix: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
  phrases: PropTypes.array,
};

export default Kebab;
