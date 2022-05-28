const thumbnails = [
  {
    photo: `default-01.jpg`,
    creditSource: `unsplash`,
    credit: `Arget`,
    creditLink: `https://unsplash.com/@arget?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-02.jpg`,
    creditSource: `unsplash`,
    credit: `Kevin Ku`,
    creditLink: `https://unsplash.com/@ikukevk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-03.jpg`,
    creditSource: `unsplash`,
    credit: `Ilya Pavlov`,
    creditLink: `https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-04.jpg`,
    creditSource: `unsplash`,
    credit: `Vishnu R Nair`,
    creditLink: `https://unsplash.com/@vishnurnair?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-05.jpg`,
    creditSource: `unsplash`,
    credit: `Markus Spiske`,
    creditLink: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-06.jpg`,
    creditSource: `unsplash`,
    credit: `Markus Spiske`,
    creditLink: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-07.jpg`,
    creditSource: `unsplash`,
    credit: `Dlanor S`,
    creditLink: `https://unsplash.com/@dlanor_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-08.jpg`,
    creditSource: `unsplash`,
    credit: `Chris Ried`,
    creditLink: `https://unsplash.com/@cdr6934?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-09.jpg`,
    creditSource: `unsplash`,
    credit: `Sai Kiran Anagani`,
    creditLink: `https://unsplash.com/@_imkiran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-10.jpg`,
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
    const { photo, creditSource, credit, creditLink } =
      node.frontmatter || getRandomThumbnail();
    createNodeField({
      node,
      name: `photo`,
      value: photo,
    });

    createNodeField({
      node,
      name: `source`,
      value: creditSource,
    });

    createNodeField({
      node,
      name: `credit`,
      value: credit,
    });

    createNodeField({
      node,
      name: `link`,
      value: creditLink,
    });

    reporter.verbose(`thumbnail [field]: ${photo}`);
  }
};
