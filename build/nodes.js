const { toTimestamp, getSlug } = require('./helpers');

exports.applyNumbers = (nodes, createNodeField, reporter) => {
  const sorted = nodes.sort(
    (a, b) => toTimestamp(a.fields.date) - toTimestamp(b.fields.date),
  );
  sorted.forEach((node, index) => {
    const number = index + 1;

    createNodeField({
      node,
      name: `number`,
      value: number,
    });

    reporter.success(
      `node [applyNumbers]: { ${number}, slug: ${node.fields.slug} }`,
    );
  });
};

exports.createFields = (node, createNodeField, reporter) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { date } = node.frontmatter;
    const slug = getSlug(node.frontmatter);

    createNodeField({
      node,
      name: `number`,
      value: 0,
    });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    createNodeField({
      node,
      name: `date`,
      value: date,
    });

    reporter.success(`node [fields]: { ${slug}, date: ${date} }`);
  }
};
