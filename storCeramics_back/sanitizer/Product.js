const sanitizer = require('strapi-sanitizer')

module.exports = {
    Name: true,
    Price: true,
    OldPrice: true,
    slug: true,
    description: true,
    category: {
        name: true,
        slug: true,
        description: true,
    },
    product_sery: {
        name: true,
        description: true,
        slug: true,
        logo: {
            url: true,
        },
        published_at: true,
    },
    image: (arr) => {
        let clearArr = []

        for (i of arr) {
            clearArr.push(
                sanitizer(i, {
                    url: true,
                    formats: {
                        thumbnail: {
                            url: true,
                        },
                    },
                })
            )
        }

        return clearArr
    },
    count: true,
    descriptionSEO: true,
    material: true,
}
