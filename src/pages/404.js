import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import List from '../components/Articles/List';
import Anchor from '../components/Anchor';
import { StaticImage } from 'gatsby-plugin-image';

const Articles = ({ edges }) => {
  return <List edges={edges} />;
};

const NotFoundPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: "Sorry! Can't find what you are looking for",
        siteTitle: title,
        crawl: false,
      }}
    >
      <div className="pt-16">
        <div className="text-center relative">
          <div>
            <StaticImage
              src="../images/emoji-pensive.png"
              alt="Pensive emoji"
              quality={50}
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
              }}
            />
          </div>
          <h1 className="text-2xl lg:text-5xl xl:text-8xl text-center mb-4">
            <span className="font-semibold">Sorry!</span> Can’t find what you
            are looking for
          </h1>
          <p className="text-xl">
            You can check out these latest articles instead.
          </p>
        </div>
        <div className="bg-default text-default-script">
          <div className="mx-auto pb-16 text-center">
            <Articles edges={edges} />
            <Anchor
              to="/blog"
              title="All articles"
              className="bg-color-1-alternative text-color-1-script rounded py-1 px-3 transform shadow-md hover:bg-color-1"
            >
              Discover more
            </Anchor>
          </div>
        </div>
      </div>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,

    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

Articles.propTypes = {
  edges: PropTypes.array.isRequired,
  wordCount: PropTypes.number,
};

export const query = graphql`
  query NotFoundPageQuery {
    allMarkdownRemark(
      limit: 10
      filter: { fields: { slug: { nin: "/blog/example/" } } }
      sort: { order: DESC, fields: fields___number }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "LL")
            number
            component
            cover
            credit
            source
            link
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          url
          twitter
        }
        brand
        description
        keywords
        lang
        title
        url
      }
    }
  }
`;

export default NotFoundPage;
