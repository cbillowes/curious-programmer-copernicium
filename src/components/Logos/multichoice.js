import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const MultiChoice = ({ alt, className }) => {
  return (
    <StaticImage
      src="../../images/logos/multichoice.png"
      alt={alt}
      className={className}
      width={200}
    />
  );
};

MultiChoice.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default MultiChoice;
