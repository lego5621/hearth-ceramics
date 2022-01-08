export default {
    async fetchBlogList({ commit, state }, arrParams) {
        
        let query = {
            _sort: 'published_at:DESC',
            _limit: state.pageLimit,
            _start: (arrParams[0].page - 1) * state.pageLimit,
        }

        let blogList = await this.$strapi.$blogs.find(query)

        await commit('setBlogList', blogList)
    },
}
