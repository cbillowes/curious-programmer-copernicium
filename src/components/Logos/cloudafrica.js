import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const CloudAfrica = ({ alt, className }) => {
  return (
    <StaticImage
      src="../../images/logos/cloudafrica.png"
      alt={alt}
      className={className}
      width={200}
    />
  );
};

CloudAfrica.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default CloudAfrica;
