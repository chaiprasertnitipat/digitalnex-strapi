'use strict';

/**
 * custom-code service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-code.custom-code');
