import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout';
import { getKeywords } from '../common/seo';
import CommentSystem from '../components/CommentSystem';
import { MdOutlineSchool } from 'react-icons/md';
import Anchor from '../components/Anchor';

export const query = graphql`
  query ScribblesTemplateQuery($slug: String!) {
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
        tags
        parent
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
  const { markdownRemark, site } = data;
  const { page, modified, total, next, previous } = pageContext;
  const { excerpt, html, timeToRead, fields, frontmatter } = markdownRemark;
  const { title, description, url } = site.siteMetadata;
  const { title: courseTitle, tags, parent, abstract } = frontmatter;
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
      }}
    >
      <div id="article" className="pt-14 px-4 pb-24 max-w-screen-lg mx-auto">
        <div className="uppercase text-center my-3 opacity-40"></div>
        <div className="uppercase text-center my-3 opacity-40 flex justify-between">
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
            </Anchor>
           {' '} / {' '}
            <Anchor to={parent}>Table of Contents</Anchor>
          </div>
          <Anchor to={next} className={next ? '' : 'invisible'}>
            Next &rarr;
          </Anchor>
        </div>
        <h1 className="text-center font-bold px-4 md:px-10 max-w-screen-xl mx-auto">
          {courseTitle}
        </h1>
        <div className="text-center text-neutral">
          Estimated {timeToRead} minute read &middot; Page {parseInt(page, 10)}{' '}
          out of {total} &middot; Last modified:{' '}
          {new Date(modified).toLocaleDateString('en-MU', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          <p>{abstract}</p>
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
