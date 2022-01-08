export default {
    getCart: (state) => {
        return state.cart
    },

    getTotalPrice: (state) => {
        let total = 0;
        Object.keys(state.cart).forEach((item) => {
          total += state.cart[item].price * state.cart[item].count;
        });
        return total;
    },
}
