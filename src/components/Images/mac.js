/*
 * AUTO-GENERATED. PLEASE COMMIT THIS FILE!
 * Do not modify this file directly.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

export const Mac = ({ alt, ...rest }) => {
  return (
    <StaticImage
      src="../../images/articles/mac.jpg"
      alt={alt}
      objectPosition="50% 50%"
      objectFit="cover"
      transformOptions={{
        cropFocus: 'attention',
      }}
      {...rest}
    />
  );
};

Mac.propTypes = {
  alt: PropTypes.string,
};

export default Mac;
