const thumbnails = [
  {
    cover: `default-01.jpg`,
    creditSource: `unsplash`,
    credit: `Arget`,
    creditLink: `https://unsplash.com/@arget?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-02.jpg`,
    creditSource: `unsplash`,
    credit: `Kevin Ku`,
    creditLink: `https://unsplash.com/@ikukevk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-03.jpg`,
    creditSource: `unsplash`,
    credit: `Ilya Pavlov`,
    creditLink: `https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-04.jpg`,
    creditSource: `unsplash`,
    credit: `Vishnu R Nair`,
    creditLink: `https://unsplash.com/@vishnurnair?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-05.jpg`,
    creditSource: `unsplash`,
    credit: `Markus Spiske`,
    creditLink: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-06.jpg`,
    creditSource: `unsplash`,
    credit: `Markus Spiske`,
    creditLink: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-07.jpg`,
    creditSource: `unsplash`,
    credit: `Dlanor S`,
    creditLink: `https://unsplash.com/@dlanor_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-08.jpg`,
    creditSource: `unsplash`,
    credit: `Chris Ried`,
    creditLink: `https://unsplash.com/@cdr6934?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-09.jpg`,
    creditSource: `unsplash`,
    credit: `Sai Kiran Anagani`,
    creditLink: `https://unsplash.com/@_imkiran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    cover: `default-10.jpg`,
    creditSource: `unsplash`,
    credit: `Markus Spiske`,
    creditLink: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTexts`,
  },
];

const getRandomThumbnail = () => {
  const index = parseInt(Math.random() * thumbnails.length);
  return thumbnails[index];
};

exports.createFields = (node, createNodeField, reporter) => {
  if (node.internal.type === 'MarkdownRemark') {
    const random = getRandomThumbnail();
    const thumbnail = node.frontmatter;
    const { cover, creditSource, credit, creditLink } = thumbnail.cover
      ? thumbnail
      : random;

    createNodeField({
      node,
      name: `cover`,
      value: cover,
    });

    createNodeField({
      node,
      name: `source`,
      value: creditSource,
    });

    createNodeField({
      node,
      name: `link`,
      value: creditLink,
    });

    createNodeField({
      node,
      name: `credit`,
      value: credit,
    });

    reporter.success(`thumbnail [field]: ${cover}`, {
      source: creditSource,
      link: creditLink,
      credit,
    });
  }
};
