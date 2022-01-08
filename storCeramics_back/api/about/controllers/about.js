'use strict'

const { parseMultipartData, sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */

    async find(ctx) {
        let about = await strapi.services.about.find()
        let teams = await strapi.services.teams.find()

        about = sanitizeEntity(about, { model: strapi.models.about })
        teams = sanitizeEntity(teams, { model: strapi.models.teams })


        return JSON.stringify([about,teams])
    },
}
