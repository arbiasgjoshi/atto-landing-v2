module.exports = {
  siteMetadata: {
    title: 'Attotime Landing Site ',
    description: `Attotime Website`,
    author: `Arbias Gjoshi`,
    siteUrl: 'http://localhost:8000',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "./src/styles/globals.scss";`,
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: 'camelCaseOnly',
          },
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@components': 'src/components',
          '@images': 'src/images',
          '@data': 'src/data',
          '@api': 'src/api',
          '@hooks': 'src/hooks',
          '@helpers': 'src/helpers',
          '@styles': 'src/styles',
          '@services': 'src/services',
          '@locale': 'src/locale',
        },
      },
    },
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-meta-redirect`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          // include: /images/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `de`, `es`, `fr`],
        // language file path
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
};
