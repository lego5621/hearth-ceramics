'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify')

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            if (data.name) {
                data.slug = slugify(data.name, {
                    lower: true,
                    remove: /[ьъ*+~.()'"!:@]/g,
                    locale: 'ru',
                })
            }
        },
        async beforeUpdate(params, data) {
            if (data.name) {
                data.slug = slugify(data.name, {
                    lower: true,
                    remove: /[ьъ*+~.()'"!:@]/g,
                    locale: 'ru',
                })
            }
        },
    },
}
