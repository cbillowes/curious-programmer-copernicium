import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout';
import { getKeywords } from '../common/seo';
import CommentSystem from '../components/CommentSystem';
import { MdOutlineSchool } from 'react-icons/md';
import Anchor from '../components/Anchor';
import { toMauritiusLocaleDateString } from '../common/date';

export const query = graphql`
  query ChaptersTemplateQuery($parent: String!, $slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
        date(formatString: "dddd, DD MMMM YYYY")
        type
      }
      frontmatter {
        title
        abstract
        parent
        date
        modified
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { parent: { eq: $parent } } }
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

const ChaptersTemplate = ({ data, pageContext }) => {
  const { markdownRemark, allMarkdownRemark, site } = data;
  const { page, total, next, previous } = pageContext;
  const { excerpt, html, timeToRead, fields, frontmatter } = markdownRemark;
  const { title, description, url } = site.siteMetadata;
  const { title: courseTitle, date, modified, parent, abstract } = frontmatter;
  const keywords = getKeywords(excerpt);
  const [showToc, toggleToc] = useState(false);

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
      }}
    >
      <div id="article" className="pt-14 px-8 pb-24 max-w-screen-lg mx-auto">
        <div className="uppercase text-center my-3 opacity-40"></div>
        <div className="relative">
          <div className="uppercase text-center my-3 opacity-40 flex justify-between items-center">
            <Anchor to={previous} className={previous ? '' : 'invisible'}>
              &larr; Previous
            </Anchor>
            <div>
              <Anchor to="/courses">
                <MdOutlineSchool
                  className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
                  alt="Courses"
                />
                Courses
              </Anchor>{' '}
              /{' '}
              <button
                className="cursor-pointer uppercase"
                onClick={() => toggleToc(!showToc)}
              >
                Table of Contents
              </button>
            </div>
            <Anchor to={next} className={next ? '' : 'invisible'}>
              Next &rarr;
            </Anchor>
          </div>
          <div
            className={`bg-color-1 text-color-1-script w-full absolute top-0 mt-9 z-10 p-8 rounded-lg shadow-lg bg-gradient-to-b from-color-3 to-color-2 ${
              showToc ? 'block' : 'hidden'
            }`}
          >
            <button
              className="absolute top-4 right-8 text-3xl opacity-60"
              onClick={() => toggleToc(false)}
            >
              &times;
            </button>
            <h2 className="toc">Table of Contents</h2>
            {allMarkdownRemark.edges.map(({ node }) => {
              const { title } = node.frontmatter;
              const { slug } = node.fields;
              const paths = slug.split(`/`);
              const page = paths[paths.length - 2];
              const isOnPage = fields.slug === slug;
              return (
                <div className="mt-2">
                  <Anchor to={slug}>
                    <span
                      className={`hover:underline ${
                        isOnPage ? 'font-bold' : ''
                      }`}
                    >
                      {isOnPage && <>&#x25BA;</>} {page} - {title}
                    </span>
                  </Anchor>
                </div>
              );
            })}
            <br />
            <div className="opacity-60">
              <Anchor to={parent}>&larr; Back to the course</Anchor>
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold px-4 md:px-10 max-w-screen-xl mx-auto">
          {courseTitle}
        </h1>
        <div className="text-center opacity-40">
          <div className="text-sm leading-7">
            Estimated {timeToRead} minute read &middot; Page{' '}
            {parseInt(page, 10)} out of {total} &middot; Created on{' '}
            {toMauritiusLocaleDateString(date)}{' '}
            {modified && (
              <>
                &middot; Last modified on{' '}
                {toMauritiusLocaleDateString(modified)}
              </>
            )}
          </div>
          <p className="mt-2">{abstract}</p>
        </div>
        <hr />
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

ChaptersTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChaptersTemplate;
