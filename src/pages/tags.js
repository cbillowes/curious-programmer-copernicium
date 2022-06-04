import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import Tags from '../components/Tags';

export const query = graphql`
  query TagsPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: fields___date }
      filter: { fields: { type: { eq: "article" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
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

const getTags = (edges) => {
  const tags = [];
  if (edges && edges.length > 0) {
    edges.forEach(({ node }) => {
      tags.push(...(node?.frontmatter?.tags || []));
    });
  }
  return [...new Set(tags)];
};

const TagsPage = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const edges = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;
  const tags = getTags(edges);

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        description:
          'Choose from one of more tags used to categorize and help discover articles more.',
        keywords: 'technical, gatsby, git, blog, software development',
        pageTitle: 'Tags used throughout the blog',
        siteTitle: title,
        route: '/tags',
      }}
    >
      <div className="bg-default text-default-script">
        <div className="mx-auto pb-5 pt-10">
          <h1 className="text-center text-5xl font-bold mb-0 mt-5">
            All the things
          </h1>
          <div className="max-w-screen-md mx-auto p-4">
            <Tags
              tags={tags}
              isButton={true}
              additionalClasses="m-1 py-1 px-3 inline-block bg-color-3 text-color-3-script"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TagsPage;
