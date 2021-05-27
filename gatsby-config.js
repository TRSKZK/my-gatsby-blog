module.exports = {
  siteMetadata: {
    title: "My-Gatsby-Blog",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
  plugins: ["gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"],
  

};
