import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import Description from './description';
import Icons from './icons';
import Social from './social';
import Schema from './schema';
import Font from './font';
import { Helmet } from 'react-helmet';

const removeWhitespace = (text) => {
  return text
    ?.trim()
    ?.split(' ')
    ?.filter((word) => word)
    ?.join(' ');
};

const Head = ({
  author,
  brand,
  description,
  image,
  keywords,
  lang,
  pageTitle,
  pageType,
  social,
  siteTitle,
  type,
  url,
  route,
  crawl = true,
}) => (
  <React.Fragment>
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <meta name="build" content={new Date()} />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="Content-Type" content="text/html; charset=UTF-8" />
      <meta
        content="width=device-width,initial-scale=1.0,user-scalable=yes"
        name="viewport"
      />

      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />

      {crawl && <meta name="robots" content="index" />}
      {!crawl && <meta name="robots" content="noindex" />}
    </Helmet>

    <Title pageTitle={pageTitle} siteTitle={siteTitle} />

    <Description
      keywords={keywords}
      author={author && author.name}
      description={removeWhitespace(description)}
    />

    <Font />

    <Icons themeColor={brand} />

    <Social
      url={url}
      twitter={social?.twitter}
      imagePath={image || social?.image}
      pageType={pageType}
      route={route}
    />

    <Schema
      type={type}
      url={url}
      name={pageTitle}
      description={removeWhitespace(description)}
      author={{
        name: author && author.name,
        url: author && author.url,
      }}
      image={image || social?.image}
    />
  </React.Fragment>
);

const author = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

const social = PropTypes.shape({
  image: PropTypes.string,
  twitter: PropTypes.string,
});

Head.defaultProps = {
  type: 'WebSite',
};

Head.propTypes = {
  author: author.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  keywords: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  social: social,
  pageTitle: PropTypes.string,
  pageType: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  crawl: PropTypes.bool,
};

export default Head;
