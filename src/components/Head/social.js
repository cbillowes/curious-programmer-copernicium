import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const getResource = (url, route) => `${url}${route || '/'}`;

const isUrl = (imagePath) => {
  return imagePath && imagePath.startsWith('http');
};

const isRelativePath = (imagePath) => {
  return imagePath && imagePath.startsWith('../');
};

const getStaticPath = (imagePath, cover) => {
  return isRelativePath(imagePath)
    ? imagePath
    : require(`../Images/${cover || "default-01.jpg"}`).default;
};

const Social = ({ pageType, imagePath, url, route, twitter, cover }) => {
  const canonical = getResource(url, route);
  const image = `${url}${
    isUrl(imagePath) ? imagePath : getStaticPath(imagePath, cover)
  }`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta name="image" content={image} />

      <meta property="og:type" content={pageType || 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${twitter}`} />
      <meta name="twitter:creator" content={`@${twitter}`} />
    </Helmet>
  );
};

Social.defaultProps = {
  imagePath: '',
  pageType: '',
  route: '',
  title: '',
  twitter: '',
  url: '',
};

Social.propTypes = {
  imagePath: PropTypes.string,
  pageType: PropTypes.string,
  route: PropTypes.string,
  title: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.string,
};

export default Social;
