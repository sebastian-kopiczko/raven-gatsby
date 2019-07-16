module.exports = {
  siteMetadata: {
    navigationItems: ["home", "services", "projects", "testimonials"],
    copyright: "Copyright &copy;",
    headerCompanyName: "Raven",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./data",
      },
    },
    "gatsby-transformer-json",
  ],
}
