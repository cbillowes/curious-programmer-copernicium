import React from 'react';
import PropTypes from 'prop-types';
import { IoOpenOutline } from '@react-icons/all-files/io5/IoOpenOutline';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const trackClickEvent = (data) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', data);
  }
};

const getClassNames = (className, useMarkdownStyles) => {
  const markdownClasses =
    'font-cursive text-color-1 px-1 text-xl hover:text-color-1-alternative hover:underline';

  return `w-auto inline-block ${className || ''} ${
    useMarkdownStyles ? markdownClasses : ''
  }`;
};

const Anchor = ({
  className,
  to,
  title,
  children,
  useMarkdownStyles,
  newTabIndicator,
  forceNewTab,
}) => {
  const trackingData = { to, title };
  const classNames = getClassNames(className, useMarkdownStyles);

  if (!to)
    return (
      <span className={classNames} title={title || children}>
        {children}
      </span>
    );

  if (to && to.startsWith('/') && !forceNewTab) {
    return (
      <Link
        className={classNames}
        to={to}
        title={title || children}
        onClick={() => trackClickEvent(trackingData)}
      >
        {children}
      </Link>
    );
  }

  return (
    <span>
      <OutboundLink
        className={classNames}
        href={to}
        title={title || children}
        rel="noreferrer noopener"
        target="_blank"
        onClick={() => trackClickEvent(trackingData)}
      >
        {children}

        {newTabIndicator && (
          <IoOpenOutline className="float-right text-md mx-2 text-neutral" />
        )}
      </OutboundLink>
    </span>
  );
};

Anchor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  useMarkdownStyles: PropTypes.bool,
  newTabIndicator: PropTypes.bool,
  forceNewTab: PropTypes.bool,
};

export default Anchor;
