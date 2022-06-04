import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const Item = ({ alt, className }) => {
  return (
    <StaticImage
      src="../../images/logos/it-em.png"
      alt={alt}
      className={className}
      width={200}
    />
  );
};

Item.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Item;
