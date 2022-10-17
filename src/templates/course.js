import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout';
import Tags from '../components/Tags';
import { getKeywords } from '../common/seo';
import CommentSystem from '../components/CommentSystem';
import Thumbnail from '../components/Thumbnail';
import { MdOutlineSchool } from 'react-icons/md';
import { toMauritiusLocaleDateString } from '../common/date';

export const query = graphql`
  query CourseTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
        date(formatString: "dddd, DD MMMM YYYY")
        type
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
        abstract
        date
        modified
        cover
        tags
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { parent: { eq: $slug } } }
      sort: { order: ASC, fields: fileAbsolutePath }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            abstract
          }
          fields {
            slug
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

const CourseTemplate = ({ data }) => {
  const { markdownRemark, allMarkdownRemark, site } = data;
  const { excerpt, html, timeToRead, fields, frontmatter } = markdownRemark;
  const { title, description, url } = site.siteMetadata;
  const { title: courseTitle, tags, abstract, date, modified, cover } = frontmatter;
  const keywords = getKeywords(excerpt);

  return (
    <Layout
      meta={{
        ...data.site.siteMetadata,
        pageTitle: courseTitle,
        siteTitle: title,
        description: excerpt || description,
        keywords,
        pageType: 'article',
        route: fields.slug,
        cover,
      }}
    >
      <div id="article" className="pt-14 px-4 pb-24">
        <div className="w-6/12 md:w-6/12 xl:w-4/12 mx-auto">
          <Thumbnail {...fields.hero} />
        </div>
        <h1 className="text-center font-bold px-4 md:px-10 max-w-screen-xl mx-auto">
          {courseTitle}
        </h1>
        <div className="uppercase text-center my-3 opacity-40">
          <Link to="/courses">
            <MdOutlineSchool
              className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
              alt="Courses"
            />
          </Link>
          {fields.type}
        </div>
        <div className="text-center text-neutral">
          Estimated {timeToRead} minute read &middot; Created on{' '}
          {toMauritiusLocaleDateString(date)}{' '}
          {modified && (
            <>
              &middot; Last modified on {toMauritiusLocaleDateString(modified)}
            </>
          )}
          <p>{abstract}</p>
        </div>
        <div className="text-center">
          <Tags tags={tags} redirect={true} isButton={true} />
        </div>
        <div className="content max-w-3xl mx-auto mt-8">
          <h2>Table of Contents</h2>
          {allMarkdownRemark.edges.map(({ node }) => {
            const { title } = node.frontmatter;
            const { slug } = node.fields;
            const paths = slug.split(`/`);
            const page = paths[paths.length - 2];
            return (
              <Link to={slug} className="block">
                {page} - {title}
              </Link>
            );
          })}
        </div>
        <div
          className="content max-w-3xl mx-auto mt-8"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CommentSystem
          url={`${url}${fields.slug}`}
          identifier={fields.slug}
          title={courseTitle}
        />
      </div>
    </Layout>
  );
};

CourseTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CourseTemplate;
