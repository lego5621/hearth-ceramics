<template>
    <div class="quantity">
        <div class="pro-qty-2 text-center">
            <input
                type="number"
                v-model="count"
                min="1"
                :max="this.$store.state.card.cart[this.product.slug].totalCount"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: ['product'],

    computed: {
        ...mapGetters('card', ['getTotalPrice', 'getCart']),
        count: {
            get: function () {
                return this.$store.state.card.cart[this.product.slug].count
            },
            set: function (count) {
                this.changeCountProductInCart({
                    product: this.product,
                    count: count,
                })
            },
        },
    },

    methods: {
        ...mapMutations('card', ['changeCountProductInCart']),
    },
}
</script>
