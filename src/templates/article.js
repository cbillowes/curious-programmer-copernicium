import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '../components/Layout';
import Thumbnail from '../components/Thumbnail';
import Tags from '../components/Tags';
import '../styles/article.scss';
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

export const query = graphql`
  query ArticleTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      html
      excerpt
      fields {
        slug
        date(formatString: "LL")
        number
        component
        credit
        source
        link
      }
      frontmatter {
        title
        tags
        cover
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

const ArticleTemplate = ({ data }) => {
  const { markdownRemark, site } = data;
  const { excerpt, timeToRead, html, fields, frontmatter } = markdownRemark;
  const { title, description, url } = site.siteMetadata;
  const { component, cover, credit, link, source } = fields;
  const keywords = getKeywords(html);

  return (
    <Layout
      meta={{
        ...data.site.siteMetadata,
        keywords: frontmatter.keywords || keywords,
        pageTitle: frontmatter.title,
        siteTitle: title,
        description: excerpt || description,
        image: frontmatter.cover,
        pageType: 'article',
        route: fields.slug,
      }}
    >
      <div id="article" className="pt-14 px-4 pb-24">
        <div className="w-6/12 md:w-6/12 xl:w-4/12 mx-auto">
          <Thumbnail
            alt={credit || frontmatter.title || title}
            cover={component === 'url' ? frontmatter.cover : cover}
            credit={credit}
            source={source}
            link={link}
            componentName={component}
          />
        </div>
        <h1 className="text-center font-bold px-4 md:px-10 max-w-screen-xl mx-auto">
          {frontmatter.title}
        </h1>
        <div className="text-center text-neutral">
          #{fields.number} &middot; {fields.date} &middot; Estimated{' '}
          {timeToRead} minute read
        </div>
        <div className="text-center">
          <Tags tags={frontmatter.tags} isButton={true} />
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

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArticleTemplate;
