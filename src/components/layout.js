/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Helmet from 'react-helmet';

import EasterEggImage from '../images/all-the-things.webp';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        script={[
          {
            type: 'text/javascript',
            innerHTML: `
              (function() {
                // https://stackoverflow.com/questions/36885562/google-chrome-console-print-image
                console.image = function(url, size = 100) {
                  var image = new Image();
                  image.onload = function() {
                    var style = [
                      'font-size: 1px;',
                      'padding: ' + this.height/100*size + 'px ' + this.width/100*size + 'px;',
                      'background: url('+ url +') no-repeat;',
                      'background-size: contain;',
                    ].join(' ');
                    console.log('%c ', style);
                    console.log('Be curious, always.');
                  };
                  image.src = url;
                };
                console.image("https://curiousprogrammer.dev${EasterEggImage}", 25);
              })()
            `,
          },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
