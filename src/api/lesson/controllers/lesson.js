'use strict';

/**
 * lesson controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { default: strapiFactory } = require('@strapi/strapi');

module.exports = createCoreController('api::lesson.lesson');

