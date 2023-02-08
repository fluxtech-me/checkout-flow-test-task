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
        "gatsby-plugin-preload-fonts",
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
    ],
}
