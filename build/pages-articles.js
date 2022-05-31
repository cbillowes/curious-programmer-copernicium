const path = require('path');
const template = `./src/templates/article.js`;
const createPages = true;

const landingPage = './src/pages/index.js';
const landingPageSlug = '/';

const query = async (graphql) => {
  return await graphql(`
    query ArticlesBuildQuery {
      allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
        edges {
          node {
            html
            excerpt
            timeToRead
            fields {
              slug
              date
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `);
};

const getPreviousNode = (edges, index) => {
  const i = index === 0 ? edges.length - 1 : index - 1;
  return edges[i].node;
};

const getNextNode = (edges, index) => {
  const i = index === edges.length - 1 ? 0 : index + 1;
};

const getArticle = (edges, index) => {
  const node = edges[index].node;
  return {
    number: index + 1,
    slug: node.fields.slug,
    date: node.fields.date,
    previous: getPreviousNode(edges, index),
    next: getNextNode(edges, index),
  };
};

const createThePage = (createPage, edges, index, reporter) => {
  const article = getArticle(edges, index);
  const { slug, date, previous, next } = article;
  const number = index + 1;

  createPage({
    path: slug,
    component: path.resolve(template),
    context: {
      slug,
      date,
      number,
      previous,
      next,
    },
  });
  reporter.success(`create article: [${number}] ${slug}`);
};

const createArticlePages = (createPage, result, reporter) => {
  const edges = result.data.allMarkdownRemark.edges;
  edges.forEach((_, index) => {
    createThePage(createPage, edges, index, reporter);
  });
};

const createLandingPage = (createPage, reporter) => {
  const slug = landingPageSlug;
  createPage({
    path: slug,
    component: path.resolve(landingPage),
    context: {
      slug,
    },
  });
  reporter.success(`create article: [home] ${slug}`);
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create articles`);
    return;
  }
  await query(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create articles: ${result.errors}`);
    }

    const { createPage } = actions;
    createArticlePages(createPage, result, reporter);
    createLandingPage(createPage, reporter);
  });
};
