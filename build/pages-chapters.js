const path = require('path');
const fs = require('fs');
const template = `./src/templates/chapters.js`;
const createPages = true;

const chaptersQuery = async (graphql) => {
  return await graphql(`
    query ChaptersBuildQuery {
      chapters: allMarkdownRemark(
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
      courses: allMarkdownRemark(
        filter: { fields: { type: { eq: "course" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
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

    const chapters = result.data.chapters.edges;
    reporter.success(
      `------------- Create all things course chapters [${chapters.length}]:`,
    );

    chapters.forEach(async ({ node }, index) => {
      const filepath = node.fileAbsolutePath;
      const page = parseInt(path.basename(filepath).substring(0, 2), 10);
      const dirname = path.dirname(node.fileAbsolutePath);
      const { slug } = node.fields;
      const { parent } = node.frontmatter;
      const files = fs.readdirSync(dirname);
      const { title: courseTitle } = result.data.courses.edges.filter(
        (c) => c.node.fields.slug === parent,
      )[0].node.frontmatter;

      createPage({
        path: slug,
        component: path.resolve(template),
        context: {
          parent,
          courseTitle,
          slug,
          page,
          total: files.length - 1,
          next:
            index + 1 < chapters.length
              ? chapters[index + 1].node.fields.slug
              : null,
          previous:
            index - 1 >= 0 ? chapters[index - 1].node.fields.slug : null,
        },
      });

      reporter.success(
        `create course chapter: { ${slug}: ${page}/${files.length} }`,
      );
    });
  });
};
