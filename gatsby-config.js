module.exports = {
  siteMetadata: {
    navigationItems: ["home", "services", "projects", "testimonials"],
    socialItems: [
      { name: "facebook", link: "https://facebook.com/" },
      { name: "twitter", link: "https://twitter.com/" },
      { name: "google", link: "https://google.com/" },
      { name: "youtube", link: "https://youtube.com/" },
      { name: "arrow-up", link: "#home" },
    ],
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "services",
        path: "./data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "testimonials",
        path: "./data",
      },
    },
    "gatsby-transformer-json",
  ],
}
