require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `Uttkarsh Tiwari - My Portfolio`,
    siteTitle: "uttkarsh",
    siteTitleAlt: "Uttkarsh Tiwari - My Portfolio",
    siteHeadline: "Uttkarsh web dev",
    siteUrl: "https://example.com",
    siteDescription: "Uttkarsh Tiwari's personal portfolio site",
    siteLanguage: "en",
    siteImage: "/banner.jpg",
    author: "@uttkarsh26",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Uttkarsh Tiwari`,
        short_name: `Uttkarsh`,
        description: `Personal portfolio site.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/u-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/u-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
