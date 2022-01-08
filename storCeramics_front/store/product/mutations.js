export default {
    setProductItem(state, productItem) {
        state.productSEOTitle = productItem[0].Name
        state.productSEODescription = productItem[0].descriptionSEO
        state.productItem = productItem
    },

    setProductList(state, productList) {
        state.productList = false
        state.productCaunt = 0

        state.productList = productList.products
        state.productCaunt = productList.meta ? productList.meta.count : 0
    },

    // clearState
    clearProductItem(state) {
        state.productItem = false
    },

    clearProductList(state) {
        state.productList = false
    },
}
