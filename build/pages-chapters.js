const path = require('path');
const fs = require('fs');
const template = `./src/templates/chapters.js`;
const createPages = true;

const chaptersQuery = async (graphql) => {
  return await graphql(`
    query ChaptersBuildQuery {
      allMarkdownRemark(
        filter: { fields: { type: { eq: "chapter" } } }
        sort: { fields: fields___slug }
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              date
              parent
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
};

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create course chapters`);
    return;
  }
  const { createPage } = actions;

  await chaptersQuery(graphql).then((result) => {
    if (result.errors) {
      reporter.error(`create course chapters: ${result.errors}`);
      return;
    }

    const edges = result.data.allMarkdownRemark.edges;
    reporter.success(
      `------------- Create all things course chapters [${edges.length}]:`,
    );

    edges.forEach(async ({ node }, index) => {
      const filepath = node.fileAbsolutePath;
      const page = parseInt(path.basename(filepath).substring(0, 2), 10);
      const dirname = path.dirname(node.fileAbsolutePath);
      const { slug } = node.fields;
      const { parent } = node.frontmatter;
      const files = fs.readdirSync(dirname);
      createPage({
        path: slug,
        component: path.resolve(template),
        context: {
          parent,
          slug,
          page,
          total: files.length - 1,
          next:
            index + 1 < edges.length ? edges[index + 1].node.fields.slug : null,
          previous: index - 1 >= 0 ? edges[index - 1].node.fields.slug : null,
        },
      });

      reporter.success(
        `create course chapter: { ${slug}: ${page}/${files.length} }`,
      );
    });
  });
};
