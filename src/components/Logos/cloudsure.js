import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const Cloudsure = ({ alt, className }) => {
  return (
    <StaticImage
      src="../../images/logos/cloudsure.png"
      alt={alt}
      className={className}
    />
  );
};

Cloudsure.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Cloudsure;
