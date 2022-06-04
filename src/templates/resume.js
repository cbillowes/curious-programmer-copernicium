import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout';
import Tags from '../components/Tags';
import '../styles/resume.scss';
// gatsby-remark-embed-gist
import '../styles/gist/common.scss';
import '../styles/gist/dark.scss';
import '../styles/gist/light.scss';
// gatsby-remark-interactive-gifs
import '../styles/interactive-gifs.scss';
// gatsby-remark-prismjs
import '../styles/prismjs/dark.scss';
import '../styles/prismjs/light.scss';
import CommentSystem from '../components/CommentSystem';
import { getKeywords } from '../common/seo';
import Anchor from '../components/Anchor';
import ResumeDates from '../components/ResumeDates';

export const query = graphql`
  query ResumeTemplateQuery($slug: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fields: { type: { eq: "resume" } }
    ) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        resume {
          logo
          jobTitle
          company
          type
          website
          location
          tech
          start
          end
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

const ResumeTemplate = ({ data }) => {
  const { markdownRemark, site } = data;
  const { excerpt, html, fields, frontmatter } = markdownRemark;
  const { title, description, url } = site.siteMetadata;
  const { logo, company, jobTitle, location, type, start, end, tech, website } =
    frontmatter.resume;
  const keywords = getKeywords(excerpt);
  const image = require(`../images/logos/${logo}`).default;

  return (
    <Layout
      meta={{
        ...data.site.siteMetadata,
        pageTitle: `${jobTitle} @ ${company}, ${location}`,
        siteTitle: title,
        description: excerpt || description,
        keywords,
        pageType: 'article',
        route: fields.slug,
      }}
    >
      <div id="resume" className="pt-14 px-4 pb-24">
        <img src={image} />
        <h1 className="text-center font-bold max-w-screen-xl mx-auto">
          {jobTitle}
        </h1>
        <h2 className="text-center font-bold max-w-screen-xl mx-auto">
          {company}
        </h2>
        <div className="text-center text-neutral">
          <Anchor to={website}>{website.replace('https://', '')}</Anchor>{' '}
          &middot; {location} &middot; {type} &middot;{' '}
          <ResumeDates start={start} end={end} />
        </div>
        <div className="text-center">
          <Tags tags={tech} isButton={true} redirect={false} />
        </div>
        <div
          className="content max-w-3xl mx-auto mt-8"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CommentSystem
          url={`${url}${fields.slug}`}
          identifier={fields.slug}
          title={title}
        />
      </div>
    </Layout>
  );
};

ResumeTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ResumeTemplate;
