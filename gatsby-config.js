/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `checkout-flow-test-task`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Checkout Flow Test Task",
                short_name: "Checkout Flow Test Task",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "standalone",
                icon: "src/assets/images/favicon.png",
            },
        },
        {
            resolve: 'gatsby-plugin-your-fonts',
            options: {
              fonts: [
                `src/assets/fonts/neue_haas_unica/neue-font.css`,
                `src/assets/fonts/cooper_lt/cooper-font.css`,
              ]
            }
          }
    ],
}
