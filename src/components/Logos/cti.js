import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const Cti = ({ alt, className }) => {
  return (
    <StaticImage
      src="../../images/logos/cti.png"
      alt={alt}
      className={className}
      width={150}
    />
  );
};

Cti.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Cti;
