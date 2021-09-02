module.exports = {
  siteMetadata: {
    title: 'Atto',
    description: `Atto is a simple, all-in-one solution that accurately tracks your employees’ time and automates timesheets. Join 10,000+ businesses that trust Atto. Sign up now!`,
    author: `Zetta Technologies`,
    siteUrl: 'https://attotime.com',
    image: 'src/images/Atto - Social Media Share@2x.png',
  },
  flags: {
    PARALLEL_SOURCING: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    FAST_DEV: false,
    LMDB_STORE: false,
    PRESERVE_WEBPACK_CACHE: false,
    DEV_SSR: false,
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
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        icon: 'src/images/atto_favicon@2x.png',
      },
    },
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://attotime.com/`,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/atto_favicon@2x.png',
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
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-NV2DTP3',
      },
    },
    `gatsby-plugin-preload-fonts`,
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
      resolve: `gatsby-source-iubenda-documents`,
      options: {
        documentIds: [`77119290`, `47240763`, `85558244`, `97533579`],
      },
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        redirectDefaultLanguageToRoot: true,
        languages: [`en`, `de`, `es`, `fr`],
        // language file path
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: false,
        directives: {
          'script-src':
            "'self' 'unsafe-inline' http: https: 'report-sample' https://beacon-v2.helpscout.net/ https://script.hotjar.com/modules.189ddfe225c89657c20d.js https://static.hotjar.com/c/hotjar-2526807.js https://www.googletagmanager.com/gtm.js;",
          'style-src': "'self' http: https: 'unsafe-inline' https://hello.myfonts.net;",
          'img-src':
            "'self' data: https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.google.com;",
          'default-src': "'self' http: https:",
          'frame-src': "'self' https://vars.hotjar.com;",
          'font-src': "'self' data: https://hello.myfonts.net;",
          'connect-src':
            "'self' https://app.attotime.com https://vc.hotjar.io https://ws16.hotjar.com https://analytics.google.com https://d3hb14vkzrxvla.cloudfront.net  https://stats.g.doubleclick.net https://staging.attotime.com https://www.google-analytics.com http://*.hotjar.com:* https://*.hotjar.com:* https://vc.hotjar.io:* https://surveystats.hotjar.io wss://*.hotjar.com;",
          // you can add your directives or override defaults
        },
      },
    },
    // 'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
};
