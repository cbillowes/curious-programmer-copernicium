import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout';
import Tags from '../components/Tags';
import { getKeywords } from '../common/seo';
import CommentSystem from '../components/CommentSystem';
import Thumbnail from '../components/Thumbnail';
import { TbScribble } from 'react-icons/tb';
import { FaDev } from 'react-icons/fa';
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
        tags
        devTo
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

const ScribblesTemplate = ({ data }) => {
  const { markdownRemark, site } = data;
  const { excerpt, html, timeToRead, fields, frontmatter } = markdownRemark;
  const { title, description, url } = site.siteMetadata;
  const { title: scribbleTitle, tags } = frontmatter;
  const keywords = getKeywords(excerpt);

  return (
    <Layout
      meta={{
        ...data.site.siteMetadata,
        pageTitle: scribbleTitle,
        siteTitle: title,
        description: excerpt || description,
        keywords,
        pageType: 'article',
        route: fields.slug,
      }}
    >
      <div id="article" className="pt-14 px-4 pb-24">
        <div className="w-6/12 md:w-6/12 xl:w-4/12 mx-auto">
          <Thumbnail {...fields.hero} />
        </div>
        <h1 className="text-center font-bold px-4 md:px-10 max-w-screen-xl mx-auto">
          {scribbleTitle}
        </h1>
        <div className="uppercase text-center my-3 opacity-40">
          <Link to="/scribbles">
            <TbScribble
              className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
              alt="Scribble"
            />
          </Link>
          {fields.type}
          {frontmatter.devTo && (
            <>
              <span className="opacity-25 inline-block mx-2">/</span>
              <Anchor to={frontmatter.devTo} forceNewTab={true}>
                <FaDev
                  className="inline-block mr-2 bg-color-neutral p-2 text-4xl rounded"
                  alt="Scribble"
                />
                dev.to
              </Anchor>
            </>
          )}
        </div>
        <div className="text-center text-neutral">
          {fields.date} &middot; Estimated {timeToRead} minute read
        </div>
        <div className="text-center">
          <Tags tags={tags} redirect={true} isButton={true} />
        </div>
        <div
          className="content max-w-3xl mx-auto mt-8"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CommentSystem
          url={`${url}${fields.slug}`}
          identifier={fields.slug}
          title={scribbleTitle}
        />
      </div>
    </Layout>
  );
};

ScribblesTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ScribblesTemplate;
