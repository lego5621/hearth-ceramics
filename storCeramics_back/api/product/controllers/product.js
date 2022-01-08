'use strict'
const { sanitizeEntity } = require('strapi-utils')

const sanitizer = require('strapi-sanitizer')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findOne(ctx) {
        const { id } = ctx.params

        const product = await strapi.services.product.findOne({ slug: id })
        if (!product) return null
        
        const productLast = await strapi.services.product.find({
            _limit: 6,
            _sort: 'published_at:desc',
        })
        const docs = await strapi.services.docs.find()

        const clearedProductLast = productLast.map(function (i) {
            return sanitizer(i, 'Product')
        })
        const clearedProduct = sanitizer(product, 'Product')
        const clearedDocs = sanitizeEntity(docs, { model: strapi.models.docs })

        return [clearedProduct, clearedProductLast, clearedDocs]
    },

    async find(ctx) {
        let products = await strapi.services.product.find(ctx.query)
        let count = await strapi.services.product.count(ctx.query)

        if (products.length == 0) {
            return { products: ['noData'] }
        }

        products = products.map(function (i) {
            return sanitizer(i, 'Product')
        })

        return {
            products,
            meta: {
                count,
            },
        }
    },
}
