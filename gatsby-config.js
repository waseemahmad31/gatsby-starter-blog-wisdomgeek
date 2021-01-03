module.exports = {
  siteMetadata: {
    title: 'Wisdom',
    tagline: 'Geek',
    socialLinks: [
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/wisdomgeek/',
        faIcon: 'facebook',
      },
      {
        name: 'LinkedIn',
        link: 'httsp://www.linkedin.com/company/wisdomgeek',
        faIcon: 'linkedin',
      },
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UClW56GhpAKrRu-ZSqAoPjHg',
        faIcon: 'youtube',
      },
      {
        name: 'Twitter',
        link: 'https://www.twitter.com/saranshk/',
        faIcon: 'twitter',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/kataria.saransh/',
        faIcon: 'instagram',
      },
      {
        name: 'Github',
        link: 'https://github.com/saranshkataria/',
        faIcon: 'github',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'none',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
