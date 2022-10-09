import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import List from '../components/Articles/List';

const Scribbles = ({ edges }) => {
  return <List edges={edges} />;
};

const ScribblesPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        pageTitle: 'Scribbles',
        siteTitle: title,
      }}
    >
      <div className="bg-default text-default-script">
        <div className="mx-auto pb-5">
          <h1 className="text-center text-5xl font-bold mb-0 mt-12">
            Scribbles
          </h1>
          <Scribbles edges={edges} />
        </div>
      </div>
    </Layout>
  );
};

ScribblesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,

    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

Scribbles.propTypes = {
  edges: PropTypes.array.isRequired,
};

export const query = graphql`
  query ScribblesPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fields___number }
      filter: { fields: { type: { eq: "scribbles" } } }
    ) {
      edges {
        node {
          timeToRead
          excerpt(truncate: true, pruneLength: 200, format: PLAIN)
          fields {
            slug
            date(formatString: "dddd, DD MMMM yyyy")
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

export default ScribblesPage;
