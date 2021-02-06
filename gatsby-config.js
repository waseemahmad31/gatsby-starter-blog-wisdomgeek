module.exports = {
  siteMetadata: {
    title: 'Wisdom',
    tagline: 'Geek',
    socialLinks: [
      {
        link: 'https://www.facebook.com/wisdomgeek/',
        faIcon: 'facebook',
      },
      {
        link: 'httsp://www.linkedin.com/company/wisdomgeek',
        faIcon: 'linkedin',
      },
      {
        link: 'https://www.youtube.com/channel/UClW56GhpAKrRu-ZSqAoPjHg',
        faIcon: 'youtube',
      },
      {
        link: 'https://www.twitter.com/saranshk/',
        faIcon: 'twitter',
      },
      {
        link: 'https://www.instagram.com/kataria.saransh/',
        faIcon: 'instagram',
      },
      {
        link: 'https://github.com/saranshkataria/',
        faIcon: 'github',
      },
    ],
    navigationLinks: [
      { name: 'Home', to: '/' },
      { name: 'Development', to: '/development/' },
      { name: 'Self Help', to: '/self-help/' },
      { name: 'About', to: '/about/' },
      { name: 'Contact', to: '/contact/' },
      { name: 'Privacy Policy', to: '/privacy-policy/' },
    ],
    copyrightText: `Wisdom Geek, 2015 - ${new Date().getFullYear()}. All Rights Reserved.`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
};
