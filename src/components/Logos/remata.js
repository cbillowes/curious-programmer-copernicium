import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const Remata = ({ alt, className }) => {
  return (
    <StaticImage
      src="../../images/logos/remata.png"
      alt={alt}
      className={className}
      width={200}
    />
  );
};

Remata.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Remata;
