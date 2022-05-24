module.exports = {
  siteMetadata: {
    title: 'Curious Programmer',
    description:
      'A curious place for a curious mind. I share my thoughts. I share my ideas. I share my what I think is cool.',
    keywords: 'software development, software, programming',
    url: 'https://curiousprogrammer.dev',
    // This duplicated gem is used for gatsby-plugin-advanced-sitemap
    // and gatsby-plugin-robots-txt
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap/?=sitemap
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/?=Robots.txt
    siteUrl: 'https://curiousprogrammer.dev',
    lang: 'en-US',
    brand: '#f0ff7b',
    author: {
      name: 'Clarice Bouwer',
      url: 'https://clarice.bouwer.dev',
    },
    social: {
      twitter: 'cbillowes',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f0ff7b`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f0ff7b`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
