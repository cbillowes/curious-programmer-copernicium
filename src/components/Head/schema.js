import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Schema = ({ type, url, name, description, author, image }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': type || 'WebSite',
        url,
        name,
        description,
        author: {
          '@type': 'Person',
          name: author.name,
          sameAs: author.url,
        },
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        thumbnailUrl: image,
        datePublished: new Date(),
      })}
    </script>
  </Helmet>
);

Schema.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Schema;
