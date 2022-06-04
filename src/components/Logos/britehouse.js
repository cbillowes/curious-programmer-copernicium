import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const Britehouse = ({ alt, className }) => {
  return (
    <StaticImage
      src="../../images/logos/britehouse.png"
      alt={alt}
      className={className}
      width={200}
    />
  );
};

Britehouse.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Britehouse;
