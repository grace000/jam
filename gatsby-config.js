module.exports = {
  siteMetadata: {
    title: 'JAMstack Hello World'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tiffani Elmore`,
        short_name: `TiffaniElmore`,
        start_url: `/`,
        icon: `src/favicon.png`
      }
    },
  	'gatsby-plugin-react-helmet'
  ]
}
