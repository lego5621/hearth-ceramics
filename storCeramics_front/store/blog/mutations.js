export default {

    setBlogList(state, blogList) {
        state.blogList = false
        state.blogCaunt = 0

        state.blogList = blogList.blogs
        state.blogCaunt = blogList.meta ? blogList.meta.count : 0
    },


    clearBlogList(state) {
        state.blogList = false
    },
}