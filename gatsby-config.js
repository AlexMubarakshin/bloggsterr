/* eslint-disable */
console.log(process.env.PATH_PREFIX);
module.exports = {
  pathPrefix: process.env.NODE_ENV === 'production' ? '/bloggsterr' : '/',
  siteMetadata: {
    title: `Alex Mubarakshin`,
    description: `OMG!? Is this the personal blog by Alex Mubarakshin?!.`,
    author: `Alex Mubarakshin`,
    social: { instagram: "alex-killpop" },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Mubarakshin blog`,
        short_name: `AM blog`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#f5f5f5`,
        display: `minimal-ui`,
        icon: `src/images/icon-brand.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154459165-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "auto",
      },
    },
  ],
};
