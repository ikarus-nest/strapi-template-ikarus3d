"use strict";

/**
 * page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::page.page", {
  config: {
    find: {
      middlewares: [
        {
          name: "plugin::users-permissions.rateLimit",
          config: {
            interval: 1 * 60 * 1000,
            max: 5,
          },
        },
      ],
    },
  },
});
