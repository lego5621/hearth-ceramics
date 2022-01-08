
export default {
    async fetchProductItem({ commit }, slag) {
        await commit('clearProductItem')
        let product = await this.$strapi.$products.findOne(slag)
        await commit('setProductItem', product)
    },

    async fetchProductList({ commit, state }, arrParams) {
        let query = {
            _sort: 'published_at:DESC',
            _limit: state.pageLimit,
            _start: (arrParams[0].page - 1) * state.pageLimit,
        }

        if (arrParams[0].category !== 'all') {
            query['category.slug'] = arrParams[0].category
        }

        if (arrParams[0].series !== 'all') {
            query['product_sery.slug'] = arrParams[0].series
        }

        let productList = await this.$strapi.$products.find(query)

        await commit('setProductList', productList)
    },
}
