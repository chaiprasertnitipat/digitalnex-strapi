'use strict';

/**
 * custom-code router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::custom-code.custom-code');
