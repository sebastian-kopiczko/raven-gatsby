exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("Problem with loading project")
    return
  }

  const projects = result.data.allProjectsJson.edges
  projects.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve("./src/templates/project.js"),
      context: { slug },
    })
  })
}
