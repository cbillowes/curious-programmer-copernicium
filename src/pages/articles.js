import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import List from '../components/Articles/List';

const Articles = ({ edges }) => {
  return <List edges={edges} />;
};

const ArticlesPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'Blog',
        siteTitle: title,
      }}
    >
      <div className="bg-default text-default-script">
        <div className="mx-auto pb-5">
          <h1 className="text-center text-5xl font-bold mb-0 mt-12">
            Blog
          </h1>
          <Articles edges={edges} />
        </div>
      </div>
    </Layout>
  );
};

ArticlesPage.propTypes = {
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
};

export const query = graphql`
  query ArticlesPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fields___number }
      filter: { fields: { type: { eq: "article" } } }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "dddd, DD MMMM YYYY")
            type
            number
            hero {
              component
              image
              credit
              source
              link
            }
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

export default ArticlesPage;
