'use strict'

const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async index(ctx) {
        let product = await strapi.services.product.find({
            _limit: 8,
            _sort: 'published_at:desc',
        })
        let ProductSeries = await strapi.query('product-series').find({
            _limit: 3,
            _sort: 'published_at:desc',
        })
        let blog = await strapi.services.blog.find({
            _limit: 3,
            _sort: 'published_at:desc',
        })
        let instagram = await strapi.services.instagram.find()

        product = sanitizeEntity(product, { model: strapi.models.product })
        ProductSeries = sanitizeEntity(ProductSeries, { model: strapi.models['product-series'] })
        blog = sanitizeEntity(blog, { model: strapi.models.blog })
        instagram = sanitizeEntity(instagram, {
            model: strapi.models.instagram,
        })

        return [product, ProductSeries, blog, instagram]
    },
}
