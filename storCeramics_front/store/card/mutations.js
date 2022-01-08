import Vue from 'vue'

export default {
    addProductInCart(state, payload) {
        let textAlert = ''
        if (payload.product.slug in state.cart) {
            if (
                state.cart[payload.product.slug].count +
                    Number(payload.count) <=
                payload.product.count
            ) {
                Vue.set(
                    state.cart[payload.product.slug],
                    'count',
                    state.cart[payload.product.slug].count +
                        Number(payload.count)
                )
                textAlert = 'Добавлено в корзину'
            } else {
                textAlert = 'В корзине максимальное количество данного товара'
            }
        } else {
            if (payload.product.count >= Number(payload.count)) {
                let product = {
                    name: payload.product.Name,
                    slug: payload.product.slug,
                    price: payload.product.Price,
                    image: payload.product.image[0].formats.thumbnail.url,
                    count: Number(payload.count),
                    totalCount: Number(payload.product.count),
                }

                Vue.set(state.cart, [payload.product.slug], product)
                textAlert = 'Добавлено в корзину'
            } else {
                textAlert = 'Введено слишком большое количество'
            }
        }

        if (process.client) {
            this.$toast(textAlert, {
                timeout: 2000,
                position: 'bottom-center',
                icon: false,
                hideProgressBar: true,
            })
        }
    },

    changeCountProductInCart(state, payload) {
        Vue.set(
            state.cart[payload.product.slug],
            'count',
            Number(payload.count)
        )
    },

    removeProduct(state, payload) {
        Vue.delete(state.cart, payload.product.slug)
    },
}
