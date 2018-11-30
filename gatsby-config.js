const {
  _pathPrefix,
  _title,
  _titleAlt,
  _titleTemplate,
  _url,
  description,
  author,
  copyright,
  logo,
  favicon,
  siteLanguage,
  shortName,
  themeColor,
  backgroundColor,
  twitter,
  fbAppID,
  gTagID
} = require('./config/website');

module.exports = {
  pathPrefix: _pathPrefix,
  siteMetadata: {
    title: _title,
    titleAlt: _titleAlt,
    titleTemplate: _titleTemplate,
    shortName,
    url: _url,
    siteUrl: _url + _pathPrefix, // For gatsby-plugin-sitemap
    siteLanguage,
    logo, // Logo for JSONLD
    description,
    banner: logo,
    author,
    copyright,
    twitter,
    fbAppID
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: gTagID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: _title,
        short_name: shortName,
        start_url: '/',
        background_color: backgroundColor,
        theme_color: themeColor,
        display: 'standalone',
        icon: 'src/img/icon.png'
      }
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
