'use strict';

/**
 * backend-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::backend-setting.backend-setting');
