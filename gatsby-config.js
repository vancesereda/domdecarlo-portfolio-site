
module.exports = {
  siteMetadata: {
    title: 'Dom Decarlo',
  },
  pathPrefix: "/dom-decarlo-portfolio-site",
  plugins: [
    'gatsby-plugin-react-helmet', 'gatsby-plugin-offline',`gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
  ],
}
