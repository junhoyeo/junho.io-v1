module.exports = {
  siteMetadata: {
    title: 'junho.io',
    author: '여준호',
    description: '안녕하세요.',
    siteUrl: 'https://junho.io',
    social: {
      github: 'junhoyeo',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content/blog',
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content/assets',
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-reading-time',
          'gatsby-remark-numbered-footnotes',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        //trackingId: 'ADD YOUR TRACKING ID HERE',
      },
    },
    // 'gatsby-plugin-feed',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'junho.io',
    //     short_name: 'junho',
    //     start_url: '/',
    //     background_color: '#ffffff',
    //     theme_color: '#1D90FF',
    //     display: 'minimal-ui',
    //     icon: null
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
  ],
};
