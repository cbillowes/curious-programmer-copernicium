import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const Simply = ({ alt, className }) => {
  return (
    <StaticImage
      src="../../images/logos/simply.png"
      alt={alt}
      className={className}
      width={200}
    />
  );
};

Simply.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Simply;
