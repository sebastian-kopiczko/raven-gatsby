module.exports = {
  siteMetadata: {
    navigationItems: ["home", "services", "projects", "testimonials"],
    copyright: "Copyright &copy;",
    headerCompanyName: "Raven",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
  ],
}
