'use strict'
const sanitizer = require('strapi-sanitizer')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findOne(ctx) {
        const { id } = ctx.params

        const blog = await strapi.services.blog.findOne({ slug: id })

        return sanitizer(blog, 'Blog')
    },

    async find(ctx) {
        let blogs = await strapi.services.blog.find(ctx.query)
        let count = await strapi.services.blog.count(ctx.query)

        if (blogs.length == 0) {
            return null
        }

        blogs = blogs.map(function (i) {
            return sanitizer(i, 'Blog')
        })

        return {
            blogs,
            meta: {
                count,
            },
        }
    },
}
