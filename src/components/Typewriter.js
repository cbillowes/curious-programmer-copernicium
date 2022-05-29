import React from 'react';
import PropTypes from 'prop-types';
import TypewriterEffect from 'typewriter-effect';

const Typewriter = ({ phrases }) => {
  return (
    <TypewriterEffect
      options={{
        strings: phrases,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

Typewriter.propTypes = {
  phrases: PropTypes.array,
};

export default Typewriter;
